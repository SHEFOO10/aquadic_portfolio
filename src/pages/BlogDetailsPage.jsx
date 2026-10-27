import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogById } from "@/lib/blogs/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation("aboutus");
  const language = i18n.language;
  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <div className="container space-y-4 py-10">
        <Skeleton className="h-10 w-[60%]" />
        <Skeleton className="h-6 w-[40%]" />
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <p className="container py-16 text-center text-red-600" role="alert">
        Unable to load this article. Please try again later.
      </p>
    );
  }

  const title = blog.name?.[language] || blog.name?.en || "AQuadic article";
  const description =
    blog.short_description?.[language] || blog.short_description?.en || "";
  const rawContent = blog.content?.[language];
  const sanitizedContent =
    typeof rawContent === "string"
      ? DOMPurify.sanitize(rawContent, {
          FORBID_TAGS: ["style"],
          FORBID_ATTR: ["style"],
        })
      : "";
  const canonicalUrl = `https://aquadic.com/blogs/${encodeURIComponent(id)}`;

  return (
    <>
      <Helmet>
        <title>{title} | AQuadic</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | AQuadic`} />
        {description && <meta property="og:description" content={description} />}
        {blog.image?.url && <meta property="og:image" content={blog.image.url} />}
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section
        className="container py-10 md:py-14"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h1 className="mb-2 text-2xl font-bold leading-[150%] text-[#121212] md:text-[40px]">
          {title}
        </h1>
        {blog.author && (
          <div className="mb-4 flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EA433A] font-bold text-white"
              aria-hidden="true"
            >
              {blog.author.charAt(0)}
            </div>
            <p className="text-sm font-semibold text-[#5D5D5D]">{blog.author}</p>
          </div>
        )}
        {description && <p className="mb-6 text-base text-[#5D5D5D]">{description}</p>}
        {blog.image?.url && (
          <img
            src={blog.image.url}
            alt={title}
            className="mb-6 h-auto w-full rounded-xl"
            loading="eager"
            decoding="async"
          />
        )}
        <div
          className="prose max-w-none text-base leading-7 text-[#5D5D5D]"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </section>
    </>
  );
};

export default BlogDetails;
