import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import ArrowRight from "@/components/icons/general/ArrowRight.jsx";
import SpotlightCard from "@/components/SpotlightCard";
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

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10" dir={isArabic ? "rtl" : "ltr"}>
        <div className="relative z-10 mx-auto w-full max-w-2xl text-start">
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
            className="mt-6 text-start text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl xl:text-[68px]"
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
            className="mt-6 max-w-xl text-start text-lg leading-8 text-slate-600 sm:text-xl"
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

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <span className="me-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{t("capabilitiesHeading")}</span>
            {capabilities.map((capability) => (
              <span key={capability} className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
                {capability}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[580px]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.12, ease: "easeOut" }}
          whileHover={prefersReducedMotion ? undefined : { y: -3 }}
          aria-hidden="true"
        >
          <div className="absolute -inset-5 rounded-[44px] bg-gradient-to-br from-sky-200/70 via-white/30 to-rose-200/70 blur-2xl" />
          <SpotlightCard
            theme="dark"
            spotlightColor="rgba(14, 165, 233, 0.95)"
            intensity={0.18}
            spotlightSize={320}
            softness={0.68}
            borderGlow={0.6}
            proximity={120}
            smoothing={0.2}
            ambient
            flare
            className="!rounded-[34px] !p-0 !shadow-none"
          >
          <div className="relative rounded-[34px] border border-white/80 bg-slate-950 p-3 shadow-[0_35px_90px_-38px_rgba(15,23,42,0.55)] sm:p-4">
            <div className="flex h-10 items-center gap-1.5 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
              <span className="ms-3 h-2 w-24 rounded-full bg-white/15" />
              <span className="ms-auto text-[9px] font-semibold tracking-[0.22em] text-white/45 sm:text-[10px]">AQUADIC / DIGITAL</span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[25px] bg-gradient-to-br from-[#eff8ff] via-white to-[#fff0ee] p-4 sm:p-6">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-sky-300/45 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-rose-300/40 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-24 rounded-full bg-slate-900/80 sm:w-32" />
                  <div className="flex gap-1.5">
                    <span className="h-2 w-8 rounded-full bg-slate-200" />
                    <span className="h-2 w-8 rounded-full bg-slate-200" />
                    <span className="h-2 w-8 rounded-full bg-brandColor/70" />
                  </div>
                </div>

                <div className="mt-5 grid flex-1 grid-cols-[1.12fr_0.88fr] gap-3 sm:mt-7 sm:gap-4">
                  <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg shadow-slate-900/5 sm:p-4">
                    <div className="h-2 w-16 rounded-full bg-sky-200 sm:w-20" />
                    <div className="mt-3 h-4 w-4/5 rounded-full bg-slate-800/80 sm:h-5" />
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-200" />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <span className="h-12 rounded-xl bg-sky-50 ring-1 ring-sky-100 sm:h-16" />
                      <span className="h-12 rounded-xl bg-rose-50 ring-1 ring-rose-100 sm:h-16" />
                    </div>
                    <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-[#1073C0] to-[#EA433A] opacity-90 sm:h-10" />
                  </div>

                  <div className="flex items-center justify-center rounded-2xl bg-slate-900/90 p-2 shadow-xl">
                    <div className="flex h-full max-h-[210px] w-full max-w-[132px] flex-col rounded-[22px] border-[5px] border-slate-700 bg-white p-2 shadow-inner">
                      <span className="mx-auto h-1.5 w-10 rounded-full bg-slate-200" />
                      <span className="mt-3 h-16 rounded-xl bg-gradient-to-br from-sky-100 to-rose-100" />
                      <span className="mt-3 h-2 w-4/5 rounded-full bg-slate-800/80" />
                      <span className="mt-2 h-1.5 w-full rounded-full bg-slate-200" />
                      <span className="mt-2 h-1.5 w-3/4 rounded-full bg-slate-200" />
                      <span className="mt-auto h-6 rounded-full bg-brandColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </SpotlightCard>

          <div className="absolute -bottom-5 left-2 right-10 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-xl shadow-slate-900/10 sm:left-8 sm:right-14 sm:gap-3 sm:p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-bold text-sky-700">AQ</span>
            <div className="min-w-0 flex-1">
              <div className="h-2 w-24 rounded-full bg-slate-800/80 sm:w-32" />
              <div className="mt-2 h-1.5 w-32 rounded-full bg-slate-200 sm:w-44" />
            </div>
            <span className="hidden rounded-full bg-rose-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brandColor sm:inline-flex">{t("visualLabel")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
