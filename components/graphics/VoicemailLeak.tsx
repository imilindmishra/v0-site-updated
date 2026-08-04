"use client"

import { useCountUp } from "@/hooks/use-motion"

/**
 * G3 — "Nothing goes to voicemail" (Home problem→solution cost story).
 * Two lanes: the old world leaks calls into a voicemail bin while a
 * destructive-tinted dollar counter climbs; with iClinic every call passes
 * through and the captured counter climbs instead. Wired to the real stats
 * (47 missed/day, $25K/month, 62% vs 100% answered), counting up on scroll.
 * Reduced motion: static comparison at final counts.
 */
export function VoicemailLeak({ className }: { className?: string }) {
  const missedRef = useCountUp<SVGTSpanElement>(47)
  const lostRef = useCountUp<SVGTSpanElement>(25)
  const answeredOldRef = useCountUp<SVGTSpanElement>(62)
  const answeredNewRef = useCountUp<SVGTSpanElement>(100)

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="Comparison of a front desk without iClinic AI, where 38% of calls leak to voicemail costing $25,000 a month, versus with iClinic AI, where 100% of calls are answered."
      className={className}
      fill="none"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .g3-dot { animation: g3-pass 4.5s linear infinite; }
          .g3-leak { animation: g3-leak 4.5s ease-in infinite; }
          .g3-dot-b { animation: g3-pass-b 4.5s linear infinite; }
        }
        @keyframes g3-pass {
          0% { opacity: 0; transform: translateX(0); }
          6% { opacity: 1; }
          90% { opacity: 1; transform: translateX(430px); }
          96%, 100% { opacity: 0; transform: translateX(430px); }
        }
        @keyframes g3-leak {
          0% { opacity: 0; transform: translate(0, 0); }
          6% { opacity: 1; }
          46% { opacity: 1; transform: translate(215px, 0); }
          62% { opacity: 0.35; transform: translate(228px, 34px); }
          70%, 100% { opacity: 0; transform: translate(230px, 44px); }
        }
        @keyframes g3-pass-b {
          0% { opacity: 0; transform: translateX(0); }
          6% { opacity: 1; }
          90% { opacity: 1; transform: translateX(430px); }
          96%, 100% { opacity: 0; transform: translateX(430px); }
        }
      `}</style>

      {/* ---- Lane 1: without ---- */}
      <g>
        <rect x="10" y="16" width="620" height="140" rx="16" fill="var(--card)" stroke="var(--border)" />
        <text x="34" y="46" fontSize="12" fontWeight="600" letterSpacing="0.15em" fill="var(--muted-foreground)">
          WITHOUT iCLINIC AI
        </text>
        <line x1="90" y1="78" x2="520" y2="78" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 5" />
        {/* phone origin */}
        <circle cx="66" cy="78" r="14" fill="var(--muted)" />
        <path d="M60 74c0-.8.7-1.5 1.5-1.5h2.4c.7 0 1.3.4 1.4 1.1l.8 2.7c.2.6 0 1.2-.4 1.6l-1.2 1c1 2 2.6 3.6 4.6 4.6l1-1.2c.5-.5 1.1-.6 1.7-.4l2.7.8c.6.1 1 .7 1 1.4v2.4c0 .8-.6 1.5-1.4 1.5-8.7 0-15.4-8.7-14.1-14Z" fill="var(--muted-foreground)" />
        {/* leaking + passing dots */}
        {[0, 1.5, 3].map((d) => (
          <circle key={`p${d}`} className="g3-dot" style={{ animationDelay: `${d}s` }} cx="90" cy="78" r="4.5" fill="var(--wave-to)" opacity="0" />
        ))}
        {[0.7, 2.2, 3.7].map((d) => (
          <circle key={`l${d}`} className="g3-leak" style={{ animationDelay: `${d}s` }} cx="90" cy="78" r="4.5" fill="var(--muted-foreground)" opacity="0" />
        ))}
        {/* voicemail bin */}
        <rect x="292" y="112" width="112" height="30" rx="8" fill="var(--muted)" stroke="var(--border)" />
        <text x="348" y="131" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
          Voicemail / lost
        </text>
        {/* counters */}
        <text x="548" y="66" fontSize="20" fontWeight="600" fill="var(--destructive)">
          $<tspan ref={lostRef}>25</tspan>K
        </text>
        <text x="548" y="84" fontSize="11" fill="var(--muted-foreground)">
          lost / month
        </text>
        <text x="548" y="116" fontSize="16" fontWeight="600" fill="var(--ink)">
          <tspan ref={answeredOldRef}>62</tspan>%
        </text>
        <text x="548" y="134" fontSize="11" fill="var(--muted-foreground)">
          answered
        </text>
        <text x="34" y="131" fontSize="13" fontWeight="600" fill="var(--destructive)">
          <tspan ref={missedRef}>47</tspan> missed / day
        </text>
      </g>

      {/* ---- Lane 2: with ---- */}
      <g>
        <rect x="10" y="180" width="620" height="140" rx="16" fill="var(--card)" stroke="var(--wave-to)" />
        <text x="34" y="210" fontSize="12" fontWeight="600" letterSpacing="0.15em" fill="var(--primary)">
          WITH iCLINIC AI
        </text>
        <line x1="90" y1="248" x2="520" y2="248" stroke="var(--muted-3)" strokeWidth="1.5" />
        <circle cx="66" cy="248" r="14" fill="var(--muted)" />
        <path d="M60 244c0-.8.7-1.5 1.5-1.5h2.4c.7 0 1.3.4 1.4 1.1l.8 2.7c.2.6 0 1.2-.4 1.6l-1.2 1c1 2 2.6 3.6 4.6 4.6l1-1.2c.5-.5 1.1-.6 1.7-.4l2.7.8c.6.1 1 .7 1 1.4v2.4c0 .8-.6 1.5-1.4 1.5-8.7 0-15.4-8.7-14.1-14Z" fill="var(--primary)" />
        {[0, 0.9, 1.8, 2.7, 3.6].map((d) => (
          <circle key={d} className="g3-dot-b" style={{ animationDelay: `${d}s` }} cx="90" cy="248" r="4.5" fill="var(--primary)" opacity="0" />
        ))}
        {/* captured node */}
        <circle cx="536" cy="248" r="15" fill="var(--success-bg)" />
        <path d="M529 248.5l4.5 4.5 9-9" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="590" y="242" textAnchor="middle" fontSize="16" fontWeight="600" fill="var(--success)">
          <tspan ref={answeredNewRef}>100</tspan>%
        </text>
        <text x="590" y="260" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
          answered
        </text>
        <text x="34" y="299" fontSize="13" fontWeight="600" fill="var(--success)">
          Every call captured
        </text>
      </g>
    </svg>
  )
}
