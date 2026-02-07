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
      <section className=" pt-12 md:pt-20 md:mb-20 mb-12 flex flex-col items-center text-center bg-gradient-to-b from-white via-[#F3F9FF] to-[#E6F2FF]">
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

        <div className="absolute top-[500px] left-44">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8577 30.8199C30.2939 27.8317 28.168 25.7058 25.1815 10.142C25.1354 9.90225 25.0072 9.68605 24.819 9.53057C24.6308 9.37509 24.3943 9.29004 24.1502 9.29004C23.906 9.29004 23.6695 9.37509 23.4813 9.53057C23.2931 9.68605 23.1649 9.90225 23.1188 10.142C20.1323 25.7058 18.0063 27.8317 2.44178 30.8199C2.20209 30.8657 1.9859 30.9937 1.8304 31.1818C1.67491 31.3699 1.58984 31.6063 1.58984 31.8504C1.58984 32.0944 1.67491 32.3308 1.8304 32.5189C1.9859 32.707 2.20209 32.835 2.44178 32.8809C18.0063 35.8681 20.1323 37.9925 23.1188 53.5579C23.1651 53.7974 23.2934 54.0134 23.4816 54.1687C23.6698 54.324 23.9062 54.4089 24.1502 54.4089C24.3941 54.4089 24.6305 54.324 24.8187 54.1687C25.0069 54.0134 25.1352 53.7974 25.1815 53.5579C28.168 37.9925 30.2939 35.8682 45.8577 32.8809C46.0974 32.835 46.3135 32.707 46.469 32.5189C46.6245 32.3308 46.7096 32.0944 46.7096 31.8504C46.7096 31.6063 46.6245 31.3699 46.469 31.1818C46.3135 30.9937 46.0974 30.8657 45.8577 30.8199Z" fill="#1073C0" fillOpacity="0.2" />
            <path d="M44.7016 19.3603C44.4575 19.3601 44.2211 19.275 44.0329 19.1196C43.8447 18.9641 43.7165 18.748 43.6703 18.5083C42.6184 13.0242 42.0177 12.4236 36.5335 11.3716C36.2938 11.3255 36.0776 11.1973 35.9222 11.0091C35.7667 10.8209 35.6816 10.5844 35.6816 10.3402C35.6816 10.0961 35.7667 9.85962 35.9222 9.6714C36.0776 9.48318 36.2938 9.35499 36.5335 9.30888C42.0185 8.25613 42.6184 7.65542 43.6703 2.17215C43.7163 1.9324 43.8445 1.71621 44.0328 1.56072C44.221 1.40524 44.4575 1.32019 44.7016 1.32019C44.9458 1.32019 45.1823 1.40524 45.3705 1.56072C45.5587 1.71621 45.6869 1.9324 45.733 2.17215C46.7849 7.65542 47.3847 8.25613 52.8697 9.30888C53.1095 9.35499 53.3256 9.48318 53.4811 9.6714C53.6366 9.85962 53.7216 10.0961 53.7216 10.3402C53.7216 10.5844 53.6366 10.8209 53.4811 11.0091C53.3256 11.1973 53.1095 11.3255 52.8697 11.3716C47.3856 12.4235 46.7849 13.0242 45.733 18.5083C45.6868 18.748 45.5586 18.9641 45.3704 19.1196C45.1822 19.2751 44.9457 19.3601 44.7016 19.3603ZM40.9034 10.3402C41.79 10.6309 42.5957 11.1261 43.2555 11.7858C43.9154 12.4454 44.4107 13.2511 44.7016 14.1376C44.9925 13.2511 45.4879 12.4454 46.1477 11.7858C46.8075 11.1261 47.6133 10.6309 48.4998 10.3402C47.6134 10.0493 46.8078 9.55401 46.148 8.89438C45.4882 8.23475 44.9928 7.42925 44.7016 6.54288C44.4105 7.42925 43.915 8.23475 43.2552 8.89438C42.5954 9.554 41.7898 10.0493 40.9034 10.3402Z" fill="#1073C0" fillOpacity="0.2" />
          </svg>
        </div>

        <div className="absolute top-[300px] left-96">
          <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8577 30.8199C30.2939 27.8317 28.168 25.7058 25.1815 10.142C25.1354 9.90225 25.0072 9.68605 24.819 9.53057C24.6308 9.37509 24.3943 9.29004 24.1502 9.29004C23.906 9.29004 23.6695 9.37509 23.4813 9.53057C23.2931 9.68605 23.1649 9.90225 23.1188 10.142C20.1323 25.7058 18.0063 27.8317 2.44178 30.8199C2.20209 30.8657 1.9859 30.9937 1.8304 31.1818C1.67491 31.3699 1.58984 31.6063 1.58984 31.8504C1.58984 32.0944 1.67491 32.3308 1.8304 32.5189C1.9859 32.707 2.20209 32.835 2.44178 32.8809C18.0063 35.8681 20.1323 37.9925 23.1188 53.5579C23.1651 53.7974 23.2934 54.0134 23.4816 54.1687C23.6698 54.324 23.9062 54.4089 24.1502 54.4089C24.3941 54.4089 24.6305 54.324 24.8187 54.1687C25.0069 54.0134 25.1352 53.7974 25.1815 53.5579C28.168 37.9925 30.2939 35.8682 45.8577 32.8809C46.0974 32.835 46.3135 32.707 46.469 32.5189C46.6245 32.3308 46.7096 32.0944 46.7096 31.8504C46.7096 31.6063 46.6245 31.3699 46.469 31.1818C46.3135 30.9937 46.0974 30.8657 45.8577 30.8199Z" fill="#1073C0" fillOpacity="0.2" />
            <path d="M44.7016 19.3603C44.4575 19.3601 44.2211 19.275 44.0329 19.1196C43.8447 18.9641 43.7165 18.748 43.6703 18.5083C42.6184 13.0242 42.0177 12.4236 36.5335 11.3716C36.2938 11.3255 36.0776 11.1973 35.9222 11.0091C35.7667 10.8209 35.6816 10.5844 35.6816 10.3402C35.6816 10.0961 35.7667 9.85962 35.9222 9.6714C36.0776 9.48318 36.2938 9.35499 36.5335 9.30888C42.0185 8.25613 42.6184 7.65542 43.6703 2.17215C43.7163 1.9324 43.8445 1.71621 44.0328 1.56072C44.221 1.40524 44.4575 1.32019 44.7016 1.32019C44.9458 1.32019 45.1823 1.40524 45.3705 1.56072C45.5587 1.71621 45.6869 1.9324 45.733 2.17215C46.7849 7.65542 47.3847 8.25613 52.8697 9.30888C53.1095 9.35499 53.3256 9.48318 53.4811 9.6714C53.6366 9.85962 53.7216 10.0961 53.7216 10.3402C53.7216 10.5844 53.6366 10.8209 53.4811 11.0091C53.3256 11.1973 53.1095 11.3255 52.8697 11.3716C47.3856 12.4235 46.7849 13.0242 45.733 18.5083C45.6868 18.748 45.5586 18.9641 45.3704 19.1196C45.1822 19.2751 44.9457 19.3601 44.7016 19.3603ZM40.9034 10.3402C41.79 10.6309 42.5957 11.1261 43.2555 11.7858C43.9154 12.4454 44.4107 13.2511 44.7016 14.1376C44.9925 13.2511 45.4879 12.4454 46.1477 11.7858C46.8075 11.1261 47.6133 10.6309 48.4998 10.3402C47.6134 10.0493 46.8078 9.55401 46.148 8.89438C45.4882 8.23475 44.9928 7.42925 44.7016 6.54288C44.4105 7.42925 43.915 8.23475 43.2552 8.89438C42.5954 9.554 41.7898 10.0493 40.9034 10.3402Z" fill="#1073C0" fillOpacity="0.2" />
          </svg>
        </div>

        <div className="absolute top-[200px] right-96">
          <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8577 30.8199C30.2939 27.8317 28.168 25.7058 25.1815 10.142C25.1354 9.90225 25.0072 9.68605 24.819 9.53057C24.6308 9.37509 24.3943 9.29004 24.1502 9.29004C23.906 9.29004 23.6695 9.37509 23.4813 9.53057C23.2931 9.68605 23.1649 9.90225 23.1188 10.142C20.1323 25.7058 18.0063 27.8317 2.44178 30.8199C2.20209 30.8657 1.9859 30.9937 1.8304 31.1818C1.67491 31.3699 1.58984 31.6063 1.58984 31.8504C1.58984 32.0944 1.67491 32.3308 1.8304 32.5189C1.9859 32.707 2.20209 32.835 2.44178 32.8809C18.0063 35.8681 20.1323 37.9925 23.1188 53.5579C23.1651 53.7974 23.2934 54.0134 23.4816 54.1687C23.6698 54.324 23.9062 54.4089 24.1502 54.4089C24.3941 54.4089 24.6305 54.324 24.8187 54.1687C25.0069 54.0134 25.1352 53.7974 25.1815 53.5579C28.168 37.9925 30.2939 35.8682 45.8577 32.8809C46.0974 32.835 46.3135 32.707 46.469 32.5189C46.6245 32.3308 46.7096 32.0944 46.7096 31.8504C46.7096 31.6063 46.6245 31.3699 46.469 31.1818C46.3135 30.9937 46.0974 30.8657 45.8577 30.8199Z" fill="#1073C0" fillOpacity="0.2" />
            <path d="M44.7016 19.3603C44.4575 19.3601 44.2211 19.275 44.0329 19.1196C43.8447 18.9641 43.7165 18.748 43.6703 18.5083C42.6184 13.0242 42.0177 12.4236 36.5335 11.3716C36.2938 11.3255 36.0776 11.1973 35.9222 11.0091C35.7667 10.8209 35.6816 10.5844 35.6816 10.3402C35.6816 10.0961 35.7667 9.85962 35.9222 9.6714C36.0776 9.48318 36.2938 9.35499 36.5335 9.30888C42.0185 8.25613 42.6184 7.65542 43.6703 2.17215C43.7163 1.9324 43.8445 1.71621 44.0328 1.56072C44.221 1.40524 44.4575 1.32019 44.7016 1.32019C44.9458 1.32019 45.1823 1.40524 45.3705 1.56072C45.5587 1.71621 45.6869 1.9324 45.733 2.17215C46.7849 7.65542 47.3847 8.25613 52.8697 9.30888C53.1095 9.35499 53.3256 9.48318 53.4811 9.6714C53.6366 9.85962 53.7216 10.0961 53.7216 10.3402C53.7216 10.5844 53.6366 10.8209 53.4811 11.0091C53.3256 11.1973 53.1095 11.3255 52.8697 11.3716C47.3856 12.4235 46.7849 13.0242 45.733 18.5083C45.6868 18.748 45.5586 18.9641 45.3704 19.1196C45.1822 19.2751 44.9457 19.3601 44.7016 19.3603ZM40.9034 10.3402C41.79 10.6309 42.5957 11.1261 43.2555 11.7858C43.9154 12.4454 44.4107 13.2511 44.7016 14.1376C44.9925 13.2511 45.4879 12.4454 46.1477 11.7858C46.8075 11.1261 47.6133 10.6309 48.4998 10.3402C47.6134 10.0493 46.8078 9.55401 46.148 8.89438C45.4882 8.23475 44.9928 7.42925 44.7016 6.54288C44.4105 7.42925 43.915 8.23475 43.2552 8.89438C42.5954 9.554 41.7898 10.0493 40.9034 10.3402Z" fill="#1073C0" fillOpacity="0.2" />
          </svg>
        </div>

        <div className="absolute top-[350px] right-[450px]">
          <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.8577 30.8199C30.2939 27.8317 28.168 25.7058 25.1815 10.142C25.1354 9.90225 25.0072 9.68605 24.819 9.53057C24.6308 9.37509 24.3943 9.29004 24.1502 9.29004C23.906 9.29004 23.6695 9.37509 23.4813 9.53057C23.2931 9.68605 23.1649 9.90225 23.1188 10.142C20.1323 25.7058 18.0063 27.8317 2.44178 30.8199C2.20209 30.8657 1.9859 30.9937 1.8304 31.1818C1.67491 31.3699 1.58984 31.6063 1.58984 31.8504C1.58984 32.0944 1.67491 32.3308 1.8304 32.5189C1.9859 32.707 2.20209 32.835 2.44178 32.8809C18.0063 35.8681 20.1323 37.9925 23.1188 53.5579C23.1651 53.7974 23.2934 54.0134 23.4816 54.1687C23.6698 54.324 23.9062 54.4089 24.1502 54.4089C24.3941 54.4089 24.6305 54.324 24.8187 54.1687C25.0069 54.0134 25.1352 53.7974 25.1815 53.5579C28.168 37.9925 30.2939 35.8682 45.8577 32.8809C46.0974 32.835 46.3135 32.707 46.469 32.5189C46.6245 32.3308 46.7096 32.0944 46.7096 31.8504C46.7096 31.6063 46.6245 31.3699 46.469 31.1818C46.3135 30.9937 46.0974 30.8657 45.8577 30.8199Z" fill="#1073C0" fillOpacity="0.2" />
            <path d="M44.7016 19.3603C44.4575 19.3601 44.2211 19.275 44.0329 19.1196C43.8447 18.9641 43.7165 18.748 43.6703 18.5083C42.6184 13.0242 42.0177 12.4236 36.5335 11.3716C36.2938 11.3255 36.0776 11.1973 35.9222 11.0091C35.7667 10.8209 35.6816 10.5844 35.6816 10.3402C35.6816 10.0961 35.7667 9.85962 35.9222 9.6714C36.0776 9.48318 36.2938 9.35499 36.5335 9.30888C42.0185 8.25613 42.6184 7.65542 43.6703 2.17215C43.7163 1.9324 43.8445 1.71621 44.0328 1.56072C44.221 1.40524 44.4575 1.32019 44.7016 1.32019C44.9458 1.32019 45.1823 1.40524 45.3705 1.56072C45.5587 1.71621 45.6869 1.9324 45.733 2.17215C46.7849 7.65542 47.3847 8.25613 52.8697 9.30888C53.1095 9.35499 53.3256 9.48318 53.4811 9.6714C53.6366 9.85962 53.7216 10.0961 53.7216 10.3402C53.7216 10.5844 53.6366 10.8209 53.4811 11.0091C53.3256 11.1973 53.1095 11.3255 52.8697 11.3716C47.3856 12.4235 46.7849 13.0242 45.733 18.5083C45.6868 18.748 45.5586 18.9641 45.3704 19.1196C45.1822 19.2751 44.9457 19.3601 44.7016 19.3603ZM40.9034 10.3402C41.79 10.6309 42.5957 11.1261 43.2555 11.7858C43.9154 12.4454 44.4107 13.2511 44.7016 14.1376C44.9925 13.2511 45.4879 12.4454 46.1477 11.7858C46.8075 11.1261 47.6133 10.6309 48.4998 10.3402C47.6134 10.0493 46.8078 9.55401 46.148 8.89438C45.4882 8.23475 44.9928 7.42925 44.7016 6.54288C44.4105 7.42925 43.915 8.23475 43.2552 8.89438C42.5954 9.554 41.7898 10.0493 40.9034 10.3402Z" fill="#1073C0" fillOpacity="0.2" />
          </svg>
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
            <div className="">
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
        <section className="py-6 md:py-12 mb-10 md:mb-20 overflow-hidden">
          <div className="text-center mb-8 md:mb-12 container">
            <h2 className="text-2xl md:text-[32px] font-bold">
              <span className="text-[#1073C0]">
                {t("technologiesUsed").split(" ").slice(0, 1).join(" ")}
              </span>{" "}
              {t("technologiesUsed").split(" ").slice(1).join(" ")}
            </h2>
          </div>
          <div className="relative">
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-container {
                  animation: marquee 30s linear infinite;
                }
                .marquee-container:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="flex marquee-container">
              <div className="flex gap-6 md:gap-10 px-4 flex-shrink-0">
                {project.technologies.map((tech) => (
                  <div
                    key={`first-${tech.id}`}
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
              <div className="flex gap-6 md:gap-10 px-4 flex-shrink-0">
                {project.technologies.map((tech) => (
                  <div
                    key={`second-${tech.id}`}
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
            </div>
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
                  {t("sitePreviewHeading")}
                </h2>
                <p className="text-[#5D5D5D] md:text-xl font-medium mt-4">
                  {t("sitePreviewDesc", { title })}
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

            <Tabs defaultValue={project.galleries[0]?.id.toString()}>
              <TabsList className="!border-none !bg-transparent justify-start !rounded-full flex-wrap">
                {project.galleries.map((gallery) => (
                  <TabsTrigger
                    key={gallery.id}
                    value={gallery.id.toString()}
                    className="rounded-full data-[state=active]:bg-[#1073C0] data-[state=active]:text-white data-[state=active]:border-none bg-white border mx-2 my-1 !text-sm"
                  >
                    {gallery.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {project.galleries.map((gallery) => (
                <TabsContent key={gallery.id} value={gallery.id.toString()} className="mt-8">
                  <div className="flex flex-wrap">
                    <div className="md:w-[379px] h-full w-full border-2 border-b-0 border-[#0F7EE2] rounded-tr-[40px] rounded-tl-[40px] bg-white p-4 shadow-md hover:shadow-xl transition-all">
                      <h3 className="text-[#121212] text-lg font-semibold leading-[150%]">
                        {gallery.name}
                      </h3>
                      <img
                        src={gallery.image?.url}
                        alt={gallery.name}
                        className="w-[347px] h-[221px] object-cover rounded-xl mt-8"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
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
