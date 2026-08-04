/**
 * G4-Diabetes — one loop: a CGM reading syncs by voice → glucose plots against
 * a target-range band (out-of-range readings trend back in) → the agent shares
 * a bit of guidance by voice → the A1C goal ring advances. Contained in the card.
 * Reduced motion: static end-state — reading logged, trend drawn with range
 * band, guidance shown, ring at goal.
 */
const C = 213.6 // A1C ring circumference (r=34)
const GOAL = C * (1 - 0.72)
// Points crossing from above the target band (high) down into range.
const trend = [
  [150, 84],
  [192, 92],
  [234, 110],
  [276, 122],
  [318, 128],
  [360, 122],
] as const
const BAND_TOP = 100
const BAND_H = 44

export function DiabetesLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="A CGM glucose reading syncs by voice and plots against a target-range band, trending from high back into range; the agent shares guidance by voice and the patient's A1C goal ring advances."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .db-device { animation: db-device 6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .db-sync { animation: db-sync 6s var(--ease-out) infinite; }
          .db-band { opacity: 0; animation: db-band 6s var(--ease-out) infinite; }
          .db-line { stroke-dasharray: 260; stroke-dashoffset: 260; animation: db-draw 6s var(--ease-out) infinite; }
${trend
  .map((_, i) => {
    const start = 24 + i * 4
    return `          .db-pt-${i} { opacity: 0; animation: db-pt-${i} 6s var(--ease-out) infinite; }
        @keyframes db-pt-${i} { 0%, ${start}% { opacity: 0; transform: scale(0.3); } ${start + 5}%, 100% { opacity: 1; transform: scale(1); } }`
  })
  .join("\n")}
          .db-chip { opacity: 0; animation: db-chip 6s var(--ease-settle) infinite; transform-box: fill-box; transform-origin: left center; }
          .db-ring { stroke-dasharray: ${C}; stroke-dashoffset: ${C}; animation: db-ring 6s var(--ease-out) infinite; }
        }
        @keyframes db-device { 0%, 10%, 100% { transform: scale(1); } 5% { transform: scale(1.07); } }
        @keyframes db-sync {
          0%, 10% { opacity: 0; transform: translate(100px, 96px); }
          13% { opacity: 1; }
          22% { opacity: 1; transform: translate(150px, 92px); }
          26%, 100% { opacity: 0; transform: translate(150px, 92px); }
        }
        @keyframes db-band { 0%, 16% { opacity: 0; } 24%, 100% { opacity: 1; } }
        @keyframes db-draw { 0%, 22% { stroke-dashoffset: 260; } 54%, 100% { stroke-dashoffset: 0; } }
        @keyframes db-chip { 0%, 56% { opacity: 0; transform: translateX(-8px); } 64%, 100% { opacity: 1; transform: translateX(0); } }
        @keyframes db-ring { 0%, 66% { stroke-dashoffset: ${C}; } 90%, 100% { stroke-dashoffset: ${GOAL}; } }
      `}</style>

      <rect x="8" y="8" width="544" height="284" rx="16" fill="var(--card)" stroke="var(--border)" />

      {/* CGM device */}
      <g className="db-device">
        <rect x="30" y="74" width="60" height="60" rx="16" fill="var(--muted)" />
        <circle cx="60" cy="104" r="16" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" />
        <circle cx="60" cy="104" r="5" fill="var(--primary)" />
      </g>
      <text x="60" y="156" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)">CGM reading</text>
      <text x="60" y="173" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Synced by voice</text>

      {/* sync token */}
      <circle className="db-sync" r="4.5" fill="var(--accent)" opacity="0" />

      {/* glucose trend with target-range band */}
      <text x="132" y="52" fontSize="11" fontWeight="600" fill="var(--ink)">Glucose trend</text>
      <g className="db-band">
        <rect x="132" y={BAND_TOP} width="252" height={BAND_H} rx="6" fill="var(--success-bg)" />
        <text x="378" y={BAND_TOP - 4} textAnchor="end" fontSize="9" letterSpacing="0.04em" fill="var(--success)">
          TARGET RANGE
        </text>
      </g>
      <polyline
        className="db-line"
        points={trend.map((p) => p.join(",")).join(" ")}
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {trend.map(([x, y], i) => {
        const inRange = y >= BAND_TOP && y <= BAND_TOP + BAND_H
        return (
          <circle
            key={x}
            className={`db-pt-${i}`}
            cx={x}
            cy={y}
            r="4.5"
            fill={inRange ? "var(--success)" : "var(--warn)"}
            stroke="var(--card)"
            strokeWidth="1.5"
          />
        )
      })}

      {/* guidance shared by voice */}
      <g className="db-chip">
        <rect x="132" y="182" width="252" height="52" rx="12" fill="var(--muted)" stroke="var(--border)" />
        {/* speech bubble */}
        <rect x="146" y="200" width="22" height="15" rx="5" fill="var(--primary)" />
        <path d="M151 215l-3 5v-5z" fill="var(--primary)" />
        <circle cx="152" cy="207.5" r="1.5" fill="var(--primary-foreground)" />
        <circle cx="157" cy="207.5" r="1.5" fill="var(--primary-foreground)" />
        <circle cx="162" cy="207.5" r="1.5" fill="var(--primary-foreground)" />
        <text x="180" y="205" fontSize="12" fontWeight="600" fill="var(--ink)">Guidance shared by voice</text>
        <text x="180" y="221" fontSize="11" fontStyle="italic" fill="var(--muted-foreground)">
          &ldquo;Try a short walk after lunch.&rdquo;
        </text>
      </g>

      {/* A1C goal ring */}
      <g>
        <circle cx="470" cy="112" r="34" stroke="var(--muted-3)" strokeWidth="8" />
        <circle
          className="db-ring"
          cx="470"
          cy="112"
          r="34"
          stroke="var(--success)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={GOAL}
          transform="rotate(-90 470 112)"
        />
        <text x="470" y="109" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--ink)">A1C</text>
        <text x="470" y="125" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">goal</text>
      </g>
      <text x="470" y="176" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)">Progress tracked</text>
      <text x="470" y="193" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Shared with care team</text>
    </svg>
  )
}
