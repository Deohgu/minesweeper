import React, { useState } from "react";

import { Board } from "./../index";

import { GameStyled } from "./Game.styled";

export const Game = () => {
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(20);

  return (
    <GameStyled>
      <Board size={size} bombs={bombs} />
    </GameStyled>
  );
};
