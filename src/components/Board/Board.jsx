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
  const mineCheck = (index) => {
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

    // runs without if statement checking placing so the first index meaning 0 check above it which is -8 index, meaning non existent in shuffledGrid.
    if (index % props.gridWidth === 0) {
      if (index === 0) {
        // Top Left Corner

        // Problem here, filter not working as expected, check line 60 console.log
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[0] && curr[1] && curr[5] && curr[6] && curr[7]
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
            mineCheck(shuffledGrid[curr]);
          }
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      } else if (index === props.size - props.gridWidth) {
        // Bottom Left Corner
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[3] && curr[4] && curr[5] && curr[6] && curr[7]
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
            mineCheck(shuffledGrid[curr]);
          }
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      }

      // Left Wall
      const tempArray = checkerArray.filter(
        (curr) => curr !== curr[5] && curr[6] && curr[7]
      );
      bombCounter = 0;
      tempArray.map((curr) => {
        if (shuffledGrid[curr].value === "💣") {
          bombCounter++;
        }
        mineCheck(shuffledGrid[curr]);
      });
      console.log(`index: ${index}, mines: ${bombCounter}`);
    } else if (index % props.gridWidth === props.gridWidth - 1) {
      if (index === props.gridWidth - 1) {
        // Top Right Corner
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[0] && curr[1] && curr[2] && curr[3]
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
            mineCheck(shuffledGrid[curr]);
          }
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      } else if (index === props.size - 1) {
        // Bottom Right Corner
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[1] && curr[2] && curr[3] && curr[4] && curr[5]
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
            mineCheck(shuffledGrid[curr]);
          }
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      }

      // Right Wall
      const tempArray = checkerArray.filter(
        (curr) => curr !== curr[1] && curr[2] && curr[3]
      );
      bombCounter = 0;
      tempArray.map((curr) => {
        if (shuffledGrid[curr].value === "💣") {
          bombCounter++;
          mineCheck(shuffledGrid[curr]);
        }
      });
      console.log(`index: ${index}, mines: ${bombCounter}`);
    } else {
      console.log(`index: ${index}`);
      bombCounter = 0;
      // Not agains't the wall
      checkerArray.map((curr) => {
        // debugging Here!
        // It's giving me NaN for curr, check why.
        console.log(curr);
        if (shuffledGrid[curr].value === "💣") {
          bombCounter++;
        }
      });
      console.log(`index: ${index}, mines: ${bombCounter}`);
    }

    if (bombCounter === 0) {
      shuffledGrid.map((curr) => {
        mineCheck(curr);
      });
    }

    // mineCheck stops if it has a bomb
    if (bombCounter === 0) {
      // run until all squares that are not mines and connected are found. So probably call a separate function for this.
      lonelySquares(index);
    } else {
    }

    const lonelySquares = (index) => {
      if (index % props.gridWidth === 0) {
        if (index === 0) {
          // Top Left Corner
          const tempArray = checkerArray.filter(
            (curr) =>
              curr !== curr[0] && curr[1] && curr[5] && curr[6] && curr[7]
          );
          let bombCounter = 0;
          tempArray.map((curr) => {
            if (shuffledGrid[curr].value === "💣") {
              bombCounter++;
              mineCheck(shuffledGrid[curr]);
            }
          });
          console.log(`index: ${index}, mines: ${bombCounter}`);
        } else if (index === props.size - props.gridWidth) {
          // Bottom Left Corner
          const tempArray = checkerArray.filter(
            (curr) =>
              curr !== curr[3] && curr[4] && curr[5] && curr[6] && curr[7]
          );
          let bombCounter = 0;
          tempArray.map((curr) => {
            if (shuffledGrid[curr].value === "💣") {
              bombCounter++;
              mineCheck(shuffledGrid[curr]);
            }
          });
          console.log(`index: ${index}, mines: ${bombCounter}`);
        }
        // Left Wall
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[5] && curr[6] && curr[7]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
          }
          mineCheck(shuffledGrid[curr]);
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      } else if (index % props.gridWidth === props.gridWidth - 1) {
        if (index === props.gridWidth - 1) {
          // Top Right Corner
          const tempArray = checkerArray.filter(
            (curr) => curr !== curr[0] && curr[1] && curr[2] && curr[3]
          );
          let bombCounter = 0;
          tempArray.map((curr) => {
            if (shuffledGrid[curr].value === "💣") {
              bombCounter++;
              mineCheck(shuffledGrid[curr]);
            }
          });
          console.log(`index: ${index}, mines: ${bombCounter}`);
        } else if (index === props.size - 1) {
          // Bottom Right Corner
          const tempArray = checkerArray.filter(
            (curr) =>
              curr !== curr[1] && curr[2] && curr[3] && curr[4] && curr[5]
          );
          let bombCounter = 0;
          tempArray.map((curr) => {
            if (shuffledGrid[curr].value === "💣") {
              bombCounter++;
              mineCheck(shuffledGrid[curr]);
            }
          });
          console.log(`index: ${index}, mines: ${bombCounter}`);
        }
        // Right Wall
        const tempArray = checkerArray.filter(
          (curr) => curr !== curr[1] && curr[2] && curr[3]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
            mineCheck(shuffledGrid[curr]);
          }
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      } else {
        bombCounter = 0;
        // Not agains't the wall
        checkerArray.map((curr) => {
          if (shuffledGrid[curr].value === "💣") {
            bombCounter++;
          }
          // if counter === 0 then call function clockwise somwhere
        });
        console.log(`index: ${index}, mines: ${bombCounter}`);
      }
    };
  };
  /////////////////////////

  return (
    <BoardStyled>
      {shuffledGrid.map((curr, index) => (
        <Cell
          gridWidth={props.gridWidth}
          key={"Cell" + index}
          isBomb={curr.value}
          bombChecker={squarePressed}
          index={index}
        />
      ))}
    </BoardStyled>
  );
};
