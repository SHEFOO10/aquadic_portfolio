import { Helmet } from "react-helmet-async";
import Content from "@/components/Portfolio/Content";
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios.js";
import { useState } from "react";
import i18n from "@/components/Hooks/i18n";
import Loading from "@/components/general/Loading";

const Portfolio = () => {
  const language = i18n.language;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await axios.get("category"),
    select: (data) => data.data,
  });
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", selectedCategory],
    queryFn: async () => {
      const response = await axios.get("/project");
      return response.data.data;
    },
    select: (data) => (Array.isArray(data) ? data : []),
  });
  if (isLoading) return <Loading />;
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
          content="https://example.com/aquadic-portfolio.jpg"
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
          content="https://example.com/aquadic-portfolio.jpg"
        />
      </Helmet>

      <Content
        projects={projects}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        language={language}
      />
    </div>
  );
};

export default Portfolio;
