import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../../features/player/state/playerSlice";
import errorReducer from "../../shared/state/errorSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { player: playerReducer },
  error: { error: errorReducer },
});

export let dispatch = store.dispatch;
