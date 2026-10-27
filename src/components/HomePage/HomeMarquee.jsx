import LogoLoop from "@/components/LogoLoop";
import { marqueeImages } from "@/constants/home/marqueeImages.js";

const technologyLabels = {
  android: "Android",
  angular: "Angular",
  figma: "Figma",
  flutter: "Flutter",
  ios: "iOS",
  javascript: "JavaScript",
  laravel: "Laravel",
};

const logos = marqueeImages.map((src) => {
  const filename = src.split("/").pop()?.replace(/\.svg$/i, "") ?? "";
  const title = technologyLabels[filename] ?? filename;
  return { src, alt: title, title };
});

const HomeMarquee = () => (
  <section className="w-full" aria-label="Technology logos" dir="ltr">
    <div className="w-full overflow-hidden py-4 sm:py-5">
      <LogoLoop
        logos={logos}
        width="100%"
        speed={84}
        direction="left"
        logoHeight={44}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutWidth={0.14}
        labels="hover"
        draggable={false}
        ariaLabel="Technology logos"
        className="w-full"
      />
    </div>
  </section>
);

export default HomeMarquee;
