import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Projects = ({ id, image, icon, title, type }) => {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation("portfolio");

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Link
        to={`/portfolio/${id}`}
        aria-label={`${t("viewProject")}: ${title}`}
        className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
      >
        <div className="relative aspect-[1.35/1] overflow-hidden rounded-2xl bg-slate-100">
          {image ? (
            <img
              src={image}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
              {icon ? (
                <img
                  src={icon}
                  className="h-20 w-20 object-contain"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="text-5xl font-semibold tracking-tight text-slate-300">
                  {title?.substring(0, 2).toUpperCase() || "AQ"}
                </span>
              )}
            </div>
          )}
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              {type}
            </p>
            <h2 className="mt-1 truncate text-xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-brandColor md:text-2xl">
              {title}
            </h2>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group-hover:text-brandColor">
              {t("viewProject")}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
          <span
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all group-hover:border-brandColor group-hover:bg-brandColor group-hover:text-white"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

Projects.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Projects;
