/**
 * G1 — the voice agent, live on a call (hero signature, Home + OmniAI).
 * A call card: the agent is on the line with a reactive voice waveform as the
 * centerpiece, a short caller↔agent exchange types in, and the outcome is
 * confirmed (booked + written to the chart).
 *
 * DEPTH: three sibling <svg> layers (base / waveform / conversation) in one
 * container. 3D lives on the <svg> elements themselves — inside a single SVG
 * tree translateZ is a verified no-op. Each raised layer is counter-scaled so
 * it stays registered with the base; elevation reads via drop-shadow.
 *
 * INTERACTIVITY: one hotspot over the waveform. Hover (pointer) or focus
 * (tap/keyboard) gives a subtle amplitude lift only — this reads as a real
 * product screenshot, so it stays restrained.
 *
 * Reduced motion: static end-state — waveform at rest, full exchange shown,
 * confirmation visible, layers flat.
 */
const bars = [16, 28, 44, 62, 74, 52, 66, 40, 58, 30, 48, 24, 18]

export function AnsweredCall({ className }: { className?: string }) {
  return (
    <div
      className={`va-scene ${className ?? ""}`}
      role="img"
      aria-label="The iClinic AI voice agent on a live call: a reactive voice waveform, a patient asking to refill a prescription, the agent booking the refill and follow-up, and the visit written to the patient's chart."
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .va-dot { animation: va-dot 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .va-ring { animation: va-ring 3.4s var(--ease-out) infinite; transform-box: fill-box; transform-origin: center; }
          .va-ring2 { animation-delay: 1.1s; }
          .va-bar { animation: va-speak 1s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; }
          .va-caller { opacity: 0; animation: va-caller 6s var(--ease-out) infinite; transform-box: fill-box; transform-origin: right center; }
          .va-agent { opacity: 0; animation: va-agent 6s var(--ease-out) infinite; transform-box: fill-box; transform-origin: left center; }
          .va-confirm { opacity: 0; animation: va-confirm 6s var(--ease-settle) infinite; transform-box: fill-box; transform-origin: left center; }
        }
        @keyframes va-dot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.7); } }
        @keyframes va-ring { 0% { opacity: 0.5; transform: scale(0.7); } 70%, 100% { opacity: 0; transform: scale(1.25); } }
        @keyframes va-speak { from { transform: scaleY(0.3); } to { transform: scaleY(1); } }
        @keyframes va-caller { 0%, 8% { opacity: 0; transform: translateX(10px); } 16%, 100% { opacity: 1; transform: translateX(0); } }
        @keyframes va-agent { 0%, 26% { opacity: 0; transform: translateX(-10px); } 34%, 100% { opacity: 1; transform: translateX(0); } }
        @keyframes va-confirm { 0%, 46% { opacity: 0; transform: scale(0.9); } 54%, 100% { opacity: 1; transform: scale(1); } }
      `}</style>

      {/* ---- layer 1: card surface + header ---- */}
      <svg className="va-layer va-l-base" viewBox="0 0 480 420" fill="none" aria-hidden>
        <rect x="8" y="8" width="464" height="404" rx="20" fill="var(--card)" stroke="var(--border)" />
        <rect x="28" y="28" width="40" height="40" rx="12" fill="var(--primary)" />
        <path
          d="M48 40a6 6 0 0 0-6 6v4a6 6 0 0 0 12 0v-4a6 6 0 0 0-6-6Zm-9 10a9 9 0 0 0 18 0M48 59v4"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="80" y="45" fontSize="14" fontWeight="600" fill="var(--ink)">iClinic AI</text>
        <text x="80" y="61" fontSize="11" fill="var(--muted-foreground)">Voice agent</text>
        <circle className="va-dot" cx="358" cy="43" r="4" fill="var(--success)" />
        <text x="370" y="47" fontSize="12" fill="var(--muted-foreground)">On a call</text>
      </svg>

      {/* ---- layer 2: the waveform centerpiece ---- */}
      <svg className="va-layer va-l-wave" viewBox="0 0 480 420" fill="none" aria-hidden>
        <defs>
          <linearGradient id="va-wave" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--wave-from)" />
            <stop offset="100%" stopColor="var(--wave-to)" />
          </linearGradient>
        </defs>
        {/* transform-origin in user units, and NO transform-box: fill-box —
            fill-box would re-resolve it against the group's own bbox. */}
        <g className="va-wavegroup" style={{ transformOrigin: "240px 176px" }}>
          <circle className="va-ring" cx="240" cy="176" r="60" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
          <circle className="va-ring va-ring2" cx="240" cy="176" r="60" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
          <circle cx="240" cy="176" r="60" fill="var(--muted-2)" />
          {bars.map((h, i) => (
            <rect
              key={i}
              className="va-bar"
              style={{ animationDelay: `${(i % 5) * 0.11}s`, animationDuration: `${0.9 + (i % 3) * 0.16}s` }}
              x={186 + i * 8}
              y={176 - h / 2}
              width="5"
              height={h}
              rx="2.5"
              fill="url(#va-wave)"
            />
          ))}
        </g>
      </svg>

      {/* ---- layer 3: the conversation + outcome (front-most) ---- */}
      <svg className="va-layer va-l-chat" viewBox="0 0 480 420" fill="none" aria-hidden>
        <g className="va-caller">
          <rect x="196" y="262" width="256" height="34" rx="12" fill="var(--muted)" />
          <text x="440" y="284" textAnchor="end" fontSize="12" fill="var(--ink)">
            &ldquo;I need to refill my prescription.&rdquo;
          </text>
        </g>

        <g className="va-agent">
          <rect x="28" y="308" width="268" height="34" rx="12" fill="var(--primary)" />
          <text x="44" y="330" fontSize="12" fill="var(--primary-foreground)">
            Booked your refill and a follow-up.
          </text>
        </g>

        <g className="va-confirm">
          <circle cx="38" cy="368" r="9" fill="var(--success)" />
          <path d="M33.5 368l3 3 6-6" stroke="var(--card)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="54" y="372" fontSize="12" fontWeight="500" fill="var(--success)">
            Written to the patient&apos;s chart via FHIR
          </text>
        </g>
      </svg>

      <button type="button" className="va-hot">Live voice waveform — the agent is speaking</button>
    </div>
  )
}
