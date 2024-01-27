import React from "react";
import styled from "styled-components";

const StyledClockGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export default function ClockGroup(props) {
  const { children } = props;
  return <StyledClockGroup>{children}</StyledClockGroup>;
}
