import React from "react";
import Home from "../../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Shop from "../../pages/Shop";
import About from "../../pages/About";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../../pages/CartPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        { path: "", element: <Home></Home> },
        { path: "/shop", element: <Shop></Shop> },
        { path: "/about", element: <About></About> },
        { path: "/cart", element: <CartPage></CartPage> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
