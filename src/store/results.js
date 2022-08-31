import { createSlice } from "@reduxjs/toolkit";

// Slice

const slice = createSlice({
  name: "results",
  initialState: {
    results: [],
  },
  reducers: {
    update: (state, action) => {
      state.results = [...state.results, action.payload];
    },
    reset: (state) => {
      state.results = [];
    },
  },
});

export default slice.reducer;

// Actions

const { update, reset } = slice.actions;

export const addResult = (newResults) => (dispatch) => {
  try {
    dispatch(update(newResults));
  } catch (e) {
    return console.error(e.message);
  }
};

export const resetResults = () => (dispatch) => {
  try {
    dispatch(reset());
  } catch (e) {
    return console.error(e.message);
  }
};
