import React, { MouseEvent, ComponentPropsWithRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCellArray,
  setGameStatus,
  incFlagsAvailable,
  decFlagsAvailable,
  selectSettings,
} from "../../store/settingsSlice";

import { CellStyled } from "./Cell.styled";

import { toDisplay } from "../../utils/CellUtils/toDisplay";
import { cellPressed } from "../../utils/BoardUtils/cellPressed";

type CellTypes = {
  index: number;
  pressed: boolean;
} & ComponentPropsWithRef<typeof CellStyled>;

const Cell = ({ index, pressed }: CellTypes) => {
  const {
    gridLength: gridSize,
    gridColumnsAmount: gridColumns,
    gameStatus,
    cellArray,
  } = useSelector(selectSettings);

  const dispatch = useDispatch();

  const flagHandler = (e: MouseEvent, index: number) => {
    e.preventDefault();
    if (gameStatus === "running") {
      let cellArrayCopy = JSON.parse(JSON.stringify(cellArray));
      if (cellArrayCopy[index].advancedChecked === false) {
        if (cellArrayCopy[index].flagged === false) {
          cellArrayCopy[index].flagged = true;
          dispatch(decFlagsAvailable());
        } else {
          cellArrayCopy[index].flagged = false;
          dispatch(incFlagsAvailable());
        }
      }
      dispatch(setCellArray(cellArrayCopy));
    }
  };

  const isClickableSquare = () =>
    (gameStatus === "waiting" || gameStatus === "running") &&
    cellArray[index].flagged !== true &&
    cellArray[index].advancedChecked === false;

  return (
    <CellStyled
      onClick={() => {
        // Should the onClick and onContextMenu logic be inside the Cell?
        if (isClickableSquare()) {
          dispatch(
            setCellArray(cellPressed(index, cellArray, gridColumns, gridSize))
          );
          if (gameStatus !== "running") dispatch(setGameStatus("running"));
        }
      }}
      onContextMenu={(e: MouseEvent) => flagHandler(e, index)}
      gridColumns={gridColumns}
      pressed={pressed}
      draggable="false"
    >
      {toDisplay(cellArray[index])}
    </CellStyled>
  );
};

export default memo(Cell);
