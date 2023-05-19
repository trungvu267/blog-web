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
  DashboardPage,
} from "./pages";
import { ToastContainerCustomer } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { darkThemeAtom } from "./states/theme";
import { useAtom } from "jotai/react";
import Tags from "./pages/Tags";
import LatestPage from "./pages/LatestPage";
import TopPage from "./pages/TopPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/latest",
    element: <LatestPage />,
  },
  {
    path: "/top",
    element: <TopPage />,
  },
  {
    path: "/tags",
    element: <Tags />,
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
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
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
