import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  resetFlagsAvailable,
  setCellArray,
  setGameStatus,
  cellType,
  initialStateTypes,
  selectSettings,
} from "../settingsSlice";

import TitleBar from "../TitleBar/TitleBar";
import WindowButtons from "../WindowButtons/WindowButtons";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Board } from "../Board/Board";

import { Window, GameBox } from "./Game.styled";

export const Game = () => {
  const { gridSize, bombsAmount, cellArray, gameStatus } =
    useSelector(selectSettings);
  const dispatch = useDispatch();

  ///////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === "waiting") {
      dispatch(resetFlagsAvailable());
      const newCellArray: initialStateTypes["cellArray"] = [];
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

  //  Updates game's status
  useEffect(() => {
    // Algorithm To be improved
    let advCheckedAmount = 0;
    let bombPressed = false;
    cellArray.forEach((curr) => {
      if (curr.advancedChecked) {
        advCheckedAmount++;
      }
      if (curr.value === "bombPressed") {
        bombPressed = true;
      }
    });

    if (bombPressed) {
      dispatch(setGameStatus("lost"));
    } else if (advCheckedAmount === gridSize - bombsAmount) {
      dispatch(setGameStatus("won"));
    }
  }, [bombsAmount, cellArray, dispatch, gridSize]);

  // makes everything visible if won
  useEffect(() => {
    if (gameStatus === "won") {
      const gridCopy = JSON.parse(JSON.stringify(cellArray));
      gridCopy.forEach((cell: cellType) => {
        cell.advancedChecked = true; // makes everything visible
      });

      dispatch(setCellArray(gridCopy));
    }
  }, [cellArray, dispatch, gameStatus]);

  return (
    <Window>
      <TitleBar />
      <WindowButtons />
      <GameBox>
        <Scoreboard />
        <Board />
      </GameBox>
    </Window>
  );
};
