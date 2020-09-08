import React, { useState, useEffect } from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

export const Board = (props) => {
  const [gridToShow, setgridToShow] = useState([]);
  ///////////////////////// Creator of grid & Bomb Populator

  useEffect(() => {
    const populatedGrid = [];
    for (let i = 0; i < props.size - props.bombs; i++) {
      populatedGrid.push({ value: "0", checked: false });
    }
    for (let j = 0; j < props.bombs; j++) {
      populatedGrid.push({ value: "💣", checked: false });
    }
    setgridToShow(populatedGrid.sort((a, b) => Math.random() - 0.5));
  }, []);
  ///////////////////////// Click Handler
  const squarePressed = (index) => {
    // After add to require it to be not checked.
    if (gridToShow[index].value === "💣") {
      console.log("Game Over!");
    } else {
      mineCheck(index);
    }
  };

  ///////////////////////// Bomb Checker

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  // Might not need this in the end. Check Notion notes.
  const lonelySquares = (index) => {
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

    if (index % props.gridWidth === 0) {
      if (index === 0) {
        // Top Left Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
            // mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else if (index === props.size - props.gridWidth) {
        // Bottom Left Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
            // mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else {
        // Left Wall
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
          }
          // mineCheck(curr);
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      }
    } else if (index % props.gridWidth === props.gridWidth - 1) {
      if (index === props.gridWidth - 1) {
        // Top Right Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[7]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
            // mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else if (index === props.size - 1) {
        // Bottom Right Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
            // mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else {
        // Right Wall
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3]
        );
        let bombCounter = 0;
        tempArray.map((curr) => {
          if (gridToShow[curr].value === "💣") {
            bombCounter++;
            // mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      }
    } else if (index > 0 && index < props.gridWidth - 1) {
      // Top Wall strickly
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[7]
      );
      let bombCounter = 0;
      tempArray.map((curr) => {
        if (gridToShow[curr].value === "💣") {
          bombCounter++;
          // mineCheck(curr);
        }
      });
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
    } else if (index > props.size - props.gridWidth && index < props.size - 1) {
      // Bottom Wall strickly
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5]
      );
      let bombCounter = 0;
      tempArray.map((curr) => {
        if (gridToShow[curr].value === "💣") {
          bombCounter++;
          // mineCheck(curr);
        }
      });
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
    } else {
      let bombCounter = 0;
      // Not agains't the wall
      checkerArray.map((curr) => {
        if (gridToShow[curr].value === "💣") {
          bombCounter++;
        }
        // if counter === 0 then call function clockwise somwhere
      });
      console.log(`index: ${index}, mines: ${bombCounter}`);
    }
  };

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  const mineCheck = (index) => {
    const testingGrid = gridToShow;

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

        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
          console.log(`curr: ${curr}`);
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
        // TESTING HERE <---------------- Trying to update visually
        testingGrid[index].value = bombCounter;
      } else if (index === props.size - props.gridWidth) {
        // Bottom Left Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else {
        // Left Wall
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[5] &&
            curr !== checkerArray[6] &&
            curr !== checkerArray[7] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      }
    } else if (index % props.gridWidth === props.gridWidth - 1) {
      if (index === props.gridWidth - 1) {
        // Top Right Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[0] &&
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[7] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else if (index === props.size - 1) {
        // Bottom Right Corner
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            curr !== checkerArray[4] &&
            curr !== checkerArray[5] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
        );
      } else {
        // Right Wall
        const tempArray = checkerArray.filter(
          (curr) =>
            curr !== checkerArray[1] &&
            curr !== checkerArray[2] &&
            curr !== checkerArray[3] &&
            testingGrid[curr].checked !== true
        );
        bombCounter = 0;
        tempArray.map((curr) => {
          if (testingGrid[curr].value === "💣") {
            bombCounter++;
          }
          testingGrid[curr].checked = true;
          testingGrid[curr].value = bombCounter;
        });
        tempArray.map((curr) => {
          if (bombCounter === 0) {
            mineCheck(curr);
          }
        });
        console.log(
          `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}, Checked?: ${testingGrid[index].checked}`
        );
      }
    } else if (index > 0 && index < props.gridWidth - 1) {
      // Top Wall strickly
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[7] &&
          testingGrid[curr].checked !== true
      );
      bombCounter = 0;
      tempArray.map((curr) => {
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      tempArray.map((curr) => {
        if (bombCounter === 0) {
          mineCheck(curr);
        }
      });
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
    } else if (index > props.size - props.gridWidth && index < props.size - 1) {
      // Bottom Wall strickly
      const tempArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5] &&
          testingGrid[curr].checked !== true
      );
      bombCounter = 0;
      tempArray.map((curr) => {
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      tempArray.map((curr) => {
        if (bombCounter === 0) {
          mineCheck(curr);
        }
      });
      console.log(
        `index: ${index}, mines: ${bombCounter}, tempArray: ${tempArray}`
      );
    } else {
      const tempArray = checkerArray.filter(
        (curr) => testingGrid[curr].checked !== true
      );
      bombCounter = 0;
      // Not agains't the wall
      tempArray.map((curr) => {
        console.log(curr);
        if (testingGrid[curr].value === "💣") {
          bombCounter++;
        }
        testingGrid[curr].checked = true;
      });
      console.log(`index: ${index}, mines: ${bombCounter}`);
    }
    // Change numbers of checked.
    // Currently changing in the statement after changing .checked
    // Just need to have it updated after this.
    console.log(
      `${testingGrid.map(
        (curr) => curr.value
      )}   Top left value changed to update.`
    );
    return setgridToShow(testingGrid);
  };

  // gridToShow is not updated when called a second time.
  console.log(
    `Board has been rendered. gridToShow: ${gridToShow.map(
      (curr) => curr.value
    )}`
  );

  const processValue = () => {
    return gridToShow;
  };

  return (
    <BoardStyled>
      {/*{gridToShow.map((curr, index) => (
        <Cell
          gridWidth={props.gridWidth}
          key={"Cell" + index}
          value={curr.value}
          bombChecker={squarePressed}
          index={index}
          gridToShow={gridToShow}
        />
      ))}*/}
      <Cell
        gridWidth={props.gridWidth}
        grid={gridToShow}
        bombChecker={squarePressed}
      />
    </BoardStyled>
  );
};
