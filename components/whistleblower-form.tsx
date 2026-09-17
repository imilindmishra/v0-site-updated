"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const FALLBACK_EMAIL = "milindm@imedclinic.ai"
const CATEGORIES = ["Patient safety", "Privacy / HIPAA", "Fraud or billing", "Harassment or discrimination", "Other"]

export function WhistleblowerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const category = String(data.get("category") || "Other")
    setSubmitting(true)
    setError(null)
    try {
      // ponytail: Web3Forms free tier only accepts browser-side calls; the access key is public by design.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WHISTLEBLOWER_WEB3FORMS_KEY,
          subject: `Whistleblower report — ${category}`,
          from_name: name || "Anonymous",
          ...(email && { replyto: email }),
          name: name || "Anonymous",
          email: email || "Not provided",
          category,
          message: String(data.get("message") || ""),
          botcheck: data.get("botcheck") ? "true" : "",
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error()
      setSubmitted(true)
    } catch {
      setError(`Something went wrong. You can email your report directly to ${FALLBACK_EMAIL}.`)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <Check aria-hidden="true" className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">Report received</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Thank you. Your report has been submitted confidentially. If you left an email address, we may follow up
          with you.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">Submit a report</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Name and email are optional. You can submit anonymously; leaving an email lets us follow up if needed.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name (optional)</Label>
            <Input id="name" name="name" placeholder="Leave blank to stay anonymous" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            className="border-input dark:bg-input/30 h-11 w-full rounded-md border bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">What happened?</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Describe the concern, including dates, people involved, and any supporting details."
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Report"}
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
