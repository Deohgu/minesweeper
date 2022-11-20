import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO: Keys shouldn't be this complex.
// TODO:   There should be a CellType, a BombCell type that extends the CellType, a EmptyCell(?) that also extends
export interface CellType {
  value?: "bomb" | number | "bombPressed";
  checked: boolean;
  advancedChecked: boolean;
  flagged: boolean | "wrong";
}

export type initialStateTypes = {
  gridColumnsAmount: number;
  gridLength: number;
  bombsAmount: number;
  flagsAvailable: number;
  cellArray: CellType[];
  gameStatus: "won" | "lost" | "waiting" | "running";
};

const initialState: initialStateTypes = {
  gridColumnsAmount: 10,
  gridLength: 100,
  bombsAmount: 20,
  get flagsAvailable() {
    return this.bombsAmount;
  },
  cellArray: [],
  gameStatus: "waiting",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    increment: (state) => {
      state.bombsAmount += 1;
    },
    decrement: (state) => {
      state.bombsAmount -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.bombsAmount += action.payload;
    },
    incFlagsAvailable: (state) => {
      state.flagsAvailable += 1;
    },
    decFlagsAvailable: (state) => {
      state.flagsAvailable -= 1;
    },
    resetFlagsAvailable: (state) => {
      state.flagsAvailable = state.bombsAmount;
    },
    setCellArray: (
      state,
      action: PayloadAction<initialStateTypes["cellArray"]>
    ) => {
      state.cellArray = action.payload;
    },
    setGameStatus: (
      state,
      action: PayloadAction<initialStateTypes["gameStatus"]>
    ) => {
      state.gameStatus = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incFlagsAvailable,
  decFlagsAvailable,
  resetFlagsAvailable,
  setCellArray,
  setGameStatus,
} = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;
