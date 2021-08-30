import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Scoreboard } from "../Scoreboard/Scoreboard";

import { Board } from "../Board/Board";

import { GameBox } from "./Game.styled";

export const Game = () => {
  const { gridSize, bombsAmount } = useSelector((state) => state.settings);

  const [cellArray, setCellArray] = useState([]);
  const [flaggedAmount, setFlaggedAmount] = useState(bombsAmount);

  const [gameStatus, setGameStatus] = useState("waiting"); // Won, lost, waiting, running.

  ///////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === "waiting") {
      setFlaggedAmount(bombsAmount);
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
      setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5));
    }
  }, [gameStatus, bombsAmount, gridSize]);

  // Places flags on right click when the game is considered to be running.
  const flagHandler = (e, index) => {
    e.preventDefault();
    if (gameStatus === "running") {
      let cellArrayCopy = [...cellArray];
      if (cellArrayCopy[index].advancedChecked === false) {
        if (cellArrayCopy[index].flagged === false) {
          cellArrayCopy[index].flagged = true;
          setFlaggedAmount(flaggedAmount - 1);
        } else {
          cellArrayCopy[index].flagged = false;
          setFlaggedAmount(flaggedAmount + 1);
        }
      }
      setCellArray(cellArrayCopy);
    }
  };

  const statusHandler = (status, grid) => {
    status !== gameStatus && setGameStatus(status);

    if (grid) {
      grid !== cellArray && setCellArray(grid);
      // Algorithm To be improved
      let advCheckedAmount = 0;
      grid.forEach((curr) => {
        if (curr.advancedChecked) {
          advCheckedAmount++;
        }
      });

      if (advCheckedAmount === gridSize - bombsAmount) {
        setGameStatus("won");
        const cellArrayCopy = [...grid];
        cellArrayCopy.forEach((curr) => {
          curr.advancedChecked = true; // makes everything visible
        });
        setCellArray(cellArrayCopy);
      }
    }
  };

  return (
    <GameBox>
      <Scoreboard
        statusHandler={statusHandler}
        gameStatus={gameStatus}
        flaggedAmount={flaggedAmount}
      />
      <Board
        gameStatus={gameStatus}
        statusHandler={statusHandler}
        cellArray={cellArray}
        flagHandler={flagHandler}
      />
    </GameBox>
  );
};
