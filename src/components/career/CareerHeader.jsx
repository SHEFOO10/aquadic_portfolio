import aboutus from "@/assets/images/aboutusImage.webp";
import { useTranslation } from "react-i18next";
import Star from "../icons/general/Star";

const CareerHeader = () => {
    const { t } = useTranslation("aboutus");

    return (
        <section className="container md:py-20 flex lg:flex-row flex-col lg:gap-20 gap-5 relative">
            <img
                src={aboutus}
                className="md:w-[475px] md:h-[475px] object-cover object-center mx-auto"
                alt="image"
            />

            <div>
                <h2 className="md:text-[56px] text-2xl font-bold leading-[140%]">
                    &quot;{t("title.part1")}{" "}
                    <span className="text-[#EA433A]">{t("title.part2")}</span>{" "}
                    {t("title.part3")}{" "}
                    <span className="text-[#EA433A]">{t("title.part4")}</span>&quot;
                </h2>

                <p className="text-[#5D5D5D] md:text-[26px] text-xl leading-[160%] mt-6">
                    {t("description")}
                </p>
            </div>

            <div className="absolute ltr:right-0 rtl:left-0 top-8">
                <Star />
            </div>

            <div className="absolute ltr:right-44 rtl:left-7 top-44">
                <Star />
            </div>
        </section>
    );
};

export default CareerHeader;
