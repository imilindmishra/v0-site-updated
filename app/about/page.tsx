import type { Metadata } from "next"
import Image from "next/image"
import { Users, Lightbulb, FileText, Mail, Shield, Cloud, Cpu, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind iClinic AI. Founded by clinicians and AI researchers to solve the Front Desk Crisis.",
}

const BOOKING_URL =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const CONTACT = {
  phone: "281-454-3054",
  email: "info@imedclinic.ai",
}

const teamMembers = [
  {
    name: "Vijaiganesh Nagarajan",
    role: "Founder & CEO",
    title: "Interventional Cardiologist",
    image: "/team/vijaiganesh-cartoon.png",
  },
  {
    name: "Vyom Modi",
    role: "Founding Engineer",
    title: "",
    image: "/team/vyom-cartoon.png",
  },
  {
    name: "Milind Mishra",
    role: "AI Engineer",
    title: "",
    image: "/team/milind-cartoon.png",
  },
  {
    name: "Mahesh Shekokar",
    role: "Lead Engineer",
    title: "Heart Failure Division",
    image: "/team/mahesh-cartoon.png",
  },
  {
    name: "Viktor",
    role: "Webapp Development",
    title: "",
    image: "/team/viktor-cartoon.png",
  },
  {
    name: "Dhiren",
    role: "Cloud Infrastructure",
    title: "",
    image: "/team/dhiren-cartoon.png",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

const partners = [
  {
    icon: BadgeCheck,
    name: "Compliancy Group",
    detail: "HIPAA compliance program and verification",
  },
  {
    icon: Cloud,
    name: "AWS",
    detail: "US-only data centers hosting all infrastructure",
  },
  {
    icon: Cpu,
    name: "NVIDIA Inception Program",
    detail: "AI startup program member",
  },
]

const values = [
  {
    icon: Users,
    title: "Built by Clinicians",
    description:
      "Our founding team includes practicing physicians who understand the daily challenges of modern healthcare delivery.",
  },
  {
    icon: Lightbulb,
    title: "Powered by Research",
    description:
      "Our AI is developed by researchers from leading institutions with deep expertise in NLP and clinical decision support.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "HIPAA compliance isn't an afterthought. Every line of code is written with patient privacy as the foundation.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Team */}
      <section className="relative py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--muted-4),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Team</p>
            <RevealText as="h1" className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Meet the People Behind <span className="text-primary">iClinic AI</span>
            </RevealText>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Founded by clinicians and AI researchers who believe technology should reduce burnout, not create it.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-primary/20 bg-muted">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill sizes="128px" className="object-cover" />
                    ) : (
                      <span className="text-3xl font-semibold text-primary" aria-hidden>
                        {initials(member.name)}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  {member.title && <p className="mt-1 text-xs text-muted-foreground">{member.title}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Philosophy</p>
            <blockquote className="mt-8 rounded-2xl border border-border border-l-4 border-l-primary bg-muted p-8 text-left text-2xl font-medium text-foreground sm:p-12 sm:text-3xl">
              &ldquo;AI should not replace the doctor, front desk, or MA; it should replace the paperwork.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Values</p>
            <RevealText as="h2" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What Drives Us</RevealText>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-muted-3">
                    <value.icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & partners */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Compliance &amp; Partners</p>
            <RevealText as="h2" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Who We Work With
            </RevealText>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 80}>
                <div className="hover-lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted-3">
                    <partner.icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{partner.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{partner.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / demo anchor */}
      <section id="demo" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted-3">
                  <Mail aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-foreground">Contact Us</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Have questions about iClinic AI? Want to see a demo? Our team is ready to help.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="text-foreground">
                    <strong>Phone:</strong>{" "}
                    <a href={`tel:${CONTACT.phone}`} className="text-primary hover:underline">
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                      {CONTACT.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted-3">
                  <FileText aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-foreground">Book a Call</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Schedule a personalized walkthrough to see how iClinic AI can transform your clinic operations.
                </p>
                <div className="mt-6">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
