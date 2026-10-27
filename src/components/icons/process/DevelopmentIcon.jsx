
const DevelopmentIcon = () => {
  return (
    <svg
      className="max-sm:w-[50px]"
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_175_335)">
        <rect x="10" y="9" width="72" height="72" rx="36" fill="white" />
        <path
          d="M59.3334 30H32.6667C30.8284 30 29.3334 31.495 29.3334 33.3333V56.6667C29.3334 58.505 30.8284 60 32.6667 60H59.3334C61.1717 60 62.6667 58.505 62.6667 56.6667V33.3333C62.6667 31.495 61.1717 30 59.3334 30ZM32.6667 56.6667V36.6667H59.3334L59.3367 56.6667H32.6667Z"
          fill="black"
        />
        <path
          d="M41.4884 40.4883L35.3101 46.6667L41.4884 52.845L43.8451 50.4883L40.0234 46.6667L43.8451 42.845L41.4884 40.4883ZM50.5117 40.4883L48.1551 42.845L51.9767 46.6667L48.1551 50.4883L50.5117 52.845L56.6901 46.6667L50.5117 40.4883Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_175_335"
          x="0"
          y="0"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_175_335"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_175_335"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DevelopmentIcon;
