import type { Metadata } from "next"
import Image from "next/image"
import { Users, Lightbulb, FileText, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind iClinic AI. Founded by clinicians and AI researchers to solve the Front Desk Crisis.",
}

const teamMembers = [
  {
    name: "Vijaiganesh Nagarajan",
    role: "Founder & CEO",
    title: "Interventional Cardiologist",
    image: "/team/vijaiganesh.jpg",
  },
  {
    name: "Vyom Modi",
    role: "Founding Engineer",
    title: "",
    image: "/team/vyom.png",
  },
  {
    name: "Kevin Becerra",
    role: "Founding Engineer",
    title: "",
    image: "/team/kevin.png",
  },
  {
    name: "Mahesh Shekokar",
    role: "Lead Engineer",
    title: "Heart Failure Division",
    image: "/team/mahesh.jpg",
  },
  {
    name: "Viktor",
    role: "Webapp Development",
    title: "",
    image: "/team/viktor.jpg",
  },
  {
    name: "Dhiren",
    role: "Cloud Infrastructure",
    title: "",
    image: "/team/dhiren.jpg",
  },
  {
    name: "Keyur",
    role: "Intern",
    title: "",
    image: "/team/keyur.jpg",
  },
  {
    name: "Compliancy Group",
    role: "HIPAA Compliance",
    title: "",
    image: "/team/compliancy-group.jpg",
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
    <div className="flex flex-col">
      {/* Team Section - Now First */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the People Behind{" "}
              <span className="text-primary">iClinic AI</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Founded by clinicians and AI researchers who believe technology
              should reduce burnout, not create it.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 transition-all group-hover:border-primary/50">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                {member.title && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {member.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Philosophy
            </h2>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
              <blockquote className="text-2xl font-medium text-foreground sm:text-3xl">
                &ldquo;AI should not replace the doctor, front desk, or MA; it should replace the
                paperwork.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Drives Us
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / BAA Section */}
      <section id="demo" className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Contact Us
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Have questions about iClinic AI? Want to see a demo? Our team is
                ready to help.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="text-foreground">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:281-454-3054"
                    className="text-primary hover:underline"
                  >
                    281-454-3054
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:Info@imedclinic.ai"
                    className="text-primary hover:underline"
                  >
                    Info@imedclinic.ai
                  </a>
                </p>
              </div>
            </div>

            {/* Book a Demo */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Book a Demo
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Schedule a personalized demo to see how iClinic AI can transform
                your clinic operations.
              </p>
              <div className="mt-6">
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              HIPAA Notice
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Security Practices
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
