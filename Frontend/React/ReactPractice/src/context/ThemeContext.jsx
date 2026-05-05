import { createContext, useState } from "react";

let Theme = createContext();

let ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};

export { Theme, ThemeProvider };
