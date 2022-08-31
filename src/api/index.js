import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
  headers: {
    "Content-Type": "application/json",
  },
});
