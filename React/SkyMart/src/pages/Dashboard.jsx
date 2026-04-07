import React from "react";
import { ArrowRight, Package, TrendingUp, Star, Tag, Home } from "lucide-react";
import Navbar from "../components/Navbar"; // Navbar import kiya
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import CartDrawer from "../components/CartDrawer";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <Navbar />
      <Outlet />
      <CartDrawer />
      <Footer />
    </div>
  );
}
