import React, { useState, useEffect, useRef } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState("000.00");
  const [hasRun, setHasRun] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    // console.log(`PAUSED RUN`);

    if (
      props.checkedNumber === 0 ||
      props.runGridGen === true ||
      props.gameOver === true ||
      props.won === true
    ) {
      console.log(`PAUSED IF STATEMENT RUN`);
      clearInterval(counterRef.current);
      setHasRun(false);
    }
  }, [timerSeconds, props.runGridGen, props.won, props.gameOver]);

  console.log(`Checked Number: ${props.checkedNumber}`);

  useEffect(() => {
    if (props.gameOver || props.won || props.runGridGen) {
      setTimerSeconds("000.00");
    }

    if (
      props.gameOver !== true &&
      props.won !== true &&
      props.checkedNumber !== 0 &&
      hasRun === false &&
      props.runGridGen !== true
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
        timerSeconds <= 9.9999999
          ? "00" + (Number(timerSeconds) + 0.01).toFixed(2)
          : timerSeconds <= 99.9999999
          ? "0" + (Number(timerSeconds) + 0.01).toFixed(2)
          : (Number(timerSeconds) + Number("000.01")).toFixed(2)
      );
    }, 10);
  };

  return timerSeconds;
};
