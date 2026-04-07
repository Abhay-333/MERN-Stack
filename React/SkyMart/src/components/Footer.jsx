import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-neutral-800 mt-12">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* Brand Name */}
        <h2 className="text-[#ccff00] text-lg font-medium tracking-wide">
          SkyMart
        </h2>
        
        {/* Copyright & Tech Stack */}
        <p className="text-neutral-500 text-sm">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
}