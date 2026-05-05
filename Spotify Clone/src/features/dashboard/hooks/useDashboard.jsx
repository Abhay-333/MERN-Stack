import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/store/store";
import { useRef } from "react";
import { axiosInstance } from "../../../app/config/axiosInstance";

export const useDashboard = () => {
  const dispatch = useDispatch();

  const { currentPlayingSong, isPlaying } = useSelector(
    (store) => store.player,
  );

  const products = axiosInstance
    .get("/productss")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  const handlePlayAndPause = (song, isActive) => {
    if (isActive) {
      if (isPlaying) {
        dispatch(pause());
      } else {
        dispatch(play());
      }
    } else {
      dispatch(playNewSong(song));
    }
  };
  return {
    dispatch,
    currentPlayingSong,
    isPlaying,
    handlePlayAndPause,
  };
};
