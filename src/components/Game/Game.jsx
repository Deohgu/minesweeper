import React, { useState } from "react";

import { Board } from "./../index";

import { GameStyled, Reset, ScoreBoard, Paragraph } from "./Game.styled";

export const Game = () => {
  const [gridWidth, setGridWidth] = useState(8);
  const [size, setSize] = useState(64);
  const [bombs, setBombs] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const gameOverHandler = () => {
    if (gameOver === false) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
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
        gameOverHandler={gameOverHandler}
      />
    </GameStyled>
  );
};
