/**
 * G4-HF — the prevention money-shot. A daily voice weight check-in plots on a
 * trend line; the line climbs and crosses the clinical threshold; the breach
 * point flags amber (--warn); the care team is notified and an outreach call is
 * placed before hospitalization. One focal change at a time.
 * Reduced motion: static markup is the end-state — full line, amber breach
 * point, callout tag, and the alert card all shown.
 */
const THRESHOLD_Y = 170
const points = [
  [78, 236],
  [142, 230],
  [206, 222],
  [270, 208],
  [334, 180],
  [398, 138],
] as const

export function HeartFailureLoop({ className }: { className?: string }) {
  const linePoints = points.map((p) => p.join(",")).join(" ")
  const [bx, by] = points[points.length - 1]

  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label="A daily voice weight check-in plots on a trend line that climbs and crosses the alert threshold; the breach flags amber and the care team is notified, placing an outreach call before hospitalization."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hf-checkin { animation: hf-checkin 6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .hf-threshold { opacity: 0; animation: hf-threshold 6s var(--ease-out) infinite; }
          .hf-line { stroke-dasharray: 460; stroke-dashoffset: 460; animation: hf-draw 6s var(--ease-out) infinite; }
${points
  .map((_, i) => {
    const start = 14 + i * 5
    return `          .hf-pt-${i} { opacity: 0; animation: hf-pt-${i} 6s var(--ease-out) infinite; }
        @keyframes hf-pt-${i} { 0%, ${start}% { opacity: 0; transform: scale(0.3); } ${start + 5}%, 100% { opacity: 1; transform: scale(1); } }`
  })
  .join("\n")}
          .hf-breach { animation: hf-breach 6s var(--ease-settle) infinite; transform-box: fill-box; transform-origin: center; }
          .hf-callout { opacity: 0; animation: hf-callout 6s var(--ease-out) infinite; transform-box: fill-box; transform-origin: right center; }
          .hf-alert { opacity: 0; animation: hf-alert 6s var(--ease-settle) infinite; transform-box: fill-box; transform-origin: left center; }
          .hf-bell { animation: hf-bell 6s ease-in-out infinite; transform-box: fill-box; transform-origin: top center; }
        }
        @keyframes hf-checkin { 0%, 8%, 100% { transform: scale(1); } 4% { transform: scale(1.08); } }
        @keyframes hf-threshold { 0%, 6% { opacity: 0; } 14%, 100% { opacity: 0.75; } }
        @keyframes hf-draw { 0%, 12% { stroke-dashoffset: 460; } 52%, 100% { stroke-dashoffset: 0; } }
        @keyframes hf-breach {
          0%, 50% { transform: scale(1); }
          56% { transform: scale(1.7); }
          64%, 100% { transform: scale(1); }
        }
        @keyframes hf-callout { 0%, 54% { opacity: 0; transform: translateX(8px); } 62%, 100% { opacity: 1; transform: translateX(0); } }
        @keyframes hf-alert { 0%, 66% { opacity: 0; transform: translateY(10px); } 74%, 100% { opacity: 1; transform: translateY(0); } }
        @keyframes hf-bell {
          0%, 74% { transform: rotate(0); }
          78% { transform: rotate(11deg); }
          82% { transform: rotate(-8deg); }
          86%, 100% { transform: rotate(0); }
        }
      `}</style>

      <rect x="8" y="8" width="544" height="324" rx="16" fill="var(--card)" stroke="var(--border)" />

      {/* Check-in header */}
      <g className="hf-checkin">
        <circle cx="42" cy="42" r="17" fill="var(--muted)" />
        <path d="M34 37c0-1 .9-1.8 1.8-1.8h2.9c.8 0 1.5.5 1.7 1.3l1 3.3c.3.7 0 1.4-.5 1.9l-1.5 1.3c1.2 2.5 3.2 4.5 5.7 5.7l1.3-1.5c.5-.6 1.2-.8 2-.5l3.3 1c.7.2 1.3.9 1.3 1.7v2.9c0 1-.8 1.8-1.8 1.8-10.6 0-18.7-10.6-17.1-17.1Z" fill="var(--primary)" />
      </g>
      <text x="70" y="38" fontSize="13" fontWeight="600" fill="var(--ink)">Daily voice weight check-in</text>
      <text x="70" y="55" fontSize="12" fill="var(--muted-foreground)">&ldquo;What was your weight this morning?&rdquo;</text>

      {/* Callout tag — anchored top-right, clear of the trend line */}
      <g className="hf-callout">
        <rect x="406" y="92" width="132" height="32" rx="10" fill="var(--warn-bg)" stroke="var(--warn)" strokeOpacity="0.3" />
        <text x="472" y="112" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--warn)">
          +4 lbs in 3 days
        </text>
      </g>
      {/* leader from callout to breach point */}
      <line x1={bx} y1={by} x2="454" y2="124" stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

      {/* Threshold line + side label (never over a point) */}
      <g className="hf-threshold">
        <line x1="70" y1={THRESHOLD_Y} x2="430" y2={THRESHOLD_Y} stroke="var(--warn)" strokeWidth="1.5" strokeDasharray="6 5" />
        <text x="70" y={THRESHOLD_Y - 8} fontSize="12" letterSpacing="0.04em" fill="var(--warn)">
          ALERT THRESHOLD
        </text>
      </g>

      {/* Trend line */}
      <polyline
        className="hf-line"
        points={linePoints}
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map(([x, y], i) => {
        const breach = y < THRESHOLD_Y
        return (
          <g key={x} className={`hf-pt-${i}`}>
            {breach && <circle className="hf-breach" cx={x} cy={y} r="5" fill="var(--warn)" opacity="0.25" />}
            <circle
              className={breach ? "hf-breach" : undefined}
              cx={x}
              cy={y}
              r="5"
              fill={breach ? "var(--warn)" : "var(--card)"}
              stroke={breach ? "var(--warn)" : "var(--primary)"}
              strokeWidth="2"
            />
          </g>
        )
      })}

      {/* Care-team alert / action card — the outcome */}
      <g className="hf-alert">
        <rect x="70" y="272" width="420" height="44" rx="12" fill="var(--warn-bg)" />
        <g className="hf-bell">
          <circle cx="98" cy="294" r="15" fill="var(--card)" />
          <path
            d="M98 284c-3.7 0-6.3 2.7-6.3 6.5v3.7l-1.7 2.8c-.3.6.1 1.3.8 1.3h14.4c.7 0 1.1-.7.8-1.3l-1.7-2.8v-3.7c0-3.8-2.6-6.5-6.3-6.5Zm-2.2 15.5a2.3 2.3 0 0 0 4.4 0"
            stroke="var(--warn)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text x="124" y="290" fontSize="13" fontWeight="600" fill="var(--warn)">Care team notified</text>
        <text x="124" y="306" fontSize="12" fill="var(--warn)" fillOpacity="0.85">
          Outreach call placed before hospitalization
        </text>
      </g>
    </svg>
  )
}
