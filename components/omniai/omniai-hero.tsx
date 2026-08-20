"use client"

import { useEffect, useRef } from "react"
import {
  CalendarCheck,
  Check,
  FileText,
  MicOff,
  Phone,
  Pill,
  Stethoscope,
  Volume2,
} from "lucide-react"

/**
 * OmniAI hero — two phones crossing diagonally on the section's black field.
 *
 * The two screens are NOT two ends of one call. The left phone is the call in
 * progress; the right phone is the patient's chart that call just wrote to.
 * That is exactly why they don't match — no mirrored controls, no shared
 * caller ID, nothing to keep in sync. Causality carries the composition, and
 * the trail animating from the waveform to the new chart entry is what states
 * it. (The previous "two ends of one call" version needed the two screens to
 * agree with each other, which is where most of its problems came from.)
 *
 * The left phone's screen is AiCallPhone's, reused verbatim — only its place
 * in the composition changed. The right phone's chart screen is new.
 *
 * Reduced motion: floats, parallax and the trail all stop. The new-entry
 * highlight and the FHIR tick are plain static styles, so they simply show.
 */

const TIMER = "01:04"

const callControls = [
  { Icon: Volume2, label: "Speaker" },
  { Icon: MicOff, label: "Mute", active: true },
  { Icon: Phone, label: "End", end: true },
]

/** Static bar heights — the animation scales these, so reduced motion keeps a
 *  representative waveform rather than a flat line. */
const waveBars = [0.34, 0.58, 0.86, 1, 0.72, 0.9, 0.5, 0.78, 0.42, 0.64, 0.3]

/** Newest first. Entry 0 is what Omni AI just wrote; the rest are prior
 *  history and step further back in tone the older they get. */
const chartEntries = [
  { Icon: CalendarCheck, time: "Just now", desc: "Appointment rescheduled → Thu 2:00 PM" },
  { Icon: FileText, time: "9:38 AM", desc: "Call summary added to chart" },
  { Icon: Pill, time: "Yesterday", desc: "Lisinopril 10 mg refill approved" },
  { Icon: Stethoscope, time: "Mar 12", desc: "Follow-up visit completed" },
]

function Frame({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="ph-frame">
      <span className="ph-antenna ph-antenna-l1" />
      <span className="ph-antenna ph-antenna-r1" />
      <span className="ph-btn ph-btn-vol" />
      <span className="ph-btn ph-btn-power" />
      <div className={`ph-screen ${light ? "tp-screen-light" : ""}`}>
        <div className="ph-notch">
          <span className="ph-speaker" />
          <span className="ph-camera" />
        </div>
        {children}
      </div>
    </div>
  )
}

export function OmniAiHero() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect()
      scene.style.setProperty("--tp-mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
      scene.style.setProperty("--tp-my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
    }
    const onLeave = () => {
      scene.style.setProperty("--tp-mx", "0")
      scene.style.setProperty("--tp-my", "0")
    }
    scene.addEventListener("pointermove", onMove)
    scene.addEventListener("pointerleave", onLeave)
    return () => {
      scene.removeEventListener("pointermove", onMove)
      scene.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div
      ref={sceneRef}
      className="tp-scene"
      role="img"
      aria-label="Two phones crossing: on the left, the Omni AI front-desk agent live on a call with a voice waveform running. On the right, the patient's chart, where the top entry — appointment rescheduled to Thursday 2:00 PM — has just been written by that call and synced via FHIR."
    >
      {/* ---- BACK LEFT: the call in progress (AiCallPhone's screen, reused) ---- */}
      <div className="tp-phone tp-left">
        <div className="tp-tilt">
          <div className="tp-float">
            <Frame>
              <div className="ph-content tp-content">
                <p className="ph-timer">{TIMER}</p>
                <p className="ph-caller">Omni AI</p>
                <p className="tp-status">
                  <span className="tp-status-dot" aria-hidden />
                  On call
                </p>

                <div className="tp-wave" aria-hidden>
                  {waveBars.map((h, i) => (
                    <span
                      key={i}
                      className="tp-wave-bar"
                      style={
                        { "--amp": h, animationDelay: `${(i % 5) * 0.12}s` } as React.CSSProperties
                      }
                    />
                  ))}
                </div>

                <div className="ph-controls tp-controls">
                  {callControls.map(({ Icon, label, active, end }) => (
                    <div key={label} className="ph-control">
                      <span
                        className={`ph-key ${active ? "ph-key-active" : ""} ${end ? "ph-key-end" : ""}`}
                      >
                        <Icon strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="ph-key-label">{label}</span>
                    </div>
                  ))}
                </div>
                <span className="ph-home" />
              </div>
            </Frame>
          </div>
        </div>
      </div>

      {/* ---- FRONT RIGHT: the chart that call just wrote to ---- */}
      <div className="tp-phone tp-right">
        <div className="tp-tilt">
          <div className="tp-float">
            <Frame light>
              <div className="ph-content tp-chart">
                <div className="tp-chart-head">
                  <p className="tp-chart-name">Jane Doe</p>
                  {/* deliberately not a demographic line — this has to read as
                      just-updated, not as a static record */}
                  <p className="tp-chart-sub">Booked via Omni AI · 2 min ago</p>
                </div>

                <ul className="tp-entries">
                  {chartEntries.map(({ Icon, time, desc }, i) => (
                    <li key={time} className={`tp-entry ${i === 0 ? "tp-entry-new" : ""}`}>
                      <span className="tp-entry-icon" aria-hidden>
                        <Icon strokeWidth={2} />
                      </span>
                      <span className="tp-entry-body">
                        <span className="tp-entry-time">{time}</span>
                        <span className="tp-entry-desc">{desc}</span>
                        {i === 0 && (
                          // same tick-in-a-success-circle + success-coloured
                          // label pattern as AnsweredCall's .va-confirm
                          <span className="tp-fhir">
                            <span className="tp-tick" aria-hidden>
                              <Check strokeWidth={3} />
                            </span>
                            Synced
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="ph-home tp-home-dark" />
              </div>
            </Frame>
          </div>
        </div>
      </div>

      {/* causality: the call becomes the chart entry. Replaces the old seam
          pulse — there is no seam in a crossing pose. */}
      <span className="tp-trail" aria-hidden />
    </div>
  )
}
