import { Suspense, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router";
import Header from "@/components/general/Header.jsx";
import Footer from "@/components/general/Footer.jsx";
import Loading from "@/components/general/Loading.jsx";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft.jsx";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight.jsx";
import Providers from "@/lib/Providers.jsx";
import { Toaster } from "sonner";

const Layout = () => {
  const { pathname, hash } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timeoutId;

    const scrollToHashTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }

      if (attempts < 40) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollToHashTarget, 100);
      }
    };

    timeoutId = window.setTimeout(scrollToHashTarget, 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash, prefersReducedMotion]);

  return (
    <Providers>
      <div className="relative">
        <span className="fixed left-0 top-0 -z-10 h-screen max-w-[40%] pointer-events-none">
          <HomeGradientLeft className="h-full w-full opacity-70" />
        </span>
        <span className="fixed right-0 top-0 -z-10 h-screen max-w-[40%] pointer-events-none">
          <HomeGradientRight className="h-full w-full opacity-70" />
        </span>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            className="relative"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 28, filter: "blur(6px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -20, filter: "blur(4px)" }
            }
            transition={{
              duration: prefersReducedMotion ? 0.12 : 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] origin-left bg-gradient-to-r from-brandColor via-[#F58A65] to-transparent"
              initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 0 }}
              transition={{
                scaleX: {
                  duration: prefersReducedMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: prefersReducedMotion ? 0 : 0.16,
                  delay: prefersReducedMotion ? 0 : 0.34,
                },
              }}
            />
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
      <Toaster />
    </Providers>
  );
};

export default Layout;
