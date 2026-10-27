import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SpotlightCard from "@/components/SpotlightCard";
import CountriesServed from "../icons/about/CountriesServed";
import HappyClients from "../icons/about/HappyClients";
import TechExperts from "../icons/about/TechExperts";
import Years from "../icons/about/Years";

const AboutStatics = () => {
  const { t } = useTranslation("aboutus");
  const reducedMotion = useReducedMotion();
  const metrics = [
    {
      icon: Years,
      value: t("aboutStatics.years.value"),
      title: t("aboutStatics.years.title"),
      description: t("aboutStatics.years.description"),
    },
    {
      icon: TechExperts,
      value: t("aboutStatics.experts.value"),
      title: t("aboutStatics.experts.title"),
      description: t("aboutStatics.experts.description"),
    },
    {
      icon: HappyClients,
      value: t("aboutStatics.clients.value"),
      title: t("aboutStatics.clients.title"),
      description: t("aboutStatics.clients.description"),
    },
    {
      icon: CountriesServed,
      value: t("aboutStatics.countries.value"),
      title: t("aboutStatics.countries.title"),
      description: t("aboutStatics.countries.description"),
    },
  ];

  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const MetricIcon = metric.icon;
          return (
            <motion.article
              key={metric.title}
              className="h-full"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reducedMotion ? 0 : 0.42,
                delay: reducedMotion ? 0 : index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard
                theme="light"
                className="flex h-full min-h-[236px] flex-col !p-6 md:!p-7"
                spotlightColor="#EA433A"
                intensity={0.18}
                spotlightSize={250}
                borderGlow={0.35}
                flare={false}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50">
                    <MetricIcon />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.14em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  {metric.value}
                </p>
                <h2 className="mt-2 text-base font-semibold text-slate-700 md:text-lg">
                  {metric.title}
                </h2>
                {metric.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {metric.description}
                  </p>
                )}
              </SpotlightCard>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStatics;
