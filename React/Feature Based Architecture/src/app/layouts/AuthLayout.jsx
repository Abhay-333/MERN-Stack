import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftHero from "../../features/auth/components/LeftHero";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";

const AuthLayout = () => {
  const [role, setRole] = useState("employee");
  const [toggleAuth, setToggleAuth] = useState("login");
  return (
    <div>
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4">
        <div className="w-full max-w-[1180px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] grid grid-cols-1 lg:grid-cols-2">
          <LeftHero />
          {toggleAuth === "login" ? (
            <LoginPage
              toggleAuth={toggleAuth}
              setToggleAuth={setToggleAuth}
              role={role}
              setRole={setRole}
            />
          ) : (
            <RegisterPage
              toggleAuth={toggleAuth}
              setToggleAuth={setToggleAuth}
              role={role}
              setRole={setRole}
            />
          )}
        </div>

        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] text-slate-400 uppercase">
          Editorial ERP v4.0.2 • Encrypted Command Node
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
