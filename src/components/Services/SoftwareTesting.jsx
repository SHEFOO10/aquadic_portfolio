import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import ServicesData from "@/constants/Testing/ServicesData";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const SoftwareTesting = () => {
    const { t, i18n } = useTranslation("navbar");
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });
    return (
        <section ref={ref} className="container mt-[72px] mb-[120px]">
            <AnimateOnScroll inView={inView} direction={"leftToRight"}>
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
        </section>
    )
}

export default SoftwareTesting
