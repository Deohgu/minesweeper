import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  ///////////////////////// Creator of grid & Bomb Populator

  ///////////////////////// Click Handler
  const squarePressed = (e, index) => {
    if (e.button === 0) {
      console.log(`Left button pressed in Cell`);
    } else if (e.button === 1) {
      console.log(`Right button pressed in Cell`);
    }

    // After add to require it to be not checked.
    if (
      props.gameOver === false &&
      props.won !== true &&
      props.gridToShow[index].flagged !== true
    ) {
      if (props.gridToShow[index].value === "💣") {
        let testingGrid = [...props.gridToShow];
        testingGrid.map((curr) => {
          if (curr.value === "💣") {
            curr.advancedChecked = true;
          } else if (curr.flagged === true) {
            curr.flagged = "wrong";
          }
        });
        testingGrid[index].value = "💥";
        props.gameOverHandler(testingGrid);
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

  // Doesn't work like this. It has to have a fixed initial zero and only add to it.

  const mineCheck = (index, original) => {
    const testingGrid = [...props.gridToShow];

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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5]
        );
        bombCounter = 0;
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
        if (testingGrid[index].flagged !== true) {
          testingGrid[index].advancedChecked = true;
        }
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3]
        );
        bombCounter = 0;
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
      if (testingGrid[index].flagged !== true) {
        testingGrid[index].advancedChecked = true;
      }
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;

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
      if (testingGrid[index].flagged !== true) {
        testingGrid[index].advancedChecked = true;
      }
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5]
      );
      bombCounter = 0;

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
      if (testingGrid[index].flagged !== true) {
        testingGrid[index].advancedChecked = true;
      }
      // Just check all of them for now and later optimize.
      // Remember to also add to the others when initially filtering.
      // const tempArray = checkerArray.filter((curr) => {
      //   console.log(`curr on error: ${curr}`);
      //   return testingGrid[curr].checked !== true;
      // });
      // Not agains't the wall
      bombCounter = 0;

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

    props.gridToShowHandler(testingGrid);
  };

  return (
    <BoardStyled>
      {props.gridToShow.map((curr, index) => {
        return (
          <Cell
            onClick={(e) => squarePressed(e, index)}
            onContextMenu={(e) => props.flagHandler(e, index)}
            gridWidth={props.gridWidth}
            key={index}
            pressed={curr.advancedChecked}
            value={
              curr.advancedChecked === false
                ? curr.flagged === true
                  ? "🚩"
                  : curr.flagged === "wrong"
                  ? "❌"
                  : ""
                : curr.value !== "💣"
                ? curr.value === 0
                  ? ""
                  : curr.flagged === true
                  ? "🚩"
                  : curr.flagged === "wrong"
                  ? "wrong"
                  : curr.value
                : "💣"
            }
            // {/*value={curr.value === "💣" ? "💣" : curr.value + " " + index}*/}
          />
        );
      })}
    </BoardStyled>
  );
};
