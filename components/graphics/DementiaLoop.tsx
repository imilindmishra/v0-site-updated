/**
 * G4-Dementia — a scheduled warm call delivers a medication reminder, then the
 * family caregiver is notified. Gentle but brisk pacing (5s).
 *
 * DEPTH: split into three sibling <svg> layers inside one container, each
 * absolutely positioned over the same viewBox. 3D transforms are applied to the
 * <svg> elements themselves — NEVER to <g>/shape nodes inside a single SVG tree,
 * which renders as a no-op (SVG establishes no 3D rendering context).
 *
 * INTERACTIVITY: three transparent hotspot buttons sit over the stations. Hover
 * (pointer) or focus (tap/keyboard) highlights that station's connector and dims
 * the others, driven entirely by :has() in globals.css — no JS state.
 *
 * The existing 5s loop already reveals the story step by step (call → reminder →
 * confirm → notify), so it is kept as the trigger rather than replaced with a
 * scroll-driven reveal.
 *
 * Reduced motion: all three stations lit, caregiver notified, layers flat.
 */
export function DementiaLoop({ className }: { className?: string }) {
  return (
    <div
      className={`dm-scene ${className ?? ""}`}
      role="img"
      aria-label="A scheduled warm voice call gives a medication reminder, the reminder is confirmed, and the family caregiver is notified that it was taken."
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

      {/* ---- layer 1: card surface, connectors, station labels ---- */}
      <svg className="dm-layer dm-l-base" viewBox="0 0 560 300" fill="none" aria-hidden>
        <rect x="8" y="8" width="544" height="284" rx="16" fill="var(--card)" stroke="var(--border)" />

        <path className="dm-link dm-conn dm-conn-a" d="M156 120 C 196 120 214 124 224 122" stroke="var(--wave-to)" strokeWidth="1.5" />
        <path className="dm-link dm-link-2 dm-conn dm-conn-b" d="M336 122 C 356 124 372 120 396 120" stroke="var(--wave-to)" strokeWidth="1.5" />

        <g className="dm-lbl dm-lbl-1">
          <text x="110" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Warm daily call</text>
          <text x="110" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Adaptive, patient tone</text>
        </g>
        <g className="dm-lbl dm-lbl-2">
          <text x="280" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Medication reminder</text>
          <text x="280" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Confirmed &amp; logged</text>
        </g>
        <g className="dm-lbl dm-lbl-3">
          <text x="450" y="182" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">Family notified</text>
          <text x="450" y="200" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">Caregiver in the loop</text>
        </g>
      </svg>

      {/* ---- layer 2: station icons ---- */}
      <svg className="dm-layer dm-l-icons" viewBox="0 0 560 300" fill="none" aria-hidden>
        <g className="dm-warm dm-node dm-node-1">
          <circle cx="110" cy="120" r="38" fill="var(--muted)" />
          <path
            d="M110 135c-1.5-1.3-13-10.4-13-18.2 0-4.3 3.4-7.8 7.7-7.8 2.1 0 4.1.9 5.3 2.4a7 7 0 0 1 5.3-2.4c4.3 0 7.7 3.5 7.7 7.8 0 7.8-11.5 16.9-13 18.2Z"
            fill="var(--accent)"
          />
        </g>

        {/* the dim wrapper must be OUTSIDE the animated group: a running
            keyframe on `opacity` would otherwise beat the hover rule */}
        <g className="dm-node dm-node-2">
          <g className="dm-med">
            <rect x="226" y="94" width="108" height="50" rx="14" fill="var(--muted-2)" stroke="var(--border)" />
            <rect x="266" y="100" width="28" height="15" rx="7.5" fill="var(--wave-to)" />
            <circle cx="286" cy="107.5" r="6" fill="var(--card)" />
            <text x="280" y="135" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--ink)">Medication</text>
          </g>
        </g>

        <g className="dm-node dm-node-3">
          <circle className="dm-ring" cx="450" cy="120" r="32" stroke="var(--accent)" strokeWidth="1.5" opacity="0" />
          <g className="dm-care">
            <circle cx="450" cy="120" r="28" fill="var(--muted)" />
            <circle cx="450" cy="112" r="8" fill="var(--primary)" />
            <path d="M436 136c2-8 8-11 14-11s12 3 14 11" fill="var(--primary)" />
          </g>
        </g>
      </svg>

      {/* ---- layer 3: confirmation badge (front-most) ---- */}
      <svg className="dm-layer dm-l-badges" viewBox="0 0 560 300" fill="none" aria-hidden>
        <g className="dm-check">
          <circle cx="330" cy="98" r="11" fill="var(--success-bg)" />
          <path d="M325 98.5l3.5 3.5 7-7" stroke="var(--success)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      {/* ---- hotspots: hover on pointer, focus on tap/keyboard ---- */}
      <button type="button" className="dm-hot dm-hot-1">Warm daily call — adaptive, patient tone</button>
      <button type="button" className="dm-hot dm-hot-2">Medication reminder — confirmed and logged</button>
      <button type="button" className="dm-hot dm-hot-3">Family notified — caregiver in the loop</button>
    </div>
  )
}
