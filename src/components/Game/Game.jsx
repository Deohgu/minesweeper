import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  incFlagsAvailable,
  decFlagsAvailable,
  resetFlagsAvailable,
  setCellArray,
} from "../settingsSlice";

import { Scoreboard } from "../Scoreboard/Scoreboard";

import { Board } from "../Board/Board";

import { GameBox } from "./Game.styled";

export const Game = () => {
  const { gridSize, bombsAmount, cellArray } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();

  const [gameStatus, setGameStatus] = useState("waiting"); // Won, lost, waiting, running.

  ///////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === "waiting") {
      dispatch(resetFlagsAvailable());
      const newCellArray = [];
      for (let i = 0; i < gridSize - bombsAmount; i++) {
        newCellArray.push({
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      for (let j = 0; j < bombsAmount; j++) {
        newCellArray.push({
          value: "bomb",
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      dispatch(setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5)));
    }
  }, [dispatch, gameStatus, bombsAmount, gridSize]);

  // Places flags on right click when the game is considered to be running.
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

  const statusHandler = (status, grid) => {
    status !== gameStatus && setGameStatus(status);

    if (grid) {
      grid !== cellArray && dispatch(setCellArray(grid));
      // Algorithm To be improved
      let advCheckedAmount = 0;
      grid.forEach((curr) => {
        if (curr.advancedChecked) {
          advCheckedAmount++;
        }
      });

      if (advCheckedAmount === gridSize - bombsAmount) {
        setGameStatus("won");
        const gridCopy = JSON.parse(JSON.stringify(grid));
        gridCopy.forEach((curr) => {
          curr.advancedChecked = true; // makes everything visible
        });
        dispatch(setCellArray(gridCopy));
      }
    }
  };

  return (
    <GameBox>
      <Scoreboard statusHandler={statusHandler} gameStatus={gameStatus} />
      <Board
        gameStatus={gameStatus}
        statusHandler={statusHandler}
        flagHandler={flagHandler}
      />
    </GameBox>
  );
};
