import React from "react";

const tasks = [
  {
    title: "New employee added",
    subtitle: "Sarah Jenkins • Product Design",
    time: "14 minutes ago",
  },
  {
    title: "Payroll processed",
    subtitle: "Batch #4829 • Q3 Bonuses",
    time: "2 hours ago",
  },
  {
    title: "Policy Exception",
    subtitle: "Admin override • Overtime request",
    time: "5 hours ago",
  },
  {
    title: "Security Audit Completed",
    subtitle: "Periodic system scan • Zero threats",
    time: "Yesterday",
  },
];

export default function RightPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
      <div className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Operational Efficiency</h2>
          <div className="mt-6 flex h-72 items-end gap-3 rounded-2xl bg-slate-50 p-6">
            {[52, 70, 45, 35, 48, 30, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-xl bg-blue-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Critical Deliverables</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Timeline</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="px-4 py-4 font-medium">Lexington Rebrand</td>
                  <td className="px-4 py-4">A. Pierce</td>
                  <td className="px-4 py-4">On Track</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      ON TRACK
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold">$42,500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="px-4 py-4 font-medium">Omni Integration</td>
                  <td className="px-4 py-4">M. Lee</td>
                  <td className="px-4 py-4">Review</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      REVIEW
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold">$182,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-slate-100 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Audit Log</h3>
            <button className="text-sm font-semibold text-blue-600">VIEW ALL</button>
          </div>

          <div className="mt-5 space-y-4">
            {tasks.map((item) => (
              <div key={item.title} className="border-l border-slate-200 pl-4">
                <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                <div className="text-xs text-slate-500">{item.subtitle}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
          <h3 className="text-xl font-semibold">Need a Report?</h3>
          <p className="mt-2 text-sm text-white/70">
            Generate localized labor law compliance reports instantly.
          </p>
          <button className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">
            BUILD REPORT
          </button>
        </div>
      </div>
    </div>
  );
}