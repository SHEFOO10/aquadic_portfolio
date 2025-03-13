import React from "react";

const FooterGradient = () => {
  return (
    <svg
      width="672"
      height="564"
      viewBox="0 0 672 564"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full lg:w-[672px]"
    >
      <g filter="url(#filter0_f_185_1071)">
        <circle cx="26" cy="538" r="146" fill="#EA433A" />
      </g>
      <defs>
        <filter
          id="filter0_f_185_1071"
          x="-620"
          y="-108"
          width="1292"
          height="1292"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur_185_1071"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FooterGradient;
