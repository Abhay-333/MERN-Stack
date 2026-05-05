import React, { useCallback, useState } from "react";
import { allSongs } from "../../../../utils/songs";
import SongCard from "../../ui/components/SongCard";
import { isAction } from "@reduxjs/toolkit";
import { pause, play, playNewSong } from "../../../player/state/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../../app/store/store";
import { useDashboard } from "../../hooks/useDashboard";

const Home = () => {
  const { data, dispatch, currentPlayingSong, isPlaying, handlePlayAndPause } =
    useDashboard();
    console.log(data)
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {allSongs.map((song) => {
        const isActive = currentPlayingSong?.url === song.url;

        return (
          <SongCard
            song={song}
            isActive={isActive}
            isPlaying={isPlaying}
            key={song.url}
            onPlayPause={() => handlePlayAndPause(song, isActive)}
          />
        );
      })}
    </div>
  );
};

export default Home;
