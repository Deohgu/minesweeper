import React from "react";

import { CellStyled } from "./Cell.styled";

// Take aways from today
// Working but the code needs refactoring before a PR
// with image-rendering: pixelated we can scale the images properly. might work with top level parent containers

import { Box } from "../Box";

import num1 from "../../assets/1.png";
import num2 from "../../assets/2.png";
import num3 from "../../assets/3.png";
import num4 from "../../assets/4.png";
import num5 from "../../assets/5.png";
import num6 from "../../assets/6.png";
import num7 from "../../assets/7.png";
import num8 from "../../assets/8.png";
import bomb from "../../assets/bomb.png";

export const Cell = ({ gridWidth, value, pressed, index, props, ...rest }) => {
  // Allows importing onto the img src with a "variable" variable bellow
  const importedImg = { num1, num2, num3, num4, num5, num6, num7, num8 };

  console.log(props.cellArray[index]);

  return (
    <CellStyled gridWidth={gridWidth} pressed={pressed} {...rest}>
      {/* We will resolve this mess */}
      {/* The Cell component should dictate what to render based on props, clean ou Board conditionals */}
      {props.cellArray[index].value === "💥" &&
        props.cellArray[index].advancedChecked === true && (
          // <Box backgroundColor={"red"} width={"100%"} height={"100%"}>
          <div
            style={{ backgroundColor: "red", width: "100%", height: "100%" }}
          >
            <img
              src={bomb}
              alt={value}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </div>
          // </Box>
        )}
      {props.cellArray[index].value === "💣" &&
        props.cellArray[index].advancedChecked === true && (
          <img src={bomb} alt={value}></img>
        )}
      {props.cellArray[index].value && (
        <img
          src={importedImg["num" + props.cellArray[index].value]}
          alt={value}
        ></img>
      )}
    </CellStyled>
  );
};
