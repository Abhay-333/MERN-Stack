import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        `https://dummyjson.com/auth/login`,
        credentials,
      );
      localStorage.setItem("accessToken", res.data.accessToken);
      console.log(res);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      console.error("Thunk Error:", errorMessage);
      return thunkAPI.rejectWithValue("login failed");
    }
  },
);
