import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
} from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { usePlayer } from "../../hooks/usePlayer";

const Player = ({ onPlayPause }) => {
  const { currentPlayingSong, isPlaying } = usePlayer();
  return (
    <div className="w-full bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* LEFT - Song Info */}
      <div className="flex items-center gap-3 w-1/4">
        <img
          src={currentPlayingSong?.thumbnail}
          alt={currentPlayingSong?.title}
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold">{currentPlayingSong?.title}</h3>
          <p className="text-xs text-gray-400">{currentPlayingSong?.artist}</p>
        </div>
      </div>

      {/* CENTER - Controls */}
      <div className="flex flex-col items-center w-2/4">
        {/* Buttons */}
        <div className="flex items-center gap-5 mb-2">
          <FaRandom className="cursor-pointer text-gray-400 hover:text-white" />
          <FaStepBackward className="cursor-pointer" />

          <button
            onClick={onPlayPause}
            className="bg-white text-black p-3 rounded-full"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <FaStepForward className="cursor-pointer" />
          <FaRedo className="cursor-pointer text-gray-400 hover:text-white" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:33</span>
        </div>
      </div>

      {/* RIGHT - Volume */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <FiVolume2 />
        <div className="w-24 h-1 bg-gray-600 rounded-full">
          <div className="w-1/2 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
