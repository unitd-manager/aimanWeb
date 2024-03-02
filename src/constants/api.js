import axios from "axios";

const api = axios.create({
  baseURL: "https://192.64.114.83:2004",
});

export default api;
