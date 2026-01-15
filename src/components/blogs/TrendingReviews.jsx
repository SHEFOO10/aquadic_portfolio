import { useTranslation } from 'react-i18next';
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/lib/blogs/blogs";
import { Skeleton } from "../ui/skeleton";

const TrendingReviews = () => {
    const { t, i18n } = useTranslation("aboutus");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["blogs", "trending"],
        queryFn: getBlogs,
    });

    const blogs = data?.data?.slice(0, 4) || [];

    return (
        <section className="container md:py-[68px]">
            <h2 className="text-[#121212] md:text-[40px] text-2xl font-bold leading-[150%] text-center">
                {t("trending.prefix")}{" "}
                <span className="text-[#EA433A]">{t("trending.highlight")}</span>{" "}
                {t("trending.suffix")}
            </h2>


            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                {isLoading &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="px-6 py-4 border-2 border-[#E3E3E3] rounded-[32px] flex gap-4"
                        >
                            <Skeleton className="w-[117px] h-[117px] rounded-xl" />

                            <div className="flex-1 space-y-3">
                                <Skeleton className="h-5 w-[80%]" />
                                <Skeleton className="h-4 w-[100%]" />
                                <Skeleton className="h-4 w-[60%]" />

                                <div className="flex items-center gap-2 mt-2">
                                    <Skeleton className="w-[30px] h-[30px] rounded-full" />
                                    <Skeleton className="h-3 w-[120px]" />
                                </div>
                            </div>
                        </div>
                    ))}

                {isError && !isLoading && null}

                {!isLoading &&
                    !isError &&
                    blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="px-6 py-4 border-2 border-[#E3E3E3] rounded-[32px] flex flex-wrap gap-4"
                        >
                            <img
                                src={blog.image?.url}
                                alt={blog.name?.[i18n.language]}
                                className="w-[117px] h-[117px] object-cover rounded-xl"
                            />

                            <div className="flex-1">
                                <h2 className="text-[#121212] md:text-2xl text-base font-bold leading-[150%]">
                                    {blog.name?.[i18n.language]}
                                </h2>

                                <p className="mt-1 text-[#5D5D5D] text-sm leading-[150%] line-clamp-2">
                                    {blog.short_description?.[i18n.language]}
                                </p>

                                <div className="mt-2 flex items-center gap-2">
                                    <div className="w-[30px] h-[30px] rounded-full bg-[#EA433A] flex items-center justify-center text-white text-xs font-bold">
                                        {blog.author?.charAt(0)}
                                    </div>

                                    <p className="text-[#5D5D5D] text-xs font-semibold">
                                        {blog.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default TrendingReviews
