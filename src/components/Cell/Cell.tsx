import React, { ComponentPropsWithRef } from "react";
import { useSelector } from "react-redux";
import { initialStateTypes, cellType, selectSettings } from "../settingsSlice";

import { CellStyled } from "./Cell.styled";

import { toDisplay } from "../../utils/CellUtils/toDisplay";

type CellTypes = {
  pressed: boolean;
  cellArray: initialStateTypes["cellArray"];
  index: number;
  value?: cellType["value"];
} & ComponentPropsWithRef<typeof CellStyled>;

export const Cell = ({
  pressed,
  cellArray,
  index,
  value,
  ...rest
}: CellTypes) => {
  const { gridColumns } = useSelector(selectSettings);

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
