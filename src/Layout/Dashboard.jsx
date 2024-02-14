import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="flex gap-12">
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
