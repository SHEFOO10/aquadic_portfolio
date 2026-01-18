import React from "react";

const HomeGradientRight = ({ className }) => {
  return (
    <svg
      width="557"
      height="1024"
      viewBox="0 0 557 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-full lg:w-[557px]"}
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_f_277_4307)">
        <circle cx="596" cy="571" r="146" fill="#FFA29D" />
      </g>
      <defs>
        <filter
          id="filter0_f_277_4307"
          x="0"
          y="-25"
          width="1192"
          height="1192"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="225"
            result="effect1_foregroundBlur_277_4307"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HomeGradientRight;
