import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "iClinic AI - EHR-Integrated Voice Agent for Modern Clinics",
    template: "%s | iClinic AI",
  },
  description:
    "Voice AI with a HIPAA-compliant architecture, built to integrate with major EHR systems via FHIR to handle scheduling, refills, and triage. Currently in early production in a live clinical setting.",
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
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
