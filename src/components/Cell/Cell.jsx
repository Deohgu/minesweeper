import React from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = ({ gridWidth, value, pressed, ...rest }) => {
  // console.log(value);

  return (
    <CellStyled gridWidth={gridWidth} pressed={pressed} {...rest}>
      {/* CellStyled to be replaced with a reusable container component */}
      {value}
    </CellStyled>
  );
};
