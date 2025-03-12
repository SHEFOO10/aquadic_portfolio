import { Helmet } from "react-helmet-async";
import PagesHeader from "@/components/general/PagesHeader";
import MobileDevelopment from "../components/Services/MobileDevelopment";
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const MobDevelopment = () => {
  const { t } = useTranslation("mobDevelopment");

  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Mobile App Development</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="AQuadic specializes in mobile app development, delivering high-performance iOS and Android apps with cutting-edge technology and seamless user experience."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="AQuadic, mobile app development, iOS development, Android development, cross-platform apps, Flutter, React Native, app design, software house"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta
          property="og:title"
          content="AQuadic | Expert Mobile App Development"
        />
        <meta
          property="og:description"
          content="We build high-quality mobile apps tailored to your needs. Explore our iOS, Android, and cross-platform development services."
        />
        <meta
          property="og:image"
          content="https://example.com/aquadic-mobile-dev.jpg"
        />
        <meta
          property="og:url"
          content="https://aquadic.com/mobile-development"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AQuadic | Expert Mobile App Development"
        />
        <meta
          name="twitter:description"
          content="Custom mobile apps for iOS and Android. Experience seamless, scalable, and innovative app development with AQuadic."
        />
        <meta
          name="twitter:image"
          content="https://example.com/aquadic-mobile-dev.jpg"
        />
      </Helmet>

      <PagesHeader
        fheader={t("mobile")}
        sheader={t("app")}
        title={t("mobTitle")}
      />
      <MobileDevelopment />
    </div>
  );
};

export default MobDevelopment;
