/**
 * G5 — Security band graphic. Lives only on the site's single dark section
 * (#100F0F): a shield with encrypted data flowing through HIPAA · FHIR · SOC 2
 * nodes. Restrained; accent blue + success green on white text.
 * Reduced motion: static lit shield with all compliance nodes ticked.
 */
const chips = [
  { x: 60, label: "HIPAA" },
  { x: 240, label: "FHIR" },
  { x: 420, label: "SOC 2" },
]

export function SecurityShield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="A shield protecting encrypted patient data as it flows through HIPAA, FHIR, and SOC 2 compliance checkpoints."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .g5-flow { animation: g5-flow 5s linear infinite; }
          .g5-glow { animation: g5-glow 5s ease-in-out infinite; }
        }
        @keyframes g5-flow {
          0% { opacity: 0; transform: translateX(0); }
          10% { opacity: 1; }
          46% { opacity: 1; transform: translateX(216px); }
          54% { opacity: 1; transform: translateX(244px); }
          90% { opacity: 1; transform: translateX(460px); }
          100% { opacity: 0; transform: translateX(460px); }
        }
        @keyframes g5-glow { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.7; } }
      `}</style>

      {/* data path */}
      <line x1="40" y1="120" x2="520" y2="120" stroke="var(--primary-foreground)" strokeOpacity="0.14" strokeWidth="1.5" strokeDasharray="3 6" />
      {[0, 1.3, 2.6, 3.9].map((d) => (
        <circle key={d} className="g5-flow" style={{ animationDelay: `${d}s` }} cx="46" cy="120" r="4" fill="var(--accent)" opacity="0" />
      ))}

      {/* shield */}
      <circle className="g5-glow" cx="280" cy="120" r="62" fill="var(--accent)" opacity="0.35" fillOpacity="0.12" />
      <path
        d="M280 62l44 16v38c0 30-18.5 52-44 62-25.5-10-44-32-44-62V78l44-16Z"
        fill="var(--ink)"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <rect x="264" y="112" width="32" height="26" rx="6" fill="var(--accent)" />
      <path d="M270 112v-8a10 10 0 0 1 20 0v8" stroke="var(--accent)" strokeWidth="3" />
      <circle cx="280" cy="124" r="3.5" fill="var(--ink)" />

      {/* compliance chips */}
      {chips.map((c) => (
        <g key={c.label}>
          <rect x={c.x} y="208" width="80" height="34" rx="17" fill="var(--primary-foreground)" fillOpacity="0.06" stroke="var(--accent)" strokeOpacity="0.6" />
          <circle cx={c.x + 20} cy="225" r="7" fill="var(--success-bg)" />
          <path d={`M${c.x + 16.5} 225l2.5 2.5 5-5`} stroke="var(--success)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x={c.x + 50} y="230" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--primary-foreground)">
            {c.label}
          </text>
        </g>
      ))}
      <text x="280" y="278" textAnchor="middle" fontSize="12" fill="var(--primary-foreground)" fillOpacity="0.55">
        AES-256 in transit and at rest · PHI redacted before storage
      </text>
    </svg>
  )
}
