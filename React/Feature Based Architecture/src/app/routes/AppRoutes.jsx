import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../../features/dashboard/pages/Dashboard";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Employees from "../../features/employees/pages/Employees";
import Payroll from "../../features/payroll/pages/Payroll";
import Settings from "../../features/settings/pages/Settings";
import Registration from "../../features/registration/pages/Registration";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes></PublicRoutes>,
      children: [
        {
          path: "",
          element: <AuthLayout></AuthLayout>,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },

    {
      path: "/dashboard",
      element: <ProtectedRoutes></ProtectedRoutes>,
      children: [
        {
          path: "",
          element: <DashboardLayout></DashboardLayout>,
          children: [
            { path: "", element: <Dashboard></Dashboard> },
            { path: "employees", element: <Employees></Employees> },
            { path: "registration", element: <Registration></Registration> },
            { path: "payroll", element: <Payroll></Payroll> },
            { path: "settings", element: <Settings></Settings> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
