import React from "react";
import { Outlet } from "react-router";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
