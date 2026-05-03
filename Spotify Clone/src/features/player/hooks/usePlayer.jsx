import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/store/store";
import { useEffect, useRef } from "react";
import { pause, play } from "../state/playerSlice";

export const usePlayer = () => {
  let { currentPlayingSong, isPlaying } = useSelector((store) => store.player);
  const audioRef = useRef(new Audio());

  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentPlayingSong) return;
    audioRef.current.src = currentPlayingSong.url;
    isPlaying = true
  }, [currentPlayingSong]);

  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };
  return {
    togglePlay,
  };
};
