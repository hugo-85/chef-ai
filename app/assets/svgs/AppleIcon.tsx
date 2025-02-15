import { SVGProps } from "react";

export default function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="#ffff"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#ffff">
        <path
          fill="#ffff"
          d="M12.159 2.974a.5.5 0 1 0-.317-.948c-.938.312-1.522 1.082-1.866 1.907a5.288 5.288 0 0 0-.127.339a3.998 3.998 0 0 0-.711-.963a3.99 3.99 0 0 0-2.94-1.17c-.58.016-1.043.48-1.059 1.059a3.99 3.99 0 0 0 1.17 2.94l.031.03A4.002 4.002 0 0 0 3.198 9.76l-.006.074a8.5 8.5 0 0 0 1.01 4.748l.36.658c.01.017.02.034.032.05l1 1.402a2.685 2.685 0 0 0 4.084.338a.456.456 0 0 1 .645 0a2.685 2.685 0 0 0 4.084-.338l1-1.401a.51.51 0 0 0 .032-.051l.359-.658a8.5 8.5 0 0 0 1.01-4.748l-.005-.074a4 4 0 0 0-4.645-3.626l-1.657.276c.01-.681.13-1.447.399-2.093c.28-.675.696-1.155 1.258-1.343Zm-5.25 6a1.22 1.22 0 0 0-.717.605c-.185.348-.312.922-.195 1.859a.5.5 0 0 1-.992.124c-.133-1.064-.01-1.865.305-2.454c.32-.6.807-.924 1.283-1.083a.5.5 0 0 1 .316.949Z"
        />
      </g>
    </svg>
  );
}
