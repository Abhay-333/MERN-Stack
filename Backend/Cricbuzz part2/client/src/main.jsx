import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-redux";
import queryClient from "./lib/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
