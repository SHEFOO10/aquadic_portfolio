import { useState } from 'react';
import { useTranslation } from "react-i18next";
import "../../components/Hooks/i18n";
// eslint-disable-next-line react/prop-types
const Card = ({ text1, text2, imgSrc, rating }) => {
    const { t } = useTranslation("testimonials");
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative xl:w-[592px] lg:w-[470px] w-full rounded-[30px] bg-white shadow px-6 pt-6 pb-8">
            <div className="xl:w-[544px] text-[20px] leading-8">
                <p>
                    {text1}
                    {!isExpanded && (
                        <span className="text-brandColor cursor-pointer ml-2 font-semibold" onClick={() => setIsExpanded(true)}>{t('readMore')}</span>
                    )}
                </p>
                {isExpanded && (
                    <div>
                        <p>
                            {text2}
                            <span className="text-brandColor cursor-pointer mt-2 font-semibold" onClick={() => setIsExpanded(false)}>{t('showLess')}</span>
                        </p>
                    </div>
                )}
            </div>
            <div className="mt-8 flex items-center gap-4">
                <img src={imgSrc} className="w-20 h-20 rounded-full" alt="Profile" />
                <div>
                    <h3 className="text-[#121212] text-base font-semibold leading-4">Bader</h3>
                    <span className="text-[#5D5D5D] text-xs font-medium leading-4">CEO | Coifast</span>
                </div>
            </div>
            <div className="flex items-center absolute right-6">
                {[...Array(4)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="text-[#000000] font-medium text-xs leading-4 ml-2">({rating})</p>
            </div>
        </div>
    );
};

export default Card;
