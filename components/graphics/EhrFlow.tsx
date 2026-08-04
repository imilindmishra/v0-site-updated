/**
 * G2 — "Connected to your EHR" (Home + OmniAI).
 * Call → Voice agent → FHIR connector → EHR system, with a pulse traveling
 * the path and a note line appending on write. The 01/02/03 steps are real
 * sequence — order carries information here.
 * Reduced motion: full diagram, all nodes lit, pulse hidden.
 */
const nodes = [
  { x: 20, label: "Patient call", sub: "24/7 line" },
  { x: 180, label: "Voice agent", sub: "Understands intent" },
  { x: 340, label: "FHIR connector", sub: "Structured data" },
  { x: 500, label: "EHR system", sub: "Chart updated" },
]

const steps = [
  { x: 165, n: "01", label: "Answer" },
  { x: 325, n: "02", label: "Understand" },
  { x: 485, n: "03", label: "Write to chart" },
]

export function EhrFlow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 230"
      role="img"
      aria-label="Diagram of a patient call flowing through the voice agent and FHIR connector into the EHR system, where a note is written to the chart."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .g2-pulse { animation: g2-travel 5s ease-in-out infinite; }
          .g2-note { animation: g2-append 5s ease-out infinite; transform-origin: left center; transform-box: fill-box; }
        }
        @keyframes g2-travel {
          0% { opacity: 0; transform: translate(90px, 92px); }
          8% { opacity: 1; }
          30% { transform: translate(250px, 92px); }
          58% { transform: translate(410px, 92px); }
          82% { opacity: 1; transform: translate(560px, 92px); }
          88%, 100% { opacity: 0; transform: translate(560px, 92px); }
        }
        @keyframes g2-append { 0%, 80% { transform: scaleX(0); } 90%, 100% { transform: scaleX(1); } }
      `}</style>

      {/* Path */}
      <line x1="90" y1="92" x2="560" y2="92" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />

      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y="60" width="140" height="64" rx="14" fill="var(--card)" stroke="var(--wave-to)" />
          <circle cx={n.x + 22} cy="92" r="5" fill="var(--accent)" />
          <text x={n.x + 38} y="88" fontSize="13" fontWeight="600" fill="var(--ink)">
            {n.label}
          </text>
          <text x={n.x + 38} y="106" fontSize="13" fill="var(--muted-foreground)">
            {n.sub}
          </text>
        </g>
      ))}

      {/* Note appending inside the EHR node */}
      <rect className="g2-note" x="538" y="112" width="84" height="4" rx="2" fill="var(--muted-3)" />

      {/* Traveling pulse */}
      <circle className="g2-pulse" r="5" fill="var(--primary)" opacity="0" />

      {/* Real-sequence step markers */}
      {steps.map((s) => (
        <g key={s.n}>
          <text x={s.x} y="170" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--primary)" letterSpacing="0.1em">
            {s.n}
          </text>
          <text x={s.x} y="188" textAnchor="middle" fontSize="13" fill="var(--muted-foreground)">
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
