import React, { useState, useRef, useEffect, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  resetFlagsAvailable,
  setCellArray,
  setGameStatus,
  cellType,
  initialStateTypes,
  selectSettings,
} from "../../store/settingsSlice";

import TitleBar from "../TitleBar/TitleBar";
import WindowButtons from "../WindowButtons/WindowButtons";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Board } from "../Board/Board";

import { Window, GameBox } from "./Game.styled";

export const Game = () => {
  const windowRef: any = useRef(null);

  const [wasDragged, setWasDragged] = useState(false);
  const [initialCursorPos, setInitialCursorPos] = useState([0, 0]);
  // const [endCursorPos, setEndCursorPos] = useState([0, 0]);
  const [windowPos, setWindowPos] = useState([0, 0]);

  const { gridSize, bombsAmount, cellArray, gameStatus } =
    useSelector(selectSettings);
  const dispatch = useDispatch();

  //  On Mount
  // useEffect(() => {
  //   // console.log("windowRef.current", windowRef.current?.clientWidth);
  //   // console.log("windowRef.current", windowRef.current);
  //   const x = windowRef.current.offsetLeft;
  //   const y = windowRef.current.offsetTop;
  //   setWindowPos([x, y]);
  // }, []);

  // useEffect(() => {
  //   // console.log("windowRef.current", windowRef.current?.clientWidth);
  //   console.log("windowRef.current", windowRef.current);
  //   // setWindowPos([x, y]);
  // }, [endCursorPos]);

  ///////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === "waiting") {
      dispatch(resetFlagsAvailable());
      const newCellArray: initialStateTypes["cellArray"] = [];
      for (let i = 0; i < gridSize - bombsAmount; i++) {
        newCellArray.push({
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      for (let j = 0; j < bombsAmount; j++) {
        newCellArray.push({
          value: "bomb",
          checked: false,
          advancedChecked: false,
          flagged: false,
        });
      }
      dispatch(setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5)));
    }
  }, [dispatch, gameStatus, bombsAmount, gridSize]);

  //  Updates game's status
  useEffect(() => {
    // Algorithm To be improved
    let advCheckedAmount = 0;
    let bombPressed = false;
    cellArray.forEach((curr) => {
      if (curr.advancedChecked) {
        advCheckedAmount++;
      }
      if (curr.value === "bombPressed") {
        bombPressed = true;
      }
    });

    if (bombPressed) {
      dispatch(setGameStatus("lost"));
    } else if (advCheckedAmount === gridSize - bombsAmount) {
      dispatch(setGameStatus("won"));
    }
  }, [bombsAmount, cellArray, dispatch, gridSize]);

  // makes everything visible if won
  useEffect(() => {
    if (gameStatus === "won") {
      const gridCopy = JSON.parse(JSON.stringify(cellArray));
      gridCopy.forEach((cell: cellType) => {
        cell.advancedChecked = true; // makes everything visible
      });

      dispatch(setCellArray(gridCopy));
    }
  }, [cellArray, dispatch, gameStatus]);

  const dragStartHandler = (e: MouseEvent) => {
    const x = windowRef.current.offsetLeft;
    const y = windowRef.current.offsetTop;
    setWindowPos([x, y]);
    setInitialCursorPos([e.clientX, e.clientY]);
    setWasDragged(true);
  };

  // const dragEndHandler = (e: MouseEvent) => {
  //   const xCursorDif = e.clientX - initialCursorPos[0];
  //   const yCursorDif = e.clientY - initialCursorPos[1];

  //   const xWindowDif = windowPos[0] + xCursorDif;
  //   const yWindowDif = windowPos[1] + yCursorDif;

  //   setWindowPos([xWindowDif, yWindowDif]);
  // };

  const dragHandler = (e: MouseEvent) => {
    //  Stopping the drag the mouse position is 0 for some reason
    if (e.clientX && e.clientY) {
      e.stopPropagation();
      e.preventDefault();

      const xCursorDif = e.clientX - initialCursorPos[0];
      const yCursorDif = e.clientY - initialCursorPos[1];

      const xWindowDif = windowPos[0] + xCursorDif;
      const yWindowDif = windowPos[1] + yCursorDif;

      setInitialCursorPos([e.clientX, e.clientY]);
      setWindowPos([xWindowDif, yWindowDif]);
    }
  };

  return (
    <Window
      ref={windowRef}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e)}
      // onDragEnd={(e) => dragEndHandler(e)}
      onDrag={(e) => dragHandler(e)}
      style={{
        top: `${wasDragged ? windowPos[1].toString() + "px" : "50%"}`,
        left: `${wasDragged ? windowPos[0].toString() + "px" : "50%"}`,
      }}
    >
      <TitleBar />
      <WindowButtons />
      <GameBox>
        <Scoreboard />
        <Board />
      </GameBox>
    </Window>
  );
};
