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
  Tags,
  LatestPage,
  TopPage,
  ReadingListPage,
  AdminPage,
  PrivateRoute,
} from "./pages";
import { ToastContainerCustomer } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { darkThemeAtom } from "./states/theme";
import { useAtom } from "jotai/react";

import { path } from "./utils/path";
import { roles } from "./utils/role";
import { useTheme } from "./hooks/theme.hook";

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
    path: path.tags,
    element: <Tags />,
  },
  {
    path: path.details,
    element: <ViewPost />,
  },
  {
    path: path.createPost,
    element: <PrivateRoute component={<CreatePost />} />,
  },

  {
    path: path.dashboard,
    element: <PrivateRoute component={<DashboardPage />} />,
  },
  {
    path: path.admin,
    element: <PrivateRoute component={<AdminPage />} role={roles.admin} />,
  },
  {
    path: path.readingList,
    element: <PrivateRoute component={<ReadingListPage />} />,
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
  const { isDarkTheme } = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <Theme dataTheme={isDarkTheme ? "dark" : "light"}>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading route ...</div>}
        />
        <ToastContainerCustomer />
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
