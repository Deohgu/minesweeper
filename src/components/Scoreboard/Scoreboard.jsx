import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameStatus } from "../settingsSlice";

import { BombsDisplay } from "./BombsDisplay";

import { Timer } from "../Timer/Timer";

import { ScoreboardBox, EmoteButton } from "./ScoreboardBox.styled";

import face_waiting from "../../assets/face_waiting.png";

export const Scoreboard = () => {
  const { gameStatus } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <ScoreboardBox>
      <BombsDisplay />
      <EmoteButton>
        {/* Reset Icon */}
        <img
          src={face_waiting}
          alt={"reset"}
          onClick={() => {
            if (gameStatus !== "waiting") dispatch(setGameStatus("waiting")); //  Best option ??
          }}
          style={{ height: "100%", imageRendering: "pixelated" }}
        />
      </EmoteButton>
      <Timer />
    </ScoreboardBox>
  );
};
