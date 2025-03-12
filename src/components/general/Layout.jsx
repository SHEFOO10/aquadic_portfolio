import React from "react";
import { Outlet } from "react-router";
import Header from "@/components/general/Header.jsx";
import Footer from "@/components/general/Footer.jsx";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft.jsx";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight.jsx";
import Providers from "@/lib/Providers.jsx";

const Layout = () => {
  return (
    <Providers>
      <div className="relative">
        <span className="fixed left-0 max-w-[40%] -z-10">
          <HomeGradientLeft />
        </span>
        <span className="fixed right-0 max-w-[40%] -z-10">
          <HomeGradientRight />
        </span>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Providers>
  );
};

export default Layout;
