import React from "react";
import styled from "styled-components";

const Btn = (props) => {
  return (
    <StyledGlobalButton
      marginLeft={props.marginLeft}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
      value={props.value}
      width={props.width}
    >
      {props.children}
    </StyledGlobalButton>
  );
};

const StyledGlobalButton = styled.button`
  width: ${(props) => props.width || "100px"};
  height: 45px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.backgroundColor || "#2309aa"};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  cursor: pointer;

  margin-left: ${(props) => props.marginLeft};
`;

export default Btn;
