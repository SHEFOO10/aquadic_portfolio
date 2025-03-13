import { useState } from "react";
import aboutus from "@/assets/images/aboutusImage.webp";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const AboutUs = () => {
  const { t } = useTranslation("aboutus");
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section ref={ref} id="aboutUs" className="container">
      <h1 className="text-[#121212] text-[32px] flex justify-center">
        {t("aboutus")}
      </h1>
      <div className="flex lg:flex-row flex-col md:gap-[88px]">
        <AnimateOnScroll inView={inView} direction={"leftToRight"}>
          <img
            src={aboutus}
            className="md:w-[475px] md:h-[475px] object-cover object-center mx-auto"
            alt="Image"
          />
        </AnimateOnScroll>
        <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
          <div>
            <h1 className="md:text-[56px] text-2xl font-bold md:leading-[78.4px] mt-4 md:mt-0 mx-auto">
              <span className="text-brandColor">&quot;</span>
              {t("shaping")}{" "}
              <span className="text-brandColor">{t("future")}</span>{" "}
              {t("techdesign")}
              <span className="text-brandColor">&quot;</span>
            </h1>
            <div className="md:w-[637px] md:text-[26px] text-xl text-[#5D5D5D] md:leading-[41.6px] md:mt-6 mt-4">
              <p>
                {" "}
                {t("aboutAquadic")}
                {!isExpanded && (
                  <span
                    className="text-brandColor cursor-pointer ml-2"
                    onClick={() => setIsExpanded(true)}
                  >
                    {t("learnMore")}
                  </span>
                )}
              </p>
              {isExpanded && (
                <div>
                  <p>
                    {t("aboutAquadic")}
                    <span
                      className="text-brandColor cursor-pointer mt-2"
                      onClick={() => setIsExpanded(false)}
                    >
                      {t("showLess")}
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center md:gap-[152px] gap-20 mt-6">
              <div>
                <p className="text-brandColor font-bold text-[40px]">+27</p>
                <p className="text-[#121212] text-xl leading-5 font-semibold">
                  {t("project")}
                </p>
              </div>
              <div>
                <p className="text-brandColor font-bold text-[40px]">+5</p>
                <p className="text-[#121212] text-xl leading-5 font-semibold">
                  {t("client")}
                </p>
              </div>
              <div>
                <p className="text-brandColor font-bold text-[40px]">+12</p>
                <p className="text-[#121212] text-xl leading-5 font-semibold">
                  {t("countries")}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutUs;
