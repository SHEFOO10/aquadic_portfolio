import { useTranslation } from 'react-i18next';
import blog from '../../assets/images/blog.jpg'
import client from '../../assets/images/client.jpg'

const TrendingReviews = () => {
    const { t } = useTranslation("aboutus");
    return (
        <section className="container md:py-[68px]">
            <h2 className="text-[#121212] md:text-[40px] text-2xl font-bold leading-[150%] text-center">
                {t("trending.prefix")}{" "}
                <span className="text-[#EA433A]">{t("trending.highlight")}</span>{" "}
                {t("trending.suffix")}
            </h2>


            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="px-6 py-3 border-2 border-[#E3E3E3] rounded-[32px] flex flex-wrap gap-4">
                    <img
                        src={blog}
                        alt="blog"
                        className='w-[117px] h-[117px]'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-2xl text-base font-bold leading-[150%]'>
                            The Best UX/UI Design Trends to Follow This Year.
                        </h2>
                        <div className='mt-2 flex items-center gap-2'>
                            <img
                                src={client}
                                alt="client"
                                className='w-[30px] h-[30px] rounded-full'
                            />
                            <p className='text-[#5D5D5D] text-xs font-semibold'>
                                Mohammed Ahmed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-3 border-2 border-[#E3E3E3] rounded-[32px] flex flex-wrap gap-4">
                    <img
                        src={blog}
                        alt="blog"
                        className='w-[117px] h-[117px]'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-2xl text-base font-bold leading-[150%]'>
                            The Best UX/UI Design Trends to Follow This Year.
                        </h2>
                        <div className='mt-2 flex items-center gap-2'>
                            <img
                                src={client}
                                alt="client"
                                className='w-[30px] h-[30px] rounded-full'
                            />
                            <p className='text-[#5D5D5D] text-xs font-semibold'>
                                Mohammed Ahmed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-3 border-2 border-[#E3E3E3] rounded-[32px] flex flex-wrap gap-4">
                    <img
                        src={blog}
                        alt="blog"
                        className='w-[117px] h-[117px]'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-2xl text-base font-bold leading-[150%]'>
                            The Best UX/UI Design Trends to Follow This Year.
                        </h2>
                        <div className='mt-2 flex items-center gap-2'>
                            <img
                                src={client}
                                alt="client"
                                className='w-[30px] h-[30px] rounded-full'
                            />
                            <p className='text-[#5D5D5D] text-xs font-semibold'>
                                Mohammed Ahmed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-3 border-2 border-[#E3E3E3] rounded-[32px] flex flex-wrap gap-4">
                    <img
                        src={blog}
                        alt="blog"
                        className='w-[117px] h-[117px]'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-2xl text-base font-bold leading-[150%]'>
                            The Best UX/UI Design Trends to Follow This Year.
                        </h2>
                        <div className='mt-2 flex items-center gap-2'>
                            <img
                                src={client}
                                alt="client"
                                className='w-[30px] h-[30px] rounded-full'
                            />
                            <p className='text-[#5D5D5D] text-xs font-semibold'>
                                Mohammed Ahmed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingReviews
