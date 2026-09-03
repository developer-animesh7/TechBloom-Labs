/* ==========================================================================
   GridField — decorative measured grid used behind dark editorial sections.
   Purely presentational, sits under content at low opacity.
   ========================================================================== */

export default function GridField({ id = 'tb-grid', cell = 48, className = '' }) {
  const patternId = `${id}-pattern`;

  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} width={cell} height={cell} patternUnits="userSpaceOnUse">
          <path
            d={`M${cell} 0H0v${cell}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.09"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
