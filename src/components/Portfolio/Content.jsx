/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "../general/Projects";
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

  // Add "All" category if not exists
  const allCategories = [
    { id: 0, name: { en: "All", ar: "الكل" } },
    ...(categories || []),
  ];

  return (
    <section className="container md:py-16">
      <h1 className="text-[#121212] md:text-[56px] text-3xl font-semibold flex justify-center">
        <span className="text-brandColor">{t("portfolio")}&nbsp;</span>
        {t("company")}
      </h1>

      <Tabs
        value={selectedCategory.toString()}
        onValueChange={(val) => setSelectedCategory(Number(val))}
      >
        <TabsList className="flex flex-wrap md:gap-4">
          {allCategories?.map((category) => (
            <TabsTrigger key={category.id} value={category.id.toString()}>
              {language === "en" ? category.name.en : category.name.ar}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="lg:!w-[1200px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mb-10">
          {projects.length > 0 ? (
            projects.map((project) => (
              <Projects
                key={project.id}
                id={project.id}
                image={project.icon?.url}
                title={project.name?.[language] || "Untitled Project"}
                type={project.category?.name?.[language] || "General"}
              />
            ))
          ) : (
            <p className="text-center col-span-full">
              {t("No projects found")}
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        {pagination.last_page > 1 && (
          <div className="flex justify-center items-center gap-4 mb-[120px]">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              {language === "en" ? "Previous" : "السابق"}
            </button>
            <span className="text-lg">
              {language === "en" ? "Page" : "صفحة"} {page}{" "}
              {language === "en" ? "of" : "من"} {pagination.last_page}
            </span>
            <button
              onClick={() =>
                setPage((p) => Math.min(pagination.last_page, p + 1))
              }
              disabled={page === pagination.last_page}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              {language === "en" ? "Next" : "التالي"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Content;
