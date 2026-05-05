import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export let store = configureStore({
  reducer: { count: counterReducer },
});
