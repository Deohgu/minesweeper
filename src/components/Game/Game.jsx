import React, { useState, useEffect } from "react";

import { Board, Timer } from "./../index";

import {
  GameStyled,
  ScoreBoard,
  TimerText,
  IconGroup,
  Icon,
} from "./Game.styled";

export const Game = () => {
  const [gridWidth] = useState(8);
  const [size] = useState(64);
  const [bombs] = useState(8);
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
          value: "💣",
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
    <GameStyled>
      {/* GameStyled to be replaced with a reusable container component */}
      <ScoreBoard>
        {/* ScoreBoard to be replaced with a reusable container component */}
        <IconGroup
          onClick={() => {
            setGameStatus("waiting");
          }}
        >
          {/* IconGroups to be replaced with a reusable container component */}
          <Icon>
            {/* Icons to be replaced with a reusable container component */}
            {/* Reset Icon */}
            <i
              className="fas fa-redo-alt"
              style={{ margin: "auto 0 auto 10px" }}
            ></i>
          </Icon>
        </IconGroup>
        <IconGroup>
          <Icon>
            {/* clock Icon */}
            <i
              className="far fa-clock fa-lg"
              /** change style to apply margin right */
              style={{ margin: "0 0 0 15px" }}
            ></i>
          </Icon>
          <div style={{ margin: "auto" }}>
            {/* div needed? To be replaced with the reusable container component */}
            <TimerText>
              {/* TimerText to be replaced with a reusable container component */}
              <Timer gameStatus={gameStatus} />
            </TimerText>
          </div>
        </IconGroup>
        <IconGroup>
          <Icon>
            {/* flag Icon */}
            <i
              className="far fa-flag fa-lg"
              /** Change style to apply flag margin right only */
              style={{ margin: "0 0 0 40px" }}
            ></i>
          </Icon>
          <div style={{ margin: "auto 10px auto 0" }}>{flaggedAmount}</div>
          {/* div to be replaced with a reusable container component */}
        </IconGroup>
      </ScoreBoard>
      <Board
        gridWidth={gridWidth}
        size={size}
        bombs={bombs}
        gameStatus={gameStatus}
        cellArray={cellArray}
        flagHandler={flagHandler}
        statusHandler={statusHandler}
      />
    </GameStyled>
  );
};
