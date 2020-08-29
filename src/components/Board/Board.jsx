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
  const shuffledPopulatedGrid = populatedGrid.sort(
    (a, b) => Math.random() - 0.5
  );

  ///////////////////////// Click Handler
  
  // From inside this I can choose to call mineCheck
  const squarePressed = (index) => {
    // After add to require it to be not checked.
    if (shuffledPopulatedGrid[index].value === "💣") {
      console.log("Game Over!")
    } else if ()
  }




  ///////////////////////// Bomb Checker
  const mineCheck = (index) => {

    // This needs to be separate to clicking events, because it cannot look for a bomb and end the game whilst checking.
    if (index % props.gridWidth === 0) { // Left Wall
      if (index === 0) { // Top Left Corner

      } else if (index === props.size - props.gridWidth) { // Bottom Left Corner

      }
    } else if (index % props.gridWidth === props.gridWidth -1) { // Right Wall
      if (index === props.gridWidth -1) { // Top Right Corner

      } else if (index === props.size-1) { // Bottom Right Corner

      }
    } else { // Not agaisn't the wall

    }
  }
  // This will be recursively called to reveal neighbours without bombs
  // const runChecker = () => {
  //   console.log(`runChecker is running.`);
  //   const nearNoBombs = (cellIndex) => {
  //     shuffledPopulatedGrid[cellIndex].value = 0;
  //     shuffledPopulatedGrid[cellIndex].checked = true;
  //     if (shuffledPopulatedGrid[cellIndex.value === "B"]) {
  //       shuffledPopulatedGrid[cellIndex].value++;
  //     } else {
  //       nearNoBombs();
  //     }
  //   };
  //   shuffledPopulatedGrid.map((curr, index) => {
  //     let emptyFound = false;
  //     if (curr.value === 0 && emptyFound === false) {
  //       emptyFound = true;
  //       nearNoBombs(index - 8);
  //       nearNoBombs(index - 7);
  //       nearNoBombs(index + 1);
  //       nearNoBombs(index + 9);
  //       nearNoBombs(index + 8);
  //       nearNoBombs(index + 7);
  //       nearNoBombs(index - 1);
  //       nearNoBombs(index - 9);
  //     }
  //   });
  // };
  /////////////////////////

  return (
    <BoardStyled>
      {shuffledPopulatedGrid.map((curr, index) => (
        <Cell
          gridWidth={props.gridWidth}
          key={"Cell" + index}
          isBomb={curr.value}
          bombChecker={runChecker}
        />
      ))}
    </BoardStyled>
  );
};
