const IconPrinter = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      fill="currentColor"
    >
      <rect
        x="10"
        y="15"
        width="44"
        height="25"
        stroke="black"
        stroke-width="2"
        // fill="none"
      />

      <rect
        x="18"
        y="40"
        width="28"
        height="12"
        stroke="black"
        stroke-width="2"
        // fill="none"
      />

      <rect
        x="22"
        y="20"
        width="20"
        height="22"
        stroke="black"
        stroke-width="2"
        // fill="none"
      />

      <line
        x1="24"
        y1="24"
        x2="40"
        y2="24"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="24"
        y1="28"
        x2="40"
        y2="28"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="24"
        y1="32"
        x2="40"
        y2="32"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="24"
        y1="36"
        x2="40"
        y2="36"
        stroke="black"
        stroke-width="2"
      />

      <circle cx="16" cy="22" r="2" fill="black" />
      <circle cx="48" cy="22" r="2" fill="black" />
    </svg>
  );
};

export default IconPrinter;
