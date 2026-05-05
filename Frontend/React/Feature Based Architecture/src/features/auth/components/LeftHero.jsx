import React from "react";

export default function LeftHero() {
  return (
    <div className="relative min-h-[720px] bg-slate-800">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
        alt="Office"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/45" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
            <span className="text-xl">◫</span>
          </div>
          <div>
            <div className="text-[22px] font-semibold leading-none">Editorial</div>
            <div className="mt-1 text-[11px] tracking-[0.28em] text-white/65 uppercase">
              Enterprise ERP
            </div>
          </div>
        </div>

        <div className="max-w-[420px] pb-4">
          <h2 className="text-3xl sm:text-[42px] font-semibold leading-tight tracking-[-0.03em]">
            Precision data management for the modern architectural age.
          </h2>
          <div className="mt-8 flex items-center gap-4 text-xs tracking-[0.35em] text-white/60 uppercase">
            <span className="h-px w-10 bg-white/35" />
            <span>Operations Command</span>
          </div>
        </div>
      </div>
    </div>
  );
}