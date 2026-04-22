import React from "react";

export default function RoleToggle({ role, setRole }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3">
      <button
        onClick={() => setRole("employee")}
        className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-sm font-semibold shadow-sm transition ${
          role === "employee"
            ? "bg-[#dfe6ff] text-slate-900"
            : "bg-[#f3f4f6] text-slate-600 hover:bg-[#eceef3]"
        }`}
      >
        <span className="text-base">🧑‍💼</span>
        Employee
      </button>

      <button
        onClick={() => setRole("admin")}
        className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-sm font-semibold shadow-sm transition ${
          role === "admin"
            ? "bg-[#dfe6ff] text-slate-900"
            : "bg-[#f3f4f6] text-slate-600 hover:bg-[#eceef3]"
        }`}
      >
        <span className="text-base">🛡️</span>
        Admin
      </button>
    </div>
  );
}
