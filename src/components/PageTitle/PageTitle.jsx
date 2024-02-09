import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1].toUpperCase();
  const dynamicTitle = `BISTRO | ${title ? title : "HOME"}`;
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
