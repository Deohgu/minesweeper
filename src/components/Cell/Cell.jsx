import React from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = (props) => {
  return <CellStyled>{props.isBomb}</CellStyled>;
};
