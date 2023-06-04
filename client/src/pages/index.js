import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const LoginPage = lazy(() => import("./LoginPage"));
const ViewPost = lazy(() => import("./ViewPost"));
const CreatePost = lazy(() => import("./CreatePost"));
const Setting = lazy(() => import("./Setting"));
const SignUpPage = lazy(() => import("./SignUpPage"));
const DashboardPage = lazy(() => import("./DashboardPage"));
const Tags = lazy(() => import("./Tags"));
const LatestPage = lazy(() => import("./LatestPage"));
const TopPage = lazy(() => import("./TopPage"));
const ReadingListPage = lazy(() => import("./ReadingListPage"));
const AdminPage = lazy(() => import("./AdminPage"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));

export {
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
};
