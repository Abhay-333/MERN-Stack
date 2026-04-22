import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
