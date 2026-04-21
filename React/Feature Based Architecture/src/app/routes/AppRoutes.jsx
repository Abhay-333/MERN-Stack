import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout></AuthLayout>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
