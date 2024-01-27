import React from "react";
import { BasicPointerStyled } from "./BasicPointer";
import styled from "styled-components";

const MinutePointerStyled = styled(BasicPointerStyled).attrs((props) => ({
  rotate: props.rotate,
  size: 120,
  width: 4,
  pointer_light: "#848484",
  pointer_dark: "#fff",
}))``;

export default function MinutePointer(props) {
  const { rotate, light } = props;
  return <MinutePointerStyled light={Number(light)} rotate={rotate} />;
}
