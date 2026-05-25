import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) return <Navigate to={"/home"} />;
  return <Outlet />;
};

export default PublicRoutes;
