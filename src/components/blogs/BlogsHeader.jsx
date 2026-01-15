import { useTranslation } from 'react-i18next'
import Ai from '../../assets/images/ai.jpg'
import Cloud from '../../assets/images/cloud.jpg'
import Projects from '../../assets/images/projects.jpg'
import UX from '../../assets/images/ux.jpg'

const BlogsHeader = () => {
    const { t } = useTranslation("aboutus");
    return (
        <section className="container md:py-14 className='text-[#EA433A]'">
            <h2 className="text-[#121212] md:text-[40px] text-2xl font-bold leading-[150%] text-center">
                {t("expertise.titleStart")}{" "}
                <span className="text-[#EA433A]">{t("expertise.titleHighlight1")}</span>,{" "}
                {t("expertise.titleMiddle")},{" "}
                <span className="text-[#EA433A]">{t("expertise.titleHighlight2")}</span>{" "}
                {t("expertise.titleEnd")}
            </h2>

            <div className="md:mt-8 mt-4 flex flex-wrap gap-8">
                <div className="w-[276px] h-[488px] rounded-[30px] bg-[#FFFFFF]">
                    <img
                        src={Ai}
                        alt='Ai'
                        className='rounded-tr-[30px] rounded-tl-[30px]'
                    />
                    <p className='text-[#121212] text-sm font-bold px-3 py-2'>
                        Will Artificial Intelligence Change the Future of Software Companies?
                    </p>
                </div>

                <div>
                    <div className="md:w-[584px] h-[228px] rounded-[30px] bg-[#FFFFFF]">
                        <img
                            src={Cloud}
                            alt='Cloud'
                            className='rounded-tr-[30px] rounded-tl-[30px] w-[584px] h-[190px] object-cover'
                        />
                        <p className='text-[#121212] text-sm font-bold px-3 py-2'>
                            Cloud Computing: A Trend or a Real Business Necessity?
                        </p>
                    </div>

                    <div className="md:w-[584px] h-[228px] rounded-[30px] bg-[#FFFFFF] mt-8">
                        <img
                            src={Projects}
                            alt='Projects'
                            className='rounded-tr-[30px] rounded-tl-[30px] w-[584px] h-[190px] object-cover'
                        />
                        <p className='text-[#121212] text-sm font-bold px-3 py-2'>
                            Why Do Some Software Projects Fail Despite High-Quality Code?
                        </p>
                    </div>
                </div>

                <div className="w-[276px] h-[488px] rounded-[30px] bg-[#FFFFFF]">
                    <img
                        src={UX}
                        alt='UX'
                        className='rounded-tr-[30px] rounded-tl-[30px]'
                    />
                    <p className='text-[#121212] text-sm font-bold px-3 py-2'>
                        Good UX Is Not a Luxury: How Design Impacts Product Success?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BlogsHeader
