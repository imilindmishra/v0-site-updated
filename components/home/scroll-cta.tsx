"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function ScrollCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-4"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="max-w-4xl mx-auto text-center transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <p
          className="text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: "#2DD4BF" }}
        >
          Get Started
        </p>
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
          style={{ color: "#F5F5F7" }}
        >
          Experience the Future of Clinical Communication
        </h2>
        <p
          className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#86868B" }}
        >
          Join leading clinics using AI to reduce administrative overhead by 40%
          and increase patient adherence by 22%.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="font-semibold rounded-full px-8 h-14 text-base"
              style={{ backgroundColor: "#2DD4BF", color: "#000000" }}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://youtu.be/6Wu202Wpj7k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent rounded-full px-8 h-14 text-base"
              style={{
                borderColor: "#333333",
                color: "#F5F5F7",
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
