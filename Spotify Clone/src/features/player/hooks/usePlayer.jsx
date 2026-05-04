import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { pause, play } from "../state/playerSlice";

export const usePlayer = () => {
  const { currentPlayingSong, isPlaying } = useSelector((store) => store.player);
  const audioRef = useRef(new Audio());

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentPlayingSong) return;
    audioRef.current.src = currentPlayingSong.url;
  }, [currentPlayingSong]);

  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentPlayingSong, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };
  return {
    currentPlayingSong,
    isPlaying,
    togglePlay,
  };
};
