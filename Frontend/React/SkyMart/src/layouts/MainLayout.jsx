import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
