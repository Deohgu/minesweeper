import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridColumns: 10,
  gridSize: 100,
  bombsAmount: 20,
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
  },
});

export const { increment, decrement, incrementByAmount } =
  settingsSlice.actions;

export default settingsSlice.reducer;
