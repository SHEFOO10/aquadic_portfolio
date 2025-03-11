import logo from "@/assets/images/logo.svg";
import facebook from "@/assets/images/facebook.svg";
import linkedin from "@/assets/images/linkedin.svg";
import Be from "@/assets/images/Be.svg";
import instagram from "@/assets/images/instagram.svg";
import X from "@/assets/images/X.svg";
import phone from "@/assets/images/footerPhone.svg";
import email from "@/assets/images/footerEmail.svg";
import location from "@/assets/images/footerLoc.svg";
import { Link, NavLink } from "react-router";
import FooterGradient from "@/components/icons/general/FooterGradient.jsx";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Footer = () => {
  const { t } = useTranslation("navbar");
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="relative py-6">
      <div className="container">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} className="w-[183px] h-[55px]" alt="Logo" />
            </Link>
            <p className="w-[377px] mt-8 text-[#121212] text-xl leading-8">
              {t('footerTitle')}
            </p>
            <div className="mt-12">
              <p className="text-[#121212] text-[28px] leading-[28px] font-medium">
                {t('followUS')}
              </p>
              <div className="flex gap-2 mt-6">
                <NavLink to="/">
                  <img src={facebook} alt="Facebook" />
                </NavLink>
                <NavLink to="/">
                  <img src={linkedin} alt="LinkedIn" />
                </NavLink>
                <NavLink to="/">
                  <img src={Be} alt="Be" />
                </NavLink>
                <NavLink to="/">
                  <img src={instagram} alt="Instagram" />
                </NavLink>
                <NavLink to="/">
                  <img src={X} alt="X" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2  sm:gap-6 lg:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">
                {t('company')}
              </h2>
              <ul>
                <li className="mb-4">
                  <a href="#aboutUs" onClick={(e) => {
                    e.preventDefault();
                    scrollToAboutUs();
                  }}
                    className="text-black text-base left-8"
                  >
                    {t('aboutus')}
                  </a>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/process"
                    className="text-black text-base left-8"
                  >
                    {t('process')}
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/team" className="text-black text-base left-8">
                    {t('team')}
                  </NavLink>
                </li>

                <li className="mb-4">
                  <NavLink to="/career" className="text-black text-base left-8">
                    {t('career')}
                  </NavLink>
                </li>

              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">
                {t('services')}
              </h2>
              <ul>
                <li className="mb-4">
                  <NavLink to="/webdev" className="text-black text-xl left-8">
                    {t('webdev')}
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/mobiledesign"
                    className="text-black text-xl left-8"
                  >
                    {t('mobiledesign')}
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/webdesign"
                    className="text-black text-xl left-8"
                  >
                    {t('webdesign')}
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/mobiledev"
                    className="text-black text-xl left-8"
                  >
                    {t('mobiledev')}
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/testing" className="text-black text-xl left-8">
                    {t('testing')}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[28px] font-semibold text-black">
                {t('contactus')}
              </h2>
              <ul>
                <li className="mb-4 flex items-center gap-4">
                  <img src={phone} alt="Phone" />
                  <p className="text-black text-xl left-8">
                    (+20) 110 178 2890
                  </p>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <img src={email} alt="Email" />
                  <p className="text-black text-xl left-8">hello@aquadic.com</p>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <img src={location} alt="Location" />
                  <p className="text-black text-xl left-8">
                    Zizinia, Alexandria, Egypt
                  </p>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-0 left-0">
        <FooterGradient />
      </span>
    </footer>
  );
};

export default Footer;
