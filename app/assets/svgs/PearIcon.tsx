import { SVGProps } from "react";

export default function PearIcon(props: SVGProps<SVGSVGElement>) {
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
          d="M18 16c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3 2-3 2-6c0-1.44.75-2.78 2-3.5c.4-.23.82-.38 1.25-.46V5c0-.37-.08-.58-.22-.72C10.9 4.14 10.63 4 10 4V2.5c.88 0 1.6.23 2.09.72c.49.49.66 1.16.66 1.78v1.04c.43.08.86.23 1.25.46c1.25.72 2 2.06 2 3.5c0 3 2 3 2 6Z"
        />
      </g>
    </svg>
  );
}
