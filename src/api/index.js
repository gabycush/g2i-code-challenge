import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/create-checkout-session",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, UPDATE, PUT, OPTIONS",
    // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});
