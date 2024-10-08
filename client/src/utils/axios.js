import axios from "axios";
import { API_URL, BASE_URL } from "../constants";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export default instance;
