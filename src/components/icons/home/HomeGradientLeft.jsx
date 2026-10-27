import PropTypes from "prop-types";

const HomeGradientLeft = ({ className }) => (
  <svg
    width="556"
    height="1002"
    viewBox="0 0 556 1002"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className || "w-full lg:w-[556px]"}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <g filter="url(#filter0_f_277_4308)">
      <circle cx="-40" cy="406" r="146" fill="#FFA29D" />
    </g>
    <defs>
      <filter id="filter0_f_277_4308" x="-636" y="-190" width="1192" height="1192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_277_4308" />
      </filter>
    </defs>
  </svg>
);

HomeGradientLeft.propTypes = { className: PropTypes.string };

export default HomeGradientLeft;
