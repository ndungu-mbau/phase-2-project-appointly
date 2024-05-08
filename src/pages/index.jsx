import { createBrowserRouter } from "react-router-dom";

import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { DashboardLayout } from "../layouts/dashboard-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
