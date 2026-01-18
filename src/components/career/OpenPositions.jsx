import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import RedArrow from '../icons/career/RedArrow'
import { Skeleton } from "@/components/ui/skeleton";
import { getPositions } from "@/lib/positions/positions";
import { Link } from 'react-router';

const OpenPositions = () => {
    const { t, i18n } = useTranslation("aboutus");
    const lang = i18n.language;

    const { data: positions, isLoading, error } = useQuery({
        queryKey: ["positions"],
        queryFn: getPositions,
    });

    if (isLoading) {
        return (
            <section className="md:pb-20 bg-white">
                <div className="container">
                    <div className="mt-10 space-y-6">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="w-full border-2 border-[#E4E3E3] p-6 rounded-[32px] flex gap-4"
                            >
                                <Skeleton className="md:w-[180px] w-20 md:h-[172px] h-20 rounded-xl" />

                                <div className="flex-1 space-y-3">
                                    <Skeleton className="h-8 w-[60%]" />
                                    <Skeleton className="h-4 w-[40%]" />
                                    <Skeleton className="h-4 w-[80%]" />
                                    <Skeleton className="h-12 w-full rounded-[50px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return <p className="text-center mt-10">Error loading positions</p>;
    }

    return (
        <section className="md:pb-20 bg-white">
            <div className='container'>
                <h2 className="text-[40px] font-bold text-center">
                    <span className="text-[#EA433A]">{t("openPositions.highlight")}</span>{" "}
                    {t("openPositions.text")}
                </h2>

                <div className="mt-10 space-y-6">
                    {positions.map((position) => (
                        <Link
                            key={position.id}
                            to={`/job_details/${position.id}`}
                            className="w-full h-full border-2 border-[#E4E3E3] p-6 rounded-[32px] flex gap-4"
                        >
                            {position.image && (
                                <img
                                    src={position.image.url}
                                    srcSet={
                                        position.image.responsive_urls?.length
                                            ? position.image.responsive_urls
                                                .map((url) => `${url} 512w`)
                                                .join(", ")
                                            : undefined
                                    }
                                    sizes="(max-width: 768px) 80px, 180px"
                                    alt={position.name?.[lang]}
                                    className="md:w-[180px] w-20 md:h-[172px] h-20 object-cover rounded-xl"
                                />
                            )}

                            <div className="flex-1">
                                <h2 className="text-[#121212] md:text-[32px] font-bold">
                                    {position.name?.[lang]}
                                </h2>

                                {position.features && (
                                    <p className="text-[#5D5D5D] md:text-sm text-xs font-semibold mt-3">
                                        {position.features[lang]}
                                    </p>
                                )}

                                {position.short_description?.[lang] && (
                                    <p className="text-[#5D5D5D] md:text-base text-xs font-medium mt-4">
                                        {position.short_description[lang]}
                                    </p>
                                )}

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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OpenPositions
