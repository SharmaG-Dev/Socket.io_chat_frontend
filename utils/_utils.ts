import axios from "axios";
import { config } from "./config";

const token = window.localStorage.getItem("token");

export const instance = axios.create({
  baseURL: config.SERVERURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
