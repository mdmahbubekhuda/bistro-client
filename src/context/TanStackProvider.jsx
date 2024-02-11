import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";

const TanStackProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

TanStackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TanStackProvider;
