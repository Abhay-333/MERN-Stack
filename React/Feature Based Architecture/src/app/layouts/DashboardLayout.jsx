import React from "react";
import { Outlet } from "react-router";
import SideNav from "../../features/dashboard/components/SideNav";
import BreadCrumbs from "../../shared/components/BreadCrumbs";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideNav></SideNav>
      <div className="w-full ml-[260px]">
            <BreadCrumbs></BreadCrumbs>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
