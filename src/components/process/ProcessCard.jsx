import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ProcessCard = ({ index, name, body }) => {
  const { t } = useTranslation("process");
  const displayName = name.replace(/^\d+\.\s*/, "");
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="relative rounded-[26px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_28px_70px_-38px_rgba(15,23,42,0.5)] md:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex shrink-0 items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-sky-800">
          {t("step")} {stepNumber}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-sky-200 via-slate-200 to-rose-200" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-bold leading-snug text-slate-950 md:text-2xl">{displayName}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{body}</div>
    </article>
  );
};

ProcessCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default ProcessCard;
