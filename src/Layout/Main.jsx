import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  return (
    <div>
      <PageTitle />
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
