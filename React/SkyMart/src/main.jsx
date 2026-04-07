import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <AppRoutes />
        <ToastContainer theme="dark" />
      </CartProvider>
    </ProductProvider>
  </AuthProvider>,
);
