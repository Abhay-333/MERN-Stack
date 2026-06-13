import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice.jsx";

export default configureStore({
  reducer: { user: userReducer },
});
