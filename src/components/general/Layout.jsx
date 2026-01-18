import { Outlet } from "react-router";
import Header from "@/components/general/Header.jsx";
import Footer from "@/components/general/Footer.jsx";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft.jsx";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight.jsx";
import Providers from "@/lib/Providers.jsx";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <Providers>
      <div className="relative">
        <span className="fixed left-0 top-0 h-screen max-w-[40%] -z-10 pointer-events-none">
          <HomeGradientLeft className="w-full h-full opacity-70" />
        </span>
        <span className="fixed right-0 top-0 h-screen max-w-[40%] -z-10 pointer-events-none">
          <HomeGradientRight className="w-full h-full opacity-70" />
        </span>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Toaster />
    </Providers>
  );
};

export default Layout;
