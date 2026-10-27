import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import aboutus from "@/assets/images/aboutusImage.webp";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const AboutUs = () => {
  const { t } = useTranslation("aboutus");
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  return (
    <section ref={ref} id="aboutUs" className="container overflow-x-hidden">
      <h2 className="mb-5 flex justify-center text-[32px] text-[#121212] md:ltr:ml-20 md:rtl:mr-4">
        {t("aboutus")}
      </h2>
      <div className="flex flex-col gap-5 md:gap-[88px] lg:flex-row">
        <AnimateOnScroll inView={inView} direction="leftToRight">
          <img
            src={aboutus}
            className="mx-auto object-cover object-center md:h-[475px] md:w-[475px]"
            alt={t("aboutus")}
            loading="lazy"
            decoding="async"
          />
        </AnimateOnScroll>
        <AnimateOnScroll inView={inView} direction="rightToLeft">
          <div>
            <h2 className="mx-auto mt-4 text-2xl font-bold md:mt-0 md:text-[56px] md:leading-[78.4px]">
              <span className="text-brandColor">&quot;</span>
              {t("shaping")} <span className="text-brandColor">{t("future")}</span>{" "}
              {t("techdesign")}
              <span className="text-brandColor">&quot;</span>
            </h2>
            <div className="mt-4 text-xl text-[#5D5D5D] md:mt-6 md:w-[637px] md:text-[26px] md:leading-[41.6px]">
              <p>{t("aboutAquadic")}</p>
              <Link
                to="/about-us"
                className="mt-2 inline-flex font-semibold text-brandColor underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
              >
                {t("learnMore")}
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-14 md:gap-[152px]">
              <div>
                <p className="text-4xl font-bold text-brandColor md:text-[40px]">+27</p>
                <p className="text-lg font-semibold leading-5 text-[#121212] md:text-xl">
                  {t("project")}
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brandColor md:text-[40px]">+5</p>
                <p className="text-lg font-semibold leading-5 text-[#121212] md:text-xl">
                  {t("client")}
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brandColor md:text-[40px]">+12</p>
                <p className="text-lg font-semibold leading-5 text-[#121212] md:text-xl">
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
