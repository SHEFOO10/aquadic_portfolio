import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";
import HomeMarquee from "@/components/HomePage/HomeMarquee.jsx";
import ContactUs from "@/components/HomePage/ContactUs";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[64px] sm:gap-[128px]">
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Innovative Software Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="AQuadic is a cutting-edge software house delivering innovative digital solutions. We specialize in web and mobile development, UI/UX design, and scalable software architecture."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="AQuadic, software house, web development, mobile development, UI/UX design, custom software solutions, technology, IT services"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta
          property="og:title"
          content="AQuadic | Innovative Software Solutions"
        />
        <meta
          property="og:description"
          content="Explore AQuadic’s innovative software development services, including custom web and mobile app solutions."
        />
        <meta
          property="og:image"
          content="https://aquadic.com/images/launchBg.png"
        />
        <meta property="og:url" content="https://aquadic.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AQuadic | Innovative Software Solutions"
        />
        <meta
          name="twitter:description"
          content="AQuadic delivers top-tier web and mobile development solutions, UI/UX design, and digital innovation."
        />
        <meta
          name="twitter:image"
          content="https://aquadic.com/images/launchBg.png"
        />
      </Helmet>

      <HomeHero />
      <HomeMarquee />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
