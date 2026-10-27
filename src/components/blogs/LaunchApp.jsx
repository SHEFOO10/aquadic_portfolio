import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";

const LaunchApp = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="container pb-[68px] pt-10 md:pt-0"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-center text-2xl font-semibold text-[#121212] md:text-5xl">
        Launch Your Dream App - iOS &amp; Android{" "}
        <span className="text-[#EA433A]">Ready!</span>
      </h2>
      <p className="mt-3 text-center text-xl font-medium text-[#5D5D5D]">
        “Turn your idea into a powerful mobile app with a seamless user experience,
        built to perform flawlessly on both iOS and Android platforms.”
      </p>
      <div className="mt-6 flex items-center justify-center">
        <Link
          to="/#contactUS"
          className="inline-flex min-h-14 w-full items-center justify-center rounded-[40px] bg-[#EA433A] px-6 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA433A] md:w-[483px]"
        >
          Contact Us Now
        </Link>
      </div>
    </motion.section>
  );
};

export default LaunchApp;
