import { useId } from "react";

export function CardFrame() {
  const uid = useId();
  const outerClipId = `card-outer-clip-${uid}`;
  const innerClipId = `card-inner-clip-${uid}`;
  const shadowId = `medallion-shadow-${uid}`;
  const logoClipId = `medallion-logo-clip-${uid}`;

  return (
    <svg
      className="trading-card-frame"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 700"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={logoClipId}>
          <circle cx="115" cy="593" r="46" />
        </clipPath>

        <clipPath id={outerClipId}>
          <rect x="0" y="0" width="500" height="700" rx="24" />
        </clipPath>

        <clipPath id={innerClipId}>
          <rect x="20" y="20" width="460" height="660" rx="12" />
        </clipPath>

        <filter id={shadowId} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="6"
            floodColor="#000000"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      <g clipPath={`url(#${outerClipId})`}>
        {/* Inner overlays (layered over the finalist photo) */}
        <g clipPath={`url(#${innerClipId})`}>
          {/* Bottom-right nameplate backing */}
          <rect
            x="115"
            y="604"
            width="365"
            height="76"
            fill="#111827"
            fillOpacity="0.9"
          />
          <line
            x1="115"
            y1="604"
            x2="480"
            y2="604"
            stroke="var(--card-accent, #C8102E)"
            strokeWidth="3"
          />

          {/* Bottom-left corner fill + diagonal stripe */}
          <polygon points="0,535 180,700 0,700" fill="#111827" />
          <polygon
            points="0,449 273,700 191,700 0,525"
            fill="var(--card-accent, #C8102E)"
          />

          {/* Flanking white pinstripes */}
          <line x1="0" y1="442" x2="281" y2="700" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="0" y1="532" x2="183" y2="700" stroke="#FFFFFF" strokeWidth="3" />
        </g>

        {/* Outer card border with transparent photo cutout */}
        <path
          fillRule="evenodd"
          fill="#18181B"
          d="M 0,0 H 500 V 700 H 0 Z
             M 32,20 H 468 A 12,12 0 0 1 480,32 V 668 A 12,12 0 0 1 468,680 H 32 A 12,12 0 0 1 20,668 V 32 A 12,12 0 0 1 32,20 Z"
        />

        {/* Inner accent pinstripe & outer hairline */}
        <rect
          x="20"
          y="20"
          width="460"
          height="660"
          rx="12"
          stroke="var(--card-accent, #C8102E)"
          strokeWidth="4"
        />
        <rect
          x="4"
          y="4"
          width="492"
          height="692"
          rx="20"
          stroke="#FFFFFF"
          strokeOpacity="0.18"
          strokeWidth="2"
        />

        {/* Circular medallion with Grove City logo */}
        <g filter={`url(#${shadowId})`}>
          <circle cx="115" cy="593" r="58" fill="#18181B" />
          <circle cx="115" cy="593" r="53" fill="var(--card-accent, #C8102E)" />
          <circle cx="115" cy="593" r="47" fill="#18181B" />

          <image
            href="/images/GroveCityLogo.webp"
            x="77"
            y="555"
            width="76"
            height="76"
            preserveAspectRatio="xMidYMid meet"
            clipPath={`url(#${logoClipId})`}
          />
        </g>
      </g>
    </svg>
  );
}