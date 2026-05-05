import axios from "axios";

export const axiosBaseUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
});
