import React from "react";
import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleFormSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-2">Sign in</h2>
      <p className="text-neutral-400 text-sm mb-8">
        Enter your credentials to continue
      </p>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail size={18} className="text-neutral-500" />
          </div>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email address"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />

          {errors && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock size={18} className="text-neutral-500" />
          </div>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="w-full bg-[#1a1a1a] border border-neutral-800 text-white text-sm rounded-xl py-3.5 pl-11 pr-11 focus:outline-none focus:border-[#ccff00] transition-colors placeholder:text-neutral-600"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <Eye
              size={18}
              className="text-neutral-500 hover:text-white transition-colors"
            />
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full ${!isValid ? "cursor-not-allowed" : ""} bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold rounded-xl py-3.5 mt-2 flex items-center justify-center gap-2 transition-colors`}
        >
          Sign in <ArrowRight size={18} />
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-neutral-500 text-sm mt-8">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/auth/register")}
          className="cursor-pointer text-[#ccff00] font-medium hover:underline"
        >
          Create one
        </button>
      </p>
    </div>
  );
}
