import React from "react";

import { ButtonContainer, Buttons } from "./WindowButtons.styled";

const WindowButtons = () => {
  return (
    <ButtonContainer>
      <Buttons>Game</Buttons>
      <Buttons>Help</Buttons>
    </ButtonContainer>
  );
};

export default WindowButtons;
