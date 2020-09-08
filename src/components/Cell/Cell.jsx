import React from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = (props) => {

  return (
    <>
      {props.grid.map((curr, index) =>
        <CellStyled
          gridWidth={props.gridWidth}
          onClick={() => props.bombChecker(index)}
        >
          {curr.value}
        </CellStyled>
      )}
      
      
      {/*
    <CellStyled
      gridWidth={props.gridWidth}
      onClick={() => props.bombChecker(props.index)}
    >
      {props.value}
      {console.log(`Cell being called`)}
    </CellStyled>
  */}
    </>
  );
};
