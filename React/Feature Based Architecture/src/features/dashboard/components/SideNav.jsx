import React from "react";
import { NavLink } from "react-router";

const navItems = [
  { label: "Dashboard", icon: "▣", active: true },
  { label: "Employees", icon: "◫", active: false },
  { label: "Payroll", icon: "⌂", active: false },
  { label: "Settings", icon: "⚙", active: false },
];

export default function SideNav() {
  return (
    <aside className="flex h-screen w-[260px] fixed flex-col bg-[#0f172a] text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
      {/* Top */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <span className="text-xl font-bold">▣</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-none">Editorial</h1>
            <p className="mt-1 text-[10px] tracking-[0.28em] text-white/45 uppercase">
              Enterprise
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-10 flex-1 px-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              to={item.label === `Dashboard` ? `` : `/dashboard/${item.label.toLowerCase()}`}
              end={item.label === "Dashboard"}
              key={item.label}
              className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? "bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  item.active
                    ? "bg-blue-600/20 text-blue-300"
                    : "bg-white/5 text-white/45"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom status */}
      <div className="px-4 pb-5">
        <div className="rounded-2xl bg-white/5 px-4 py-4">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/35 uppercase">
            System Status
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
