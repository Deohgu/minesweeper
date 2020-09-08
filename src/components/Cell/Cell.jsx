import React, { useEffect } from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = (props) => {
  useEffect(() => {}, [props.gridToShow]);

  return (
    <CellStyled
      gridWidth={props.gridWidth}
      onClick={() => props.bombChecker(props.index)}
    >
      {props.value}
      {console.log(`Cell being called`)}
    </CellStyled>
  );
};
