import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { axios } from "../lib/axios";
import { useTranslation } from "react-i18next";
import Loading from "@/components/general/Loading";
import { Globe } from "lucide-react";
import Behance from "@/components/icons/projects/Behance";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SingleProjectPage = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation("portfolio");
  const language = i18n.language;
  const isAr = language === "ar";
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`project/${id}`);
        setProject(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProjectData();
    }
  }, [id, language]);

  if (loading) return <Loading />;
  if (!project)
    return (
      <div className="container py-20 text-center text-2xl">
        Project not found
      </div>
    );

  const title = project.name?.[language] || project.name;
  const shortDesc =
    project.short_description?.[language] || project.short_description;
  const fullDesc = project.description?.[language] || project.description;
  const mainImage = project.image?.url;
  const icon = project.icon?.url;

  return (
    <div className="bg-white overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Section 1: Hero */}
      <section className="container py-12 md:py-20 flex flex-col items-center text-center">
        <div className="relative inline-block px-4 md:px-0">
          {icon && (
            <div
              className={`absolute -top-10 ${isAr ? "-right-10 md:-right-14" : "-left-10 md:-left-14"} w-[40px] h-[40px] md:w-[56px] md:h-[56px] ${isAr ? "rotate-[15deg]" : "rotate-[-25deg]"} shadow-xl rounded-xl overflow-hidden`}
            >
              <img
                src={icon}
                alt="Icon"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#121212] mb-6 max-w-5xl leading-tight">
            {title}
          </h1>
        </div>

        {shortDesc && (
          <p className="text-[#5D5D5D] max-w-4xl text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-medium px-4">
            “{shortDesc}”
          </p>
        )}

        {/* Store Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20 px-4">
          {project.google_play_url && (
            <a
              href={project.google_play_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
            >
              <img
                src="/images/techLogos/android.svg"
                className="w-5 h-5 md:w-7 md:h-7"
                alt="Play Store"
              />
              <div className="text-left ltr">
                <p className="text-[10px] text-gray-400 capitalize -mb-1">
                  Download here
                </p>
                <p className="font-bold text-xs md:text-sm">Google Play</p>
              </div>
            </a>
          )}
          {project.apple_store_url && (
            <a
              href={project.apple_store_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
            >
              <img
                src="/images/techLogos/ios.svg"
                className="w-5 h-5 md:w-7 md:h-7"
                alt="App Store"
              />
              <div className="text-left ltr">
                <p className="text-[10px] text-gray-400 capitalize -mb-1">
                  Download here
                </p>
                <p className="font-bold text-xs md:text-sm">App Store</p>
              </div>
            </a>
          )}
          {project.app_gallery_url && (
            <a
              href={project.app_gallery_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
            >
              <span className="text-xl md:text-2xl">华为</span>
              <div className="text-left ltr">
                <p className="text-[10px] text-gray-400 capitalize -mb-1">
                  Explore it On
                </p>
                <p className="font-bold text-xs md:text-sm">App Gallery</p>
              </div>
            </a>
          )}
          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
            >
              <Globe className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />
              <p className="font-bold text-xs md:text-sm">
                {isAr ? "زيارة الموقع" : "Visit Website"}
              </p>
            </a>
          )}
          {project.behance_url && (
            <a
              href={project.behance_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
            >
              <img
                src="/src/assets/images/Be.svg"
                className="w-5 h-5 md:w-7 md:h-7"
                alt="Behance"
              />
              <p className="font-bold text-xs md:text-sm">
                {isAr ? "مشاهدة بيهانس" : "View on Behance"}
              </p>
            </a>
          )}
        </div>

        {/* Main Product Image with Background */}
        {mainImage && (
          <div className="relative w-full max-w-2xl mx-auto px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FF] to-white rounded-[24px] md:rounded-[40px] -z-10 transform scale-105" />
            <div className="bg-[#E8F1F8] rounded-[24px] md:rounded-[40px] p-4 md:p-12 lg:p-20 shadow-xl overflow-hidden">
              <img
                src={mainImage}
                alt={title}
                className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>

      {/* Section 2: About The Project */}
      <section className="container py-6 md:py-12 mb-10 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[32px] font-bold">
            <span className="text-[#1073C0]">
              {t("aboutProject").split(" ").slice(0, 1).join(" ")}
            </span>{" "}
            {t("aboutProject").split(" ").slice(1).join(" ")}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto text-center text-[#4A4A4A] text-base md:text-2xl leading-[1.6] md:leading-[1.8] font-medium px-4">
          {fullDesc}
        </div>
      </section>

      {/* Section 3: Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="container py-6 md:py-12 mb-10 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-[32px] font-bold">
              <span className="text-[#1073C0]">
                {t("technologiesUsed").split(" ").slice(0, 1).join(" ")}
              </span>{" "}
              {t("technologiesUsed").split(" ").slice(1).join(" ")}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
            {project.technologies.map((tech) => (
              <div
                key={tech.id}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex items-center justify-center transition-transform hover:scale-105"
                title={tech.name}
              >
                {tech.image?.url ? (
                  <img
                    src={tech.image.url}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-xs">{tech.name}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Site Preview */}
      {project.galleries && project.galleries.length > 0 && (
        <section className="bg-[#F6FAFD] py-12 mb-20">
          <div className="container">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-[#121212] md:text-[48px] text-2xl font-semibold">
                  Site Preview
                </h2>
                <p className="text-[#5D5D5D] md:text-xl font-medium mt-4">
                  Take a look inside {title} and explore its features through these screenshots.
                </p>
              </div>
              {project.behance_url && (
                <a
                  href={project.behance_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[379px] h-14 border-2 border-[#1073C0] rounded-[40px] flex items-center justify-center gap-3 hover:bg-[#1073C0] hover:text-white transition-all"
                >
                  <Behance />
                  <p className="text-lg font-semibold">View on Behance</p>
                </a>
              )}
            </div>

            <Tabs defaultValue="general">
              <TabsList className="!border-none !bg-transparent justify-start !rounded-full">
                {project.galleries.some(g => g.category_id === 1) && (
                  <TabsTrigger
                    value="general"
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 !text-sm"
                  >
                    General
                  </TabsTrigger>
                )}
                {project.galleries.some(g => g.category_id === 2) && (
                  <TabsTrigger
                    value="mobile_app"
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 !text-sm"
                  >
                    Mobile App
                  </TabsTrigger>
                )}
                {project.galleries.some(g => g.category_id === 3) && (
                  <TabsTrigger
                    value="website"
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 !text-sm"
                  >
                    Website
                  </TabsTrigger>
                )}
                {project.galleries.some(g => g.category_id === 4) && (
                  <TabsTrigger
                    value="landing"
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 !text-sm"
                  >
                    Landing page
                  </TabsTrigger>
                )}
                {project.galleries.some(g => g.category_id === 5) && (
                  <TabsTrigger
                    value="dashboard"
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 !text-sm"
                  >
                    Dashboard
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="general" className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {project.galleries
                    .filter((g) => g.category_id === 1)
                    .slice(0, 3)
                    .map((gallery) => (
                      <div
                        key={gallery.id}
                        className="md:w-[379px] h-[335px] w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all"
                      >
                        <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                          {gallery.name}
                        </h3>
                        <img
                          src={gallery.image?.url}
                          alt={gallery.name}
                          className="w-full h-auto object-cover rounded-xl mt-2"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile_app" className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {project.galleries
                    .filter((g) => g.category_id === 2)
                    .slice(0, 3)
                    .map((gallery) => (
                      <div
                        key={gallery.id}
                        className="md:w-[379px] h-[335px] w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all"
                      >
                        <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                          {gallery.name}
                        </h3>
                        <img
                          src={gallery.image?.url}
                          alt={gallery.name}
                          className="w-full h-auto object-cover rounded-xl mt-2"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="website" className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {project.galleries
                    .filter((g) => g.category_id === 3)
                    .slice(0, 3)
                    .map((gallery) => (
                      <div
                        key={gallery.id}
                        className="md:w-[379px] h-[335px] w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all"
                      >
                        <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                          {gallery.name}
                        </h3>
                        <img
                          src={gallery.image?.url}
                          alt={gallery.name}
                          className="w-full h-auto object-cover rounded-xl mt-2"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="landing" className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {project.galleries
                    .filter((g) => g.category_id === 4)
                    .slice(0, 3)
                    .map((gallery) => (
                      <div
                        key={gallery.id}
                        className="md:w-[379px] h-[335px] w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all"
                      >
                        <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                          {gallery.name}
                        </h3>
                        <img
                          src={gallery.image?.url}
                          alt={gallery.name}
                          className="w-full h-auto object-cover rounded-xl mt-2"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="dashboard" className="mt-8">
                <div className="flex flex-wrap gap-4">
                  {project.galleries
                    .filter((g) => g.category_id === 5)
                    .slice(0, 3)
                    .map((gallery) => (
                      <div
                        key={gallery.id}
                        className="md:w-[379px] h-[335px] w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all"
                      >
                        <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                          {gallery.name}
                        </h3>
                        <img
                          src={gallery.image?.url}
                          alt={gallery.name}
                          className="w-full h-auto object-cover rounded-xl mt-2"
                        />
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Section 4: Launch App Banner */}
      <section className="relative w-full py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/launchBg.png"
            alt="Launch Background"
            className="w-full h-full object-cover opacity-30 md:opacity-100"
          />
          {/* Overlay for better text readability on mobile if needed, though design looks clean */}
          <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container flex flex-col items-center text-center px-4">
          <h2 className="text-3xl md:text-[48px] font-bold text-[#121212] mb-6 leading-tight">
            {t("launchTitle")}{" "}
            <span className="text-[#EA433A]">{t("launchTitleSuffix")}</span>
          </h2>
          <p className="text-[#5D5D5D] text-base md:text-[20px] max-w-4xl mb-10 leading-relaxed font-medium">
            “{t("launchDesc")}”
          </p>
          <Link
            to="/"
            className="px-8 py-4 bg-[#EA433A] text-white rounded-full font-bold text-lg hover:bg-[#d63c33] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("contactUsNow")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SingleProjectPage;
