import React from "react";
import { BasicPointerStyled } from "./BasicPointer";
import styled from "styled-components";

const HourPointerStyled = styled(BasicPointerStyled).attrs((props) => ({
  rotate: props.rotate,
  size: 100,
  width: 7,
  pointer_light: "#848484",
  pointer_dark: "#ff6767",
}))``;

export default function HourPointer(props) {
  const { rotate, light } = props;
  return <HourPointerStyled light={Number(light)} rotate={rotate} />;
}
