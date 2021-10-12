import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cellType = {
  value?: "bomb" | number | "bombPressed";
  checked: boolean;
  advancedChecked: boolean;
  flagged: boolean | "wrong";
};

export type initialStateTypes = {
  gridColumns: number;
  gridSize: number;
  bombsAmount: number;
  flagsAvailable: number;
  cellArray: cellType[];
  gameStatus: "won" | "lost" | "waiting" | "running";
};

const initialState: initialStateTypes = {
  gridColumns: 10,
  gridSize: 100,
  bombsAmount: 20,
  get flagsAvailable() {
    return this.bombsAmount;
  },
  cellArray: [],
  gameStatus: "waiting", // Won, lost, waiting, running.
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
