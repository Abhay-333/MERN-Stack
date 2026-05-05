import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedAuth = () => {
  const {loggedInUser} = useContext(AuthContext);
  if(loggedInUser){
    return <Navigate to={"/dashboard"}></Navigate>
  }
  return <Outlet></Outlet>;
};

export default ProtectedAuth;
