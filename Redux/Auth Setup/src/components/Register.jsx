import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ toggle, setToggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className="text-green-500 cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
