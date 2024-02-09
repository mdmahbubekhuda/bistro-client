import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";

const Main = () => {
  return (
    <div>
      <PageTitle />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
