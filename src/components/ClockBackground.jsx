import React from "react";
import styled from "styled-components";

const StyledClockBackground = styled.div`
  width: ${(props) => props.size};
  aspect-ratio: 1/1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) =>
    props.light ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 2rem;
  padding: 20px;
  margin: 2rem;
`;

export default function ClockBackground(props) {
  const { light, size, children } = props;
  return (
    <StyledClockBackground size={size} light={Number(light)}>
      {children}
    </StyledClockBackground>
  );
}
