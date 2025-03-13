import React from "react";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import TeamData from "@/constants/Team/TeamData.jsx";
import { useTranslation } from "react-i18next";

const TeamCard = ({ title, teamData }) => {
  const { t } = useTranslation("team");
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  const {
    i18n: { language },
  } = useTranslation("team");

  return (
    <section>
      <div ref={teamRef}>
        <h2 className="text-brandColor font-semibold md:text-5xl text-2xl md:leading-[48px] mt-[72px]">
          {language === "en" ? title.en : title.ar}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 md:mt-[91px] mt-10">
          {teamData.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              inView={teamInView}
              delay={index * 0.2}
            >
              <TeamData
                key={index}
                image={"/src/assets/images/teammember.webp"}
                name={item.name.en}
                position={item.position.name.en}
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
    </section>
  );
};

export default TeamCard;
