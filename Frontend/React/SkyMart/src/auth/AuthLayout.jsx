import React from "react";
import { Zap, Star } from "lucide-react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="max-h-screen bg-[#0a0a0a] w-full text-white flex flex-col lg:flex-row font-sans">
      {/* Left Section: Branding & Stats */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-neutral-800">
        <div className="max-w-xl mx-auto lg:mx-0 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-16 lg:mb-24">
            <div className="w-8 h-8 bg-[#ccff00] rounded-full flex items-center justify-center text-black">
              <Zap size={20} fill="black" />
            </div>
            <span className="text-xl font-bold tracking-wide">SkyMart</span>
          </div>

          {/* Hero Content */}
          <p className="text-[#ccff00] font-semibold text-sm tracking-wider uppercase mb-4">
            Welcome Back
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Shop the future.
            <br />
            <span className="text-[#ccff00]">Today.</span>
          </h1>
          <p className="text-neutral-400 text-lg mb-12 max-w-md">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center bg-neutral-900/30">
              <span className="text-[#ccff00] font-bold text-xl lg:text-2xl mb-1">
                20K+
              </span>
              <span className="text-neutral-500 text-xs">Products</span>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center bg-neutral-900/30">
              <span className="text-[#ccff00] font-bold text-xl lg:text-2xl mb-1">
                50K+
              </span>
              <span className="text-neutral-500 text-xs">Users</span>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center bg-neutral-900/30">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[#ccff00] font-bold text-xl lg:text-2xl">
                  4.9
                </span>
                <Star size={16} className="text-[#ccff00]" fill="#ccff00" />
              </div>
              <span className="text-neutral-500 text-xs">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Form Container */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-[#0d0d0d]">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
