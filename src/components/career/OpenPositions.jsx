import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { getPositions } from "@/lib/positions/positions";

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

const OpenPositions = () => {
  const { t, i18n } = useTranslation("aboutus");
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const reducedMotion = useReducedMotion();
  const {
    data: positionData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
  });
  const positions = Array.isArray(positionData) ? positionData : [];

  if (isLoading) {
    return (
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="mb-8 space-y-3">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-10 w-64" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="min-h-64 rounded-3xl border border-slate-200 p-6">
                <Skeleton className="h-12 w-12 rounded-2xl" />
                <Skeleton className="mt-6 h-7 w-2/3" />
                <Skeleton className="mt-4 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-5/6" />
                <Skeleton className="mt-8 h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="rounded-3xl border border-slate-200 px-6 py-12 text-center" role="alert">
            <p className="text-slate-700">
              {language === "ar" ? "تعذر تحميل الوظائف المتاحة." : "Unable to load open positions."}
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-5 rounded-full border border-brandColor px-5 py-2 font-semibold text-brandColor transition hover:bg-brandColor hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor"
            >
              {language === "ar" ? "حاول مرة أخرى" : "Try again"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between md:mb-10 md:pb-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-brandColor">
              {t("openPositions.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              <span className="text-brandColor">{t("openPositions.highlight")}</span>{" "}
              {t("openPositions.text")}
            </h2>
          </div>
          {positions.length > 0 && (
            <p className="shrink-0 text-sm font-medium text-slate-500">
              {t("openPositions.count", { count: positions.length })}
            </p>
          )}
        </div>

        {positions.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {positions.map((position, index) => {
              const title =
                getLocalizedText(position.name, language) ||
                getLocalizedText(position.title, language) ||
                (language === "ar" ? "وظيفة شاغرة" : "Open position");
              const englishTitle =
                getLocalizedText(position.name, "en") || getLocalizedText(position.title, "en");
              const suppliedDescription =
                getLocalizedText(position.short_description, language) ||
                getLocalizedText(position.description, language);
              const descriptionKey = ROLE_DESCRIPTION_KEYS[englishTitle.trim().toLowerCase()];
              const description =
                suppliedDescription ||
                t(
                  descriptionKey
                    ? `openPositions.descriptions.${descriptionKey}`
                    : "openPositions.descriptions.default",
                  { title },
                );

              return (
                <motion.article
                  key={position.id}
                  className="h-full"
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.35,
                    delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.24),
                  }}
                >
                  <Link
                    to={`/job_details/${position.id}`}
                    className="group flex h-full min-h-64 flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brandColor/40 hover:shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor md:p-7"
                  >
                    <div className="flex items-center justify-between gap-3">
                      {position.image?.url ? (
                        <img
                          src={position.image.url}
                          alt=""
                          className="h-12 w-12 rounded-2xl object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandColor/10 text-brandColor">
                          <Briefcase className="h-6 w-6" aria-hidden="true" />
                        </span>
                      )}
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {t("openPositions.roleLabel")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-slate-950 transition-colors group-hover:text-brandColor md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 md:text-base">
                      {description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-brandColor">
                      <span>{t("viewDetails")}</span>
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 px-6 py-12 text-center">
            <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brandColor shadow-sm">
              <Briefcase className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mx-auto mt-4 max-w-lg text-slate-600">
              {t("openPositions.empty")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
