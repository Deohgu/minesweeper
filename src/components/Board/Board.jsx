import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  const boardGrid = [];
  for (let i = 0; i < props.size; i++) {
    boardGrid.push(<Cell key={Cell + i} />);
  }

  return <BoardStyled>{boardGrid.map((curr) => curr)}</BoardStyled>;
};
