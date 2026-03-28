import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { MyContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  //   <MyContextProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  //   </MyContextProvider>,
);
