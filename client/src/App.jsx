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
import { darkThemeAtom } from "./states/theme";
import { useAtom } from "jotai/react";
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
const App = () => {
  const [isDarkTheme] = useAtom(darkThemeAtom);
  return (
    <Theme dataTheme={isDarkTheme ? "dark" : "light"}>
      <RouterProvider router={router} />
      <ToastContainerCustomer />
    </Theme>
  );
};

export default App;
