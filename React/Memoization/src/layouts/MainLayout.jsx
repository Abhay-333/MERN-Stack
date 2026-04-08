import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar></Navbar>

      <div className="h-full ml-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
