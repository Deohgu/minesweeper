import React, { useState, useEffect } from "react";

import { Board, Timer } from "./../index";

import {
  GameStyled,
  Reset,
  ScoreBoard,
  TimerText,
  GameStatus,
  IconGroup,
  Icon,
} from "./Game.styled";

export const Game = () => {
  const [gridWidth, setGridWidth] = useState(8);
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(8);
  const [gridToShow, setgridToShow] = useState([]);
  const [checkedNumber, setCheckedNumber] = useState(0);
  const [flaggedAmount, setFlaggedAmount] = useState(bombs);

  const [gameStatus, setGameStatus] = useState("waiting") // Won, lost, waiting, running.

  useEffect(() => {
    if (checkedNumber === size - bombs) {
      setGameStatus("won")
      const tempGrid = [...gridToShow];
      tempGrid.forEach((curr) => {
        curr.advancedChecked = true;
      });
      setgridToShow(tempGrid);
    }
  }, [checkedNumber]);

  // If the status of the game is changed to waiting generate a new algorithm.
  // This will run at the start and each time the reset button is pressed.
  useEffect(() => {
    if (gameStatus === "waiting") {
      setCheckedNumber(0);
      setFlaggedAmount(bombs);
      const populatedGrid = [];
      for (let i = 0; i < size - bombs; i++) {
        populatedGrid.push({
          value: "0",
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      for (let j = 0; j < bombs; j++) {
        populatedGrid.push({
          value: "💣",
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      setgridToShow(populatedGrid.sort((a, b) => Math.random() - 0.5));
    }
  }, [gameStatus]);

  // Places flags on right click when the game is considered to be running.
  const flagHandler = (e, index) => {
    e.preventDefault();
    if (gameStatus === "running") {
      let tempGrid = [...gridToShow];
      if (tempGrid[index].advancedChecked === false) {
        if (tempGrid[index].flagged === false) {
          tempGrid[index].flagged = true;

          let TempFlaggedAmount = flaggedAmount;
          TempFlaggedAmount--;
          setFlaggedAmount(TempFlaggedAmount);
        } else {
          tempGrid[index].flagged = false;

          let TempFlaggedAmount = flaggedAmount;
          TempFlaggedAmount++;
          setFlaggedAmount(TempFlaggedAmount);
        }
      }
      setgridToShow(tempGrid);
      console.log(gridToShow[index]);
    }
  };

  const statusHandler = (status, grid) => {
    status !== gameStatus && setGameStatus(status); 
    setgridToShow(grid);

    // Not the most efficient way to run another loop everytime, but it works.
    let advCheckedAmount = 0;
    gridToShow.forEach((curr) => {
      if (curr.advancedChecked) {
        advCheckedAmount++;
      }
    });
    setCheckedNumber(advCheckedAmount);
  };

  console.log(`Global game status: ${gameStatus}`)

  return (
    <GameStyled>
      {/* Testing */}
      <ScoreBoard>
        <IconGroup
          onClick={() => {
            setGameStatus("waiting")
          }}
        >
          <Icon>
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
              style={{ "marginRight": "10px" }}
            ></i>
          </Icon>
          <div style={{margin: "auto"}}>
            <TimerText>
              <Timer
                gameStatus={gameStatus}
                checkedNumber={checkedNumber}
              />
            </TimerText>
          </div>
        </IconGroup>
        <IconGroup>
          <Icon>
            {/* flag Icon */}
            <i className="far fa-flag fa-lg" style={{ "marginRight": "10px" }}></i>
          </Icon>
          <div style={{ margin: "auto 10px auto 0" }}>
            {flaggedAmount}
          </div>
        </IconGroup>
      </ScoreBoard>
      <GameStatus>
        {gameStatus === "lost" ? "Game Over." : gameStatus === "won" && "You won!"}
      </GameStatus>
      <Board
        gridWidth={gridWidth}
        size={size}
        bombs={bombs}
        gameStatus={gameStatus}
        gridToShow={gridToShow}
        checkedNumber={checkedNumber}
        flagHandler={flagHandler}
        statusHandler={statusHandler}
      />
    </GameStyled>
  );
};
