import { mineCheck } from "./mineCheck";

///////////////////////// Click Handler
export const cellPressed = (
  e,
  index,
  gameStatus,
  cellArray,
  statusHandler,
  gridWidth,
  size
) => {
  // After add to require it to be not checked.
  if (
    (gameStatus === "waiting" || gameStatus === "running") &&
    cellArray[index].flagged !== true // Stops the player from activating a flagged cell.
  ) {
    if (cellArray[index].value === "bomb") {
      // Sets all the cells that are bombs to "advancedChecked" meaning checked, meaning to be visible.
      let cellArrayCopy = [...cellArray];
      cellArrayCopy.forEach((curr) => {
        if (curr.value === "bomb") {
          curr.advancedChecked = true;
        } else if (curr.flagged === true) {
          curr.flagged = "wrong";
        }
      });
      // Shows an explosion to demonstrate that it was a bomb
      cellArrayCopy[index].value = "bombPressed";

      return statusHandler("lost", cellArrayCopy);
    } else {
      return statusHandler(
        "running",
        mineCheck(index, index, cellArray, gridWidth, size)
      );
    }
  }
};
