import React from "react";
import SummaryCards from "../components/SummaryCards";
import RightPanel from "../components/RightPanel";
import BreadCrumbs from "../../../shared/components/BreadCrumbs";

const Employees = () => {
  return (
    <div>
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div>
            <h1 className="text-4xl font-semibold text-slate-900">
              Executive Summary
            </h1>
            <p className="mt-2 text-slate-500">
              Reporting period: October 1st — October 31st
            </p>
          </div>

          <SummaryCards />
          <RightPanel />
        </div>
      </main>
    </div>
  );
};

export default Employees;
