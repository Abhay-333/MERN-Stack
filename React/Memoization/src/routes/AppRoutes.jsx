import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
const Home = lazy(() => import("../pages/Home")); // lazy ek promise hoti hai jo jab apne Home component chahiye tab hi resolve hota hai, verna vo promise hold ya pending state pe hota hai
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "",
          index: true,
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home></Home>
            </Suspense>
          ),
        },
        {
          path: "about",
          index: true,
          element: <About></About>,
        },
        {
          path: "contact",
          index: true,
          element: <Contact></Contact>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
