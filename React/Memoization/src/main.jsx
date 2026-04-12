import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCilent = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryCilent}>
    <AppRoutes />
  </QueryClientProvider>,
);
