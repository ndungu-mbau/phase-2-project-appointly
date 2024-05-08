import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
};
