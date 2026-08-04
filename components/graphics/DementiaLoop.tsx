/**
 * G4-Dementia — a scheduled warm call delivers a medication reminder, then the
 * family caregiver is notified. Gentle but brisk pacing (5s). Everything sits
 * inside the card padding; the med node's toggle + label are centered.
 * Reduced motion: all three stations lit, caregiver notified.
 */
export function DementiaLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="A scheduled warm voice call gives a medication reminder, the reminder is confirmed, and the family caregiver is notified that it was taken."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .dm-warm { animation: dm-warm 5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .dm-link { stroke-dasharray: 130; stroke-dashoffset: 130; animation: dm-link 5s var(--ease-out) infinite; }
          .dm-link-2 { animation-name: dm-link-2; }
          .dm-med { opacity: 0; animation: dm-med 5s var(--ease-out) infinite; transform-box: fill-box; transform-origin: center; }
          .dm-check { opacity: 0; animation: dm-check 5s var(--ease-settle) infinite; transform-box: fill-box; transform-origin: center; }
          .dm-care { opacity: 0; animation: dm-care 5s var(--ease-out) infinite; transform-box: fill-box; transform-origin: center; }
          .dm-ring { animation: dm-ring 5s var(--ease-out) infinite; transform-box: fill-box; transform-origin: center; }
        }
        @keyframes dm-warm { 0%, 12%, 100% { transform: scale(1); } 6% { transform: scale(1.06); } }
        @keyframes dm-link { 0%, 8% { stroke-dashoffset: 130; } 26%, 100% { stroke-dashoffset: 0; } }
        @keyframes dm-link-2 { 0%, 40% { stroke-dashoffset: 130; } 56%, 100% { stroke-dashoffset: 0; } }
        @keyframes dm-med { 0%, 26% { opacity: 0; transform: scale(0.95); } 36%, 100% { opacity: 1; transform: scale(1); } }
        @keyframes dm-check { 0%, 40% { opacity: 0; transform: scale(0.5); } 48% { opacity: 1; transform: scale(1.15); } 54%, 100% { opacity: 1; transform: scale(1); } }
        @keyframes dm-care { 0%, 62% { opacity: 0; transform: scale(0.95); } 72%, 100% { opacity: 1; transform: scale(1); } }
        @keyframes dm-ring {
          0%, 68% { opacity: 0; transform: scale(0.5); }
          78% { opacity: 0.4; }
          92%, 100% { opacity: 0; transform: scale(1.7); }
        }
      `}</style>

      <rect x="8" y="8" width="544" height="284" rx="16" fill="var(--card)" stroke="var(--border)" />

      {/* connecting paths */}
      <path className="dm-link" d="M156 120 C 196 120 214 124 224 122" stroke="var(--wave-to)" strokeWidth="1.5" />
      <path className="dm-link dm-link-2" d="M336 122 C 356 124 372 120 396 120" stroke="var(--wave-to)" strokeWidth="1.5" />

      {/* warm call */}
      <g className="dm-warm">
        <circle cx="110" cy="120" r="38" fill="var(--muted)" />
        <path
          d="M110 135c-1.5-1.3-13-10.4-13-18.2 0-4.3 3.4-7.8 7.7-7.8 2.1 0 4.1.9 5.3 2.4a7 7 0 0 1 5.3-2.4c4.3 0 7.7 3.5 7.7 7.8 0 7.8-11.5 16.9-13 18.2Z"
          fill="var(--accent)"
        />
      </g>
      <text x="110" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Warm daily call</text>
      <text x="110" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Adaptive, patient tone</text>

      {/* medication reminder — toggle + label centered in the box */}
      <g className="dm-med">
        <rect x="226" y="94" width="108" height="50" rx="14" fill="var(--muted-2)" stroke="var(--border)" />
        <rect x="266" y="100" width="28" height="15" rx="7.5" fill="var(--wave-to)" />
        <circle cx="286" cy="107.5" r="6" fill="var(--card)" />
        <text x="280" y="135" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--ink)">Medication</text>
      </g>
      <g className="dm-check">
        <circle cx="330" cy="98" r="11" fill="var(--success-bg)" />
        <path d="M325 98.5l3.5 3.5 7-7" stroke="var(--success)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="280" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Medication reminder</text>
      <text x="280" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Confirmed &amp; logged</text>

      {/* caregiver */}
      <circle className="dm-ring" cx="450" cy="120" r="32" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
      <g className="dm-care">
        <circle cx="450" cy="120" r="28" fill="var(--muted)" />
        <circle cx="450" cy="112" r="8" fill="var(--primary)" />
        <path d="M436 136c2-8 8-11 14-11s12 3 14 11" fill="var(--primary)" />
      </g>
      <text x="450" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Family notified</text>
      <text x="450" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Caregiver in the loop</text>
    </svg>
  )
}
