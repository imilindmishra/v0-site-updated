import Link from "next/link"
import { Mail, Phone, ShieldCheck } from "lucide-react"
import { LogoMark } from "@/components/logo"

const columns = [
  {
    heading: "Product",
    links: [
      { label: "OmniAI", href: "/omniai" },
      { label: "Heart Failure", href: "/heart-failure" },
      { label: "Dementia", href: "/dementia" },
      { label: "Diabetes", href: "/diabetes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card px-6 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark className="h-8 w-8 text-accent" />
              <span className="text-lg font-semibold tracking-tight text-foreground">iClinic AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI should not replace the doctor, front desk, or MA; it should replace the paperwork.
            </p>
            <p className="mt-2 text-sm font-medium text-primary">Where empathy meets algorithm.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
                HIPAA compliant with BAA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
                SOC 2 Type 2
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
              <ul className="mt-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.heading === "Company" && (
                  <>
                    <li>
                      <a
                        href="mailto:info@imedclinic.ai"
                        className="inline-flex min-h-11 items-center gap-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden />
                        info@imedclinic.ai
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+12814543054"
                        className="inline-flex min-h-11 items-center gap-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Phone className="h-3.5 w-3.5" aria-hidden />
                        281-454-3054
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} iClinic AI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            HIPAA-compliant architecture &middot; SOC 2 Type 2 &middot; US-only data centers
          </p>
        </div>
      </div>
    </footer>
  )
}
