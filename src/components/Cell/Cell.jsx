import React, { useState, useEffect } from "react";

import { CellStyled } from "./Cell.styled";

export const Cell = (props) => {
  const [gridReload, setGridReload] = useState(props.grid);

  useEffect(() => {
    setGridReload(props.grid);
  }, [props.grid]);

  const clickHandler = (index) => {
    props.bombChecker(index);
    // It works ONCE..
    props.reRender(true);
  };

  console.log(gridReload);
  return (
    <>
      {gridReload.map((curr, index) => (
        <CellStyled
          gridWidth={props.gridWidth}
          onClick={() => clickHandler(index)}
          key={`cell${index}`}
        >
          {curr.value}
        </CellStyled>
      ))}

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
