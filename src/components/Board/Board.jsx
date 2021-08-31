import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCellArray, setGameStatus } from "../settingsSlice";

import { incFlagsAvailable, decFlagsAvailable } from "../settingsSlice";

import { BoardStyled } from "./Board.styled";

import { Cell } from "../Cell/Cell";

import { cellPressed } from "../../utils/BoardUtils/cellPressed";

export const Board = () => {
  const { gridColumns, gridSize, cellArray, gameStatus } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();

  const flagHandler = (e, index) => {
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

  const isClickableSquare = (curr) =>
    (gameStatus === "waiting" || gameStatus === "running") &&
    curr.flagged !== true &&
    curr.advancedChecked === false;

  return (
    <BoardStyled draggable="false">
      {cellArray.map((curr, index) => {
        return (
          <Cell
            onClick={() => {
              if (isClickableSquare(curr)) {
                dispatch(
                  setCellArray(
                    cellPressed(index, cellArray, gridColumns, gridSize)
                  )
                );
                if (gameStatus !== "running")
                  dispatch(setGameStatus("running"));
              }
            }}
            onContextMenu={(e) => flagHandler(e, index)}
            gridColumns={gridColumns}
            pressed={curr.advancedChecked}
            cellArray={cellArray}
            index={index}
            value={cellArray[index].value}
            key={index}
          />
        );
      })}
    </BoardStyled>
  );
};
