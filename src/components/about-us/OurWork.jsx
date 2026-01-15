import { useTranslation } from "react-i18next";
import Our_work from "../../assets/images/our_work.png";
import WhiteArrow from "../icons/about/WhiteArrow";

const OurWork = () => {
    const { t } = useTranslation("aboutus");

    return (
        <section className="container md:pb-20 py-5">
            <h2 className="text-[#121212] md:text-[40px] text-2xl font-bold text-center leading-[140%]">
                {t("ourWork.titleStart")}{" "}
                <span className="text-[#EA433A]">
                    {t("ourWork.titleHighlight")}
                </span>
            </h2>

            <p className="text-[#5D5D5D] md:text-xl text-sm leading-[160%] mt-3 text-center">
                {t("ourWork.description")}
            </p>

            <img
                src={Our_work}
                alt="our work"
                className="md:mt-10 mt-5"
            />

            <div className="flex items-center justify-center">
                <button className="md:w-[584px] w-full h-14 bg-[#EA433A] rounded-[50px] mt-12 flex items-center justify-center gap-2">
                    <p className="text-[#FFFFFF] md:text-xl font-medium">
                        {t("ourWork.button")}
                    </p>
                    <div className="transform rtl:scale-x-[-1]">
                        <WhiteArrow />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default OurWork;
