/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "../general/Projects";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Content = ({ projects, categories, selectedCategory, setSelectedCategory }) => {
  const { i18n: { language }, t } = useTranslation("portfolio");
  return (
    <section className="container md:py-16">
      <h1 className="text-[#121212] md:text-[56px] text-3xl font-semibold flex justify-center">
        <span className="text-brandColor">{t("portfolio")}&nbsp;</span>
        {t("company")}
      </h1>

      <Tabs value={selectedCategory.toString()} onValueChange={setSelectedCategory}>
        <TabsList className="flex flex-wrap md:gap-4">
          {categories?.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id.toString()}
              onClick={() => setSelectedCategory(category.id)}
            >
              {language === "en" ? category.name.en : category.name.ar}
            </TabsTrigger>

          ))}
        </TabsList>

        {categories?.map(category => {
          const filteredProjects = projects?.filter(
            (project) => String(project.category_id) === String(category.id)
          ) || [];

          console.log("Category:", category.id, category.name);
          console.log("Filtered Projects for Category:", category.id, filteredProjects);

          return (
            <TabsContent key={category.id} value={category.id.toString()} className="lg:!w-[1200px]">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mb-[120px]">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                    <Projects
                      key={project.id}
                      image={project.image}
                      title={project.name?.[language] || "Untitled Project"}
                      type={project.category?.name?.[language] || "General"}
                    />
                  ))
                ) : (
                  <p className="text-center">{t("No projects found")}</p>
                )}
              </div>
            </TabsContent>
          );
        })}

      </Tabs>
    </section>
  );
};

export default Content;
