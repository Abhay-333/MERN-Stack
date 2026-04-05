import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
