import React from "react";
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

const Providers = ({ children }) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HelmetProvider>
  );
};

export default Providers;
