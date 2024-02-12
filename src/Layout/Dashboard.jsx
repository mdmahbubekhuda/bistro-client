import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex gap-4 my-8">
      {/* dashboard sidebar */}
      <div className="w-72 sticky top-0 z-10">
        <Sidebar />
      </div>

      {/* dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
