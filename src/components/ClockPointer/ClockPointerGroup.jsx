import React from "react";

import styled from "styled-components";

const ClockPointerGroupWrapper = styled.div`
  position: relative;
  width: ${(props) => props.size};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.light
      ? `${props.white} ${props.bg_white}`
      : `${props.black} ${props.bg_black}`};
  //查mdn可以知道background可以传两个，第一个是背景颜色，第二个是背景图片。把background透到img身上，外面压住里面，后面东西必须要后写，要不然压不住前面的一层
  //我们这个其实按理来说它应该算是 image 类型，但是万一你哪一天设置的是一个颜色怎么办？所以我们统一给它放在这个 background 里面。然后这个地方就得做判断了。你这个 props 传进来的时候，你得有黑色和白色之分。对不对？你这个 is white 这块你要做这个区分。如果你这 is white 是真，那么我应该是给他一个颜色对吧，给他一个背景，还得给他一个颜色。所以说他应该是这样的。这块第一个，我们设置的 props.white 然后我们给他一个背景。第二背景 BG 我一起。
  background-size: cover;
  border-radius: 50%;
  border: 14px solid ${(props) => (props.light ? props.white : props.black)};
  box-shadow: ${(props) =>
    props.is_white ? props.bg_white_box_shadow : props.bg_black_box_shadow};
  color: ${(props) => (props.light ? props.black : props.white)};
`;

ClockPointerGroupWrapper.defaultProps = {
  size: "250px",
  white: "#fff",
  black: "#091921",
  light: Number(true),
  bg_white: "url(src/images/clock_white.png)",
  bg_black: "url(src/images/clock_black.png)",

  bg_white_box_shadow:
    "inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 1)",
  bg_black_box_shadow:
    "inset 0 0 30px rgba(255, 255, 255, 0.1), 0 20px 20px rgba(0, 0, 0, 0.5), 0 0 0 4px #091921",
};

export default function ClockPointerGroup(props) {
  const { children, light } = props;
  return (
    <ClockPointerGroupWrapper light={Number(light)}>
      {children}
    </ClockPointerGroupWrapper>
  );
}
