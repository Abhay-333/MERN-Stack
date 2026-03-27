import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);

  return (
    <nav className={`"${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"} w-full flex items-center justify-between px-10 py-2"`}>
      <h1 className="text-2xl font-bold">Logo</h1>

      <div className="links flex items-center gap-10">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>

      <button
        onClick={() => setTheme((prev) => !prev)}
        className="cursor-pointer px-4 py-2 font-bold bg-white text-black rounded"
      >
        Switch Theme
      </button>
    </nav>
  );
};

export default Navbar;
