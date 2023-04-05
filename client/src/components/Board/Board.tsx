import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectSettings } from "../../store/settingsSlice";

import { BoardStyled } from "./Board.styled";

import Cell from "../Cell/Cell";

const Board = () => {
  const { cellArray } = useSelector(selectSettings);

  return (
    <BoardStyled draggable="false">
      {cellArray.map((curr, index) => {
        return (
          <Cell index={index} pressed={curr.advancedChecked} key={index} />
        );
      })}
    </BoardStyled>
  );
};

export default memo(Board);
