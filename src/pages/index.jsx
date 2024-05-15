import { createBrowserRouter } from "react-router-dom";

import { Landing } from "./landing";
import { Login } from "./login";
import { Auth } from "./auth";
import { Dashboard } from "./dashboard";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { SignUpPage } from "./sign-up";
import { NewAppointmentsPage } from "./new-appointment";
import { MyAppointments } from "./my-appointments";

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
      {
        path: "/dashboard/appointments",
        element: <MyAppointments />,
      },
      {
        path: "/dashboard/new-appointment",
        element: <NewAppointmentsPage />,
      },
    ],
  },
]);
