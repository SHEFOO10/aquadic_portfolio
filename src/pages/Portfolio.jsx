import { Helmet } from "react-helmet-async";
import Content from "@/components/Portfolio/Content";
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios.js";
import { useState } from "react";
import i18n from "@/components/Hooks/i18n";
import Loading from "@/components/general/Loading";

const isGeneralLabel = (value) =>
  ["general", "عام"].includes(String(value ?? "").trim().toLowerCase());

const getLocalizedNames = (value) => {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") {
    return Object.values(value).filter((name) => typeof name === "string");
  }
  return [];
};

const isGeneralCategory = (category) =>
  getLocalizedNames(category.name).some(isGeneralLabel);

const fetchAllProjectPages = async (categoryId) => {
  const projects = [];
  let pageNumber = 1;
  let responseData;

  do {
    const response = await axios.get("/project", {
      params: {
        page: pageNumber,
        ...(categoryId === undefined ? {} : { category_id: categoryId }),
      },
    });
    responseData = response.data;
    projects.push(...(Array.isArray(responseData.data) ? responseData.data : []));
    pageNumber += 1;
  } while (responseData.next_page_url && pageNumber <= 100);

  return projects;
};

const Portfolio = () => {
  const language = i18n.language;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [page, setPage] = useState(1);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await axios.get("category"),
    select: (data) => data.data.data || data.data,
  });

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["projects", selectedCategory, page],
    queryFn: async () => {
      const generalCategory = categories?.find(isGeneralCategory);
      const isGeneralSelected =
        generalCategory && String(selectedCategory) === String(generalCategory.id);

      if (isGeneralSelected) {
        const otherCategoryIds = categories
          .filter((category) => String(category.id) !== String(generalCategory.id))
          .map((category) => category.id);
        const [allProjects, ...categorizedProjects] = await Promise.all([
          fetchAllProjectPages(),
          ...otherCategoryIds.map((categoryId) => fetchAllProjectPages(categoryId)),
        ]);
        const projectsInOtherCategories = new Set(
          categorizedProjects.flat().map((project) => String(project.id)),
        );
        const generalProjects = allProjects.filter((project) => {
          const projectCategoryId = project.category_id ?? project.category?.id;
          if (projectCategoryId != null) {
            return String(projectCategoryId) === String(generalCategory.id);
          }

          const categoryNames = getLocalizedNames(project.category?.name);
          if (categoryNames.some(isGeneralLabel)) return true;
          return !projectsInOtherCategories.has(String(project.id));
        });

        return {
          data: generalProjects,
          current_page: 1,
          last_page: 1,
          total: generalProjects.length,
        };
      }

      const response = await axios.get("/project", {
        params: {
          page: page,
          category_id: selectedCategory !== 0 ? selectedCategory : undefined,
        },
      });
      return response.data;
    },
  });

  const projects = data?.data || [];
  const pagination = {
    current_page: data?.current_page,
    last_page: data?.last_page,
    total: data?.total,
  };

  if (isLoading) return <Loading />;
  if (isError) {
    return (
      <div className="container py-20 text-center" role="alert">
        <p className="text-lg text-slate-700">{language === "ar" ? "تعذر تحميل المشاريع." : "Unable to load projects."}</p>
        <button type="button" onClick={() => refetch()} className="mt-5 rounded-full border border-brandColor px-6 py-3 font-semibold text-brandColor">
          {language === "ar" ? "حاول مرة أخرى" : "Try again"}
        </button>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Our Portfolio & Projects</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore AQuadic’s portfolio of innovative software projects. From mobile apps to web development, we deliver high-quality, scalable digital solutions."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="AQuadic portfolio, software projects, web development, mobile apps, UI/UX design, case studies, technology solutions"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta
          property="og:title"
          content="AQuadic | Our Portfolio & Projects"
        />
        <meta
          property="og:description"
          content="See AQuadic’s latest projects in web and mobile development, UI/UX design, and cutting-edge technology solutions."
        />
        <meta
          property="og:image"
          content="https://aquadic.com/images/launchBg.png"
        />
        <meta property="og:url" content="https://aquadic.com/portfolio" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AQuadic | Our Portfolio & Projects"
        />
        <meta
          name="twitter:description"
          content="Discover AQuadic’s best work in software development, from custom web solutions to mobile applications."
        />
        <meta
          name="twitter:image"
          content="https://aquadic.com/images/launchBg.png"
        />
      </Helmet>

      <Content
        projects={projects}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={(val) => {
          setSelectedCategory(val);
          setPage(1);
        }}
        page={page}
        setPage={setPage}
        pagination={pagination}
        language={language}
      />
    </div>
  );
};

export default Portfolio;
