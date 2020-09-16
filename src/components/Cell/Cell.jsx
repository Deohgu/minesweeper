import React from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = ({ gridWidth, value, ...rest }) => {
  console.log(value);

  return (
    <CellStyled gridWidth={gridWidth} {...rest}>
      {value}
    </CellStyled>
  );
};
