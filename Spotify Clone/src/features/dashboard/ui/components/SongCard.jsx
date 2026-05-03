import React, { memo, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { pause, play, playNewSong } from "../../../player/state/playerSlice";
import { useDashboard } from "../../hooks/useDashboard";
import { usePlayer } from "../../../player/hooks/usePlayer";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../../app/store/store";

const SongCard = ({ song, isActive, isPlaying, onPlayPause }) => {
  return (
    <div className="bg-neutral-900 text-white p-4 rounded-xl w-64 hover:bg-neutral-800 transition">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-40 object-cover rounded-lg"
        />

        {/* Play Button */}
        <button
          onClick={()=>onPlayPause(song,isActive)}
          className="absolute cursor-pointer bottom-2 right-2 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          {isActive && isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h2 className="font-semibold text-lg truncate">{song.title}</h2>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
        <p className="text-xs text-gray-500 truncate">{song.album}</p>
        <p className="text-xs text-gray-500">{song.year}</p>
      </div>
    </div>
  );
};

export default memo(SongCard);
