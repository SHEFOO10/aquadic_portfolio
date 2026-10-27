import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <main
      className="container flex min-h-[55vh] flex-col items-center justify-center py-20 text-center"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{isArabic ? "الصفحة غير موجودة | أكواديك" : "Page Not Found | AQuadic"}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brandColor">404</p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950 md:text-5xl">
        {isArabic ? "لم نعثر على هذه الصفحة" : "We couldn’t find that page"}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
        {isArabic
          ? "قد يكون الرابط غير صحيح أو أن الصفحة قد نُقلت."
          : "The link may be incorrect, or the page may have moved."}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brandColor px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor"
      >
        {isArabic ? "العودة إلى الرئيسية" : "Back to home"}
      </Link>
    </main>
  );
};

export default NotFoundPage;
