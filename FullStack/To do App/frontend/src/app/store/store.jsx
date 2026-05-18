import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../actions/listSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
