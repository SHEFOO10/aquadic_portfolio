import { Link, NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/logo.svg";
import facebook from "@/assets/images/facebook.svg";
import behance from "@/assets/images/Be.svg";
import instagram from "@/assets/images/instagram.svg";
import phone from "@/assets/images/footerPhone.svg";
import email from "@/assets/images/footerEmail.svg";
import locationIcon from "@/assets/images/footerLoc.svg";
import FooterGradient from "@/components/icons/general/FooterGradient.jsx";
import "../Hooks/i18n";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com/aquadicsoftware", icon: facebook },
  { name: "Behance", href: "https://www.behance.net/aquadic", icon: behance },
  { name: "Instagram", href: "https://www.instagram.com/aquadicsoftware/", icon: instagram },
];

const Footer = () => {
  const { t } = useTranslation("navbar");
  const route = useLocation();
  const isSingleProject = /^\/portfolio\/.+/.test(route.pathname);

  return (
    <footer className="relative py-8">
      <div className="container">
        <div className="md:flex md:justify-between md:gap-12">
          <div className="mb-10 md:mb-0">
            <Link to="/" className="flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor">
              <img src={logo} className="h-[55px] w-[183px]" alt="AQuadic home" />
            </Link>
            <p className="mt-8 text-xl leading-8 text-[#121212] md:w-[377px]">
              {t("footerTitle")}
            </p>
            <div className="mt-10">
              <h2 className="text-[28px] font-medium leading-[28px] text-[#121212]">
                {t("followUS")}
              </h2>
              <div className="mt-5 flex gap-3">
                {SOCIAL_LINKS.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`AQuadic on ${name}`}
                    className="rounded-full p-1 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor"
                  >
                    <img className="h-8 w-8" src={icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[24px] font-semibold text-black">{t("company")}</h2>
              <ul className="space-y-4">
                <li><Link to="/#aboutUs" className="text-black transition hover:text-brandColor">{t("aboutus")}</Link></li>
                <li><NavLink to="/process" className="text-black transition hover:text-brandColor">{t("process")}</NavLink></li>
                <li><NavLink to="/team" className="text-black transition hover:text-brandColor">{t("team")}</NavLink></li>
                <li><NavLink to="/career" className="text-black transition hover:text-brandColor">{t("career")}</NavLink></li>
                <li><NavLink to="/blogs" className="text-black transition hover:text-brandColor">{t("blog")}</NavLink></li>
                <li><NavLink to="/portfolio" className="text-black transition hover:text-brandColor">{t("portfolio")}</NavLink></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-[24px] font-semibold text-black">{t("services")}</h2>
              <ul className="space-y-4">
                <li><NavLink to="/webdev" className="text-black transition hover:text-brandColor">{t("webdev")}</NavLink></li>
                <li><NavLink to="/mobiledev" className="text-black transition hover:text-brandColor">{t("mobiledev")}</NavLink></li>
                <li><NavLink to="/testing" className="text-black transition hover:text-brandColor">{t("testing")}</NavLink></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-[24px] font-semibold text-black">{t("contactus")}</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <img src={phone} alt="" aria-hidden="true" />
                  <a href="tel:+201101782890" className="text-black transition hover:text-brandColor" dir="ltr">(+20) 110 178 2890</a>
                </li>
                <li className="flex items-center gap-4">
                  <img src={email} alt="" aria-hidden="true" />
                  <a href="mailto:hello@aquadic.com" className="break-all text-black transition hover:text-brandColor">hello@aquadic.com</a>
                </li>
                <li className="flex items-center gap-4">
                  <img src={locationIcon} alt="" aria-hidden="true" />
                  <p className="text-black">Zizinia, Alexandria, Egypt</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {!isSingleProject && (
        <span className="pointer-events-none absolute bottom-0 left-0 -z-10" aria-hidden="true">
          <FooterGradient />
        </span>
      )}
    </footer>
  );
};

export default Footer;
