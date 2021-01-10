import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  ///////////////////////// Creator of grid & Bomb Populator

  ///////////////////////// Click Handler
  const cellPressed = (e, index) => {
    // After add to require it to be not checked.
    if (
      (props.gameStatus === "waiting" || props.gameStatus === "running") &&
      props.cellArray[index].flagged !== true // Stops the player from activating a flagged cell.
    ) {
      if (props.cellArray[index].value === "💣") {
        // Sets all the cells that are bombs to "advancedChecked" meaning checked, meaning to be visible.
        let cellArrayCopy = [...props.cellArray];
        cellArrayCopy.forEach((curr) => {
          if (curr.value === "💣") {
            curr.advancedChecked = true;
          } else if (curr.flagged === true) {
            curr.flagged = "wrong";
          }
        });
        // Shows an explosion to demonstrate that it was a bomb
        cellArrayCopy[index].value = "💥";

        props.statusHandler("lost", cellArrayCopy);
      } else {
        props.statusHandler("running", mineCheck(index, index));
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
    const cellArrayCopy = [...props.cellArray];

    // Array is displayed as a matrix. So it checks the ones near the index starting from above and continues clockwise.
    // index - matrix width = the index above, index - matrix width + 1 = top right index, etc
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

    if (index % props.gridWidth === 0) {
      if (index === 0) {
        // Top Left Corner
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true; // Will be skipped in the future
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          // filters indexes that will advance to check next
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          // Recursion, calls the mineCheck to do the same to the next indexes
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      } else if (index === props.size - props.gridWidth) {
        // Bottom Left Corner
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true;
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      } else {
        // Left Wall
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true;
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      }
    } else if (index % props.gridWidth === props.gridWidth - 1) {
      if (index === props.gridWidth - 1) {
        // Top Right Corner
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[7]
        );

        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true;
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      } else if (index === props.size - 1) {
        // Bottom Right Corner
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5]
        );
        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true;
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      } else {
        // Right Wall
        if (cellArrayCopy[index].flagged !== true) {
          cellArrayCopy[index].advancedChecked = true;
        }
        const filteredCheckerArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3]
        );
        bombCounter = 0;
        filteredCheckerArray.forEach((curr) => {
          cellArrayCopy[curr].value === "💣" && bombCounter++;
          cellArrayCopy[curr].checked = true;
        });
        if (bombCounter > 0) {
          cellArrayCopy[index].value = bombCounter;
        } else {
          const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
            (curr) =>
              cellArrayCopy[curr].advancedChecked !== true &&
              cellArrayCopy[curr].value !== "💣" &&
              curr !== original
          );
          filteredCheckerArrayAdvance.forEach((curr) => {
            return mineCheck(curr, original);
          });
        }
      }
    } else if (index > 0 && index < props.gridWidth - 1) {
      // Top Wall strickly
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;

      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "💣" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "💣" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original);
        });
      }
    } else if (index > props.size - props.gridWidth && index < props.size - 1) {
      // Bottom Wall strickly
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5]
      );
      bombCounter = 0;

      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "💣" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "💣" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original);
        });
      }
    } else {
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      // Not agains't the wall
      bombCounter = 0;

      checkerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "💣" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });

      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = checkerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "💣" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original);
        });
      }
    }

    return cellArrayCopy;
  };

  return (
    <BoardStyled>
      {/* BoardStyled to be replaced with a reusable container component */}
      {props.cellArray.map((curr, index) => {
        return (
          <Cell
            onClick={(e) => cellPressed(e, index)}
            onContextMenu={(e) => props.flagHandler(e, index)}
            gridWidth={props.gridWidth}
            key={index}
            pressed={curr.advancedChecked}
            value={
              curr.advancedChecked === false ? (
                curr.flagged === true ? (
                  // flag
                  <i className="fas fa-flag" style={{ fontSize: "30px" }}></i>
                ) : curr.flagged === "wrong" ? (
                  <i className="fas fa-flag" style={{ fontSize: "30px" }}></i>
                ) : (
                  ""
                )
              ) : curr.value !== "💣" ? (
                curr.value === 0 ? (
                  ""
                ) : curr.flagged === true ? (
                  // flag
                  <i className="far fa-flag fa-lg"></i>
                ) : curr.flagged === "wrong" ? (
                  "wrong"
                ) : (
                  curr.value
                )
              ) : (
                // bomb
                <i className="fas fa-bomb fa-lg"></i>
              )
            }
          />
        );
      })}
    </BoardStyled>
  );
};
