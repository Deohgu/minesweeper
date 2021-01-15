import React from "react";

import { Cell } from "./../index";

import { BoardStyled } from "./Board.styled";

import { mineCheck } from "../../utils/mineCheck";

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
        props.statusHandler("running", mineCheck(index, index, props));
      }
    }
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
            index={index}
            props={props}
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
