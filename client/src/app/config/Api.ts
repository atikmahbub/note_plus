import axios from "axios";
const Mode = process.env.NODE_ENV;

export const API =
  Mode === "development"
    ? axios.create({
        baseURL: "http://127.0.0.1:8000/api/v1/",
      })
    : axios.create({
        baseURL: "http://127.0.0.1:8000/api/v1/",
      });
