import React from "react";

import { cellType } from "../../store/settingsSlice";

import { IconsContainer } from "./toDisplay.styled";
import { Icons } from "../../components/Cell/Cell.styled";

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

// Allows refering in the Icons src with a "variable" variable bellow -> `num${value}`
const importedImg: { [key: string]: string } = {
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
};

export const toDisplay = (
  cell: cellType
  // cellArray: initialStateTypes["cellArray"],
  // index: number,
  // value: cellType["value"]
): JSX.Element | undefined => {
  const { value } = cell;

  if (cell.advancedChecked === true) {
    if (cell.value === "bombPressed") {
      return (
        <IconsContainer>
          {" "}
          <Icons src={bomb} alt={value?.toString()} draggable="false" />
        </IconsContainer>
      );
    } else if (cell.value === "bomb") {
      return <Icons src={bomb} alt={value?.toString()} draggable="false" />;
    } else {
      return (
        <Icons
          src={importedImg[`num${cell.value?.toString()}`]}
          alt={value?.toString()}
          draggable="false"
        />
      );
    }
  } else if (cell.flagged === "wrong") {
    return <Icons src={wrong_flag} alt={"wrong"} draggable="false" />;
  } else if (cell.flagged === true) {
    return <Icons src={flag} alt={"flag"} draggable="false" />;
  }
};
