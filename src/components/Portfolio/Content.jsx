import PropTypes from "prop-types";
import Projects from "@/components/general/Projects";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Content = ({
  projects,
  categories,
  selectedCategory,
  setSelectedCategory,
  page,
  setPage,
  pagination,
}) => {
  const {
    i18n: { language },
    t,
  } = useTranslation("portfolio");

  const allCategories = [
    { id: 0, name: { en: t("all"), ar: t("all") } },
    ...(categories || []),
  ];
  const totalProjects = pagination.total || projects.length;
  const isArabic = language === "ar";

  return (
    <section className="pb-24 pt-12 md:pb-28 md:pt-20">
      <div className="container mx-auto">
        <header className="mb-7 flex items-end justify-between gap-4 border-b border-slate-200 pb-6 md:mb-9 md:pb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            {t("portfolio")}
          </h1>
          <p className="shrink-0 pb-1 text-sm text-slate-500">
            {totalProjects} {isArabic ? "مشروع" : "projects"}
          </p>
        </header>

        <div
          className="mb-9 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label={isArabic ? "تصفية المشاريع" : "Filter projects"}
        >
          {allCategories.map((category) => {
            const active = String(selectedCategory) === String(category.id);
            const label =
              Number(category.id) === 0
                ? t("all")
                : category.name?.[language] ||
                  category.name?.en ||
                  category.name?.ar ||
                  category.name;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(Number(category.id))}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor ${
                  active
                    ? "bg-slate-950 text-white"
                    : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-14">
          {projects.length > 0 ? (
            projects.map((project) => (
              <Projects
                key={project.id}
                id={project.id}
                image={project.image?.url}
                icon={project.icon?.url}
                title={project.name?.[language] || "Untitled Project"}
                type={project.category?.name?.[language] || "General"}
              />
            ))
          ) : (
            <p className="col-span-full py-16 text-center text-slate-500">
              {isArabic ? "لا توجد مشاريع لعرضها." : "No projects found."}
            </p>
          )}
        </div>

        {pagination.last_page > 1 && (
          <nav
            className="mt-14 flex items-center justify-center gap-5"
            aria-label={isArabic ? "صفحات المشاريع" : "Project pages"}
          >
            <button
              type="button"
              onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
              disabled={page === 1}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isArabic ? "السابق" : "Previous"}
            </button>
            <span className="text-sm tabular-nums text-slate-500">
              {page} / {pagination.last_page}
            </span>
            <button
              type="button"
              onClick={() =>
                setPage((currentPage) =>
                  Math.min(pagination.last_page, currentPage + 1),
                )
              }
              disabled={page === pagination.last_page}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isArabic ? "التالي" : "Next"}
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

Content.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  selectedCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    total: PropTypes.number,
    last_page: PropTypes.number,
  }).isRequired,
};

export default Content;
