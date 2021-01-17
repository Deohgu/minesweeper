import React from "react";

import { Timer } from "../Timer/Timer";

import { ScoreboardBox, BombsBox } from "./ScoreboardBox.styled";

import { Box } from "../Box/";

export const Scoreboard = ({ statusHandler, gameStatus, flaggedAmount }) => {
  return (
    <ScoreboardBox>
      <BombsBox>
        <Box>
          {/* flag Icon */}
          <Box margin={"0 5px 0 0"} />
          <Box>{flaggedAmount}</Box>
        </Box>
      </BombsBox>
      {/* Reset Icon */}
      <Box
        onClick={() => {
          statusHandler("waiting");
        }}
        className="fas fa-redo-alt"
      />
      <BombsBox>
        <Box>
          {/* clock Icon */}
          <Box margin={"0 5px 0 0"} />
          <Timer gameStatus={gameStatus} />
        </Box>
      </BombsBox>
    </ScoreboardBox>
  );
};
