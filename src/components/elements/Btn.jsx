import React from "react";
import styled from "styled-components"

const Btn = (props) => {

  return (
    <StyledGlobalButton
      marginLeft={props.marginLeft}
    >
      {props.children}
    </StyledGlobalButton>
  )

}

const StyledGlobalButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2309AA;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  cursor: pointer;

  margin-left: ${(props) => props.marginLeft};
`


export default Btn