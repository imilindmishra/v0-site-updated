iClinic AI Marketing Site — Full Redesign Build Prompt

How to use this file. Section 1 is the loop prompt — paste it into Claude Code (Fable 5, high effort) to run a self-correcting, parallel-agent build. Section 2 is a one-shot prompt — a single sequential pass if you'd rather not run the loop. Both target the same result. Read Section 0 first; it's shared context both prompts assume.

0. Shared context (read before running either prompt)
0.1 The business

iClinic AI builds voice AI agents for medical clinics. The agents answer every patient phone call 24/7, book/reschedule/cancel appointments and refills by voice, triage and escalate, and write structured notes straight back into the clinic's EHR over FHIR. The pitch is operational: front desks miss ~47 calls/day, ~$25K/month in lost revenue, 68% staff burnout — the agent captures those calls, so nothing goes to voicemail and admin cost drops. One live pilot is in production; other numbers are explicitly labeled target/projected.

Verticals: OmniAI (core call handling), Heart Failure (remote weight/symptom monitoring), Dementia (companionship + caregiver support), Diabetes (glucose/CGM + coaching).

Mission line (appears in footer + About, keep verbatim): "AI should not replace the doctor, front desk, or MA; it should replace the paperwork." Tagline: "Where empathy meets algorithm."

Audience: clinicians, clinic administrators, front-desk decision-makers. They are deciding whether to trust an AI with patient calls. Trust and compliance are the entire conversion story. Design must read calm, clinical, credible — never flashy. Flashy erodes trust here.

0.2 Design essence (carry this exactly)

Clean enterprise SaaS / healthcare-tech aesthetic — light, airy, trustworthy. Restrained glassmorphism (soft blur nav, light shadows) over heavy decoration. Generous whitespace, rounded cards (12–20px radius). Soft ambient depth instead of flat blocks. One dark, high-contrast section used intentionally to signal security/compliance weight — the only dark surface on the whole site. Micro-interactions (hover lifts, count-ups, live status dots) add polish without noise. Uppercase eyebrow labels with wide letter-spacing organize every section. One accent-color family carried consistently; muted, desaturated-but-confident — no neon, no candy colors.

0.3 Brand symphony — the marketing site must match the live client app

These values are pulled from the production client app (iClinic-Frontend) and override any conflicting instinct. The two sites must feel like one brand.

Color tokens (define in app/globals.css @theme inline; replace the old dark/teal tokens):

Token	Value	Role
--background	
#DCEAFB	Light-blue page field — applied everywhere it can be. All pages sit on this.
--card	
#FFFFFF	White content cards floating on the blue field. All body text lives on white cards, never directly on the blue.
--muted	
#EAF2FD	Subtle inner depth (secondary surfaces, chips)
--muted-2	
#EFF5FE / 
#DBEAFC / 
#E4EEFB	Additional light-blue tints for layering
--foreground	
#100F0F	Ink — primary text
--muted-foreground	
#464646 (or 
#808080 for tertiary)	Secondary text
--primary	
#1668C7	All primary actions/CTAs, links, focus rings, active nav, chart bars
--primary-foreground	
#FFFFFF	Text on primary buttons
--accent	
#1E7FE6	Logo, live status dots, hover accents
--border	
#E9E7E7	All hairlines, dividers, input borders
--ring	
#1668C7	Focus ring
--success	
#00850D on 
#E4FFE3	Success states, positive metrics, completion ticks
--destructive	
#FF1406 on 
#FFE3E3	Loss-framing / error only
--warn	
#854E00 on 
#FFF6E3	Clinical-threshold callouts / warnings only (never a CTA)
Waveform	
#DCE8F7 → 
#7FA9DB	Voice-waveform graphics (matches client app waveform)
Dark section	
#100F0F bg, white text, 
#1E7FE6 accents	The single Security band
--radius	0.875rem (14px); cards rounded-2xl (16px)	Rounding

CTA color is blue 
#1668C7, not amber. The client app uses blue for every primary action; amber is a warning-callout accent only. Do not introduce coral or teal anywhere.

Typography — single self-hosted variable typeface, GeneralSans (matches client app; do NOT use Inter or any Google font):

