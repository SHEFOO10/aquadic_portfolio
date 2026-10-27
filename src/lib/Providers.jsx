import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

const queryClient = makeQueryClient();

const Providers = ({ children }) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </HelmetProvider>
);

Providers.propTypes = { children: PropTypes.node };

export default Providers;
