import React from "react";
import Input from "../../../shared/components/Input";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = ({ role, setRole, toggleAuth, setToggleAuth }) => {

    const {register, handleSubmit, handleRegisterFormSubmit} = useAuth();
  
  return (
    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
      <form
        onSubmit={handleSubmit(handleRegisterFormSubmit)}
        className="w-full max-w-[420px]"
      >
        <h1 className="text-3xl sm:text-[44px] font-semibold tracking-[-0.04em] text-slate-900">
          Create Account
        </h1>
        <p className="mt-2 text-[16px] text-slate-500">
          Register to access the enterprise system.
        </p>

        <div className="mt-8 space-y-5">
          <Input
            register={register}
            rules={{ required: "Full Name is Required." }}
            label={"Full Name"}
            placeholder={"Abhay Dhaneshwar"}
            type={"text"}
          />

          <Input
            register={register}
            rules={{ required: "Email is Required." }}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
          />

          <Input
            register={register}
            rules={{ required: "Password is Required." }}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
          />
          {/* 
          <Input
            register={register}
            rules={{ required: "Confirm is Required." }}
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            type={"password"}
          /> */}
        </div>

        <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
          />
          <span>I agree to the terms and privacy policy</span>
        </label>

        <button
          type="submit"
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 px-5 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(51,65,85,0.28)] transition hover:opacity-95"
        >
          Create Account
          <span>→</span>
        </button>

        <div className="mt-10 text-center">
          <button
            onClick={() =>
              setToggleAuth((prev) => (prev === "register" ? "login" : prev))
            }
            className="text-sm font-semibold text-indigo-700 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
