import { Helmet } from "react-helmet-async";
import PagesHeader from "@/components/general/PagesHeader";
import SoftwareTesting from "@/components/Services/SoftwareTesting";
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const Testing = () => {
  const { t } = useTranslation("testing");

  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Software Testing</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Ensure the highest quality for your software with AQuadic’s professional testing services, including automation, manual testing, and QA strategies."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="software testing, QA services, automation testing, manual testing, software quality assurance, bug fixing, AQuadic testing services"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta
          property="og:title"
          content="AQuadic | Software Testing Services"
        />
        <meta
          property="og:description"
          content="Deliver flawless software with AQuadic’s expert testing services. We offer comprehensive quality assurance, automation, and manual testing."
        />
        <meta
          property="og:image"
          content="https://aquadic.com/images/launchBg.png"
        />
        <meta property="og:url" content="https://aquadic.com/testing" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AQuadic | Software Testing Services"
        />
        <meta
          name="twitter:description"
          content="AQuadic provides professional software testing services to ensure high-quality, bug-free applications."
        />
        <meta
          name="twitter:image"
          content="https://aquadic.com/images/launchBg.png"
        />
      </Helmet>

      <PagesHeader
        fheader={t("software")}
        sheader={t("testing")}
        title={t("testingTitle")}
      />
      <SoftwareTesting />
    </div>
  );
};

export default Testing;
