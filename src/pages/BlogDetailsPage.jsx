import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogById } from "@/lib/blogs/blogs";
import { useParams } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();
    const { i18n } = useTranslation("aboutus");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["blog", id],
        queryFn: () => getBlogById(id),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-10 w-[60%]" />
                <Skeleton className="h-6 w-[40%]" />
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-[90%]" />
            </div>
        );
    }

    if (isError || !data) return <p className="text-red-500">Failed to load blog.</p>;

    const blog = data;

    return (
        <section className="container md:py-14">
            <h1 className="text-[#121212] md:text-[40px] text-2xl font-bold leading-[150%] mb-2">
                {blog.name?.[i18n.language]}
            </h1>

            <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EA433A] flex items-center justify-center text-white font-bold">
                    {blog.author?.charAt(0)}
                </div>
                <p className="text-[#5D5D5D] text-sm font-semibold">{blog.author}</p>
            </div>

            {blog.short_description?.[i18n.language] && (
                <p className="text-[#5D5D5D] text-base mb-6">
                    {blog.short_description[i18n.language]}
                </p>
            )}

            {blog.image?.url && (
                <img
                    src={blog.image.url}
                    alt={blog.name?.[i18n.language]}
                    className="w-full h-auto rounded-xl mb-6"
                />
            )}

            <div
                className="text-[#5D5D5D] text-base leading-7"
                dangerouslySetInnerHTML={{ __html: blog.content?.[i18n.language] }}
            />
        </section>
    );
};

export default BlogDetails;
