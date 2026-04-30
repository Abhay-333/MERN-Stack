import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 text-white px-6 py-3 flex items-center justify-between">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">MyApp</h1>
      </div>

      {/* MIDDLE SECTION */}
      <div className="hidden md:flex items-center gap-6">
        <NavLink to={"/"} href="#" className="hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to={"/About"} href="#" className="hover:text-gray-300">
          About
        </NavLink>
        <NavLink to={"/shop"} href="#" className="hover:text-gray-300">
          Shop
        </NavLink>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 bg-blue-700 rounded-lg hover:bg-blue-600">
          Login
        </button>
        <button className="px-4 py-1 bg-green-700 rounded-lg hover:bg-green-600">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
