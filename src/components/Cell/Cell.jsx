import React from "react";
import { useSelector } from "react-redux";

import { CellStyled } from "./Cell.styled";

import { toDisplay } from "../../utils/CellUtils/toDisplay";

export const Cell = ({ pressed, cellArray, index, value, ...rest }) => {
  const gridColumns = useSelector((state) => state.settings.gridColumns);

  return (
    <CellStyled
      gridColumns={gridColumns}
      pressed={pressed}
      {...rest}
      draggable="false"
    >
      {toDisplay(cellArray, index, value)}
    </CellStyled>
  );
};
