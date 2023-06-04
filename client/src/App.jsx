import { lazy, Suspense } from "react";
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
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: path.latest,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <LatestPage />
      </Suspense>
    ),
  },
  {
    path: path.top,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <TopPage />
      </Suspense>
    ),
  },
  {
    path: path.tags,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <Tags />
      </Suspense>
    ),
  },
  {
    path: path.details,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <ViewPost />
      </Suspense>
    ),
  },
  {
    path: path.createPost,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <PrivateRoute component={<CreatePost />} />
      </Suspense>
    ),
  },
  {
    path: path.dashboard,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <PrivateRoute component={<DashboardPage />} />
      </Suspense>
    ),
  },
  {
    path: path.admin,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <PrivateRoute component={<AdminPage />} role={roles.admin} />
      </Suspense>
    ),
  },
  {
    path: path.readingList,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <PrivateRoute component={<ReadingListPage />} />
      </Suspense>
    ),
  },
  {
    path: path.login,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: path.signUp,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: path.setting,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <Setting />
      </Suspense>
    ),
  },
  {
    path: path.notFound,
    element: (
      <Suspense fallback={<>Loading app...</>}>
        <NotFoundPage />
      </Suspense>
    ),
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
