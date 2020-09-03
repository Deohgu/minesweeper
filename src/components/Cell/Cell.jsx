import React from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = (props) => {
  return (
    <CellStyled
      gridWidth={props.gridWidth}
      // onClick={props.bombChecker(props.index)}
      onClick={() => props.bombChecker(props.index)}
    >
      {props.isBomb}
    </CellStyled>
  );
};
