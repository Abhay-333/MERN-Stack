import React, { useContext } from "react";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { loggedUser, logout } = useContext(AuthContext);
  const { cartItemsCount, toggleCart } = useContext(CartContext);

  const userName = loggedUser?.fullName || loggedUser?.email || "Guest";
  const userInitial = userName.charAt(0).toUpperCase();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-white"
      : "text-neutral-400 hover:text-white transition-colors";

  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-[#0a0a0a] text-white border-b border-neutral-800">
      {/* Left: Logo */}
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 bg-[#ccff00] rounded-full flex items-center justify-center text-black">
          <Zap size={18} fill="black" />
        </div>
        <span className="text-xl font-bold tracking-wide">SkyMart</span>
      </button>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <NavLink to={"/dashboard"} className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to={"/dashboard/shop"} className={navLinkClass}>
          Shop
        </NavLink>

        <NavLink to={"/dashboard/about"} className={navLinkClass}>
          About
        </NavLink>
      </div>

      {/* Right: User Controls */}
      <div className="flex items-center gap-4">
        {/* Profile Pill */}
        <div className="flex items-center gap-2 bg-[#1a1a1a] border border-neutral-800 rounded-full pl-1 pr-4 py-1 cursor-pointer hover:bg-neutral-800 transition-colors">
          <div className="w-7 h-7 bg-[#ccff00] rounded-full flex items-center justify-center text-black font-bold text-xs">
            {userInitial}
          </div>
          <span className="text-sm text-neutral-300">{userName}</span>
        </div>

        {/* Action Buttons */}
        <button
          onClick={toggleCart}
          className="relative w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <ShoppingCart size={18} />
          {cartItemsCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-bold text-black">
              {cartItemsCount}
            </span>
          )}
        </button>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-neutral-800 transition-colors"
        >
          <LogOut size={18} />
        </button>
      </div>
    </nav>
  );
}
