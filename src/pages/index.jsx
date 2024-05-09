import { createBrowserRouter } from "react-router-dom";

import { Landing } from "./landing";
import { Login } from "./login";
import { Auth } from "./auth";
import { Dashboard } from "./dashboard";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { SignUpPage } from "./sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);
