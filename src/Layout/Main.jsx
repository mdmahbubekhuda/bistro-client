import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navigation from "../pages/Shared/Navigation/Navigation";
import { PageTitle } from "../context/PageTitleProvider";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <PageTitle />
      {noHeaderFooter || <Navigation />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
