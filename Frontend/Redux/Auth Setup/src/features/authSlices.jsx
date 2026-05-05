import { createSlice } from "@reduxjs/toolkit";

const authSclies = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading:true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false
    },

    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export let { addUser, removeUser } = authSclies.actions;
export default authSclies.reducer;
