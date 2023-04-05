import React from "react";
import { useSelector } from "react-redux";
import { selectSettings } from "../../store/settingsSlice";

import { BombsBox, BombsImg } from "./BombsDisplay.styled";

import counter_0 from "../../assets/counter_0.png";
import counter_1 from "../../assets/counter_1.png";
import counter_2 from "../../assets/counter_2.png";
import counter_3 from "../../assets/counter_3.png";
import counter_4 from "../../assets/counter_4.png";
import counter_5 from "../../assets/counter_5.png";
import counter_6 from "../../assets/counter_6.png";
import counter_7 from "../../assets/counter_7.png";
import counter_8 from "../../assets/counter_8.png";
import counter_9 from "../../assets/counter_9.png";
import counter_null from "../../assets/counter_null.png";

const importedImage: { [key: string]: string } = {
  counter_0,
  counter_1,
  counter_2,
  counter_3,
  counter_4,
  counter_5,
  counter_6,
  counter_7,
  counter_8,
  counter_9,
  counter_null,
};

export const BombsDisplay = () => {
  const { flagsAvailable } = useSelector(selectSettings);

  // Turns to string to be able to add the 0's
  const stringFlaggedAmount = (flagsAvailable: number) => {
    const stringfied = flagsAvailable.toString();
    if (stringfied.length === 1) return "00" + flagsAvailable;
    else if (stringfied.length === 2) return "0" + stringfied;
    else return stringfied;
  };

  return (
    <BombsBox>
      <BombsImg
        src={
          flagsAvailable < 0
            ? counter_null
            : importedImage[
                `counter_${stringFlaggedAmount(flagsAvailable).charAt(0)}`
              ]
        }
        alt={
          flagsAvailable < 0
            ? "-"
            : importedImage[
                `counter_${stringFlaggedAmount(flagsAvailable).charAt(0)}`
              ]
        }
      />
      <BombsImg
        src={
          flagsAvailable < 0 && flagsAvailable > -10
            ? importedImage[`counter_0`]
            : importedImage[
                `counter_${stringFlaggedAmount(flagsAvailable).charAt(1)}`
              ]
        }
        alt={
          flagsAvailable < 0 && flagsAvailable > -10
            ? "0"
            : importedImage[
                `counter_${stringFlaggedAmount(flagsAvailable).charAt(1)}`
              ]
        }
      />
      <BombsImg
        src={
          importedImage[
            `counter_${stringFlaggedAmount(flagsAvailable).charAt(2)}`
          ]
        }
        alt={
          importedImage[
            `counter_${stringFlaggedAmount(flagsAvailable).charAt(3)}`
          ]
        }
      />
    </BombsBox>
  );
};
