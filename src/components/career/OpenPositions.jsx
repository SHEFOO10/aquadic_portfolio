import { useTranslation } from 'react-i18next';
import figma from '../../assets/images/figma.jpg'
import RedArrow from '../icons/career/RedArrow'
import { Link } from 'react-router';

const OpenPositions = () => {
    const { t } = useTranslation("aboutus");
    return (
        <section className="md:pb-20 bg-white">
            <div className='container'>
                <h2 className="text-[40px] font-bold text-center">
                    <span className="text-[#EA433A]">{t("openPositions.highlight")}</span>{" "}
                    {t("openPositions.text")}
                </h2>

                <Link to='/job_details' className="w-full h-full border-2 border-[#E4E3E3] p-6 rounded-[32px] mt-10 flex gap-2">
                    <img
                        src={figma}
                        alt="figma"
                        className='md:w-[180px] w-20 md:h-[172px] h-20'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-[32px] font-bold'>
                            Senior UI/UX Designer
                        </h2>
                        <p className='text-[#5D5D5D] md:text-sm text-xs font-semibold mt-3'>
                            On site - Full Time
                        </p>
                        <p className='text-[#5D5D5D] md:text-base text-xs font-medium mt-4'>
                            We are looking for a talented Senior UI/UX Designer to join our team at AQuadic. You will be responsible for designing intuitive, user-friendly interfaces for web and mobile applications. The ideal candidate combines creativity with a strong understanding of user behavior, delivering designs that enhance user experience and drive engagement.
                        </p>

                        <button
                            className="w-full h-14 mt-3 flex items-center justify-center gap-2 border border-[#EA433A] rounded-[50px] text-[#EA433A] hover:bg-[#EA433A] hover:text-white transition-all duration-300 ease-in-out group">
                            <p className="md:text-xl font-medium transition-colors duration-300">
                                {t("viewDetails")}
                            </p>

                            <div className="transform rtl:scale-x-[-1] transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ">
                                <RedArrow />
                            </div>
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default OpenPositions
