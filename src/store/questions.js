import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";

// Slice

const slice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    isLoading: false,
    error: null,
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
    const response = await api.get();
    if (response.data.response_code === 0) {
      dispatch(updateQuestions(response.data.results));
    } else {
      switch (response.data.response_code) {
        case 1:
          // The API doesn’t have enough questions for your query.
          throw new Error(
            "There are not enough questions for you right now, please try again later."
          );
        case 2:
          // Arguments passed in aren’t valid.
          throw new Error(
            `Error retrieving questions, please contact your system administrator to fix. response code ${response.data.response_code}`
          );
        case 3:
          // Token Not Found Session Token does not exist
          throw new Error(
            `Error retrieving questions, please reload the page.`
          );
        case 4:
          // Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
          throw new Error(
            `Error retrieving questions, please reload the application`
          );
        default:
          // Unknown error
          throw new Error(
            "Error retrieving questions, please reload the application and try again."
          );
      }
    }
  } catch (e) {
    dispatch(hasError(e.message));
  }
};
