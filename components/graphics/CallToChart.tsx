/**
 * G1 (Home hero) — "The Answered Call": the original phone → waveform → EHR flow.
 * One 6s loop: an incoming call rings → a live voice waveform speaks → a
 * structured EHR record fills in row by row and gets a success tick, while a
 * data packet travels call → wave → chart. Whole composition floats 3px.
 * Reduced motion: the static markup IS the end-state — the completed record
 * with its green tick.
 */
export function CallToChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 360"
      role="img"
      aria-label="An incoming patient call becomes a live voice conversation, which is written into the clinic's EHR as a completed, structured record."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .g1-float { animation: g1-drift 5s ease-in-out infinite; }
          .g1-ring { animation: g1-ring 6s ease-out infinite; transform-origin: 75px 180px; }
          .g1-ring2 { animation-delay: 0.4s; }
          .g1-bar { animation: g1-speak 1.1s ease-in-out infinite alternate; transform-origin: center; transform-box: fill-box; }
          .g1-packet { animation: g1-travel 6s ease-in-out infinite; }
          .g1-row { animation: g1-fill 6s ease-out infinite; transform-origin: left center; transform-box: fill-box; }
          .g1-row-2 { animation-name: g1-fill-2; }
          .g1-row-3 { animation-name: g1-fill-3; }
          .g1-row-4 { animation-name: g1-fill-4; }
          .g1-tick { animation: g1-pop 6s ease-out infinite; transform-origin: 445px 262px; }
        }
        @keyframes g1-drift { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes g1-ring {
          0% { opacity: 0; transform: scale(0.4); }
          6% { opacity: 0.5; }
          16% { opacity: 0; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes g1-speak {
          from { transform: scaleY(0.35); }
          to { transform: scaleY(1); }
        }
        @keyframes g1-travel {
          0%, 16% { opacity: 0; transform: translate(120px, 180px); }
          20% { opacity: 1; }
          34% { transform: translate(250px, 168px); }
          50% { opacity: 1; transform: translate(368px, 150px); }
          54%, 100% { opacity: 0; transform: translate(368px, 150px); }
        }
        @keyframes g1-fill { 0%, 50% { transform: scaleX(0); } 58%, 100% { transform: scaleX(1); } }
        @keyframes g1-fill-2 { 0%, 57% { transform: scaleX(0); } 65%, 100% { transform: scaleX(1); } }
        @keyframes g1-fill-3 { 0%, 64% { transform: scaleX(0); } 72%, 100% { transform: scaleX(1); } }
        @keyframes g1-fill-4 { 0%, 71% { transform: scaleX(0); } 79%, 100% { transform: scaleX(1); } }
        @keyframes g1-pop {
          0%, 82% { opacity: 0; transform: scale(0.5); }
          88% { opacity: 1; transform: scale(1.12); }
          92%, 100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <defs>
        <linearGradient id="g1-wave" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--wave-from)" />
          <stop offset="100%" stopColor="var(--wave-to)" />
        </linearGradient>
      </defs>

      <g className="g1-float">
        {/* Connecting path */}
        <path
          d="M120 180 C 170 180 200 172 250 168 C 310 163 330 156 400 150"
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />

        {/* Incoming call */}
        <circle className="g1-ring" cx="75" cy="180" r="44" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
        <circle className="g1-ring g1-ring2" cx="75" cy="180" r="44" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
        <rect x="31" y="136" width="88" height="88" rx="20" fill="var(--card)" stroke="var(--border)" />
        <path
          d="M62 165c0-2 1.6-3.6 3.6-3.6h6.1c1.6 0 3 1 3.4 2.6l2 6.9c.4 1.4 0 3-1.1 4l-3 2.7c2.4 5 6.4 9 11.4 11.4l2.7-3c1-1.2 2.6-1.6 4-1.2l6.9 2c1.5.5 2.6 1.9 2.6 3.5v6c0 2-1.6 3.7-3.6 3.7C77.5 200 55 177.5 62 165Z"
          fill="var(--primary)"
        />
        <text x="75" y="248" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)">
          Incoming call
        </text>

        {/* Live voice waveform */}
        <g>
          {[
            [188, 22],
            [202, 38],
            [216, 58],
            [230, 34],
            [244, 66],
            [258, 46],
            [272, 60],
            [286, 30],
            [300, 50],
            [314, 24],
          ].map(([x, h], i) => (
            <rect
              key={x}
              className="g1-bar"
              style={{ animationDelay: `${(i % 5) * 0.14}s`, animationDuration: `${1 + (i % 3) * 0.18}s` }}
              x={x}
              y={168 - h / 2}
              width="7"
              height={h}
              rx="3.5"
              fill="url(#g1-wave)"
            />
          ))}
          <text x="254" y="248" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)">
            Voice agent on the line
          </text>
        </g>

        {/* Data packet */}
        <circle className="g1-packet" r="5" fill="var(--accent)" opacity="0" />

        {/* EHR record card */}
        <g>
          <rect x="380" y="60" width="150" height="230" rx="16" fill="var(--card)" stroke="var(--border)" />
          <rect x="380" y="60" width="150" height="40" rx="16" fill="var(--muted)" />
          <rect x="380" y="84" width="150" height="16" fill="var(--muted)" />
          <circle cx="402" cy="80" r="7" fill="var(--muted-3)" />
          <rect x="416" y="74" width="70" height="5" rx="2.5" fill="var(--wave-to)" />
          <rect x="416" y="84" width="46" height="4" rx="2" fill="var(--muted-3)" />

          <rect className="g1-row" x="398" y="120" width="114" height="9" rx="4.5" fill="var(--muted-3)" />
          <rect className="g1-row g1-row-2" x="398" y="142" width="92" height="9" rx="4.5" fill="var(--muted-4)" />
          <rect className="g1-row g1-row-3" x="398" y="164" width="104" height="9" rx="4.5" fill="var(--muted-3)" />
          <rect className="g1-row g1-row-4" x="398" y="186" width="72" height="9" rx="4.5" fill="var(--muted-4)" />

          <g className="g1-tick">
            <circle cx="445" cy="242" r="17" fill="var(--success-bg)" />
            <path
              d="M437 242.5l5.5 5.5 11-11"
              stroke="var(--success)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text x="455" y="312" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)">
            Written to the EHR
          </text>
        </g>
      </g>
    </svg>
  )
}
