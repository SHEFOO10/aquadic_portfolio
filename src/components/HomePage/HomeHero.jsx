import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import ArrowRight from "@/components/icons/general/ArrowRight.jsx";
import "../Hooks/i18n";

const HomeHero = () => {
  const { t, i18n } = useTranslation("hero");
  const prefersReducedMotion = useReducedMotion();
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(() => {
    const result = t("words", { returnObjects: true });
    return Array.isArray(result) ? result : [];
  }, [t]);
  const heroParagraph = t("heroPara");
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    if (!words.length) {
      setDisplayedWord("");
      return undefined;
    }

    if (prefersReducedMotion) {
      setDisplayedWord(words[0]);
      return undefined;
    }

    const word = words[wordIndex % words.length];
    let charIndex = 0;
    let intervalId;
    let timeoutId;
    setDisplayedWord("");

    intervalId = window.setInterval(() => {
      charIndex += 1;
      setDisplayedWord(word.slice(0, charIndex));
      if (charIndex >= word.length) {
        window.clearInterval(intervalId);
        timeoutId = window.setTimeout(() => {
          setWordIndex((current) => (current + 1) % words.length);
        }, 1400);
      }
    }, 80);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion, wordIndex, words]);

  const capabilities = [
    t("capabilityWeb"),
    t("capabilityMobile"),
    t("capabilitySoftware"),
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8fcff_0%,#ffffff_48%,#fff8f6_100%)] py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-36 top-8 h-96 w-96 rounded-full bg-sky-200/50 blur-[110px]" />
        <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-rose-200/45 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative" dir={isArabic ? "rtl" : "ltr"}>
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-sky-800 shadow-sm sm:text-sm"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
          >
            <span className="h-2 w-2 rounded-full bg-brandColor shadow-[0_0_0_4px_rgba(234,67,58,0.12)]" aria-hidden="true" />
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            className="mt-6 text-center text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl xl:text-[68px]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: "easeOut" }}
          >
            {t("weHelp")} {" "}
            <span className="relative inline-flex whitespace-nowrap items-center text-brandColor" aria-live="polite" aria-atomic="true">
              {displayedWord}
              {!prefersReducedMotion && (
                <span className="ml-1 inline-block h-[0.82em] w-[3px] animate-pulse rounded-full bg-brandColor" aria-hidden="true" />
              )}
            </span>{" "}
            {t("journey")}
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600 sm:text-xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : 0.18 }}
          >
            {heroParagraph.split(/<br\s*\/?>/i).map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href="#contactUS"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brandColor px-7 font-semibold text-white shadow-lg shadow-brandColor/20 transition hover:bg-[#d83a31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>{t("getStarted")}</span>
              <span className={isArabic ? "rotate-180 transition-transform group-hover:-translate-x-1" : "transition-transform group-hover:translate-x-1"} aria-hidden="true">
                <ArrowRight />
              </span>
            </motion.a>
            <Link
              to="/portfolio"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-200 bg-white/85 px-7 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-brandColor hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
            >
              {t("exploreWork")}
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            <span className="me-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{t("capabilitiesHeading")}</span>
            {capabilities.map((capability) => (
              <span key={capability} className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
