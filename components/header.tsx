"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { LogoMark } from "@/components/logo"
import { cn } from "@/lib/utils"

const BOOKING_URL =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const navLinks = [
  { href: "/omniai", label: "OmniAI" },
  { href: "/heart-failure", label: "Heart Failure" },
  { href: "/dementia", label: "Dementia" },
  { href: "/diabetes", label: "Diabetes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Focus trap for the open mobile menu: focus the first link on open,
  // wrap Tab/Shift+Tab within the menu, Escape closes and returns focus.
  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    if (!menu) return
    const focusable = menu.querySelectorAll<HTMLElement>("a, button")
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== "Tab") return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-8 text-accent" />
          <span className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight leading-tight text-foreground">
              iClinic AI
            </span>
            <span className="hidden text-[10px] leading-tight text-muted-foreground sm:block">
              Make your clinic a smart clinic.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div ref={menuRef} id="mobile-menu" className="border-t border-border bg-card/95 backdrop-blur-md lg:hidden">
          <nav aria-label="Main" className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
