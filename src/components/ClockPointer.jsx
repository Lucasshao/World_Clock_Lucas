import React from "react";

import ClockPointerGroup from "./ClockPointer/ClockPointerGroup";
import HourPointer from "./ClockPointer/HourPointer";
import MinutePointer from "./ClockPointer/MinutePointer";
import SecondPointer from "./ClockPointer/SecondPointer";
import ClockCenter from "./ClockPointer/ClockCenter";
import BasicPointer from "./ClockPointer/BasicPointer";

export default function ClockPointer(props) {
  const { hourDeg, minuteDeg, secondDeg, light } = props;
  return (
    <ClockPointerGroup light={light}>
      <HourPointer rotate={hourDeg} light={light} />
      <MinutePointer rotate={minuteDeg} light={light} />
      <SecondPointer rotate={secondDeg} light={light} />
      <BasicPointer rotate={secondDeg} light={light} />
      <ClockCenter light={light} />
    </ClockPointerGroup>
  );
}
