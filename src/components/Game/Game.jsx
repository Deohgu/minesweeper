import React, { useState, useEffect } from "react";

import { Board } from "./../index";

import { GameStyled, Reset, ScoreBoard, Paragraph } from "./Game.styled";

export const Game = () => {
  const [gridWidth, setGridWidth] = useState(8);
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [gridToShow, setgridToShow] = useState([]);

  useEffect(() => {
    if (gameOver === false) {
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
  }, [gameOver]);

  const gridToShowHandler = (newArray) => {
    setgridToShow(newArray);
  };

  const gameOverHandler = (grid) => {
    setGameOver(true);
    setgridToShow(grid);
  };

  return (
    <GameStyled>
      <ScoreBoard>
        <Reset onClick={() => setGameOver(false)}>↻</Reset>
        <Paragraph>Timer:</Paragraph>
        <Paragraph>{gameOver === false ? "" : "Game Over!"}</Paragraph>
      </ScoreBoard>
      <Board
        gridWidth={gridWidth}
        size={size}
        bombs={bombs}
        gameOver={gameOver}
        gridToShow={gridToShow}
        gameOverHandler={gameOverHandler}
        gridToShowHandler={gridToShowHandler}
      />
    </GameStyled>
  );
};
