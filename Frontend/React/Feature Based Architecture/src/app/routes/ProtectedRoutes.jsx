import React from "react";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const { loggedInUser } = useAuth();
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
