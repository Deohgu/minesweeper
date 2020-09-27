import React, { useState, useEffect } from "react";

import { Board, Timer } from "./../index";

import { GameStyled, Reset, ScoreBoard, Paragraph } from "./Game.styled";

export const Game = () => {
  const [gridWidth, setGridWidth] = useState(8);
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(5);
  const [gridToShow, setgridToShow] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [runGridGen, setRunGridGen] = useState(true);
  const [checkedNumber, setCheckedNumber] = useState(0);
  const [flaggedAmount, setFlaggedAmount] = useState(bombs);

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
  console.log(checkedNumber);

  return (
    <GameStyled>
      {/* Testing */}
      <ScoreBoard>
        <Reset
          onClick={() => {
            setRunGridGen(true);
            setGameOver(false);
          }}
        >
          ↻
        </Reset>
        <Paragraph>
          Timer: <Timer gameOver={gameOver} />
        </Paragraph>
        <Paragraph>{gameOver === false ? "" : "Game Over!"}</Paragraph>
        <Paragraph>
          {checkedNumber === size - bombs ? "You won!" : ""}
        </Paragraph>
        <Paragraph>Number of bombs left: {flaggedAmount}</Paragraph>
      </ScoreBoard>
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
      />
    </GameStyled>
  );
};
