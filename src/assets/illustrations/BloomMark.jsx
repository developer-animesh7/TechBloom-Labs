/* ==========================================================================
   BloomMark — the TechBloom Labs glyph: a stem with three nodes opening outward.
   Used in the header, mobile menu and footer wordmark.
   ========================================================================== */

export default function BloomMark({ size = 30, plate = true, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {plate ? <rect width="64" height="64" rx="14" fill="var(--ink)" /> : null}
      <g
        stroke="var(--accent-bright)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M32 52V30" />
        <path d="M32 34c-6.5 0-11-4-11-10" />
        <path d="M32 30c6.5 0 11-4.4 11-11" />
      </g>
      <circle cx="21" cy="24" r="4.2" fill="var(--accent-bright)" />
      <circle cx="43" cy="19" r="5.4" fill="var(--paper)" />
      <circle cx="32" cy="42" r="3.2" fill="var(--paper)" opacity="0.55" />
    </svg>
  );
}
