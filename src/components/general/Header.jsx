import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import arrow from "@/assets/images/down_arrow.svg";
import logo from "@/assets/images/logo.svg";
import toggle from "@/assets/images/toggle.svg";
import close from "@/assets/images/closeIcon.svg";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Header = () => {
  const { t } = useTranslation("navbar");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (!isSidebarOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsSidebarOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isSidebarOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <nav aria-label={t("mainNavigation", { defaultValue: "Main navigation" })} className="container relative h-[84px] py-3">
        <div className="flex items-center justify-between gap-3 mx-auto">
          <div className="flex items-center  rtl:space-x-reverse">
            <button
              type="button"
              className="md:hidden flex rounded p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandColor"
              onClick={() => setIsSidebarOpen((open) => !open)}
              aria-label={t("openMenu", { defaultValue: "Open menu" })}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-menu"
            >
              <img src={toggle} className="w-6 h-6 mr-2" alt="" />
            </button>
            <NavLink to="/">
              <img className="max-sm:w-[130px]" src={logo} alt="AQuadic home" />
            </NavLink>
          </div>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeSidebar}
              aria-hidden="true"
            ></div>
          )}
          <div
            id="mobile-menu"
            role={isSidebarOpen ? "dialog" : undefined}
            aria-modal={isSidebarOpen ? true : undefined}
            aria-label={t("mobileNavigation", { defaultValue: "Mobile navigation" })}
            aria-hidden={!isSidebarOpen}
            inert={!isSidebarOpen}
            className={`fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-full"} bg-white w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5">
              <button
                type="button"
                onClick={closeSidebar}
                aria-label={t("closeMenu", { defaultValue: "Close menu" })}
                className="relative top-4 ltr:left-48 rounded p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandColor"
              >
                <img src={close} alt="" />
              </button>
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse mt-4">
              <ul className="flex flex-col gap-2 font-normal text-lg rtl:space-x-reverse md:flex-row">
                <li>
                  <NavLink
                    onClick={closeSidebar}
                    to="/"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                    >
                    {t("home")}
                  </NavLink>
                </li>
                <li
                  className="flex items-center gap-1 relative"

                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="company">
                      <AccordionTrigger className="flex items-center gap-1">
                        <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                          {t("company")}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          <li>
                            <NavLink
                              onClick={closeSidebar}
                              to="/about-us"
                              className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                            >
                              {t("aboutus")}
                            </NavLink>
                          </li>
                          <NavLink
                            to="/process"
                            onClick={closeSidebar}
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("process")}</p>
                          </NavLink>
                          <NavLink
                            to="/team"
                            onClick={closeSidebar}
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("team")}</p>
                          </NavLink>
                          <NavLink
                            to="/career"
                            onClick={closeSidebar}
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("career")}</p>
                          </NavLink>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>

                <li>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services">
                      <AccordionTrigger className="flex items-center gap-1">
                        <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform hover:text-brandColor hover:underline transition-all duration-300">
                          {t("services")}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="w-full">
                        <ul>
                          <NavLink
                            onClick={closeSidebar}
                            to="/webdev"
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("webdev")}</p>
                          </NavLink>
                          <NavLink
                            onClick={closeSidebar}
                            to="/mobiledev"
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("mobiledev")}</p>
                          </NavLink>
                          <NavLink
                            onClick={closeSidebar}
                            to="/testing"
                            className="hover:bg-brandColor flex items-center px-4 w-full h-10 transition duration-300 text-black text-base font-normal left-8 hover:text-white"
                          >
                            <p>{t("testing")}</p>
                          </NavLink>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li>
                  <NavLink
                    onClick={closeSidebar}
                    to="/portfolio"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  >
                    {t("portfolio")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeSidebar}
                    to="/blogs"
                    className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                  >
                    {t("blog")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="/#contactUS"
              onClick={closeSidebar}
              className="mx-4 mt-4 flex min-h-11 items-center justify-center rounded-full bg-brandColor px-4 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor"
            >
              {t("contactus")}
            </NavLink>
            <Language />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col gap-3 font-normal text-lg rtl:space-x-reverse md:flex-row md:items-center md:gap-4 lg:gap-6 xl:gap-8">
              <li>
                <NavLink
                  onClick={closeSidebar}
                  to="/"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  {t("home")}
                </NavLink>
              </li>

              <li
                className="flex items-center gap-1 relative"

              >
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300">
                      {t("company")}
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      <ul>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/about-us"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("aboutus")}
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/process"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("process")}
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/team"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("team")}
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/career"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("career")}
                          </NavLink>
                        </DropdownMenuItem>
                      </ul>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <p className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform hover:text-brandColor hover:underline transition-all duration-300">
                      {t("services")}
                    </p>
                    <img src={arrow} alt="Arrow" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>
                      <ul>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/webdev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("webdev")}
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/mobiledev"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("mobiledev")}
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink
                            to="/testing"
                            className="hover:bg-brandColor flex items-center px-2 w-full h-10 transition duration-300 text-black text-base font-normal hover:text-white"
                          >
                            {t("testing")}
                          </NavLink>
                        </DropdownMenuItem>
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
                  {t("portfolio")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="block py-2 px-3 md:p-0 text-[#121212] font-medium text-base transform  hover:text-brandColor hover:underline transition-all duration-300"
                >
                  {t("blog")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-3 flex items-center gap-2 md:gap-3">
            <NavLink
              to="/#contactUS"
              className="hidden min-h-10 items-center justify-center rounded-full bg-brandColor px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor lg:inline-flex"
            >
              {t("contactus")}
            </NavLink>
            <Language />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
