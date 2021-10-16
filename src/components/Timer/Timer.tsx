import React, { useState, useEffect, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { selectSettings } from "../../store/settingsSlice";

import { TimerBox, Counter } from "./Timer.styled";

import counter_0 from "../../assets/counter_0.png";
import counter_1 from "../../assets/counter_1.png";
import counter_2 from "../../assets/counter_2.png";
import counter_3 from "../../assets/counter_3.png";
import counter_4 from "../../assets/counter_4.png";
import counter_5 from "../../assets/counter_5.png";
import counter_6 from "../../assets/counter_6.png";
import counter_7 from "../../assets/counter_7.png";
import counter_8 from "../../assets/counter_8.png";
import counter_9 from "../../assets/counter_9.png";
import counter_null from "../../assets/counter_null.png";

const importedImage: { [key: string]: string } = {
  counter_0,
  counter_1,
  counter_2,
  counter_3,
  counter_4,
  counter_5,
  counter_6,
  counter_7,
  counter_8,
  counter_9,
  counter_null,
};

const Timer = () => {
  const [timerSeconds, setTimerSeconds] = useState(0);

  const { gameStatus } = useSelector(selectSettings);

  const counterRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (gameStatus === "running") {
      // game started
      startTimer();
    } else if (gameStatus === "won" || gameStatus === "lost") {
      // Game Won or Lost
      clearInterval(Number(counterRef.current)); // stops the timer
    } else {
      // game waiting
      clearInterval(Number(counterRef.current));
      setTimerSeconds(0); // resets timer to 0
    }
  }, [gameStatus]);

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      setTimerSeconds((timerSeconds) => timerSeconds + 1);
    }, 1000);
  };

  const addZeros = () => {
    if (timerSeconds < 10) return `00${timerSeconds.toString()}`;
    else if (timerSeconds < 100) return `0${timerSeconds.toString()}`;
    return timerSeconds.toString();
  };

  return (
    <TimerBox>
      <Counter
        src={importedImage[`counter_${addZeros().charAt(0)}`]}
        alt={addZeros().charAt(0)}
      />
      <Counter
        src={importedImage[`counter_${addZeros().charAt(1)}`]}
        alt={addZeros().charAt(1)}
      />
      <Counter
        src={importedImage[`counter_${addZeros().charAt(2)}`]}
        alt={addZeros().charAt(2)}
      />
    </TimerBox>
  );
};

export default memo(Timer);
