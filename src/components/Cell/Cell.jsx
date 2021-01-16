import React from "react";

import { CellStyled, Icons } from "./Cell.styled";

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
import flag from "../../assets/flag.png";
import wrong_flag from "../../assets/wrong_flag.png";

export const Cell = ({ gridWidth, value, pressed, index, props, ...rest }) => {
  // Allows refering in the Icons src with a "variable" variable bellow -> `num${value}`
  const importedImg = { num1, num2, num3, num4, num5, num6, num7, num8 };

  console.log(props.cellArray[index]);

  // to be moved to utils folder in its own file
  const toDisplay = () => {
    if (props.cellArray[index].advancedChecked === true) {
      if (props.cellArray[index].value === "bombPressed") {
        return (
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"red"}
            width={"100%"}
            height={"100%"}
          >
            {" "}
            <Icons src={bomb} alt={value} draggable="false" />
          </Box>
        );
      } else if (props.cellArray[index].value === "bomb") {
        return <Icons src={bomb} alt={value} draggable="false" />;
      } else {
        return (
          <Icons
            src={importedImg[`num${props.cellArray[index].value}`]}
            alt={value}
            draggable="false"
          />
        );
      }
    } else if (props.cellArray[index].flagged === "wrong") {
      return <Icons src={wrong_flag} alt={"wrong"} draggable="false" />;
    } else if (props.cellArray[index].flagged === true) {
      return <Icons src={flag} alt={"flag"} draggable="false" />;
    }
  };

  return (
    <CellStyled
      gridWidth={gridWidth}
      pressed={pressed}
      {...rest}
      draggable="false"
    >
      {toDisplay()}
    </CellStyled>
  );
};
