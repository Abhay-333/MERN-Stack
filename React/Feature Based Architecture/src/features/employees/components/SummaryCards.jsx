import React from "react";

const stats = [
  { label: "Total Employees", value: "1,248", change: "+4%", color: "border-blue-500" },
  { label: "Active Projects", value: "42", change: "Steady", color: "border-slate-700" },
  { label: "Leave Requests", value: "18", change: "Urgent", color: "border-red-500" },
  { label: "Monthly Payroll", value: "$2.4M", change: "On Budget", color: "border-emerald-500" },
];

export default function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border-l-4 ${item.color} bg-white p-5 shadow-sm`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">
              {item.change}
            </span>
          </div>
          <div className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</div>
          <div className="mt-1 text-sm font-medium tracking-wide text-slate-500 uppercase">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}