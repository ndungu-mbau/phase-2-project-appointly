import { createBrowserRouter } from "react-router-dom";

import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { DashboardLayout } from "../layouts/dashboard-layout";
import SignUpPage from "./sign up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/sign-up",
    element: <SignUpPage />
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
