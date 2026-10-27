import img from "@/assets/images/testimonials.webp";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import Card from "../../constants/home/Card";
import AnimateOnScroll from "../general/AnimateOnScroll";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Testimonials = () => {
  const { t } = useTranslation("testimonials");
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-300px 0px" });

  return (
    <section ref={ref} className="container">
      <h2 className="flex justify-center text-lg leading-8 text-[#121212] md:text-[32px]">
        {t("testimonials")}
      </h2>
      <h3 className="mt-2 flex justify-center text-2xl font-bold text-[#121212] md:mt-6 md:text-[56px] md:leading-[56px]">
        <span className="text-brandColor">{t("hear")}&nbsp;</span> {t("fromus")}
      </h3>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {[0.2, 0.4, 0.6, 0.8].map((delay) => (
          <AnimateOnScroll key={delay} inView={inView} delay={delay}>
            <Card
              text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
              text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
              imgSrc={img}
              rating="8.9"
            />
          </AnimateOnScroll>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          to="/portfolio"
          className="inline-flex min-h-14 w-full max-w-[584px] items-center justify-center rounded-[50px] border border-[#EA433A] px-6 text-xl font-medium text-[#EA433A] transition hover:bg-[#EA433A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
        >
          {t("seeOurWork")}
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
