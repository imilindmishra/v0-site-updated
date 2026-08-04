import React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { generalSans } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "iClinic AI - EHR-Integrated Voice Agent for Modern Clinics",
    template: "%s | iClinic AI",
  },
  description:
    "Voice AI with a HIPAA-compliant architecture, built to integrate with major EHR systems via FHIR to handle scheduling, refills, and triage.",
  keywords: [
    "healthcare AI",
    "EHR integration",
    "HIPAA-compliant architecture",
    "voice AI",
    "patient monitoring",
    "heart failure",
    "diabetes care",
    "dementia support",
  ],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#DCEAFB",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} font-sans antialiased`}>
        <SmoothScroll />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
