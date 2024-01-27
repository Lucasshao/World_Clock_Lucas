import React from "react";

import styled from "styled-components";

const ClockCenterStyled = styled.div`
  width: ${(props) => props.size};
  aspect-ratio: 1/1;
  background: ${(props) => (props.light ? props.bg : props.borderColor)};
  border-color: ${(props) => (props.light ? props.borderColor : props.bg)};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-radius: 50%;
  z-index: 999;
`;

ClockCenterStyled.defaultProps = {
  light: Number(true),
  size: "15px",
  borderColor: "#848484",
  bg: "#ddd",
  borderWidth: "2px",
  borderStyle: "solid",
};

export default function ClockCenter(props) {
  const { light } = props;
  React.useEffect(() => {
    console.log("light:", Number(light));
  }, [light]);
  return <ClockCenterStyled light={Number(light)} />;
}
