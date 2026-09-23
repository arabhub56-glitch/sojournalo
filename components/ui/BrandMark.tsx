export function BrandIcon({
  className,
  ink = "#15212F",
  teal = "#259C93",
}: {
  className?: string;
  ink?: string;
  teal?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* orbit ring */}
      <circle cx="20" cy="20" r="16.5" stroke={ink} strokeWidth="1" opacity="0.4" />
      {/* orbiting node */}
      <circle cx="34.5" cy="14" r="1.4" fill={teal} />
      {/* wireframe cube */}
      <path
        d="M13 14.5 L20 10.5 L27 14.5 L20 18.5 Z"
        stroke={ink}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M13 14.5 L20 18.5 L20 27 L13 23 Z"
        stroke={ink}
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M27 14.5 L20 18.5 L20 27 L27 23 Z"
        stroke={teal}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* sparkle */}
      <path
        d="M31.5 3.5 L32.6 6.4 L35.5 7.5 L32.6 8.6 L31.5 11.5 L30.4 8.6 L27.5 7.5 L30.4 6.4 Z"
        fill={teal}
      />
    </svg>
  );
}

export default function BrandMark({
  variant = "dark",
  className = "",
  iconClassName = "w-8 h-8",
  textClassName = "text-lg",
}: {
  variant?: "dark" | "light";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  const ink = variant === "dark" ? "#15212F" : "#F6F1E7";
  const teal = "#3FC7BB";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandIcon className={iconClassName} ink={ink} teal={teal} />
      <span
        className={`font-display font-semibold tracking-tight ${textClassName} ${
          variant === "dark" ? "text-ink" : "text-paper"
        }`}
      >
        SoJournalo
      </span>
    </span>
  );
}
