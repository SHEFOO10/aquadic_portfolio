import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import ProjectsData from "@/constants/MobileDevelopment/ProjectsData "
import ServicesData from "@/constants/MobileDevelopment/ServicesData";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const MobDevelopment = () => {
    const { i18n } = useTranslation("navbar");
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });
    return (
        <section ref={ref} className="container mt-[72px] mb-[120px]">
            <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    {ServicesData.map((service, index) => (
                        <div key={index} className="mt-14">
                            <img src={service.image} className="w-10 h-10 rounded-2xl" alt={service.title} />
                            <h2 className="text-[#121212] font-bold text-4xl mt-4">
                                {i18n.language === 'en' ? service.titleEn : service.titleAr}
                            </h2>
                            <p className="w-[373px] text-[#5D5D5D] font-medium text-2xl mt-4">
                                {i18n.language === 'en' ? service.paragraphEn : service.paragraphAr}
                            </p>
                        </div>
                    ))}

                </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
                {ProjectsData.map((project, index) => (
                    <div key={index} className="flex flex-col items-center mt-14">
                        <img src={project.image} className="w-[389px] h-[317px] rounded-2xl" alt="Project Image" />
                        <h2 className="text-[#121212] text-[32px] font-semibold my-6">{project.title}</h2>
                        <p className="text-[#5D5D5D] font-medium text-2xl">{project.type}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MobDevelopment
