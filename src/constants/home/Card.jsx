import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../components/Hooks/i18n";

// eslint-disable-next-line react/prop-types
const Card = ({ text1, text2, imgSrc, rating }) => {
  const { t } = useTranslation("testimonials");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="relative w-full rounded-[30px] bg-white px-6 pb-8 pt-6 shadow xl:w-[592px] lg:w-[470px]">
      <div className="text-[20px] leading-8">
        <p>
          {text1}
          {!isExpanded && (
            <button
              type="button"
              className="ml-2 font-semibold text-brandColor underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor"
              onClick={() => setIsExpanded(true)}
              aria-expanded={false}
            >
              {t("readMore")}
            </button>
          )}
        </p>
        {isExpanded && (
          <p className="mt-3">
            {text2}
            <button
              type="button"
              className="ml-2 font-semibold text-brandColor underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandColor"
              onClick={() => setIsExpanded(false)}
              aria-expanded={true}
            >
              {t("showLess")}
            </button>
          </p>
        )}
      </div>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={imgSrc}
          className="h-20 w-20 rounded-full"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 className="text-base font-semibold leading-4 text-[#121212]">Bader</h3>
          <p className="text-xs font-medium leading-4 text-[#5D5D5D]">CEO | Coifast</p>
        </div>
      </div>
      <div className="absolute right-6 flex items-center" aria-label={`${rating} out of 10`}>
        {[...Array(4)].map((_, index) => (
          <svg
            key={index}
            className="ms-1 h-4 w-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <svg
          className="ms-1 h-4 w-4 text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <span className="ml-2 text-xs font-medium text-black">({rating})</span>
      </div>
    </article>
  );
};

export default Card;
