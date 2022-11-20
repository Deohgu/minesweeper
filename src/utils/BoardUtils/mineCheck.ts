import { CellType, initialStateTypes } from "../../store/settingsSlice";

const getNeighbouringBlankCells = (
  neighbouringCellIndexes: number[],
  updatedCellArray: CellType[],
  initialIndex: number
) =>
  neighbouringCellIndexes.filter(
    (neighbourIndex) =>
      updatedCellArray[neighbourIndex].advancedChecked !== true &&
      updatedCellArray[neighbourIndex].value !== "bomb" &&
      neighbourIndex !== initialIndex
  );

const intersection = (listOne: any[], listTwo: any[]): any[] => {
  const listOneSet = new Set(listOne);
  const listTwoSet = new Set(listTwo);

  const _intersection = new Set();
  for (const element of listTwoSet) {
    if (listOneSet.has(element)) {
      _intersection.add(element);
    }
  }

  return [..._intersection];
};

export const mineCheck = (
  currentIndex: number,
  initialIndex: number,
  cellArrayCopy: initialStateTypes["cellArray"],
  gridColumnsAmount: initialStateTypes["gridColumnsAmount"],
  gridLength: initialStateTypes["gridLength"]
): initialStateTypes["cellArray"] => {
  const onTheNorthernWall = currentIndex % gridColumnsAmount === 0;
  const onTheWesternWall = currentIndex === 0;
  const onTheSouthWesternWall = currentIndex === gridLength - gridColumnsAmount;
  const onTheEasternWall =
    currentIndex % gridColumnsAmount === gridColumnsAmount - 1;
  const onTheNorthEasternWall = currentIndex === gridColumnsAmount - 1;
  const onTheSouthEasternWall = currentIndex === gridLength - 1;
  const onTheSouthernWall =
    currentIndex > gridLength - gridColumnsAmount &&
    currentIndex < gridLength - 1;

  const directionIndexes = {
    north: currentIndex - gridColumnsAmount,
    east: currentIndex + 1,
    south: currentIndex + gridColumnsAmount,
    west: currentIndex - 1,
    get northEast() {
      return this.north + 1;
    },
    get southEast() {
      return this.south + 1;
    },
    get southWest() {
      return this.south - 1;
    },
    get northWest() {
      return this.north - 1;
    },
  };

  const neighbouringCells = {
    noWall: [
      directionIndexes.north,
      directionIndexes.northEast,
      directionIndexes.east,
      directionIndexes.southEast,
      directionIndexes.south,
      directionIndexes.southWest,
      directionIndexes.west,
      directionIndexes.northWest,
    ],
    northernWall: [
      directionIndexes.east,
      directionIndexes.southEast,
      directionIndexes.south,
      directionIndexes.southWest,
      directionIndexes.west,
    ],
    easternWall: [
      directionIndexes.north,
      directionIndexes.south,
      directionIndexes.southWest,
      directionIndexes.west,
      directionIndexes.northWest,
    ],
    southernWall: [
      directionIndexes.north,
      directionIndexes.northEast,
      directionIndexes.east,
      directionIndexes.west,
      directionIndexes.northWest,
    ],
    westernWall: [
      directionIndexes.north,
      directionIndexes.northEast,
      directionIndexes.east,
      directionIndexes.southEast,
      directionIndexes.south,
    ],
    get northEasternWall(): number[] {
      return intersection(this.northernWall, this.easternWall);
    },
    get southEasternWall(): number[] {
      return intersection(this.southernWall, this.easternWall);
    },
    get southWesternWall(): number[] {
      return intersection(this.southernWall, this.westernWall);
    },
    get northWesternWall(): number[] {
      return intersection(this.northernWall, this.westernWall);
    },
  };

  let bombCounter = 0;

  if (onTheNorthernWall) {
    if (onTheWesternWall) {
      // Top Left Corner
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.northWesternWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true; // Will be skipped in the future
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        // filters indexes that will advance to check next
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        // Recursion, calls the mineCheck to do the same to the next indexes
        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    } else if (onTheSouthWesternWall) {
      // Bottom Left Corner
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.southWesternWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    } else {
      // Left Wall
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.westernWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    }
  } else if (onTheEasternWall) {
    if (onTheNorthEasternWall) {
      // Top Right Corner
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.northEasternWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    } else if (onTheSouthEasternWall) {
      // Bottom Right Corner
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.southEasternWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    } else {
      // Right Wall
      if (cellArrayCopy[currentIndex].flagged !== true) {
        cellArrayCopy[currentIndex].advancedChecked = true;
      }
      const neighbouringCellIndexes = neighbouringCells.easternWall;

      bombCounter = 0;
      neighbouringCellIndexes.forEach((neighbourIndex) => {
        cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
        cellArrayCopy[neighbourIndex].checked = true;
      });
      if (bombCounter > 0) {
        cellArrayCopy[currentIndex].value = bombCounter;
      } else {
        const neighbouringBlankCells = getNeighbouringBlankCells(
          neighbouringCellIndexes,
          cellArrayCopy,
          initialIndex
        );

        neighbouringBlankCells.forEach((curr) => {
          return mineCheck(
            curr,
            initialIndex,
            cellArrayCopy,
            gridColumnsAmount,
            gridLength
          );
        });
      }
    }
  } else if (currentIndex > 0 && currentIndex < gridColumnsAmount - 1) {
    // Top Wall strictly
    if (cellArrayCopy[currentIndex].flagged !== true) {
      cellArrayCopy[currentIndex].advancedChecked = true;
    }
    const neighbouringCellIndexes = neighbouringCells.northernWall;

    bombCounter = 0;

    neighbouringCellIndexes.forEach((neighbourIndex) => {
      cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
      cellArrayCopy[neighbourIndex].checked = true;
    });
    if (bombCounter > 0) {
      cellArrayCopy[currentIndex].value = bombCounter;
    } else {
      const neighbouringBlankCells = getNeighbouringBlankCells(
        neighbouringCellIndexes,
        cellArrayCopy,
        initialIndex
      );

      neighbouringBlankCells.forEach((curr) => {
        return mineCheck(
          curr,
          initialIndex,
          cellArrayCopy,
          gridColumnsAmount,
          gridLength
        );
      });
    }
  } else if (onTheSouthernWall) {
    // Bottom Wall strictly
    if (cellArrayCopy[currentIndex].flagged !== true) {
      cellArrayCopy[currentIndex].advancedChecked = true;
    }
    const neighbouringCellIndexes = neighbouringCells.southernWall;

    bombCounter = 0;

    neighbouringCellIndexes.forEach((neighbourIndex) => {
      cellArrayCopy[neighbourIndex].value === "bomb" && bombCounter++;
      cellArrayCopy[neighbourIndex].checked = true;
    });
    if (bombCounter > 0) {
      cellArrayCopy[currentIndex].value = bombCounter;
    } else {
      const neighbouringBlankCells = getNeighbouringBlankCells(
        neighbouringCellIndexes,
        cellArrayCopy,
        initialIndex
      );

      neighbouringBlankCells.forEach((curr) => {
        return mineCheck(
          curr,
          initialIndex,
          cellArrayCopy,
          gridColumnsAmount,
          gridLength
        );
      });
    }
  } else {
    if (cellArrayCopy[currentIndex].flagged !== true) {
      cellArrayCopy[currentIndex].advancedChecked = true;
    }
    // Not against the wall
    const neighbouringCellIndexes = neighbouringCells.noWall;

    bombCounter = 0;

    neighbouringCellIndexes.forEach((curr) => {
      cellArrayCopy[curr].value === "bomb" && bombCounter++;
      cellArrayCopy[curr].checked = true;
    });

    if (bombCounter > 0) {
      cellArrayCopy[currentIndex].value = bombCounter;
    } else {
      const neighbouringBlankCells = getNeighbouringBlankCells(
        neighbouringCellIndexes,
        cellArrayCopy,
        initialIndex
      );

      neighbouringBlankCells.forEach((curr) => {
        return mineCheck(
          curr,
          initialIndex,
          cellArrayCopy,
          gridColumnsAmount,
          gridLength
        );
      });
    }
  }

  return cellArrayCopy;
};
