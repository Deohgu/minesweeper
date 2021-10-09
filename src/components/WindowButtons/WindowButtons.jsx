import React from "react";

import { ButtonContainer, Buttons } from "./WindowButtons.styled";

const WindowButtons = () => {
  return (
    <ButtonContainer>
      <Buttons>
        <span style={{ textDecoration: "underline" }}>G</span>ame
      </Buttons>
      <Buttons>
        <span style={{ textDecoration: "underline" }}>H</span>elp
      </Buttons>
    </ButtonContainer>
  );
};

export default WindowButtons;
