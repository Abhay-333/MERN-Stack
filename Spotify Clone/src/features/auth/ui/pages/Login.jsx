import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md text-white">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">Welcome back</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm block mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-black font-semibold py-3 rounded-full hover:bg-green-400 transition"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-5 text-gray-400">or</div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Continue with phone number
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Continue with Google
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Continue with Facebook
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Continue with Apple
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <NavLink
            to={"/register"}
            className="text-white cursor-pointer hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
