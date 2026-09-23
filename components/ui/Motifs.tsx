const points: [number, number][] = [
  [40, 60], [90, 30], [150, 55], [110, 110], [60, 140],
  [180, 90], [220, 40], [260, 80], [320, 50], [350, 110],
];

const lines: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [2, 5],
  [5, 6], [6, 7], [7, 8], [8, 9],
];

const accentIndices = new Set([1, 5, 8]);

export function ConstellationField({
  className = "",
  color = "#15212F",
  accent = "#259C93",
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  accent?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 390 170"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke={color}
          strokeWidth="0.75"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={accentIndices.has(i) ? 3 : 1.8}
          fill={accentIndices.has(i) ? accent : color}
        />
      ))}
    </svg>
  );
}

export function OrbitDecor({
  className = "",
  color = "#15212F",
  accent = "#259C93",
}: {
  className?: string;
  color?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="62" stroke={color} strokeWidth="1" opacity="0.18" />
      <circle cx="176" cy="60" r="3" fill={accent} />
      <path
        d="M30 150 L33 158 L41 161 L33 164 L30 172 L27 164 L19 161 L27 158 Z"
        fill={accent}
        opacity="0.85"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#259C93" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1 L14.2 8.8 L22 11 L14.2 13.2 L12 21 L9.8 13.2 L2 11 L9.8 8.8 Z"
        fill={color}
      />
    </svg>
  );
}
