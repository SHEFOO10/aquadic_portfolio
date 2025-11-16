import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import lang from "@/assets/images/lang.svg";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
    {
      code: "ar",
      name: "العربية",
      flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg",
    },
  ];

  const savedLanguage = localStorage.getItem("language") || i18n.language;
  const [language, setLanguage] = useState(savedLanguage);

  const handleLanguageChange = (langCode) => {
    localStorage.setItem("language", langCode);
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    document.body.dir = langCode === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language, i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:w-[125px] w-[100px] md:h-14 h-10 flex gap-2 items-center justify-center px-4 py-2 md:text-lg text-xs md:font-bold text-[#1E1E1E] rounded-lg cursor-pointer">
        <img
          src={lang}
          className="md:w-full md:h-full w-6 h-6"
          alt="Language"
        />
        <p className="text-[#EA433A]">{language === "ar" ? "English" : "العربية"}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <img className="w-5 mr-2" src={lang.flag} alt={lang.name} />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;
