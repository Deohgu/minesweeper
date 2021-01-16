import React, { useState, useEffect } from "react";

import { Board, Timer } from "./../index";

import { Box } from "../Box";

import { GameBox, ScoreBoardBox } from "./Game.styled";

export const Game = () => {
  const [gridWidth] = useState(10);
  const [size] = useState(100);
  const [bombs] = useState(20);
  const [cellArray, setCellArray] = useState([]);
  const [flaggedAmount, setFlaggedAmount] = useState(bombs);

  const [gameStatus, setGameStatus] = useState("waiting"); // Won, lost, waiting, running.

  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === "waiting") {
      setFlaggedAmount(bombs);
      const newCellArray = [];
      for (let i = 0; i < size - bombs; i++) {
        newCellArray.push({
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      for (let j = 0; j < bombs; j++) {
        newCellArray.push({
          value: "bomb",
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5));
    }
  }, [gameStatus, bombs, size]);

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
    setCellArray(grid);

    // Algorithm To be improved
    let advCheckedAmount = 0;
    cellArray.forEach((curr) => {
      if (curr.advancedChecked) {
        advCheckedAmount++;
      }
    });

    if (advCheckedAmount === size - bombs) {
      setGameStatus("won");
      const cellArrayCopy = [...cellArray];
      cellArrayCopy.forEach((curr) => {
        curr.advancedChecked = true; // makes everything visible
      });
      // To be able to pass cellArray to the dependencies without an infinite loop
      cellArray !== cellArrayCopy && setCellArray(cellArrayCopy);
    }
  };

  return (
    <GameBox>
      <ScoreBoardBox>
        {/* Reset Icon */}
        <Box
          onClick={() => {
            setGameStatus("waiting");
          }}
          className="fas fa-redo-alt"
        ></Box>
        <Box>
          {/* clock Icon */}
          <Box className="far fa-clock fa-lg" margin={"0 5px 0 0"}></Box>
          <Timer gameStatus={gameStatus} />
        </Box>
        <Box>
          {/* flag Icon */}
          <Box className="far fa-flag fa-lg" margin={"0 5px 0 0"}></Box>
          <Box>{flaggedAmount}</Box>
        </Box>
      </ScoreBoardBox>
      <Board
        gridWidth={gridWidth}
        size={size}
        bombs={bombs}
        gameStatus={gameStatus}
        cellArray={cellArray}
        flagHandler={flagHandler}
        statusHandler={statusHandler}
      />
    </GameBox>
  );
};
