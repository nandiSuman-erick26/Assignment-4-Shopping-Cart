import { createBrowserRouter } from "react-router-dom";
import { Wrapper } from "../layouts/Wrapper";
import { Suspense } from "react";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";
export const Route = createBrowserRouter([
  {
    path: "",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "mycart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
