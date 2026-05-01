import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);

  if(isLoading)return <h1>Loading...</h1>
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"}></Navigate>;
  }
  return <Outlet />;
};

export default PublicRoutes;
