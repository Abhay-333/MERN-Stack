import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{ registerUsers, setRegisterUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
