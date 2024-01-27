import React from "react";
import ClockBackground from "./ClockBackground";
import City from "./City";
import ClockPointer from "./ClockPointer";
import Time from "./Time";

export default function Clock(props) {
  const { city, timezone } = props;

  const unitDeg = 360 / 60; // 一分钟的角度，有原因的值需要把过程写出来，不然别人不知道，除非是CSS里没有原因的值/或者放在配置文件Data里
  const hourUnitDeg = 360 / 12; // 一小时的角度

  // 获取当前时间
  const [year, setYear] = React.useState();
  const [month, setMonth] = React.useState();
  const [day, setDay] = React.useState();
  const [hour, setHour] = React.useState();
  const [minute, setMinute] = React.useState();
  const [second, setSecond] = React.useState();

  // 获取当前时间的角度
  const [secondDeg, setSecondDeg] = React.useState();
  const [minuteDeg, setMinuteDeg] = React.useState();
  const [hourDeg, setHourDeg] = React.useState();

  // 获取当前时间的深浅模式
  const [light, setLight] = React.useState(true);

  const setTime = () => {
    const currentTime = new Date(); // 获取当前系统完整时间
    const currentTimeWithTimezone = new Date(
      currentTime.getTime() + timezone * 60 * 60 * 1000
    ); // 获取当前时区时间
    //后面是：一小时等于60分钟，一分钟等于60秒，一秒钟等于1000毫秒，所以把timezone（父传来的）乘以后面，就得到当前时区到底是多长时间；前面是：用getTime方法获取到当前系统完整时间戳；+前后两个毫秒时间相加，就能知道当前时区上时间戳上的那个时间到底是多少；最后传入new Date包裹成实参

    // TODO:这里是指针的显示
    //存粹一小时跟一小时的却别是，跟分针没关系，分针怎么转，时针不动，直到下一小时跳了一下，不受其他东西影响，目的是非常清晰地算出这个值
    let pureHourDeg = currentTimeWithTimezone.getUTCHours() * hourUnitDeg; //当前时区时间，当前时间，乘以一小时角度
    let pureMinuteDeg = currentTimeWithTimezone.getUTCMinutes() * unitDeg; //分钟秒钟都是乘以小格
    let pureSecondDeg = currentTimeWithTimezone.getUTCSeconds() * unitDeg;

    setHourDeg(pureHourDeg + pureMinuteDeg / 12); //分钟除以12，意思是分钟转了一圈(12个大格，正好是一个时钟转一个，分钟转一半，时钟转一格的一半），时钟才能动一下。等于分针动一个格（5分钟），时钟动了12分之一
    setMinuteDeg(pureMinuteDeg + pureSecondDeg / 60); //同理
    setSecondDeg(pureSecondDeg); //只有秒针是存粹的

    //TODO:这里是数字的显示
    setYear(currentTimeWithTimezone.getUTCFullYear());
    setMonth(currentTimeWithTimezone.getUTCMonth() + 1);
    setDay(currentTimeWithTimezone.getUTCDate());
    setHour(currentTimeWithTimezone.getUTCHours());
    setMinute(currentTimeWithTimezone.getUTCMinutes());
    setSecond(currentTimeWithTimezone.getUTCSeconds());
  };

  //启动项，没有缘由的启动，依赖为空，上来让它跑。跑了还不够，过段时间要重新计算一次，因为是按秒种跳的。1000不是特别好，因为重新启动的时间不一定是一秒钟的时间点，中间误差在一秒之内，例如这边跳了一秒钟，那边过了0.5秒再跳，如果设定了1000就代表着始终保持着这个误差。200对于计算机性能很低的。这里200就是每隔200毫秒之内重新set一次（矫正自己）
  React.useEffect(() => {
    setTime();
    const handle = setInterval(() => {
      // 每200ms更新一次时间
      setTime();
    }, 200);
    return () => {
      clearInterval(handle);
    };
  }, []);

  //页面跟着小时变化，意思是例如几点就转换黑/白天，所以依赖是hour
  React.useEffect(() => {
    +hour >= 6 && +hour < 18 ? setLight(true) : setLight(false);
  }, [hour]);

  return (
    <ClockBackground size={"400px"} light={light}>
      <City light={light}>{city}</City>
      <ClockPointer
        light={light}
        hourDeg={hourDeg}
        minuteDeg={minuteDeg}
        secondDeg={secondDeg}
      />
      <Time light={light}>
        {year}-{month}-{day} {hour}:{minute}:{second}
      </Time>
    </ClockBackground>
  );
}
