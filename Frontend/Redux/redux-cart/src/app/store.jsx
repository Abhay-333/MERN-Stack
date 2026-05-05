import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});
