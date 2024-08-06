import { SVGProps } from "react";

export default function SquidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#1C2033">
        <g
          id="feSquid0"
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <g fill="#ffff">
            <path d="M8 10L6 8l6-6l6 6l-2 2v7a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-5 2.236V21a1 1 0 0 1-2 0v-2h-2v2a1 1 0 0 1-2 0v-1.764A3 3 0 0 1 4 17a1 1 0 0 1 2 0a1 1 0 0 0 2 0v-7Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
