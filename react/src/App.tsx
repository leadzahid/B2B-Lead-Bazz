import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./components/NotFound";
import Layout from "./Layout";
import About from "./pages/AboutUs";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import WhyHireUs from "./pages/WhyHireUs";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/order",
        element: <Order />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/about-us",
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/why-hire-us",
        element: <WhyHireUs />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/services/:id",
        element: <Services />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
