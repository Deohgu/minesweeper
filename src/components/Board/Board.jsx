import React, { useState, useEffect } from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  const [gridToShow, setgridToShow] = useState([]);

  ///////////////////////// Creator of grid & Bomb Populator

  useEffect(() => {
    const populatedGrid = [];
    for (let i = 0; i < props.size - props.bombs; i++) {
      populatedGrid.push({
        value: "0",
        checked: false,
        advancedChecked: false,
      });
    }
    for (let j = 0; j < props.bombs; j++) {
      populatedGrid.push({
        value: "💣",
        checked: false,
        advancedChecked: false,
      });
    }
    setgridToShow(populatedGrid.sort((a, b) => Math.random() - 0.5));
  }, [props.gameOver]);
  ///////////////////////// Click Handler
  const squarePressed = (index) => {
    // After add to require it to be not checked.
    if (props.gameOver === false) {
      // if bomb, gridToShow.map and change all to advancedChecked to be true in order to show them and change this index value to "💥"
      if (gridToShow[index].value === "💣") {
        let testingGrid = [...gridToShow];
        testingGrid[index].advancedChecked = true;
        setgridToShow(testingGrid);
        props.gameOverHandler();
      } else {
        mineCheck(index, index);
      }
    }
  };

  ///////////////////////// Bomb Checker
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  const mineCheck = (index, original) => {
    const testingGrid = [...gridToShow];

    let checkerArray = [
      index - props.gridWidth,
      index - props.gridWidth + 1,
      index + 1,
      index + props.gridWidth + 1,
      index + props.gridWidth,
      index + props.gridWidth - 1,
      index - 1,
      index - props.gridWidth - 1,
    ];

    let bombCounter = 0;

    console.log(`Begining. Index: ${index}, gridWith: ${props.gridWidth}`);
    if (index % props.gridWidth === 0) {
      if (index === 0) {
        console.log(`Top Left corner init`);
        // Top Left Corner
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      } else if (index === props.size - props.gridWidth) {
        // Bottom Left Corner
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      } else {
        // Left Wall
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      }
    } else if (index % props.gridWidth === props.gridWidth - 1) {
      if (index === props.gridWidth - 1) {
        // Top Right Corner
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[7]
        );

        // DEBUGGIN HERE.
        console.log(`tempArray: ${tempArray}`);

        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      } else if (index === props.size - 1) {
        // Bottom Right Corner
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5]
        );
        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      } else {
        // Right Wall
        testingGrid[index].advancedChecked = true;
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3]
        );
        bombCounter = 0;
        let foundBomb = false;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        testingGrid[index].value = bombCounter;
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        if (bombCounter === 0) {
          foundBomb = true;

          // does not mutate - Advance Algorithm
          const tempArrayAdvance = tempArray.filter(
            (curr) =>
              testingGrid[curr].advancedChecked !== true &&
              testingGrid[curr].value !== "💣" &&
              curr !== original
          );
          tempArrayAdvance.map((curr) => {
            console.log(`checkerArray to advance: ${curr} from: ${index}`);
            return mineCheck(curr, original);
          });
          console.log(tempArrayAdvance);
        }
      }
    } else if (index > 0 && index < props.gridWidth - 1) {
      // Top Wall strickly
      testingGrid[index].advancedChecked = true;
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;
      let foundBomb = false;
      tempArray.map((curr) => {
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      testingGrid[index].value = bombCounter;
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
      if (bombCounter === 0) {
        foundBomb = true;
        // does not mutate - Advance Algorithm
        const tempArrayAdvance = tempArray.filter(
          (curr) =>
            testingGrid[curr].advancedChecked !== true &&
            testingGrid[curr].value !== "💣" &&
            curr !== original
        );
        tempArrayAdvance.map((curr) => {
          console.log(`checkerArray to advance: ${curr} from: ${index}`);
          return mineCheck(curr, original);
        });
        console.log(tempArrayAdvance);
      }
    } else if (index > props.size - props.gridWidth && index < props.size - 1) {
      // Bottom Wall strickly
      testingGrid[index].advancedChecked = true;
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5]
      );
      bombCounter = 0;
      let foundBomb = false;
      tempArray.map((curr) => {
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      testingGrid[index].value = bombCounter;
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
      if (bombCounter === 0) {
        foundBomb = true;
        // does not mutate - Advance Algorithm
        const tempArrayAdvance = tempArray.filter(
          (curr) =>
            testingGrid[curr].advancedChecked !== true &&
            testingGrid[curr].value !== "💣" &&
            curr !== original
        );
        tempArrayAdvance.map((curr) => {
          console.log(`checkerArray to advance: ${curr} from: ${index}`);
          return mineCheck(curr, original);
        });
        console.log(tempArrayAdvance);
      }
    } else {
      testingGrid[index].advancedChecked = true;
      // Just check all of them for now and later optimize.
      // Remember to also add to the others when initially filtering.
      // const tempArray = checkerArray.filter((curr) => {
      //   console.log(`curr on error: ${curr}`);
      //   return testingGrid[curr].checked !== true;
      // });
      // Not agains't the wall
      bombCounter = 0;
      let foundBomb = false;
      checkerArray.map((curr) => {
        console.log(curr);
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      testingGrid[index].value = bombCounter;
      console.log(`index: ${index}, mines: ${bombCounter}`);
      if (bombCounter === 0) {
        foundBomb = true;
        // does not mutate - Advance Algorithm
        const tempArrayAdvance = checkerArray.filter(
          (curr) =>
            testingGrid[curr].advancedChecked !== true &&
            testingGrid[curr].value !== "💣" &&
            curr !== original
        );
        tempArrayAdvance.map((curr) => {
          console.log(`checkerArray to advance: ${curr} from: ${index}`);
          return mineCheck(curr, original);
        });
        console.log(tempArrayAdvance);
      }
    }

    setgridToShow(testingGrid);
  };

  return (
    <BoardStyled>
      {gridToShow.map((curr, index) => {
        return (
          <Cell
            onClick={() => squarePressed(index)}
            gridWidth={props.gridWidth}
            key={index}
            pressed={curr.advancedChecked}
            value={
              curr.advancedChecked === false
                ? ""
                : curr.value === "💣"
                ? "💣"
                : curr.value
            }
            // value={curr.value === "💣" ? "💣" : curr.value + " " + index}
          />
        );
      })}
    </BoardStyled>
  );
};
