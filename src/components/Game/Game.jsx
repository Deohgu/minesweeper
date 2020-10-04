import React, { useState, useEffect } from "react";

import { Board, Timer } from "./../index";

import {
  GameStyled,
  Reset,
  ScoreBoard,
  Text,
  TimerText,
  GameStatus,
  Icons,
} from "./Game.styled";

export const Game = () => {
  const [gridWidth, setGridWidth] = useState(8);
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(8);
  const [gridToShow, setgridToShow] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [runGridGen, setRunGridGen] = useState(true);
  const [checkedNumber, setCheckedNumber] = useState(0);
  const [flaggedAmount, setFlaggedAmount] = useState(bombs);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (checkedNumber === size - bombs) {
      setWon(true);
      const tempGrid = [...gridToShow];
      tempGrid.map((curr) => {
        curr.advancedChecked = true;
      });
      setgridToShow(tempGrid);
    }
  }, [checkedNumber]);

  useEffect(() => {
    if (runGridGen === true) {
      setRunGridGen(false);
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
  }, [runGridGen]);

  const flagHandler = (e, index) => {
    e.preventDefault();
    if (gameOver === false && won !== true) {
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

  const gridToShowHandler = (newArray) => {
    setgridToShow(newArray);

    // Not the most efficient way to run another loop everytime, but it works.
    let advCheckedAmount = 0;
    gridToShow.map((curr) => {
      if (curr.advancedChecked) {
        advCheckedAmount++;
      }
    });
    setCheckedNumber(advCheckedAmount);
  };

  const gameOverHandler = (grid) => {
    setGameOver(true);
    setgridToShow(grid);
  };

  return (
    <GameStyled>
      {/* Testing */}
      <ScoreBoard>
        <Icons
          onClick={() => {
            setRunGridGen(true);
            setGameOver(false);
            setWon(false);
            setCheckedNumber(0);
          }}
        >
          <i class="fas fa-redo-alt"></i>
        </Icons>
        <Icons>
          {/* clock */}
          <i class="far fa-clock fa-lg"></i>
        </Icons>
        <TimerText>
          <Timer
            won={won}
            gameOver={gameOver}
            checkedNumber={checkedNumber}
            runGridGen={runGridGen}
          />
        </TimerText>
        <Icons>
          {/* flag */}
          <i class="far fa-flag fa-lg"></i>
        </Icons>
        <Text noMargin={true}>{flaggedAmount}</Text>
        <Text>{gameOver === false ? "" : "Game Over!"}</Text>
        <Text>{won === true ? "You won!" : ""}</Text>
      </ScoreBoard>
      <GameStatus>Testing - You Won! You Lost!</GameStatus>
      <Board
        gridWidth={gridWidth}
        size={size}
        bombs={bombs}
        gameOver={gameOver}
        gridToShow={gridToShow}
        checkedNumber={checkedNumber}
        gameOverHandler={gameOverHandler}
        gridToShowHandler={gridToShowHandler}
        flagHandler={flagHandler}
        won={won}
      />
    </GameStyled>
  );
};
