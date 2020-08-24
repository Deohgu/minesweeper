import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  const cellGrid = [];
  for (let i = 0; i < props.size; i++) {
    cellGrid.push({
      // testing by adding isBomb directly here. Will be replaced by a proper bomb populator
      cell: <Cell key={Cell + i} isBomb={Math.round(Math.random())} />,
    });
  }

  return <BoardStyled>{cellGrid.map((curr) => curr.cell)}</BoardStyled>;
};
