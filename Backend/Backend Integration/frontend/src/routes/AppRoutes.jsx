import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../components/Login";
import Home from "../pages/Home";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const AppRoutes = ({ children }) => {
  useEffect(() => {
    (async () => {
      const res = axiosInstance.get("/auth/me");
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes></PublicRoutes>,
      children: [
        {
          path: "",
          element: <AuthLayout></AuthLayout>,
          children: [
            { path: "", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoutes></ProtectedRoutes>,
      children: [
        {
          path: "",
          element: <MainLayout></MainLayout>,
          children: [{ path: "", element: <Home></Home> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRoutes;
