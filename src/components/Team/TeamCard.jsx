import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import TeamData from "@/constants/Team/TeamData.jsx";

const TeamCard = ({ title, teamData }) => {
  const { i18n: { language } } = useTranslation("team");
  const [teamRef, teamInView] = useInView({ triggerOnce: true, rootMargin: "-400px 0px" });

  return (
    <section>
      <div ref={teamRef}>
        <h2 className="mt-[72px] text-2xl font-semibold text-brandColor md:text-5xl md:leading-[48px]">
          {language === "en" ? title.en : title.ar}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-[91px] md:grid-cols-3 md:gap-4">
          {teamData.map((item, index) => (
            <AnimateOnScroll key={item.id} inView={teamInView} delay={index * 0.2}>
              <TeamData
                image={item.image.url}
                name={language === "en" ? item.name.en : item.name.ar}
                position={language === "en" ? item.position.name.en : item.position.name.ar}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

TeamCard.propTypes = {
  title: PropTypes.shape({ en: PropTypes.string, ar: PropTypes.string }).isRequired,
  teamData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.shape({ url: PropTypes.string }),
      name: PropTypes.shape({ en: PropTypes.string, ar: PropTypes.string }),
      position: PropTypes.shape({ name: PropTypes.shape({ en: PropTypes.string, ar: PropTypes.string }) }),
    }),
  ).isRequired,
};

export default TeamCard;
