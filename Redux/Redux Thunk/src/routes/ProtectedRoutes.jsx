import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);
  if (isLoading) return <h1>Loading...</h1>;

  if (!isAuthenticated) {
    return <Navigate to={"/"}></Navigate>;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
