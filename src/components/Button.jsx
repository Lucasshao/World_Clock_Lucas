import React, { useEffect } from "react";
import { useContext } from "react";
// import { GlobalContext } from '../main'
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color.light};
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export default function Button() {
  // const theme = useContext(GlobalContext)
  // useEffect(() => {
  //   console.log(theme);
  // }, [theme])
  return <StyledButton>button</StyledButton>;
}
