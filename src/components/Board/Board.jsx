import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  ///////////////////////// Creator of grid & Bomb Populator
  const populatedGrid = [];
  for (let i = 0; i < props.size - props.bombs; i++) {
    populatedGrid.push({ value: "0", checked: false });
  }
  for (let j = 0; j < props.bombs; j++) {
    populatedGrid.push({ value: "💣", checked: false });
  }
  const shuffledGrid = populatedGrid.sort((a, b) => Math.random() - 0.5);

  ///////////////////////// Click Handler
  // From inside this I can choose to call mineCheck
  const squarePressed = (index) => {
    // After add to require it to be not checked.
    // if (shuffledGrid[index].checked === false) {
    // }
    if (shuffledGrid[index].value === "💣") {
      console.log("Game Over!");
    } else {
      mineCheck(index);
      // execute the mineCheck

      // if no bomb search neighbours BUT only reveal the ones without a bomb nearby.
    }
  };

  ///////////////////////// Bomb Checker
  const mineCheck = (variableIndex) => {
    let checkerArray = [
      variableIndex - props.gridWidth,
      variableIndex - props.gridWidth + 1,
      variableIndex + 1,
      variableIndex + props.gridWidth + 1,
      variableIndex + props.gridWidth,
      variableIndex + props.gridWidth - 1,
      variableIndex - 1,
      variableIndex - props.gridWidth - 1,
    ];

    let bombCounter = 0;

    // mineCheck stops if it has a bomb
    if (bombCounter === 0) {
      // Currently here, not sure how to call this function recursevely meeting all the surrounding things for each run. mineCheck(checkerArray[0]) would always only check the top, maybe a checkerArray.map calling the function for each curr, not sure, maybe I should check the video again.
      mineCheck();
    } else {
    }

    if (variableIndex % props.gridWidth === 0) {
      // Left Wall
      if (variableIndex === 0) {
        // Top Left Corner
      } else if (variableIndex === props.size - props.gridWidth) {
        // Bottom Left Corner
      }
    } else if (variableIndex % props.gridWidth === props.gridWidth - 1) {
      // Right Wall
      if (variableIndex === props.gridWidth - 1) {
        // Top Right Corner
      } else if (variableIndex === props.size - 1) {
        // Bottom Right Corner
      }
    } else {
      bombCounter = 0;
      // Not agains't the wall
      checkerArray.map((curr) => {
        if (shuffledGrid[curr].value === "💣") {
          bombCounter++;
        }
        // if counter === 0 then call function clockwise somwhere
      });
    }
  };
  /////////////////////////

  return (
    <BoardStyled>
      {shuffledGrid.map((curr, index) => (
        <Cell
          gridWidth={props.gridWidth}
          key={"Cell" + index}
          isBomb={curr.value}
          // bombChecker={runChecker}
        />
      ))}
    </BoardStyled>
  );
};
