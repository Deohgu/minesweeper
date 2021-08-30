import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridColumns: 10,
  gridSize: 100,
  bombsAmount: 20,
  get flagsAvailable() {
    return this.bombsAmount;
  },
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
    incrementByAmount: (state, action) => {
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
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incFlagsAvailable,
  decFlagsAvailable,
  resetFlagsAvailable,
} = settingsSlice.actions;

export default settingsSlice.reducer;
