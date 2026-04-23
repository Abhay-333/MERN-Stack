import React, { useState } from "react";
import LeftHero from "../components/LeftHero";
import RoleToggle from "../components/RoleToggle";
import RegisterPage from "./RegisterPage";
import Input from "../../../shared/components/Input";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage({
  toggleAuth,
  setToggleAuth,
  role,
  setRole,
}) {
  const {register, handleSubmit, handleLoginFormSubmit} = useAuth();

  return toggleAuth === "login" ? (
    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
      <form
        onSubmit={handleSubmit(handleLoginFormSubmit)}
        className="w-full max-w-[420px]"
      >
        <h1 className="text-3xl sm:text-[44px] font-semibold tracking-[-0.04em] text-slate-900">
          Access Portal
        </h1>
        <p className="mt-2 text-[16px] text-slate-500">
          Enter your credentials to manage the ledger.
        </p>

        <RoleToggle role={role} setRole={setRole} />

        <div className="mt-7">
          <Input
            register={register}
            rules={{ required: "Email is required" }}
            label={"Email"}
            name={"email"}
            placeholder={"Enter your Email"}
            type={"email"}
          ></Input>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-end">
            <a href="#" className="text-sm font-semibold text-indigo-700">
              Forgot password?
            </a>
          </div>

          <Input
            register={register}
            rules={{ required: "Password is required" }}
            label={"Password"}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
          ></Input>
        </div>

        <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
          />
          <span>Keep me logged in for 30 days</span>
        </label>

        <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 px-5 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(51,65,85,0.28)] transition hover:opacity-95">
          {role === "admin" ? "Sign In as Admin" : "Sign In to Dashboard"}
          <span>→</span>
        </button>

        <div className="mt-16 border-t border-slate-100 pt-10 text-center">
          <p className="text-slate-500">New to the Enterprise?</p>
          <button
            onClick={() =>
              setToggleAuth((prev) => (prev === "login" ? "register" : prev))
            }
            className="mt-4 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Request System Access
          </button>
        </div>
      </form>
    </div>
  ) : (
    <RegisterPage></RegisterPage>
  );
}
