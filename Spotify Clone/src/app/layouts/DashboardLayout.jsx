import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/ui/components/Player";
const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>

      <div className="h-[80%] bg-[#121212] text-white">
        <Group className="bg-[#121212] h-full gap-2">
          <Panel maxSize={"20%"} minSize={"17%"} className="bg-[#121212]">
            Left Section
          </Panel>
          <Panel className="bg-[#1b1b1b] ">
            <Outlet></Outlet>
          </Panel>
          <Panel maxSize={"20%"} minSize={"16%"} className="bg-[#121212]">
            Right Section
          </Panel>
        </Group>
      </div>
      <Player></Player>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashboardLayout;
