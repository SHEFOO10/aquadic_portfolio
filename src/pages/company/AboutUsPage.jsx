import AboutStatics from "@/components/about-us/AboutStatics"
import AboutTechServices from "@/components/about-us/AboutTechServices"
import AboutUsHeader from "@/components/about-us/AboutUsHeader"
import OurWork from "@/components/about-us/OurWork"
import Testimonials from "@/components/HomePage/Testimonials"

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsHeader />
            <AboutStatics />
            <AboutTechServices />
            <OurWork />
            <Testimonials />
        </div>
    )
}

export default AboutUsPage
