import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";

// Slice

const slice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateQuestions: (state, action) => {
      state.questions = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions

const { updateQuestions, startLoading, hasError } = slice.actions;

export const fetchQuestions = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    await api
      .get()
      .then((response) => dispatch(updateQuestions(response.data.results)));
  } catch (e) {
    dispatch(hasError(e.message));
  }
};
