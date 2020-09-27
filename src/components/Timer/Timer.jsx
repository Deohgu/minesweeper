import React, { useState, useEffect } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState(0.0);

  useEffect(() => {
    if (props.gameOver === false) {
      startTimer();
    }
  }, [timerSeconds]);

  console.log(props.gameOver);

  const startTimer = () => {
    setTimeout(() => {
      // Need to use the Date object, this way is veryy inacurate when using miliseconds.
      setTimerSeconds(timerSeconds + 1);
    }, 1000);
  };

  return timerSeconds;
};
