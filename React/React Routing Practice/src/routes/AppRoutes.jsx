import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router";
import Home from "../components/screens/Home";
import Cart from "../components/screens/Cart";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/" element={<Home />}></Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
