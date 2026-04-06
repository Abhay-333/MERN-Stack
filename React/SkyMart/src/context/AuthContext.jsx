import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("reg users:")) || [],
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("logged user:")) || [],
  );
  
  return (
    <AuthContext.Provider
      value={{ registerUsers, setRegisterUsers, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
