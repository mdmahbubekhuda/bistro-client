import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const PageTitle = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1].toUpperCase();
  const dynamicTitle = `BISTRO | ${title ? title : "HOME"}`;
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
    </Helmet>
  );
};

const PageTitleProvider = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

PageTitleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitleProvider;
