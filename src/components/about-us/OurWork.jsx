import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import OurWorkImage from "../../assets/images/our_work.png";
import SpotlightCard from "@/components/SpotlightCard";

const OurWork = () => {
  const { t } = useTranslation("aboutus");
  const reducedMotion = useReducedMotion();

  return (
    <section className="container pb-16 pt-4 md:pb-24 md:pt-0">
      <motion.div
        className="relative grid gap-0 overflow-hidden rounded-[32px] bg-slate-950 shadow-xl lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute -top-24 h-72 w-72 rounded-full bg-brandColor/25 blur-3xl ltr:-right-16 rtl:-left-16"
          aria-hidden="true"
        />
        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F58A65]">
            {t("ourWork.titleStart")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {t("ourWork.titleHighlight")}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
            {t("ourWork.description")}
          </p>
          <Link
            to="/portfolio"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brandColor px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d63c33] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {t("ourWork.button")}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>

        <SpotlightCard
          theme="dark"
          className="relative z-10 !rounded-none !p-0 lg:h-full"
          spotlightColor="#EA433A"
          intensity={0.18}
          spotlightSize={300}
          borderGlow={0.3}
          flare={false}
          style={{
            "--spotlight-card-surface": "#020617",
            "--spotlight-card-border": "transparent",
            "--spotlight-card-shadow": "none",
          }}
        >
          <img
            src={OurWorkImage}
            alt={t("ourWork.imageAlt")}
            className="block h-auto w-full object-contain lg:h-full lg:object-cover"
            loading="lazy"
            decoding="async"
          />
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default OurWork;