Copy the exact GeneralSans .woff2 variable file and @font-face / --font-general-sans setup from the client app's src/app/fonts.ts + globals.css. Same cut, or the two sites won't render identically.
Weight axis 200–700 (normal + italic loaded).
Headings: h1–h4 = semibold (600), h5–h6 = medium (500), tracking-tight.
Body: regular (400), relaxed line-height.
Eyebrow labels (one canonical spec, site-wide): text-xs font-semibold uppercase tracking-[0.2em] text-primary.
0.4 Stack facts (don't rediscover)

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4 (inline @theme, no tailwind.config.js), shadcn/ui ("new-york"), lucide-react. Copy hardcoded as JS objects in each page file (no CMS). Use the package manager already in the repo lockfile.

0.5 What gets REMOVED (global kill list — apply on every page)
The entire dark theme. Delete the .dark block in globals.css; remove next-themes (installed, unused). Site is light-only by design.
Teal 
#2DD4BF everywhere → replaced by blue tokens.
All inline raw-hex styles on the homepage → replaced with tokens.
Per-vertical accent colors (red/purple/blue badge system) → single blue family. Verticals differ by icon + eyebrow label only.
All screenshots — hf-dashboard.png, hf-patient-detail.png, omniai-calls-dashboard.png, omniai-transcript.png, and the hero photo voice-ai-hero.jpg. Delete from public/ and remove all references.
All fake product mockups — components/mockups/product-mockups.tsx and every usage (CallDashboardMockup, CallSummaryMockup, SchedulingMockup, PatientMonitoringMockup). Delete the file.
The demo experience — components/youtube-embed.tsx and all usage; the "Watch Demo" button; the embedded video section on Home. Remove demo-video framing entirely. (Booking a call with the team stays — see §0.6 CTA.)
~30 dead component files under components/{home,demo,product,roi,security} — delete, EXCEPT first mine security/security-narrative.tsx + security/compliance-checklist.tsx for copy for the new Security band, then delete.
Unused deps: recharts (never used), next-themes. Remove unused shadcn primitives too (keep only button, input, textarea, label).
Orphans: root home.png, omniai.png; public/placeholder-logo.svg, public/placeholder.svg; the unused full Logo lockup (keep LogoMark).
Compress remaining large assets (team avatars ~1.5MB each).
0.6 Decisions already made (apply; flag in PR if you disagree)
Primary CTA: "Book a Call" → the existing external Google Calendar booking link. Use this destination for every primary CTA site-wide (Home, header, all verticals, About). Fixes the current split where verticals point to /about#demo and everything else points to the calendar. Keep the /about#demo anchor section but have its button also point to the calendar. (If you prefer to keep "Book a Demo" wording since the call is a demo, that's fine — just be consistent.)
Button shape: rounded-full for all CTAs, site-wide.
Section rhythm: light-blue 
#DCEAFB field with white 
#FFFFFF card blocks; 
#E9E7E7 hairlines; py-20 md:py-28 everywhere.
Fix content bugs: genericize the alt-text that leaks the real pilot clinic name ("Dr. VJ's Cardiology Clinic"); resolve the phone-number conflict (About shows 281-454-3054, Contact says "by request" — show it in both or neither); move the "Compliancy Group" card out of the team roster into a compliance/partners strip (it's a vendor, not a person); fix the header tagline typo to "Make your clinic a smart clinic."
0.7 Graphics — animated SVG library (the core new creative work)

All screenshots and mockups are gone. Animated SVGs now carry the job of explaining the business. Not decoration — each graphic maps to one real value prop. Hand-authored inline SVG in React components; animate with CSS + optional SMIL; no WebGL, no heavy animation libraries (audience runs older clinic/hospital hardware). Every graphic: brand palette only, calm 4–6s loops, ease-in-out, role="img" + descriptive aria-label, and a meaningful frozen end-state under prefers-reduced-motion. Build these as a shared components/graphics/* library in the foundation phase so pages just import them.

G1 — "The Answered Call" (hero signature, Home + OmniAI hero). One continuous loop: an incoming call → a live voice waveform (bars in 
#7FA9DB→
#DCE8F7) reacts like speech → the waveform resolves into a structured EHR record card that fills in with a --success tick. A small data packet travels call → wave → chart. Whole composition floats 3px. This is the thesis of the page (voice + EHR + automation in one image). Spend the boldness here; keep everything else quiet. Reduced-motion: freeze on the completed record with green tick.
G2 — "Connected to your EHR" (Home + OmniAI). Node-and-path diagram: Call → Voice agent → FHIR connector → EHR system, with a pulse traveling the path and a note appending on write. This is a genuine sequence, so numbered steps 01 Answer · 02 Understand · 03 Write to chart are appropriate here (numbering only where order is real). Reduced-motion: full diagram, all nodes lit.
G3 — "Nothing goes to voicemail" (Home problem→solution, the cost story). Two lanes. Old world: calls flow in, several leak into a greyed "Voicemail / Lost" bin, a --destructive-tinted $ counter climbs. With iClinic: every call passes through, none leak, a --success captured/savings counter climbs. Wire to real stats (47 missed/day, $25K/month, ~62% vs 100% answered) and count up on scroll. Reduced-motion: static comparison at final counts.
G4 — per-vertical monitoring loops (replace the vertical screenshots). Same skeleton — voice check-in → data captured → clinician/caregiver alerted — with condition-specific data, all in the blue family + semantic colors (no per-vertical hue):
Heart Failure: daily weight check-in → value plots on a trend line → crosses a dashed threshold → --warn amber alert → clinician bell.
Dementia: scheduled warm call → medication reminder → family/caregiver alert node lights. Slower, gentler pacing (matches "adaptive tone").
Diabetes: CGM glucose reading syncs → plots → coaching prompt → A1C goal ring advances.
Reduced-motion: freeze on the alert/insight end-state.
G5 — Security band graphic (the one dark section, Home). On 
#100F0F: a shield/lock with encrypted data flowing through HIPAA · FHIR · SOC 2 nodes, restrained, 
#1E7FE6 + --success accents, white text. Reduced-motion: static lit shield.
G6 — live status dot. Standardize the existing pulsing "In live production" badge; --success or --accent pulse. One implementation, reused.
Ambient: very soft radial tints (
#DBEAFC/
#E4EEFB) for depth within the blue field — subtle, since the field is already blue. Drop the old radial-glow-on-black approach.
0.8 Motion system (site-wide, disciplined)
Reveal on scroll: fade + 16–24px slide, 300–500ms ease-out, IntersectionObserver, trigger once. One shared hook.
Hover lifts: translateY(-2px) + soft shadow on cards and CTAs.
Count-ups on stat numbers when they enter view.
Floating: only on decorative hero-graphic elements (2–4px drift). Never float functional UI (cards, buttons, nav).
No magnetic hover — reads as agency gimmick, wrong for a clinical-trust product.
prefers-reduced-motion: reduce disables all of the above and freezes graphics to their end-state. This is a hard requirement (clinic machines often set it).
0.9 Page map

Home / · OmniAI /omniai · Heart Failure /heart-failure · Dementia /dementia · Diabetes /diabetes · About /about · Contact /contact · Privacy /privacy · Terms /terms. Plus the dark Security band inside Home.

0.10 Per-page notes
Home: rewrite fully to use tokens (currently hardcoded hex). Sections: hero (G1) → problem/solution with G3 cost story → "Connected to your EHR" (G2) → real proof numbers (125 calls, 1.83 min avg, 228.9 min saved — count up) → tech grid → dark Security band (G5) → final CTA. Remove the old stock-photo hero and the demo-video section.
OmniAI: recolor to tokens; hero uses G1; keep the real deployment numbers (only page with unhedged stats); expected-results bar → gray vs blue; fix the alt-text leak; CTA → calendar.
Heart Failure: blue eyebrow + HeartPulse icon (drop red); G4-HF replaces screenshots; keep the amber early-warning callout as --warn; expected-results bar keeps red "without" vs blue "with".
Dementia: blue (drop purple); G4-Dementia replaces the mismatched CHF mockup; resolve the "iClinic dementia agent" naming (see §0.11).
Diabetes: blue (drop the blue-badge-as-vertical-accent, now redundant); G4-Diabetes replaces the mismatched CHF mockup; replace single-letter CGM placeholders with real device names or logos.
About: blue avatar rings; radial accent → blue; pick cartoon or real headshots consistently for all 8; move "Compliancy Group" to a partners strip; blue-tinted philosophy blockquote; reconcile phone number; #demo anchor button → calendar.
Contact: white form card, 
#E9E7E7 inputs, blue focus ring + submit; success card in --success; reconcile phone number. (Form still opens a mailto: — leave as-is unless a real backend is in scope; flag in PR.)
Privacy / Terms: pure recolor to light; ink text, blue links, max-w-3xl.
0.11 Open questions — surface in the PR description, don't block on them

CTA wording ("Book a Call" vs "Book a Demo"); agent/persona naming (OmniAI / "Laura" / "iClinic dementia agent" — unify or keep per-vertical); imedclinic.ai email vs iClinic brand domain; real contact-form backend; whether to build the implied /roi and /security standalone pages; cartoon vs real headshots.