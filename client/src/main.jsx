import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "react-daisyui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme dataTheme="dark">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
