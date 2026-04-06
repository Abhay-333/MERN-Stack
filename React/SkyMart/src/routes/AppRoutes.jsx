import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [{ path: "", element: <Login /> }],
        },
        { path: "/auth/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
