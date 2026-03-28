import { Children, createContext } from "react";

export let MyContext = createContext("Hello");

export let MyContextProvider = ({ children }) => {
  return <MyContext.Provider value={MyContext}>{children}</MyContext.Provider>;
};
