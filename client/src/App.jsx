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
  LoadingPage,
} from "./pages";
import { ToastContainerCustomer } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { path } from "./utils/path";
import { roles } from "./utils/role";
import { useTheme } from "./hooks/theme.hook";

const router = createBrowserRouter([
  {
    path: path.home,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: path.latest,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LatestPage />
      </Suspense>
    ),
  },
  {
    path: path.top,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TopPage />
      </Suspense>
    ),
  },
  {
    path: path.tags,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Tags />
      </Suspense>
    ),
  },
  {
    path: path.details,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ViewPost />
      </Suspense>
    ),
  },
  {
    path: path.createPost,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PrivateRoute component={<CreatePost />} />
      </Suspense>
    ),
  },
  {
    path: path.dashboard,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PrivateRoute component={<DashboardPage />} />
      </Suspense>
    ),
  },
  {
    path: path.admin,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PrivateRoute component={<AdminPage />} role={roles.admin} />
      </Suspense>
    ),
  },
  {
    path: path.readingList,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PrivateRoute component={<ReadingListPage />} />
      </Suspense>
    ),
  },
  {
    path: path.login,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: path.signUp,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: path.setting,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Setting />
      </Suspense>
    ),
  },
  {
    path: path.notFound,
    element: (
      <Suspense fallback={<LoadingPage />}>
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
