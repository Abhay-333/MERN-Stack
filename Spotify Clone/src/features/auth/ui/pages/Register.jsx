import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md text-white">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Sign up to</h1>
          <h1 className="text-4xl font-bold">start listening</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm block mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
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
            Next
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-400">or</div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Sign up with phone number
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Sign up with Google
          </button>

          <button className="w-full border border-gray-600 py-3 rounded-full hover:border-white">
            Sign up with Apple
          </button>
        </div>

        {/* Login */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <NavLink
            to={"/"}
            className="text-white cursor-pointer hover:underline"
          >
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
