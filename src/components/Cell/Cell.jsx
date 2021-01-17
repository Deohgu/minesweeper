import React from "react";

import { CellStyled } from "./Cell.styled";

import { toDisplay } from "../../utils/CellUtils/toDisplay";

export const Cell = ({
  gridWidth,
  value,
  pressed,
  index,
  cellArray,
  statusHandler,
  ...rest
}) => {
  return (
    <CellStyled
      gridWidth={gridWidth}
      pressed={pressed}
      cellArray={cellArray}
      statusHandler={statusHandler}
      {...rest}
      draggable="false"
    >
      {toDisplay(cellArray, index, value)}
      {console.log(`Cell re renderIntoDocument`)}
    </CellStyled>
  );
};
