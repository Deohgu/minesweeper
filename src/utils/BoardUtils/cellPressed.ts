import { mineCheck } from "./mineCheck";

import { initialStateTypes } from "../../components/settingsSlice";

type CellPressedType = (
  index: number,
  cellArray: initialStateTypes["cellArray"],
  gridColumns: initialStateTypes["gridColumns"],
  gridSize: initialStateTypes["gridSize"]
) => initialStateTypes["cellArray"];

// index: number; cellArray: initialStateTypes["cellArray"]; gridColumns: initialStateTypes["gridColumns"]; gridSize: initialStateTypes[""]
///////////////////////// Click Handler
export const cellPressed: CellPressedType = (
  index,
  cellArray,
  gridColumns,
  gridSize
) => {
  let cellArrayCopy: initialStateTypes["cellArray"] = JSON.parse(
    JSON.stringify(cellArray)
  );
  if (cellArray[index].value === "bomb") {
    // Sets all the cells that are bombs to "advancedChecked" meaning checked, meaning to be visible.

    cellArrayCopy.forEach((curr) => {
      if (curr.value === "bomb") {
        curr.advancedChecked = true;
      } else if (curr.flagged === true) {
        curr.flagged = "wrong";
      }
    });
    // Shows an explosion to demonstrate that it was a bomb
    cellArrayCopy[index].value = "bombPressed";

    return cellArrayCopy;
  } else {
    return mineCheck(index, index, cellArrayCopy, gridColumns, gridSize);
  }
};
