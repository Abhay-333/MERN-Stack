import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentPlayingSong: null,
    isPlaying: false,
  },
  reducers: {
    playNewSong: (state, action) => {
      state.currentPlayingSong = action.payload;
      state.isPlaying = true;
    },

    play: (state, action) => {
      state.isPlaying = true;
      // state.currentPlayingSong = action.payload
    },
    pause: (state, action) => {
      // state.currentPlayingSong = action.payload
      state.isPlaying = false;
    },
  },
});

export let { playNewSong, play, pause } = playerSlice.actions;
export default playerSlice.reducer;
