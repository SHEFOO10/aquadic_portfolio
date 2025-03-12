import React from "react";
import { HelmetProvider } from "react-helmet-async";

const Providers = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Providers;
