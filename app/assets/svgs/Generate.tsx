import { SVGProps } from "react";

export default function GenerateSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="100"
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <text x="50" y="50" fill="#171717" rotate="0 0 0" textLength="100">
        G E N E R A T E
      </text>
    </svg>
  );
}

//border:3px none #ff0000;background:#ffffff
