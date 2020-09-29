import React, { useState, useEffect, useRef } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    // console.log(`PAUSED RUN`);

    if (
      props.checkedNumber === 0 ||
      timerSeconds >= 30 ||
      props.runGridGen === true ||
      props.gameOver === true
    ) {
      // console.log(`PAUSED IF STATEMENT RUN`);
      setHasRun(false);
      clearInterval(counterRef.current);
    }
  }, [timerSeconds]);

  console.log(`Checked Number: ${props.checkedNumber}`);

  useEffect(() => {
    if (props.gameOver || props.won || props.runGridGen) {
      setTimerSeconds(0);
    }

    if (
      props.gameOver !== true &&
      props.won !== true &&
      props.checkedNumber !== 0 &&
      hasRun === false
    ) {
      console.log(`START TIMER RUN`);
      startTimer();
      setHasRun(true);
    }
  }, [props.checkedNumber, props.runGridGen]);

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      // Need to use the Date object, this way is veryy inacurate when using miliseconds.
      setTimerSeconds((timerSeconds) =>
        Number((timerSeconds + 0.01).toPrecision(4))
      );
    }, 10);
  };

  return timerSeconds;
};
