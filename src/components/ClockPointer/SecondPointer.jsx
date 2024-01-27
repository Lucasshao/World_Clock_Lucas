import React from "react";
import BasicPointerStyled from "./BasicPointer";
import styled from "styled-components";

const SecondPointerStyled = styled(BasicPointerStyled).attrs((props) => ({
  rotate: props.rotate,
  size: 150,
  width: 2,
  tail: 20,
}))``;

export default function SecondPointer(props) {
  const { rotate, light } = props;
  return <SecondPointerStyled light={Number(light)} rotate={rotate} />;
}
