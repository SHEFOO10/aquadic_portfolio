import TeamData from "@/constants/Team/TeamData";
import teammember from "@/assets/images/teammember.webp";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const TeamCard = ({ departments }) => {
  const { t } = useTranslation("team");
  const [leadRef, leadInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const [designersRef, designersInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const [flutterRef, flutterInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const [testerRef, testerInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });

  return (
    <section className="container flex flex-col items-center md:items-start md:py-[72px]">
      <div ref={leadRef}>
        <h2 className="text-[#121212] font-semibold md:text-5xl text-2xl md:leading-[48px]">
          {t("leadership")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 md:mt-[91px] mt-10">
          {departments.map((item, index) => (
            <AnimateOnScroll inView={leadInView} delay={index * 0.2}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-[72px]">
          <h2 className="text-[#121212] font-semibold text-5xl leading-[48px]">
            {t("meetTeam")}
          </h2>
          <p className="md:w-[763px] text-[#5D5D5D] text-2xl font-medium leading-[38.4px] mt-6">
            {t("meetTitle")}
          </p>
        </div>
      </div>
      <div ref={designersRef}>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          Designer Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6">
          {designersData.map((item, index) => (
            <AnimateOnScroll inView={designersInView} delay={index * 0.2}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          Flutter Team
        </h2>
        <div
          ref={flutterRef}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6"
        >
          {flutterData.map((item, index) => (
            <AnimateOnScroll inView={flutterInView} delay={index * 0.2}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          Backend Development Team
        </h2>
        <div
          ref={backendRef}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6"
        >
          {backendData.map((item, index) => (
            <AnimateOnScroll inView={backendInView} delay={index * 0.2}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          Frontend Development Team
        </h2>
        <div
          ref={frontendRef}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6"
        >
          {frontendData.map((item, index) => (
            <AnimateOnScroll inView={frontendInView} delay={0.2 * index}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          Tester Team
        </h2>
        <div
          ref={testerRef}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 mt-6"
        >
          {testersData.map((item, index) => (
            <AnimateOnScroll inView={testerInView} delay={index * 0.2}>
              <TeamData
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
