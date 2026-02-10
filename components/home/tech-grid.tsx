"use client"

import { useEffect, useRef, useState } from "react"
import {
  Mic,
  FileText,
  Shield,
  Calendar,
  Stethoscope,
  Clock,
} from "lucide-react"

const specs = [
  {
    icon: Mic,
    title: "Voice AI Engine",
    value: "98.5%",
    unit: "Accuracy",
    description:
      "Real-time voice recognition tuned for medical terminology and clinical workflows",
  },
  {
    icon: FileText,
    title: "EHR Integration",
    value: "15+",
    unit: "Platforms",
    description:
      "Seamless integration with Epic, eClinicalWorks, athenahealth, and more",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    value: "100%",
    unit: "Encrypted",
    description:
      "End-to-end encryption, SOC 2 certified, BAA included from day one",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    value: "40%",
    unit: "Fewer No-Shows",
    description:
      "AI-powered appointment management with automated reminders and follow-ups",
  },
  {
    icon: Stethoscope,
    title: "Intelligent Triage",
    value: "<30s",
    unit: "Response Time",
    description:
      "Clinically validated protocols for accurate patient routing and prioritization",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    value: "99.9%",
    unit: "Uptime",
    description:
      "Always-on voice agent that never calls in sick, never takes a break",
  },
]

export function TechGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = entry.target.getAttribute("data-index")
          if (index === "header") {
            if (entry.isIntersecting) setHeaderVisible(true)
          } else if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, Number(index)]))
          }
        }
      },
      { threshold: 0.15 },
    )

    const header = gridRef.current?.querySelector("[data-index='header']")
    if (header) observer.observe(header)

    const cards = gridRef.current?.querySelectorAll(
      "[data-index]:not([data-index='header'])",
    )
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 px-4" ref={gridRef} style={{ backgroundColor: "#000000" }}>
      <div className="max-w-6xl mx-auto">
        <div
          data-index="header"
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "#2DD4BF" }}
          >
            Technology
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F5F5F7" }}
          >
            Built for Healthcare
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "#86868B" }}
          >
            Every component engineered for clinical precision and reliability.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, index) => {
            const isVisible = visibleItems.has(index)
            const Icon = spec.icon
            return (
              <div
                key={spec.title}
                data-index={index}
                className="group rounded-2xl p-8 transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${index * 100}ms`,
                  backgroundColor: "#111111",
                  border: "1px solid #222222",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)"
                  e.currentTarget.style.backgroundColor = "#1A1A1A"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#222222"
                  e.currentTarget.style.backgroundColor = "#111111"
                }}
              >
                <Icon className="h-6 w-6 mb-4" style={{ color: "#2DD4BF" }} />
                <h3
                  className="text-sm font-medium mb-3 tracking-wide uppercase"
                  style={{ color: "#86868B" }}
                >
                  {spec.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="text-4xl font-bold tracking-tight"
                    style={{ color: "#F5F5F7" }}
                  >
                    {spec.value}
                  </span>
                  <span className="text-sm" style={{ color: "#86868B" }}>
                    {spec.unit}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#86868B" }}>
                  {spec.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
