import img from "@/assets/images/testimonials.webp";
import { useInView } from "react-intersection-observer";
import Card from "../../constants/home/Card";
import AnimateOnScroll from "../general/AnimateOnScroll";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Testimonials = () => {
  const { t } = useTranslation("testimonials");
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });
  return (
    <section ref={ref} className="container">
      <h1 className="text-[#121212] md:text-[32px] text-lg flex justify-center md:leading-8">
        {t('testimonials')}
      </h1>
      <h2 className="text-[#121212] md:text-[56px] text-2xl font-bold flex justify-center md:leading-[56px] md:mt-6">
        <span className="text-brandColor">{t('hear')}&nbsp;</span> {t('fromus')}{" "}
      </h2>
      <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <AnimateOnScroll inView={inView} delay={0.2}>
          <Card
            text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
            text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
            imgSrc={img}
            rating="8.9"
          />
        </AnimateOnScroll>

        <AnimateOnScroll inView={inView} delay={0.4}>
          <Card
            text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
            text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
            imgSrc={img}
            rating="8.9"
          />
        </AnimateOnScroll>

        <AnimateOnScroll inView={inView} delay={0.6}>
          <Card
            text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
            text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
            imgSrc={img}
            rating="8.9"
          />
        </AnimateOnScroll>

        <AnimateOnScroll inView={inView} delay={0.8}>
          <Card
            text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever..."
            text2="At AQuadic, we specialize in delivering innovative software and design-driven solutions that help startups and businesses thrive. Our team works closely with clients to bring their ideas to life..."
            imgSrc={img}
            rating="8.9"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
