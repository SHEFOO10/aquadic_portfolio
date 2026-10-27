import { motion, useReducedMotion } from "framer-motion";
import { Code2, Palette, SearchCheck, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Analysis from "../../assets/images/analysis.jpg";
import Design from "../../assets/images/design.jpg";
import Development from "../../assets/images/dev.jpg";
import Testing from "../../assets/images/testing.jpg";

const AboutTechServices = () => {
  const { t } = useTranslation("aboutus");
  const reducedMotion = useReducedMotion();
  const services = [
    { image: Analysis, title: t("aboutTech.services.analysis"), icon: SearchCheck },
    { image: Design, title: t("aboutTech.services.design"), icon: Palette },
    { image: Development, title: t("aboutTech.services.development"), icon: Code2 },
    { image: Testing, title: t("aboutTech.services.testing"), icon: ShieldCheck },
  ];

  return (
    <section className="container py-14 md:py-24">
      <motion.div
        className="mx-auto mb-9 max-w-3xl text-center md:mb-12"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brandColor">
          {t("aboutTech.titleStart")}
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
          <span className="text-brandColor">{t("aboutTech.titleHighlight")}</span>{" "}
          {t("aboutTech.titleEnd")}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
          {t("aboutTech.description")}
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <motion.article
              key={service.title}
              className="group relative isolate min-h-[300px] overflow-hidden rounded-3xl bg-slate-950 shadow-sm"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reducedMotion ? 0 : 0.45,
                delay: reducedMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between p-5 text-white md:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm">
                    <ServiceIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                    {service.title}
                  </h3>
                  <span className="mt-4 block h-1 w-10 rounded-full bg-brandColor transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default AboutTechServices;
