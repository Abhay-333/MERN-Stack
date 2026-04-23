import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    let regData = storage.get("registerUsers");
    setRegisterUsers(regData);

    let logData = storage.get("loggedInUser");
    setLoggedInUser(logData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ registerUsers, setRegisterUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
