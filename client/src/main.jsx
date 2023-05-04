import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "react-daisyui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  LoginPage,
  ViewPost,
  CreatePost,
  Setting,
  SignUpPage,
} from "./pages";
import { ToastContainerCustomer } from "./components";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts/:postId",
    element: <ViewPost />,
  },
  {
    path: "/posts/create",
    element: <CreatePost />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/setting",
    element: <Setting />,
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
      <ToastContainerCustomer />
    </Theme>
  </React.StrictMode>
);
