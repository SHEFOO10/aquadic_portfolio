import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { getPositionById } from "@/lib/positions/positions";
import { Skeleton } from "@/components/ui/skeleton";

const ROLE_DESCRIPTION_KEYS = {
  "backend developer": "backendDeveloper",
  "sales representative": "salesRepresentative",
  "graphic designer": "graphicDesigner",
  assistant: "assistant",
};

const getLocalizedText = (value, language) => {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value[language] || value.en || value.ar || "";
  }
  return "";
};

const JobDetailsData = () => {
  const { t, i18n } = useTranslation("aboutus");
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const { id } = useParams();

  const { data: job, isLoading, error } = useQuery({
    queryKey: ["position", id],
    queryFn: () => getPositionById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="container space-y-6 py-10 md:py-14">
        <div className="max-w-5xl space-y-4 rounded-3xl border border-slate-200 p-6 md:p-9">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-9 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="mt-10 h-8 w-1/4" />
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-5/6" />
        <Skeleton className="mt-2 h-4 w-2/3" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <p className="container py-20 text-center text-slate-600" role="alert">
        {language === "ar" ? "لم يتم العثور على الوظيفة." : "Job not found."}
      </p>
    );
  }

  const title =
    getLocalizedText(job.name, language) ||
    getLocalizedText(job.title, language) ||
    (language === "ar" ? "وظيفة شاغرة" : "Open position");
  const englishTitle = getLocalizedText(job.name, "en") || getLocalizedText(job.title, "en");
  const suppliedDescription =
    getLocalizedText(job.description, language) ||
    getLocalizedText(job.short_description, language);
  const descriptionKey = ROLE_DESCRIPTION_KEYS[englishTitle.trim().toLowerCase()];
  const description =
    suppliedDescription ||
    t(
      descriptionKey
        ? `openPositions.descriptions.${descriptionKey}`
        : "openPositions.descriptions.default",
      { title },
    );
  const features = getLocalizedText(job.features, language);

  return (
    <section className="bg-white pb-16 pt-2 md:pb-24">
      <div className="container">
        <article className="mt-8 max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:mt-12 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandColor">
            {t("openPositions.roleLabel")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          {features && (
            <p className="mt-3 text-sm font-semibold text-slate-500">{features}</p>
          )}
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>
        </article>

        {Array.isArray(job.key_responsibilities) && job.key_responsibilities.length > 0 && (
          <section className="mt-14 max-w-5xl md:mt-20">
            <h2 className="text-2xl font-semibold text-brandColor md:text-3xl">
              {t("jobDetails.responsibilities")}
            </h2>
            <ul className="mt-4 list-disc space-y-3 px-8">
              {job.key_responsibilities.map((item, index) => (
                <li key={`${index}-${item}`} className="text-base leading-7 text-slate-700 md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {Array.isArray(job.qualifications) && job.qualifications.length > 0 && (
          <section className="mt-12 max-w-5xl md:mt-16">
            <h2 className="text-2xl font-semibold text-brandColor md:text-3xl">
              {t("jobDetails.qualifications")}
            </h2>
            <ul className="mt-4 list-disc space-y-3 px-8">
              {job.qualifications.map((item, index) => (
                <li key={`${index}-${item}`} className="text-base leading-7 text-slate-700 md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {Array.isArray(job.why_join) && job.why_join.length > 0 && (
          <section className="mt-12 max-w-5xl md:mt-16">
            <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
              {t("jobDetails.whyJoin")} <span className="text-brandColor">AQuadic?</span>
            </h2>
            <ul className="mt-4 list-disc space-y-3 px-8">
              {job.why_join.map((item, index) => (
                <li key={`${index}-${item}`} className="text-base leading-7 text-slate-700 md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
};

export default JobDetailsData;
