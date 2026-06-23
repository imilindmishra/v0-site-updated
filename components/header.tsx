"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/omniai", label: "OmniAI" },
  { href: "/heart-failure", label: "Heart Failure" },
  { href: "/dementia", label: "Dementia" },
  { href: "/diabetes", label: "Diabetes" },
  { href: "/about", label: "About Us" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-foreground leading-tight">
              iClinic AI
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
              Make your clinic smart clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://youtu.be/6Wu202Wpj7k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-secondary bg-transparent font-semibold"
            >
              Watch Demo
            </Button>
          </a>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Book a Demo
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors rounded-md",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-2">
              <a
                href="https://youtu.be/6Wu202Wpj7k"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border text-foreground hover:bg-secondary bg-transparent font-semibold"
                >
                  Watch Demo
                </Button>
              </a>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Book a Demo
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
