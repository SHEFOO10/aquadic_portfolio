import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import aboutHeaderImage from "../../assets/images/about_header.png";
import SpotlightCard from "@/components/SpotlightCard";

const AboutUsHeader = () => {
  const { t } = useTranslation("aboutus");
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#FFF1EF]">
      <div
        className="pointer-events-none absolute -top-24 h-80 w-80 rounded-full bg-brandColor/10 blur-3xl ltr:-right-20 rtl:-left-20"
        aria-hidden="true"
      />
      <div className="container grid items-center gap-12 py-14 md:py-20 lg:min-h-[620px] lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brandColor/20 bg-white/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brandColor" aria-hidden="true" />
            {t("aboutus")}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("aboutHeader.titleStart")} {" "}
            <span className="text-brandColor">{t("aboutHeader.titleHighlight")}</span>{" "}
            {t("aboutHeader.titleEnd")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {t("aboutHeader.description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brandColor px-5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
            >
              {t("ourWork.button")}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link
              to="/career"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/75 px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-brandColor hover:text-brandColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
            >
              {t("openPositions.highlight")} {t("openPositions.text")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
            delay: reducedMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div
            className="pointer-events-none absolute -inset-5 rounded-[40px] bg-brandColor/10 blur-2xl"
            aria-hidden="true"
          />
          <SpotlightCard
            theme="light"
            className="!p-2 sm:!p-3"
            spotlightColor="#EA433A"
            intensity={0.2}
            spotlightSize={320}
            borderGlow={0.35}
            ambient
            flare={false}
          >
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={aboutHeaderImage}
                alt={t("aboutHeader.imageAlt")}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
                fetchPriority="high"
              />
            </div>
          </SpotlightCard>
          <div className="absolute -bottom-5 rounded-2xl border border-white/70 bg-slate-950 px-5 py-3.5 text-white shadow-xl ltr:left-5 rtl:right-5">
            <p className="text-xs font-medium text-slate-300">
              {t("aboutStatics.years.title")}
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              {t("aboutStatics.years.value")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
