import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  ///////////////////////// Creator of grid & Bomb Populator
  const populatedGrid = [];
  for (let i = 0; i < props.size - props.bombs; i++) {
    populatedGrid.push("0");
  }
  for (let j = 0; j < props.bombs; j++) {
    populatedGrid.push("1");
  }
  const shuffledPopulatedGrid = populatedGrid.sort(
    (a, b) => Math.random() - 0.5
  );
  /////////////////////////

  ///////////////////////// Bomb Checker

  // This will be recursively called to reveal neighbours without bombs
  const nearNoBombs = (cellNr) => {};
  /////////////////////////

  return (
    <BoardStyled>
      {shuffledPopulatedGrid.map((curr, index) => (
        <Cell key={"Cell" + index} isBomb={curr} />
      ))}
    </BoardStyled>
  );
};
