import React from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post(`/auth/logout`);
      console.log(res);
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Home
      <button onClick={handleLogout} >Logout</button>
    </div>
  );
};

export default Home;
