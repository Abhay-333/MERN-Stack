import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    //actions
    addItem: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state) => {
      state.cartItems = [];
    },
  },
});

export let { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
