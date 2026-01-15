import { useTranslation } from "react-i18next";
import CountriesServed from "../icons/about/CountriesServed";
import HappyClients from "../icons/about/HappyClients";
import TechExperts from "../icons/about/TechExperts";
import Years from "../icons/about/Years";

const AboutStatics = () => {
    const { t } = useTranslation("aboutus");

    return (
        <section className="bg-[#FBD9D8] py-8">
            <div className="container flex flex-wrap items-center justify-center gap-7">

                <div className="bg-[#FFFFFF] p-6 rounded-[30px] flex gap-3">
                    <Years />
                    <div>
                        <h2 className="text-[#EA433A] text-5xl font-bold">
                            {t("aboutStatics.years.value")}
                        </h2>
                        <h3 className="text-[#121212] text-xl font-semibold mt-2">
                            {t("aboutStatics.years.title")}
                        </h3>
                        <p className="text-[#5D5D5D] text-sm font-medium mt-3 md:w-[240px]">
                            {t("aboutStatics.years.description")}
                        </p>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] p-6 rounded-[30px] flex flex-col items-center justify-center">
                    <TechExperts />
                    <div>
                        <h2 className="text-[#EA433A] text-5xl font-bold mt-1 text-center">
                            {t("aboutStatics.experts.value")}
                        </h2>
                        <h3 className="text-[#121212] text-xl font-semibold mt-2 text-center">
                            {t("aboutStatics.experts.title")}
                        </h3>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] p-6 rounded-[30px] flex flex-col items-center justify-center">
                    <HappyClients />
                    <div>
                        <h2 className="text-[#EA433A] text-5xl font-bold mt-1 text-center">
                            {t("aboutStatics.clients.value")}
                        </h2>
                        <h3 className="text-[#121212] text-xl font-semibold mt-2 text-center">
                            {t("aboutStatics.clients.title")}
                        </h3>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] p-6 rounded-[30px] flex flex-col items-center justify-center">
                    <CountriesServed />
                    <div>
                        <h2 className="text-[#EA433A] text-5xl font-bold mt-1 text-center">
                            {t("aboutStatics.countries.value")}
                        </h2>
                        <h3 className="text-[#121212] text-xl font-semibold mt-2 text-center">
                            {t("aboutStatics.countries.title")}
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutStatics;
