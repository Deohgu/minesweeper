import { mineCheck } from "./mineCheck";

///////////////////////// Click Handler
export const cellPressed = (index, cellArray, gridColumns, size) => {
  let cellArrayCopy = JSON.parse(JSON.stringify(cellArray));
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
    return mineCheck(index, index, cellArrayCopy, gridColumns, size);
  }
};
