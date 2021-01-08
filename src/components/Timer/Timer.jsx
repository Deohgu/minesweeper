import { useState, useEffect, useRef } from "react";

export const Timer = (props) => {
  const [timerSeconds, setTimerSeconds] = useState("000.00");
  const [asRun, setAsRun] = useState(false);

  const [shouldReset, setShouldReset] = useState(false)

  const counterRef = useRef(null);

  /*
  // useEffect(() => {
    // console.log(`PAUSED RUN`);
    if (props.shouldReset === true) {
      props.resetHandler()
      if (
        props.checkedNumber === 0 ||
        props.runGridGen === true ||
        props.gameOver === true ||
        props.won === true
      ) {
        console.log(`PAUSED IF STATEMENT RUN`);
        clearInterval(counterRef.current);
        setAsRun(false);
      }
    }
  // }, [timerSeconds, props.runGridGen, props.won, props.gameOver]);
  */

  useEffect(() => {
    if (props.shouldReset === true) {
      props.resetHandler()
      clearInterval(counterRef.current);
      setAsRun(false);
    }
    return () => props.resetHandler()
  },[props.shouldReset])

  console.log(`gameStatus inside timer: ${props.gameStatus}`)
  
  useEffect(() => {
    if (props.gameStatus === "won" || props.gameStatus === "lost") {
      console.log(`PAUSED IF STATEMENT RUN`);
        clearInterval(counterRef.current);
        setAsRun(false);
    } else if (props.gameStatus === "running") {
      console.log(`START TIMER RUN`);
      startTimer();
      setAsRun(true);
    }
    console.log(`Checker in Timer for status as RUN`)
  }, [props.gameStatus])


  console.log(`Checked Number: ${props.checkedNumber}`);

  /*
  useEffect(() => {
    if (props.gameOver || props.won || props.runGridGen) {
      setTimerSeconds("000.00");
    }

    if (
      // Possibly manage everything with gameStatus
      props.gameOver !== true &&
      props.won !== true &&
      props.checkedNumber !== 0 &&
      asRun === false && //  gameStatus === "running"
      props.runGridGen !== true
    ) {
      console.log(`START TIMER RUN`);
      startTimer();
      setAsRun(true);
    }
  }, [props.checkedNumber, props.runGridGen]); // gameStatus?
  */

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      // Need to use the Date object, this way is veryy inacurate when using miliseconds.
      setTimerSeconds((timerSeconds) =>
        timerSeconds <= 9.99
          ? "00" + (Number(timerSeconds) + 0.01).toFixed(2)
          : timerSeconds <= 99.99
          ? "0" + (Number(timerSeconds) + 0.01).toFixed(2)
          : (Number(timerSeconds) + Number("000.01")).toFixed(2)
      );
    }, 10);
  };

  return timerSeconds;
};
