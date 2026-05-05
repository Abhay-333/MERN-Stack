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

    removeItem: (state, action) => {
      state.cartItems = [];
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      state.cartItems = itemToRemove;
    },
    increQuantity: (state, action) => {
      let cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },

    decreQuantity: (state, action) => {
      let cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (cartItem) {
        if (cartItem.quantity >= 1) {
          cartItem.quantity -= 1;
        }
        if (cartItem.quantity === 0) {
          const removeItemFromCart = state.cartItems.filter(
            (item) => item.id !== cartItem.id,
          );
          console.log(removeItemFromCart);
          state.cartItems = removeItemFromCart;
        }
      }
    },
  },
});

export let { addItem, removeItem, increQuantity, decreQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
