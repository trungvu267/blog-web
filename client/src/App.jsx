import { Theme } from "react-daisyui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
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
import ReadingListPage from "./pages/ReadingListPage";
import { path } from "./utils/path";
const router = createBrowserRouter([
  {
    path: path.home,
    element: <HomePage />,
  },
  {
    path: path.latest,
    element: <LatestPage />,
  },
  {
    path: path.top,
    element: <TopPage />,
  },
  {
    path: path.top,
    element: <Tags />,
  },
  {
    path: path.details,
    element: <ViewPost />,
  },
  {
    path: path.createPost,
    element: <CreatePost />,
  },

  {
    path: path.dashboard,
    element: <DashboardPage />,
  },
  {
    path: path.readingList,
    element: <ReadingListPage />,
  },
  {
    path: path.login,
    element: <LoginPage />,
  },
  {
    path: path.signUp,
    element: <SignUpPage />,
  },

  {
    path: path.setting,
    element: <Setting />,
  },
  {
    path: path.notFound,
    element: <NotFoundPage />,
  },
]);
const queryClient = new QueryClient();
const App = () => {
  const [isDarkTheme] = useAtom(darkThemeAtom);
  return (
    <QueryClientProvider client={queryClient}>
      <Theme dataTheme={isDarkTheme ? "dark" : "light"}>
        <RouterProvider router={router} />
        <ToastContainerCustomer />
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
