import React, { useState } from "react";
import { Outlet } from "react-router";
import Login from "../../components/Login";
import Register from "../../components/Register";
const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <Login toggle={toggle} setToggle={setToggle} />
      ) : (
        <Register toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
};

export default AuthLayout;
