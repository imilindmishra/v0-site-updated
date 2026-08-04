"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Grid3x3, MicOff, Phone, Plus, Video, Volume2 } from "lucide-react"

/**
 * Floating iPhone mockup: a FaceTime-style Omni AI call screen with a chat-bubble
 * callout overlapping the left bezel.
 *
 * Structure matters — the 3D tilt and the idle float are SEPARATE nested wrappers
 * (`ph-tilt` > `ph-float`) so the mouse-parallax transition on the tilt can't fight
 * the float keyframes. The bubble sits outside the tilt entirely: it reads as
 * floating in front of the phone rather than being rotated into its plane, and it
 * is never clipped by the frame's `overflow: hidden`.
 *
 * The container is transparent — the phone floats on the page's own background over
 * a soft violet glow, with a blurred ground-plane ellipse selling the tilt.
 *
 * All motion (float, bubble drift, parallax) is off under prefers-reduced-motion:
 * the keyframes are gated in globals.css and the pointer listener bails here, so
 * the static end-state is the tilted phone exactly as rendered.
 */

const controls = [
  { Icon: Volume2, label: "Speaker" },
  { Icon: Video, label: "FaceTime" },
  { Icon: MicOff, label: "Mute", active: true },
  { Icon: Plus, label: "Add" },
  { Icon: Grid3x3, label: "Keypad" },
  // A rotated handset, not lucide's PhoneOff — the slashed-phone glyph reads as
  // scissors at this size. 135° is the standard hang-up orientation.
  { Icon: Phone, label: "End", end: true },
]

export function AiCallPhone({ className }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect()
      scene.style.setProperty("--ph-mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
      scene.style.setProperty("--ph-my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
    }
    const onLeave = () => {
      scene.style.setProperty("--ph-mx", "0")
      scene.style.setProperty("--ph-my", "0")
    }

    scene.addEventListener("pointermove", onMove)
    scene.addEventListener("pointerleave", onLeave)
    return () => {
      scene.removeEventListener("pointermove", onMove)
      scene.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div ref={sceneRef} className={`ph-scene ${className ?? ""}`} role="img" aria-label="An Omni AI voice call in progress on a phone, with the caller saying “I want to book an appointment”">
      <div className="ph-stage">
        <span className="ph-ground" aria-hidden />
        <div className="ph-tilt">
          <div className="ph-float">
            <div className="ph-frame">
              {/* antenna lines */}
              <span className="ph-antenna ph-antenna-l1" />
              <span className="ph-antenna ph-antenna-l2" />
              <span className="ph-antenna ph-antenna-r1" />
              <span className="ph-antenna ph-antenna-r2" />
              {/* side buttons */}
              <span className="ph-btn ph-btn-mute" />
              <span className="ph-btn ph-btn-vol" />
              <span className="ph-btn ph-btn-power" />

              <div className="ph-screen">
                <div className="ph-notch">
                  <span className="ph-speaker" />
                  <span className="ph-camera" />
                </div>

                <div className="ph-content">
                  <p className="ph-timer">03:51</p>
                  <p className="ph-caller">Omni AI</p>

                  <div className="ph-avatar" aria-hidden>
                    {/* Pexels stock headshot (photo 220453), free for commercial use.
                        No model release ships with it — swap for a released photo if
                        this ever needs to imply a real endorsement. */}
                    <Image src="/caller-avatar.jpg" alt="" fill sizes="64px" className="object-cover" />
                  </div>

                  <div className="ph-controls">
                    {controls.map(({ Icon, label, active, end }) => (
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
              </div>
            </div>
          </div>
        </div>

        <p className="ph-bubble">I want to book an appointment</p>
      </div>
    </div>
  )
}
