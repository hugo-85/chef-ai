import { SVGProps } from "react";

export default function SugarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#ffff">
        <path
          fill="#ffff"
          d="M6 13H3v-3h3v3m4-3H7v3h3v-3M8 6H5v3h3V6m10 6c-3.75 0-5.72 1.25-7 2H2c0 2.21 1.79 4 4 4h1c1 0 1.92-.37 2.62-1c1.44-1.22 3.06-2.26 4.93-2.64c1.06-.21 2.23-.36 3.45-.36h4v-2h-4Z"
        />
      </g>
    </svg>
  );
}
