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
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/authSlice";

const AppRoutes = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.post("/auth/me");
        console.log(res.data.data)
        dispatch(addUser(res.data.data))
      // console.log(res);
      } catch (error) {
        console.log(error)
      }
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
