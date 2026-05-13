import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Logo } from "@/components/Logo";
import heroStudent from "@/assets/hero-student.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yotrix Global — Your Opportunity Matrix for Studying Abroad" },
      { name: "description", content: "Yotrix Global helps you discover study opportunities, plan your timeline, improve your profile, and access eligible benefits up to ₹75,000." },
      { property: "og:title", content: "Yotrix Global — Study Abroad Made Simple" },
      { property: "og:description", content: "Find courses, plan timelines, get expert mentor guidance, and unlock wallet benefits." },
    ],
  }),
  component: LandingPage,
});

const features = [
  { icon: "🎯", color: "bg-blue-50 text-blue-600", title: "Smart Matching", desc: "Find courses and options based on your profile." },
  { icon: "📅", color: "bg-orange-50 text-primary", title: "Timeline Planning", desc: "Know what to do and when to apply." },
  { icon: "👤", color: "bg-emerald-50 text-secondary", title: "Profile Support", desc: "Improve your chances with guided services." },
  { icon: "👛", color: "bg-green-50 text-secondary", title: "Wallet Benefit", desc: "Get eligible support up to ₹75,000." },
];

function LandingPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-soft blur-3xl opacity-60" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-secondary-soft blur-3xl opacity-60" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> Trusted by 10K+ students worldwide
            </span>
            <h1 className="text-5xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
              Find the right<br />study option<br />
              <span className="text-secondary">without confusion</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Yotrix Global helps you discover study opportunities, plan your timeline,
              improve your profile, and access eligible benefits.
            </p>

            <div className="mt-8 card-soft p-2 pl-5 flex items-center gap-3 max-w-xl">
              <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" />
              </svg>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Let's begin with your name"
                className="flex-1 bg-transparent py-3 text-sm focus:outline-none"
              />
              <button
                onClick={() => navigate({ to: "/onboarding" })}
                className="btn-primary"
              >
                Next Step
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6l6 6-6 6" /></svg>
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["bg-primary","bg-secondary","bg-amber-400","bg-rose-400"].map((c, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-background ${c}`} />
                ))}
              </div>
              <span><b className="text-foreground">4.9/5</b> rated by students worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-primary/15 blur-2xl" />
              <div className="absolute left-1/4 bottom-10 h-40 w-40 rounded-full bg-secondary/15 blur-2xl" />
            </div>
            <img
              src={heroStudent}
              alt="Smiling student with books"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Feature row */}
        <div className="relative mx-auto -mb-12 max-w-7xl px-6">
          <div className="card-soft grid gap-px overflow-hidden bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-6">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${f.color}`}>{f.icon}</div>
                <div className="text-base font-bold text-foreground">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-grad py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How it works</span>
            <h2 className="mt-3 text-4xl font-extrabold text-foreground">Your global future, in 4 simple steps</h2>
            <p className="mt-3 text-muted-foreground">From profile setup to landing in your dream campus — we walk with you every step.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Create your profile", d: "Tell us about your study level, interests and goals." },
              { n: "02", t: "Get matched", d: "We surface the right courses, countries and intakes for you." },
              { n: "03", t: "Apply with experts", d: "Mentors guide your SOPs, applications and visa process." },
              { n: "04", t: "Land successfully", d: "Tickets, accommodation, SIM and onboarding — all sorted." },
            ].map((s) => (
              <div key={s.n} className="card-soft p-6">
                <div className="text-3xl font-extrabold text-primary">{s.n}</div>
                <div className="mt-3 text-lg font-bold text-foreground">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-10 text-secondary-foreground md:p-14">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-3xl font-extrabold md:text-4xl">Dreaming of studying abroad?</h3>
                <p className="mt-2 text-secondary-foreground/80">We're here to turn your dreams into reality.</p>
              </div>
              <Link to="/signup" className="btn-primary w-fit">Explore Now →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <span>© {new Date().getFullYear()} Yotrix Global. Your Opportunity Matrix.</span>
        </div>
      </footer>
    </div>
  );
}
