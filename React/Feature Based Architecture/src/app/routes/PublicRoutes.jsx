import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../features/auth/hooks/useAuth";

const PublicRoutes = () => {
  const { loggedInUser } = useAuth();
  if (loggedInUser) {
    return <Navigate to={"/dashboard"} />;
  }
  return <Outlet />;
};
export default PublicRoutes;
