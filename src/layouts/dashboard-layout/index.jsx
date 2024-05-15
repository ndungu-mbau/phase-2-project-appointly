import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";

export const DashboardLayout = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if ((!user && !loading) || error) {
      navigate("/login");
    }
  }, [user, loading, error, navigate]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 sm:ml-64 flex flex-col flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
