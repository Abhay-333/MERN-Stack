import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-zinc-800 text-white ">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
