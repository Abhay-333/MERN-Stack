import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")),
  );

  useEffect(() => {
    localStorage.setItem("registerUsers", JSON.stringify(registerUsers));
  }, [registerUsers]);

  // 🔥 Sync loggedInUser
  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <AuthContext.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
