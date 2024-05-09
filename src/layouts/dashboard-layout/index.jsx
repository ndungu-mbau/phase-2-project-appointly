import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";

export const DashboardLayout = () => {
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
