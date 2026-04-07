import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0a0a0a] px-6 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-800 border-t-[#ccff00]" />
        <p className="text-sm tracking-wide text-neutral-400">
          Loading SkyMart...
        </p>
      </div>
    </div>
  );
};

export default Loading;
