import { Helmet } from "react-helmet-async";
import AboutStatics from "@/components/about-us/AboutStatics";
import AboutTechServices from "@/components/about-us/AboutTechServices";
import AboutUsHeader from "@/components/about-us/AboutUsHeader";
import OurWork from "@/components/about-us/OurWork";

const AboutUsPage = () => (
  <>
    <Helmet>
      <title>About AQuadic | Software Solutions</title>
      <meta
        name="description"
        content="Meet AQuadic, an Alexandria-based software team creating web, mobile, and custom digital products."
      />
      <link rel="canonical" href="https://aquadic.com/about-us" />
    </Helmet>
    <div className="overflow-hidden bg-white">
      <AboutUsHeader />
      <AboutStatics />
      <AboutTechServices />
      <OurWork />
    </div>
  </>
);

export default AboutUsPage;
