import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("reg_users:")) || [],
  );

  // console.log(registerUsers)
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("logged_user:")) || null,
  );

  const login = (data) => {
    const existingUser = registerUsers.find(
      (user) =>
        user.email === data.email && user.password === data.password,
    );

    if (!existingUser) {
      toast.error("Invalid Email or Password");
      return false;
    } else {
      setLoggedUser(existingUser);
      localStorage.setItem("logged_user:", JSON.stringify(existingUser));
      toast.success("User Logged In Successfully");
      return true;
    }
  };

  const logout = () => {
    setLoggedUser(null);
    localStorage.removeItem("logged_user:");
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        loggedUser,
        setLoggedUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
