// Register.jsx
import React, { useState } from "react";
import { NavLink, useNavigation } from "react-router";
import { axiosInstance } from "../utils/axiosInstance";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });
  const navigate = useNavigation();
  const [apiError, setApiError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setApiError("");
    // setFieldErrors((prev) => ({ ...prev, [name]: "" }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setApiError("");
      setFieldErrors({});
      const res = await axiosInstance.post("/auth/register", formData);
      navigate("/");
      console.log(res);
    } catch (error) {
      const responseData = error?.response?.data;
      setApiError(responseData?.message || "Something went wrong");
      setFieldErrors(responseData?.errors || {});
      console.log(responseData || error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-2">Register and start exploring</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
            {fieldErrors.username && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.username}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Mobile
            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
            {fieldErrors.mobile && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
            {fieldErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.password}
              </p>
            )}
          </div>

          {apiError && <p className="text-red-600 text-sm">{apiError}</p>}

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold">
            Register
          </button>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <NavLink
              to={"/"}
              className="text-black font-semibold cursor-pointer"
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
