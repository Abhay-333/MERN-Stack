import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem("register users: ")) || []);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("logged user: ")));
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
