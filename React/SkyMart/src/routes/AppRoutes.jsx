import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import HomeComponent from "../pages/HomeComponent";
import Shop from "../pages/Shop";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";
import {
  redirectIfAuthenticated,
  requireAuth,
} from "./routeLoaders.jsx";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          element: <AuthLayout />,
          loader: redirectIfAuthenticated,
          hydrateFallbackElement: <Loading />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "auth/register",
              element: <Register />,
            },
          ],
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          loader: requireAuth,
          hydrateFallbackElement: <Loading />,
          children: [
            { index: true, element: <HomeComponent /> },
            { path: "about", element: <About /> },
            { path: "shop", element: <Shop /> },
            { path: "product/:id", element: <ProductDetails /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
