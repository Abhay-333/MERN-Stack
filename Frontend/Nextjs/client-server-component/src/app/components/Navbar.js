import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        <ul className="flex gap-8 text-lg">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Home
          </Link>

          <Link
            href={"/about"}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            About
          </Link>

          <Link
            href={"/contact"}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Contact
          </Link>

          <Link
            href={"/products"}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Products
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
