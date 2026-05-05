import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiDownload, FiBell } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import SearchBar from "../../../search/ui/SearchBar";

const Navbar = () => {
  return (
    <div className="w-full bg-black px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center gap-4">
        <div className="text-white text-2xl font-bold">Spotify</div>

        {/* Home Icon */}
        <div className="bg-neutral-800 p-3 rounded-full hover:bg-neutral-700 cursor-pointer">
          <FaHome className="text-white text-lg" />
        </div>

        {/* Search Bar */}
        <SearchBar
          type={"text"}
          placeholder={"What do you want to play?"}
          className={
            "bg-transparent outline-none text-white w-full placeholder-gray-400"
          }
        ></SearchBar>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-white">
        {/* Explore Premium */}
        <button className="bg-white text-black px-4 py-1 rounded-full font-medium hover:scale-105 transition">
          Explore Premium
        </button>

        {/* Install App */}
        <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
          <FiDownload />
          <span>Install App</span>
        </div>

        {/* Icons */}
        <FiBell className="text-xl cursor-pointer hover:text-gray-300" />
        <HiUsers className="text-xl cursor-pointer hover:text-gray-300" />

        {/* Profile */}
        <div className="w-8 h-8 bg-pink-500 flex items-center justify-center rounded-full font-semibold">
          3
        </div>
      </div>
    </div>
  );
};

export default Navbar;
