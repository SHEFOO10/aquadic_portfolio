import { Helmet } from "react-helmet-async";
import PagesHeader from "@/components/general/PagesHeader";
import WebDevelopement from "@/components/Services/WebDevelopement";
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const WebDevelopment = () => {
  const { t } = useTranslation("webDevelopment");

  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Web Development</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Build high-performance websites and web applications with AQuadic’s expert web development services. We specialize in modern, scalable, and responsive solutions."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="web development, website design, front-end development, back-end development, full-stack development, responsive web design, AQuadic web services"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta
          property="og:title"
          content="AQuadic | Professional Web Development Services"
        />
        <meta
          property="og:description"
          content="AQuadic provides expert web development services, crafting modern, scalable, and responsive websites and applications."
        />
        <meta
          property="og:image"
          content="https://aquadic.com/images/launchBg.png"
        />
        <meta property="og:url" content="https://aquadic.com/webdev" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AQuadic | Professional Web Development Services"
        />
        <meta
          name="twitter:description"
          content="Create stunning and high-performance web applications with AQuadic’s web development expertise."
        />
        <meta
          name="twitter:image"
          content="https://aquadic.com/images/launchBg.png"
        />
      </Helmet>

      <PagesHeader
        fheader={t("web")}
        sheader={t("dev")}
        title={t("webTilte")}
      />
      <WebDevelopement />
    </div>
  );
};

export default WebDevelopment;
