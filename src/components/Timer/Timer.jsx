import React, { useState, useEffect, useRef } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState("000.00");

  const counterRef = useRef(null);

  useEffect(() => {
    if (props.gameStatus === "running") {
      // game started
      startTimer();
    } else if (props.gameStatus === "won" || props.gameStatus === "lost") {
      // Game Won or Lost
      clearInterval(counterRef.current); // stops the timer
    } else {
      // game waiting
      clearInterval(counterRef.current);
      setTimerSeconds("000.00"); // resets timer to 0
    }
  }, [props.gameStatus]);

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      setTimerSeconds((timerSeconds) =>
        timerSeconds <= 9.99
          ? "00" + (Number(timerSeconds) + 0.01).toFixed(2) // .toFixed deals with floating numbers
          : timerSeconds <= 99.99
          ? "0" + (Number(timerSeconds) + 0.01).toFixed(2)
          : (Number(timerSeconds) + Number("000.01")).toFixed(2)
      );
    }, 10);
  };

  return <div>{timerSeconds}</div>;
};
