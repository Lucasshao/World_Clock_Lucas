import React from "react";
import styled from "styled-components";
//这里的theme是通过App里的ThemeProvider直接传过来的，可以直接调用theme里面的light和dark
const StyledCity = styled.div`
  color: ${({ light, theme }) =>
    light ? theme.color.light : theme.color.dark};
  margin-bottom: ${(props) => props["margin-bottom"]};
`;
StyledCity.defaultProps = {
  "margin-bottom": "20px",
  color: "black",
};

//props.marginBottom & marginBottom:"20px"

export default function City(props) {
  const { light, children } = props;
  return <StyledCity light={Number(light)}>{children}</StyledCity>;
}
//light判断真假，是传进来的，之所以只传light而不传theme，是因为theme是ThemeProvider直接传的
