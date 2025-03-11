import { NavLink } from "react-router";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import arrow from "@/assets/images/down_arrow.svg";
import logo from "@/assets/images/logo.svg";
import toggle from "@/assets/images/toggle.svg";
import close from "@/assets/images/closeIcon.svg";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";
const Header = () => {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebar1 = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <nav className="container z-10 relative h-[100px] py-8 ">
        <div className="flex items-center justify-between gap-3 mx-auto">
          <div className="flex items-center  rtl:space-x-reverse">
            <button className="md:hidden flex" onClick={toggleSidebar1}>
              <img src={toggle} className="w-6 h-6" alt="Menu Icon" />
            </button>
            <NavLink to="/">
              <img className="max-sm:w-[130px]" src={logo} alt="Logo" />
            </NavLink>
          </div>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={closeSidebar}
            ></div>
          )}
          <div
            className={`fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-full"} bg-white w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5">
              <p onClick={toggleSidebar} className="relative top-4 ltr:left-48">
                <img src={close} alt="Close Icon" />
              </p>
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse mt-4">
              <ul className="flex flex-col gap-2 font-normal text-lg rtl:space-x-reverse md:flex-row">
                <li>
                  <NavLink onClick={closeSidebar}
                    to="/"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                    aria-current="page"
                  >
                    {t('home')}
                  </NavLink>
                </li>
                <li
                  className="flex items-center gap-1 relative"
                  onClick={toggleDropdown}
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                        {t('company')}
                      </p>
                      <img src={arrow} alt="Arrow" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mx-2">
                      <DropdownMenuLabel>
                        <ul>
                          <NavLink onClick={closeSidebar}
                            to="aboutus"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('aboutus')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="process"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('process')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="team"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('team')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="career"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('career')}</p>
                          </NavLink>
                        </ul>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>

                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                        {t('services')}
                      </p>
                      <img src={arrow} alt="Arrow" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full mx-2">
                      <DropdownMenuLabel>
                        <ul>
                          <NavLink onClick={closeSidebar}
                            to="/webdev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('webdev')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="/mobiledesign"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('mobiledesign')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="/webdesign"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('webdesign')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="/mobiledev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('mobiledev')}</p>
                          </NavLink>
                          <NavLink onClick={closeSidebar}
                            to="/testing"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t('testing')}</p>
                          </NavLink>
                        </ul>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <NavLink onClick={closeSidebar}
                    to="/portfolio"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  >
                    {t('portfolio')}
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeSidebar}
                    to="/faqs"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  >
                    {t('flog')}
                  </NavLink>
                </li>
              </ul>
            </div>
            <Language />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col gap-[59px] font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
              <li>
                <NavLink onClick={closeSidebar}
                  to="/"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  aria-current="page"
                >
                  {t('home')}
                </NavLink>
              </li>
              <li
                className="flex items-center gap-1 relative"
                onClick={toggleDropdown}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                      {t('company')}
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      <ul>
                        <li>
                          <a href="#aboutUs" onClick={(e) => {
                            e.preventDefault();
                            scrollToAboutUs();
                          }}
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            {t('aboutus')}
                          </a>
                        </li>
                        <NavLink
                          to="process"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('process')}</p>
                        </NavLink>
                        <NavLink onClick={closeSidebar}
                          to="team"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('team')}</p>
                        </NavLink>
                        <NavLink
                          to="career"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('career')}</p>
                        </NavLink>

                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                      {t('services')}
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>
                      <ul>
                        <NavLink
                          to="/webdev"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('webdev')}</p>
                        </NavLink>
                        <NavLink
                          to="/mobiledesign"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('mobiledesign')}</p>
                        </NavLink>
                        <NavLink
                          to="/webdesign"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('webdesign')}</p>
                        </NavLink>
                        <NavLink
                          to="/mobiledev"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('mobiledev')}</p>
                        </NavLink>
                        <NavLink
                          to="/testing"
                          className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                        >
                          <p>{t('testing')}</p>
                        </NavLink>
                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  {t('portfolio')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  {t('flog')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-3 flex items-center gap-2">
            <Language />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
