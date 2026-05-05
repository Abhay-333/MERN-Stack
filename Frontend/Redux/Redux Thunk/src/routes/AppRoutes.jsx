import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../components/Home";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import Login from "../components/Login";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { useDispatch } from "react-redux";
import axios from "axios";
import { removeUser, setUser } from "../features/authSlice";

const AppRoutes = () => {
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (token) {
          const res = await axios.get(`https://dummyjson.com/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(res.data);
          dispatch(setUser(res.data));
        } else {
          dispatch(removeUser());
        }
      } catch (error) {
        console.log(error);
        dispatch(removeUser());
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes></PublicRoutes>,
      children: [{ path: "", element: <AuthLayout /> }],
    },

    {
      path: "/dashboard",
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
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
