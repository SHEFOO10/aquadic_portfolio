import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProcessCard from "@/components/process/ProcessCard.jsx";
import { processData } from "@/constants/process/processData.jsx";
import "../../components/Hooks/i18n";

const ProcessPage = () => {
  const { t, i18n } = useTranslation("process");
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const isArabic = i18n.language === "ar";

  return (
    <section ref={containerRef} className="container overflow-hidden py-16 md:py-24" dir={isArabic ? "rtl" : "ltr"}>
      <Helmet>
        <title>AQuadic | Our Process</title>
        <meta name="description" content="Discover AQuadic's structured development process, from analysis and design through launch and after-sales support." />
        <meta name="keywords" content="software development process, Agile development, software engineering, project workflow, AQuadic software process" />
        <meta name="author" content="AQuadic Software House" />
        <link rel="canonical" href="https://aquadic.com/process" />
        <meta property="og:title" content="AQuadic | Our Development Process" />
        <meta property="og:description" content="Learn about AQuadic's development process, from planning through ongoing support." />
        <meta property="og:image" content="https://aquadic.com/images/launchBg.png" />
        <meta property="og:url" content="https://aquadic.com/process" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AQuadic | Our Development Process" />
        <meta name="twitter:image" content="https://aquadic.com/images/launchBg.png" />
      </Helmet>

      <div className="mx-auto max-w-6xl">
        <h1 className="flex justify-center gap-2 text-center text-3xl font-semibold text-slate-950 sm:text-5xl">
          {t("company")} <span className="text-brandColor">{t("process")}</span>
        </h1>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute inset-y-5 left-4 w-px bg-slate-200 md:left-1/2" aria-hidden="true" />
          <motion.div
            className="absolute inset-y-5 left-4 w-0.5 origin-top bg-gradient-to-b from-[#1073C0] via-[#EA433A] to-[#1073C0] md:left-1/2"
            style={{ scaleY: prefersReducedMotion ? 1 : progress }}
            aria-hidden="true"
          />

          <ol className="relative space-y-6 md:space-y-0" aria-label={isArabic ? "مراحل العمل" : "Process stages"}>
            {processData.map((item, index) => {
              const cardPosition = index % 2 === 0
                ? "md:col-start-1 md:col-end-2 md:pr-8"
                : "md:col-start-3 md:col-end-4 md:pl-8";

              return (
                <motion.li
                  key={item.id}
                  className="relative pl-10 md:grid md:min-h-[230px] md:grid-cols-[1fr_88px_1fr] md:items-center md:pl-0 md:py-7"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className={cardPosition}>
                    <ProcessCard
                      index={index}
                      name={isArabic ? item.nameAr : item.nameEn}
                      body={isArabic ? item.bodyAr : item.bodyEn}
                    />
                  </div>
                  <span className="absolute left-4 top-7 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brandColor shadow-md shadow-slate-900/5 md:left-1/2 md:top-1/2 md:h-14 md:w-14 md:-translate-y-1/2" aria-hidden="true">
                    {item.icon}
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
