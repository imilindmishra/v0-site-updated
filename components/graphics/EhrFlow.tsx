/**
 * G2 — "Connected to your EHR" (Home + OmniAI).
 * Call → Voice agent → Takes action → EHR system, with a pulse traveling
 * the path and a note line appending on write. The 01–04 steps are real
 * sequence — order carries information here, and each step sits under the
 * node that performs it.
 *
 * DEPTH: three sibling <svg> layers (base path + steps / nodes / pulse) in one
 * container. 3D lives on the <svg> elements themselves — inside a single SVG
 * tree translateZ is a verified no-op. Each raised layer is counter-scaled by
 * p/(p-z) so it stays registered with the base.
 *
 * INTERACTIVITY: a hotspot per node. Hover (pointer) or focus (tap/keyboard)
 * keeps that node and its step lit and dims the rest, so the path into it
 * reads clearly. The existing 5s pulse already walks the sequence, so it is
 * kept as the reveal rather than replaced by a scroll-driven one.
 *
 * TEXT FIT: pills are 150 wide. The label starts at x+34 (clearing the dot),
 * the sub line at x+20 — both lines are unindented enough that every string
 * below clears the right border at fontSize 13. Adding copy here means
 * re-checking that, since SVG text does not wrap.
 *
 * Reduced motion: full diagram, all nodes lit, pulse hidden, layers flat.
 */
const nodes = [
  { x: 20, label: "Patient call", sub: "24/7 line" },
  { x: 190, label: "Voice agent", sub: "Understands intent" },
  { x: 360, label: "Takes action", sub: "Books & cancels" },
  { x: 530, label: "EHR system", sub: "Chart updated" },
]

/** Centered on each node — steps[i] is what nodes[i] does. */
const steps = [
  { x: 95, n: "01", label: "Answer" },
  { x: 265, n: "02", label: "Understand" },
  { x: 435, n: "03", label: "Book or cancel" },
  { x: 605, n: "04", label: "Write to chart" },
]

export function EhrFlow({ className }: { className?: string }) {
  return (
    <div
      className={`ef-scene ${className ?? ""}`}
      role="img"
      aria-label="Diagram of a patient call flowing through the voice agent, which understands the request, books or cancels the appointment, and writes a structured note into the EHR system."
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .g2-pulse { animation: g2-travel 5s ease-in-out infinite; }
          .g2-note { animation: g2-append 5s ease-out infinite; transform-origin: left center; transform-box: fill-box; }
        }
        @keyframes g2-travel {
          0% { opacity: 0; transform: translate(95px, 92px); }
          8% { opacity: 1; }
          30% { transform: translate(265px, 92px); }
          58% { transform: translate(435px, 92px); }
          82% { opacity: 1; transform: translate(605px, 92px); }
          88%, 100% { opacity: 0; transform: translate(605px, 92px); }
        }
        @keyframes g2-append { 0%, 80% { transform: scaleX(0); } 90%, 100% { transform: scaleX(1); } }
      `}</style>

      {/* ---- layer 1: connecting path + sequence markers ---- */}
      <svg className="ef-layer ef-l-base" viewBox="0 0 700 230" fill="none" aria-hidden>
        <line className="ef-path" x1="95" y1="92" x2="605" y2="92" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />
        {steps.map((s, i) => (
          <g key={s.n} className={`ef-step ef-step-${i}`}>
            <text x={s.x} y="170" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--primary)" letterSpacing="0.1em">
              {s.n}
            </text>
            <text x={s.x} y="188" textAnchor="middle" fontSize="13" fill="var(--muted-foreground)">
              {s.label}
            </text>
          </g>
        ))}
      </svg>

      {/* ---- layer 2: the pill nodes ---- */}
      <svg className="ef-layer ef-l-nodes" viewBox="0 0 700 230" fill="none" aria-hidden>
        {nodes.map((n, i) => (
          <g key={n.label} className={`ef-node ef-node-${i}`}>
            <rect x={n.x} y="60" width="150" height="64" rx="14" fill="var(--card)" stroke="var(--wave-to)" />
            <circle cx={n.x + 20} cy="82" r="5" fill="var(--accent)" />
            <text x={n.x + 34} y="87" fontSize="13" fontWeight="600" fill="var(--ink)">
              {n.label}
            </text>
            <text x={n.x + 20} y="105" fontSize="13" fill="var(--muted-foreground)">
              {n.sub}
            </text>
          </g>
        ))}
        {/* note appending inside the EHR node — belongs with the nodes layer */}
        <rect className="g2-note" x="548" y="114" width="110" height="4" rx="2" fill="var(--muted-3)" />
      </svg>

      {/* ---- layer 3: traveling pulse (front-most) ---- */}
      <svg className="ef-layer ef-l-pulse" viewBox="0 0 700 230" fill="none" aria-hidden>
        <circle className="g2-pulse" r="5" fill="var(--primary)" opacity="0" />
      </svg>

      {/* ---- hotspots: hover on pointer, focus on tap/keyboard ---- */}
      {nodes.map((n, i) => (
        <button
          key={n.label}
          type="button"
          className={`ef-hot ef-hot-${i}`}
          style={{ left: `${(n.x / 700) * 100}%`, width: `${(150 / 700) * 100}%` }}
        >
          {n.label} — {n.sub}
        </button>
      ))}
    </div>
  )
}
