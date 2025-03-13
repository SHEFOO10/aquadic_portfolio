import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://sys.aquadic.com/api/",
});

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
