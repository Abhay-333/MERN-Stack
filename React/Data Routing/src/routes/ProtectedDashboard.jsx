import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedDashboard = () => {
  const { loggedInUser} = useContext(AuthContext);
  
  if (!loggedInUser) {
    return <Navigate to={"/"}></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default ProtectedDashboard;
