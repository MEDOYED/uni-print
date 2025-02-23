// import React from "react";

// const IconPhotoZone = ({ className }) => {
//   return (
//     <svg
//       className={className}
//       width="160"
//       height="160"
//       viewBox="0 0 512 512"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* <rect width="512" height="512" fill="black" /> */}
//       <g
//         stroke="white"
//         strokeWidth="20"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         {/* Фото кабіна */}
//         <rect x="80" y="100" width="200" height="300" rx="20" />
//         <line x1="80" y1="140" x2="280" y2="140" />
//         <line x1="80" y1="180" x2="280" y2="180" />
//         <line x1="80" y1="220" x2="280" y2="220" />

//         {/* Людина всередині */}
//         <circle cx="180" cy="180" r="30" />
//         <line x1="180" y1="210" x2="180" y2="310" />
//         <line x1="140" y1="260" x2="220" y2="260" />
//         <line x1="180" y1="310" x2="150" y2="360" />
//         <line x1="180" y1="310" x2="210" y2="360" />

//         {/* Камера */}
//         <rect x="320" y="100" width="120" height="300" rx="20" />
//         <circle cx="380" cy="150" r="20" />
//         <rect x="340" y="200" width="80" height="30" rx="5" />
//         <rect x="350" y="260" width="60" height="60" rx="10" />

//         {/* Текст */}
//         <text
//           x="340"
//           y="330"
//           fill="currentColor"
//           fontSize="20"
//           fontWeight="bold"
//         >
//           PHOTO ZONE
//         </text>
//       </g>
//     </svg>
//   );
// };

// export default IconPhotoZone;

import React from "react";

const IconPhotoZone = ({ className }) => {
  return (
    <svg
      className={className}
      width="160"
      height="160"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Фото кабіна */}
        <rect x="80" y="100" width="200" height="300" rx="20" />
        <line x1="80" y1="140" x2="280" y2="140" />
        <line x1="80" y1="180" x2="280" y2="180" />
        {/* <line x1="80" y1="220" x2="280" y2="220" /> */}

        {/* Людина всередині (виправлено) */}
        <circle cx="180" cy="200" r="30" />
        <line x1="180" y1="230" x2="180" y2="310" />
        <line x1="150" y1="260" x2="210" y2="260" />
        <line x1="180" y1="310" x2="160" y2="360" />
        <line x1="180" y1="310" x2="200" y2="360" />

        {/* Камера (виправлено) */}
        <rect x="320" y="100" width="120" height="300" rx="20" />
        <circle cx="380" cy="150" r="20" />
        <rect x="350" y="200" width="60" height="20" rx="5" />
        <rect x="360" y="260" width="40" height="40" rx="5" />
      </g>
    </svg>
  );
};

export default IconPhotoZone;
