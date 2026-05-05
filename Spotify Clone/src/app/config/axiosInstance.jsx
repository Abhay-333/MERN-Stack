import axios from "axios";
import { dispatch } from "../store/store";
import { addError } from "../../shared/state/errorSlice";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    dispatch(addError(error.message));
    // return error;
  },
);
