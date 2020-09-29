import React, { useState, useEffect, useRef } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState(0);

  const millisecTime = () => new Date().getMilliseconds();

  const counterRef = useRef(null);

  useEffect(() => {
    if (props.gameOver === true) {
      clearInterval(counterRef.current);
    }
  }, [timerSeconds]);

  useEffect(() => {
    startTimer();
  }, []);

  // console.log(`new Date(): ${today}`);

  console.log(`timerSeconds: ${timerSeconds}`);

  // console.log(`Game Over? ${props.gameOver}`);

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
