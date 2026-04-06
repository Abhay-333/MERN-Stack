import React, { useState, useEffect } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
  const navigate = useNavigate();
  const [passwordState, setPasswordState] = useState("");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // 1. App crash fix: added || ""
  const currentPass = watch("password") || "";

  // Password strength logic
  useEffect(() => {
    if (currentPass.length >= 10) {
        setPasswordState("Strong");
    } else if (currentPass.length >= 6) {
        setPasswordState("Medium");
    } else if (currentPass.length > 0) {
        setPasswordState("Weak");
    } else {
      setPasswordState("");
    }
  }, [currentPass]);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-[#121212] border min-w-[30rem] border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
      <p className="text-neutral-400 text-sm mb-8">
        Join us and start shopping today
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User size={18} className="text-neutral-500" />
          </div>
          <input
            {...register("fullName", { required: "FullName is required." })}
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail size={18} className="text-neutral-500" />
          </div>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            placeholder="Email address"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock size={18} className="text-neutral-500" />
          </div>
          <input
            {...register("password", { required: "Password is required." })}
            type="password"
            placeholder="Create Password"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />
        </div>

        {/* Password Strength Indicator */}
        {currentPass.length > 0 && (
          <div className="flex items-center gap-2 mt-2 mb-4 px-1">
            {/* 3. Fix: Added flex and w-full to parent div, changed class to className */}
            <div className="flex w-full gap-2">
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${passwordState === "Weak" || passwordState === "Medium" || passwordState === "Strong" ? "bg-red-500" : "bg-neutral-800"}`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${passwordState === "Medium" || passwordState === "Strong" ? "bg-yellow-500" : "bg-neutral-800"}`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${passwordState === "Strong" ? "bg-[#C8F400]" : "bg-neutral-800"}`}
              ></div>
            </div>
            {/* 5. Dynamic text based on state */}
            <div className="flex justify-end text-xs mt-1">
              {passwordState === "Weak" && (
                <span className="text-red-500">Weak</span>
              )}
              {passwordState === "Medium" && (
                <span className="text-yellow-500">Medium</span>
              )}
              {passwordState === "Strong" && (
                <span className="text-[#C8F400]">Strong</span>
              )}
            </div>
          </div>
        )}

        {/* Confirm Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock size={18} className="text-neutral-500" />
          </div>
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (val) =>
                watch("password") === val || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1 px-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button (Changed to type="submit") */}
        <button
          type="submit"
          className="w-full bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold rounded-xl py-3.5 mt-2 flex items-center justify-center gap-2 transition-colors"
        >
          Create Account <ArrowRight size={18} />
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-neutral-500 text-sm mt-8">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/auth")}
          className="cursor-pointer text-[#ccff00] font-medium hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
