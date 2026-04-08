import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      <Navbar />
      <main className="ml-64 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
