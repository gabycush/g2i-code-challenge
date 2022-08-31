import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import questions from "./questions";
import results from "./results";

const reducer = combineReducers({
  questions,
  results,
});

export const store = configureStore({
  reducer,
});

export default store;
