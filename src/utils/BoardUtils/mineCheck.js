export const mineCheck = (
  index,
  original,
  cellArrayCopy,
  gridColumns,
  size
) => {
  // Array is displayed as a matrix. So it checks the ones near the index starting from above and continues clockwise.
  // index - matrix width = the index above, index - matrix width + 1 = top right index, etc
  let checkerArray = [
    index - gridColumns,
    index - gridColumns + 1,
    index + 1,
    index + gridColumns + 1,
    index + gridColumns,
    index + gridColumns - 1,
    index - 1,
    index - gridColumns - 1,
  ];

  let bombCounter = 0;

  if (index % gridColumns === 0) {
    if (index === 0) {
      // Top Left Corner
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[5] &&
          curr !== checkerArray[6] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true; // Will be skipped in the future
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        // filters indexes that will advance to check next
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        // Recursion, calls the mineCheck to do the same to the next indexes
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    } else if (index === size - gridColumns) {
      // Bottom Left Corner
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5] &&
          curr !== checkerArray[6] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    } else {
      // Left Wall
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[5] &&
          curr !== checkerArray[6] &&
          curr !== checkerArray[7]
      );
      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    }
  } else if (index % gridColumns === gridColumns - 1) {
    if (index === gridColumns - 1) {
      // Top Right Corner
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[0] &&
          curr !== checkerArray[1] &&
          curr !== checkerArray[2] &&
          curr !== checkerArray[3] &&
          curr !== checkerArray[7]
      );

      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    } else if (index === size - 1) {
      // Bottom Right Corner
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[1] &&
          curr !== checkerArray[2] &&
          curr !== checkerArray[3] &&
          curr !== checkerArray[4] &&
          curr !== checkerArray[5]
      );
      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    } else {
      // Right Wall
      if (cellArrayCopy[index].flagged !== true) {
        cellArrayCopy[index].advancedChecked = true;
      }
      const filteredCheckerArray = checkerArray.filter(
        (curr) =>
          curr !== checkerArray[1] &&
          curr !== checkerArray[2] &&
          curr !== checkerArray[3]
      );
      bombCounter = 0;
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopy[curr].value === "bomb" && bombCounter++;
        cellArrayCopy[curr].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[index].value = bombCounter;
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopy[curr].advancedChecked !== true &&
            cellArrayCopy[curr].value !== "bomb" &&
            curr !== original
        );
        filteredCheckerArrayAdvance.forEach((curr) => {
          return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
        });
      }
    }
  } else if (index > 0 && index < gridColumns - 1) {
    // Top Wall strickly
    if (cellArrayCopy[index].flagged !== true) {
      cellArrayCopy[index].advancedChecked = true;
    }
    const filteredCheckerArray = checkerArray.filter(
      (curr) =>
        curr !== checkerArray[0] &&
        curr !== checkerArray[1] &&
        curr !== checkerArray[7]
    );
    bombCounter = 0;

    filteredCheckerArray.forEach((curr) => {
      cellArrayCopy[curr].value === "bomb" && bombCounter++;
      cellArrayCopy[curr].checked = true;
    });
    if (bombCounter > 0) {
      cellArrayCopy[index].value = bombCounter;
    } else {
      const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
        (curr) =>
          cellArrayCopy[curr].advancedChecked !== true &&
          cellArrayCopy[curr].value !== "bomb" &&
          curr !== original
      );
      filteredCheckerArrayAdvance.forEach((curr) => {
        return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
      });
    }
  } else if (index > size - gridColumns && index < size - 1) {
    // Bottom Wall strickly
    if (cellArrayCopy[index].flagged !== true) {
      cellArrayCopy[index].advancedChecked = true;
    }
    const filteredCheckerArray = checkerArray.filter(
      (curr) =>
        curr !== checkerArray[3] &&
        curr !== checkerArray[4] &&
        curr !== checkerArray[5]
    );
    bombCounter = 0;

    filteredCheckerArray.forEach((curr) => {
      cellArrayCopy[curr].value === "bomb" && bombCounter++;
      cellArrayCopy[curr].checked = true;
    });
    if (bombCounter > 0) {
      cellArrayCopy[index].value = bombCounter;
    } else {
      const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
        (curr) =>
          cellArrayCopy[curr].advancedChecked !== true &&
          cellArrayCopy[curr].value !== "bomb" &&
          curr !== original
      );
      filteredCheckerArrayAdvance.forEach((curr) => {
        return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
      });
    }
  } else {
    if (cellArrayCopy[index].flagged !== true) {
      cellArrayCopy[index].advancedChecked = true;
    }
    // Not agains't the wall
    bombCounter = 0;

    checkerArray.forEach((curr) => {
      cellArrayCopy[curr].value === "bomb" && bombCounter++;
      cellArrayCopy[curr].checked = true;
    });

    if (bombCounter > 0) {
      cellArrayCopy[index].value = bombCounter;
    } else {
      const filteredCheckerArrayAdvance = checkerArray.filter(
        (curr) =>
          cellArrayCopy[curr].advancedChecked !== true &&
          cellArrayCopy[curr].value !== "bomb" &&
          curr !== original
      );
      filteredCheckerArrayAdvance.forEach((curr) => {
        return mineCheck(curr, original, cellArrayCopy, gridColumns, size);
      });
    }
  }

  return cellArrayCopy;
};
