import { RouterProvider, createBrowserRouter } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProtectedDashboard from "./ProtectedDashboard";
import ProtectedAuth from "./ProtectedAuth";
import { ProductApi } from "../api/ProductApi";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedAuth></ProtectedAuth>,
      children: [
        { path: "", element: <Login></Login> },
        { path: "register", element: <Register></Register> },
      ],
    },

    {
      path: "/dashboard",
      element: <ProtectedDashboard></ProtectedDashboard>,
      children: [
        {
          path: "",
          element: <MainLayout></MainLayout>,
          children: [
            {
              path: "",
              loader: async () => {
                return ProductApi();
              },
              hydrateFallbackElement: <h1>Loading Products...</h1>,
              element: <Home></Home>,
            },
            { path: "about", element: <About></About> },
            
            {
              path: "product/details/:id",
              element: <ProductDetails></ProductDetails>,
            },

          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
