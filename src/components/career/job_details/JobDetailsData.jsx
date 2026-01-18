import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { getPositionById } from "@/lib/positions/positions";
import { Skeleton } from "@/components/ui/skeleton";

const JobDetailsData = () => {
    const { t, i18n } = useTranslation("aboutus");
    const lang = i18n.language;
    const { id } = useParams();

    const { data: job, isLoading, error } = useQuery({
        queryKey: ["position", id],
        queryFn: () => getPositionById(id),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="container mt-20 space-y-6">
                <div className="flex gap-4">
                    <Skeleton className="md:w-[180px] w-20 md:h-[172px] h-20 rounded-xl" />
                    <div className="flex-1 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                </div>

                <Skeleton className="h-8 w-1/4 mt-10" />
                <Skeleton className="h-4 w-full mt-3" />
                <Skeleton className="h-4 w-5/6 mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
            </div>
        );
    }

    if (error || !job) {
        return <p className="text-center mt-20">Job not found</p>;
    }

    return (
        <section className=''>
            <div className='container'>
                <div className="w-full h-full border-2 border-[#E4E3E3] p-6 rounded-[32px] mt-10 flex gap-4">
                    <img
                        src={job.image?.url}
                        alt={job.name?.[lang]}
                        className='md:w-[180px] w-20 md:h-[172px] h-20'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-[32px] font-bold'>
                            {job.name?.[lang]}
                        </h2>

                        {job.features?.[lang] && (
                            <p className="text-[#5D5D5D] md:text-sm text-xs font-semibold mt-3">
                                {job.features[lang]}
                            </p>
                        )}

                        {job.description?.[lang] && (
                            <p className="text-[#5D5D5D] md:text-base text-xs font-medium mt-4">
                                {job.description[lang]}
                            </p>
                        )}
                    </div>
                </div>

                {job.key_responsibilities && job.key_responsibilities.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-[#EA433A] text-[32px] font-medium">
                            {t("jobDetails.responsibilities")}
                        </h2>

                        <ul className="list-disc px-8">
                            {job.key_responsibilities.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[#121212] text-lg font-medium leading-[150%] mt-3"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {job.qualifications && job.qualifications.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-[#EA433A] text-[32px] font-medium">
                            {t("jobDetails.qualifications")}
                        </h2>

                        <ul className="list-disc px-8">
                            {job.qualifications.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[#121212] text-lg font-medium leading-[150%] mt-3"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {job.why_join && job.why_join.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-[#121212] text-[32px] font-medium">
                            {t("jobDetails.whyJoin")}{" "}
                            <span className="text-[#EA433A]">Aquadic?</span>
                        </h2>

                        <ul className="list-disc px-8">
                            {job.why_join.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[#121212] text-lg font-medium leading-[150%] mt-3"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobDetailsData
