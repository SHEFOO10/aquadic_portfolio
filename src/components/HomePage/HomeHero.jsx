"use client"; // Ensure this runs on the client side for Next.js

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeLinesIcon from "@/components/icons/home/HomeLinesIcon";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight";
import HomeArch from "@/components/icons/home/HomeArch.jsx";
import ArrowRight from "@/components/icons/general/ArrowRight.jsx";
import HomeStars from "@/components/HomePage/HomeStars.jsx";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";
import i18n from "../Hooks/i18n";
import Magnet from "@/components/reactAnimations/Magnet.jsx";

// const words = ["Startups", "Businesses", "Agencies"];

const HomeHero = () => {
  const { t } = useTranslation("hero");
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = t("words", { returnObjects: true }) || [];
  // Scroll animation hooks
  const { scrollYProgress } = useScroll();
  const archY = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves HomeArch upwards on scroll

  useEffect(() => {
    let charIndex = 0;
    const word = words[wordIndex];
    const typingInterval = setInterval(() => {
      setDisplayedWord(word.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === word.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayedWord("");
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  return (
    <section className="relative">
      <div className="container relative mt-[60px] md:mt-[140px]" dir="ltr">
        <HomeStars />
        <span className="absolute -top-16">
          <HomeLinesIcon className="w-[40px] sm:w-[60px] md:w-[80px]" />
        </span>

        {/* Animated Heading */}
        <motion.h1
          className="relative z-10 text-center font-bold text-4xl sm:text-5xl md:text-[72px] mx-10 leading-relaxed md:!leading-[100px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("weHelp")} &nbsp;
          <span className="relative text-brandColor whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              {displayedWord}
            </motion.span>
          </span>{" "}
          {t("journey")}
        </motion.h1>

        {/* Scroll-Affected HomeArch */}
        <motion.div style={{ y: archY }}>
          <HomeArch />
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="relative z-10 text-center text-brandGray text-lg sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: t("heroPara") }}
        />
        <div className="relative z-10 flex items-center justify-center">
          <Magnet padding={50} disabled={false}>
            <a href="#contactUS" className="mx-auto">
              <button className="mt-8 mx-auto flex items-center justify-center gap-3 bg-brandColor rounded-full px-6 py-3 text-white font-medium border border-brandColor group">
                <span>{t("getStarted")}</span>{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </button>
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
