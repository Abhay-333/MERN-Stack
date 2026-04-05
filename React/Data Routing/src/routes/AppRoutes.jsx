import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import About from "../pages/About";
import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        { path: "", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            { path: "", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
