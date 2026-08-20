"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BOOKING_URL } from "@/lib/booking"

const CONTACT_EMAIL = "info@imedclinic.ai"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const body = {
      name: String(data.get("name") || ""),
      clinic: String(data.get("clinic") || ""),
      email: String(data.get("email") || ""),
      ehr: String(data.get("ehr") || ""),
      message: String(data.get("message") || ""),
    }

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `iClinic AI Demo Request — ${body.clinic || body.name}`,
          from_name: body.name,
          ...body,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error()
      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        window.location.href = BOOKING_URL
      }, 700)
    } catch {
      setError(`Something went wrong. Please email us directly at ${CONTACT_EMAIL}.`)
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">Request a Demo</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Tell us a little about your clinic, the EHR you use, and what you&apos;d like to automate. We&apos;ll set up a
        walkthrough of iClinic AI tailored to your workflow.
      </p>

      <span role="status" aria-live="polite" className="sr-only">
        {submitted && "Thanks! We've received your request and will be in touch shortly."}
      </span>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Jane Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinic">Clinic / organization</Label>
              <Input id="clinic" name="clinic" required placeholder="Riverside Family Care" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ehr">EHR you use</Label>
              <Input id="ehr" name="ehr" placeholder="Epic, athenahealth, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What would you like to automate?</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Scheduling, refills, after-hours calls, patient follow-ups..."
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className={`w-full rounded-full transition-colors disabled:opacity-60 ${
              submitted
                ? "bg-success text-white hover:bg-success"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {submitted ? (
              <>
                Sent
                <Check aria-hidden="true" className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                {submitting ? "Sending..." : "Send Message"}
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Prefer email directly?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
      </form>
    </div>
  )
}
