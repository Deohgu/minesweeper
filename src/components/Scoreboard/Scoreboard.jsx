import React from "react";

import { Timer } from "../Timer/Timer";

import { ScoreboardBox } from "./ScoreboardBox";

import { Box } from "../Box/";

export const Scoreboard = ({ statusHandler, gameStatus, flaggedAmount }) => {
  return (
    <ScoreboardBox>
      {/* Reset Icon */}
      <Box
        onClick={() => {
          statusHandler("waiting");
        }}
        className="fas fa-redo-alt"
      />
      <Box>
        {/* clock Icon */}
        <Box className="far fa-clock fa-lg" margin={"0 5px 0 0"} />
        <Timer gameStatus={gameStatus} />
      </Box>
      <Box>
        {/* flag Icon */}
        <Box className="far fa-flag fa-lg" margin={"0 5px 0 0"} />
        <Box>{flaggedAmount}</Box>
      </Box>
    </ScoreboardBox>
  );
};
