import React from "react";
import { useSelector } from "react-redux";

import { BoardStyled } from "./Board.styled";

import { Cell } from "../Cell/Cell";

import { cellPressed } from "../../utils/BoardUtils/cellPressed";

export const Board = ({
  gameStatus,
  statusHandler,
  cellArray,
  flagHandler,
}) => {
  const { gridColumns, gridSize } = useSelector((state) => state.settings);

  return (
    <BoardStyled draggable="false">
      {cellArray.map((curr, index) => {
        return (
          <Cell
            onClick={() =>
              cellPressed(
                index,
                gameStatus,
                cellArray,
                statusHandler,
                gridColumns,
                gridSize
              )
            }
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
