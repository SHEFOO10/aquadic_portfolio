import { useTranslation } from "react-i18next";
import about_header from "../../assets/images/about_header.png";
import Star from "../icons/general/Star";

const AboutUsHeader = () => {
    const { t } = useTranslation("aboutus");

    return (
        <section className="container md:py-[58px] flex flex-col items-center relative">
            <h2 className="md:text-[40px] text-2xl font-bold leading-[150%] text-center">
                <span className="text-[#EA433A]">&quot;</span>
                {t("aboutHeader.titleStart")}{" "}
                <span className="text-[#EA433A]">
                    {t("aboutHeader.titleHighlight")}
                </span>{" "}
                {t("aboutHeader.titleEnd")}
                <span className="text-[#EA433A]">&quot;</span>
            </h2>

            <p className="text-[#5D5D5D] md:text-xl leading-[160%] mt-3 text-center">
                {t("aboutHeader.description")}
            </p>

            <img
                src={about_header}
                alt="header"
                className="mt-6"
            />

            <div className="absolute ltr:right-14 rtl:left-14 top-20 md:block hidden">
                <Star className="w-10 h-10" />
            </div>

            <div className="absolute ltr:right-40 rtl:left-40 top-60 md:block hidden">
                <Star className="w-8 h-8" />
            </div>

            <div className="absolute rtl:right-14 ltr:left-14 bottom-40 md:block hidden">
                <Star className="w-10 h-10" />
            </div>

            <div className="absolute rtl:right-14 ltr:left-14 bottom-80 md:block hidden">
                <Star className="w-6 h-6" />
            </div>
        </section>
    );
};

export default AboutUsHeader;
