import React from "react";
import { Children } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
