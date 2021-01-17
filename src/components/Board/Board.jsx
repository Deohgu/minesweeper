import React from "react";

import { BoardStyled } from "./Board.styled";

export const Board = ({ children }) => {
  ///////////////////////// Creator of grid & Bomb Populator

  return <BoardStyled draggable="false">{children}</BoardStyled>;
};
