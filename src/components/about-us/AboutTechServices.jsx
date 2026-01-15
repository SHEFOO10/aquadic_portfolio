import { useTranslation } from "react-i18next";
import Analysis from "../../assets/images/analysis.jpg";
import Design from "../../assets/images/design.jpg";
import Development from "../../assets/images/dev.jpg";
import Testing from "../../assets/images/testing.jpg";

const AboutTechServices = () => {
    const { t } = useTranslation("aboutus");

    return (
        <section className="container md:py-20 py-5">
            <h2 className="md:text-[40px] text-2xl font-bold leading-[140%] text-center">
                {t("aboutTech.titleStart")}{" "}
                <span className="text-[#EA433A]">
                    {t("aboutTech.titleHighlight")}
                </span>{" "}
                {t("aboutTech.titleEnd")}
            </h2>

            <p className="text-[#5D5D5D] md:text-xl text-base leading-[160%] text-center mt-3">
                {t("aboutTech.description")}
            </p>

            <div className="md:mt-12 mt-6 flex flex-wrap gap-8">
                <div className="w-[379px] h-full border-[3px] border-[#F0F0F0] rounded-[30px]">
                    <img
                        src={Analysis}
                        alt={t("aboutTech.services.analysis")}
                        className="w-full h-[454px] rounded-tr-[30px] rounded-tl-[30px] opacity-60 object-cover"
                    />
                    <h2 className="text-[#121212] md:text-2xl text-sm font-bold text-center md:py-5 py-3">
                        {t("aboutTech.services.analysis")}
                    </h2>
                </div>

                <div>
                    <div className="md:w-[379px] w-full border-[3px] border-[#F0F0F0] rounded-[30px]">
                        <img
                            src={Design}
                            alt={t("aboutTech.services.design")}
                            className="w-full h-[175px] rounded-tr-[30px] rounded-tl-[30px] opacity-60 object-cover"
                        />
                        <h2 className="text-[#121212] md:text-2xl text-sm font-bold text-center md:py-5 py-3">
                            {t("aboutTech.services.design")}
                        </h2>
                    </div>

                    <div className="md:w-[379px] w-full border-[3px] border-[#F0F0F0] rounded-[30px] mt-6">
                        <img
                            src={Development}
                            alt={t("aboutTech.services.development")}
                            className="w-full h-[175px] rounded-tr-[30px] rounded-tl-[30px] opacity-60 object-cover"
                        />
                        <h2 className="text-[#121212] md:text-2xl text-sm font-bold text-center md:py-5 py-3">
                            {t("aboutTech.services.development")}
                        </h2>
                    </div>
                </div>

                <div className="w-[379px] h-full border-[3px] border-[#F0F0F0] rounded-[30px]">
                    <img
                        src={Testing}
                        alt={t("aboutTech.services.testing")}
                        className="w-full h-[454px] rounded-tr-[30px] rounded-tl-[30px] opacity-60 object-cover"
                    />
                    <h2 className="text-[#121212] md:text-2xl text-sm font-bold text-center md:py-5 py-3">
                        {t("aboutTech.services.testing")}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default AboutTechServices;
