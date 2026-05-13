import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import dashHero from "@/assets/dashboard-hero.png";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Yotrix Global" },
      { name: "description", content: "Your personalized study abroad dashboard with goals, services, and university recommendations." },
    ],
  }),
  component: Dashboard,
});

const navItems = [
  { i: "🏠", t: "Dashboard", active: true },
  { i: "📋", t: "Applications" },
  { i: "📖", t: "Mentor" },
  { i: "🧩", t: "Services" },
  { i: "📚", t: "Resources" },
  { i: "👛", t: "Wallet" },
  { i: "👤", t: "Profile" },
  { i: "⚙️", t: "Settings" },
];

const services = [
  { i: "🎓", c: "bg-blue-50 text-blue-600", t: "University Application", d: "Apply to your dream universities hassle-free." },
  { i: "🛂", c: "bg-emerald-50 text-secondary", t: "Visa Process", d: "End-to-end visa application support." },
  { i: "💰", c: "bg-amber-50 text-amber-600", t: "Education Loan", d: "Low-interest loans for your global education." },
  { i: "📝", c: "bg-violet-50 text-violet-600", t: "SOP / LOR Evaluation", d: "Get your SOP & LOR reviewed by experts." },
  { i: "📊", c: "bg-orange-50 text-primary", t: "IELTS / TOEFL Training", d: "Prepare for your tests with expert guidance." },
  { i: "✈️", c: "bg-sky-50 text-sky-600", t: "Flight Tickets", d: "Book your tickets at the best prices." },
  { i: "🏠", c: "bg-rose-50 text-rose-600", t: "Accommodation & SIM", d: "Find the best stays & SIM options abroad." },
  { i: "📜", c: "bg-purple-50 text-purple-600", t: "PR & Work Permit", d: "Guidance for PR & work permit applications." },
  { i: "🚖", c: "bg-teal-50 text-teal-600", t: "Airport Pickup", d: "Hassle-free airport pickup in your city." },
  { i: "📁", c: "bg-stone-100 text-stone-700", t: "Legal Documentation", d: "Assistance with all legal documents." },
];

const updates = [
  { t: "University of Melbourne application deadline extended", w: "2h ago" },
  { t: "New scholarship available for Indian students", w: "1d ago" },
  { t: "Webinar: Study in Canada – Step by Step Guide", w: "2d ago" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto flex max-w-[1400px]">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-card p-4 lg:flex">
          <Link to="/" className="px-2"><Logo /></Link>
          <nav className="mt-8 grid gap-1">
            {navItems.map((n) => (
              <button key={n.t} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${n.active ? "bg-primary-soft text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                <span className="text-base">{n.i}</span> {n.t}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl bg-cream-grad p-4 text-center">
            <div className="text-2xl">🎁</div>
            <div className="mt-2 text-sm font-bold text-foreground">Refer & Earn</div>
            <div className="text-xs text-muted-foreground">Invite friends and earn exciting rewards!</div>
            <button className="mt-3 w-full rounded-full border-2 border-primary px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">Refer Now</button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:p-8">
          {/* Top bar */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
              <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
              <input className="flex-1 bg-transparent text-sm focus:outline-none" placeholder="Search for universities, courses, services..." />
            </div>
            <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
              🔔
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">2</span>
            </button>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-4 pr-1.5">
              <div className="text-right">
                <div className="text-sm font-bold text-foreground">tej</div>
                <div className="text-[10px] font-semibold text-amber-500">★ 50,000</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
            </div>
          </div>

          {/* Welcome + progress */}
          <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl bg-cream-grad p-8">
              <div className="relative z-10 max-w-md">
                <div className="text-sm font-semibold text-muted-foreground">Welcome back,</div>
                <div className="mt-1 text-5xl font-extrabold text-foreground">tej! 👋</div>
                <p className="mt-3 text-muted-foreground">Your global journey begins with the right opportunities.</p>
                <Link to="/onboarding" className="btn-primary mt-6">Explore Opportunities ✈️</Link>
              </div>
              <img src={dashHero} alt="" width={1024} height={768} className="absolute right-0 top-1/2 hidden h-[110%] -translate-y-1/2 md:block" loading="lazy" />
            </div>

            <div className="card-soft p-6">
              <div className="mb-4 font-bold text-foreground">My Progress</div>
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24">
                  <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="oklch(0.92 0.01 255)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="oklch(0.7 0.21 42)" strokeWidth="3" strokeDasharray="80 100" strokeLinecap="round" pathLength="100" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-extrabold text-foreground">80%</div>
                </div>
                <div>
                  <div className="font-bold text-foreground">Profile</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm">
                {[
                  { t: "Personal Information", d: true },
                  { t: "Education Details", d: true },
                  { t: "Test Scores", d: true },
                  { t: "Documents", d: true },
                  { t: "Work Experience", d: false },
                ].map((x) => (
                  <div key={x.t} className="flex items-center gap-2">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${x.d ? "bg-secondary text-secondary-foreground" : "border-2 border-border"}`}>
                      {x.d && <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
                    </span>
                    {x.t}
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-full border-2 border-primary px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">Complete Profile →</button>
            </div>
          </div>

          {/* Goals row */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="card-soft p-6">
              <div className="mb-3 font-bold text-foreground">Wallet Balance</div>
              <div className="rounded-2xl bg-primary-soft p-4 text-center">
                <div className="text-4xl">👛</div>
                <div className="mt-2 text-xs text-muted-foreground">INR</div>
                <div className="text-3xl font-extrabold text-foreground">0</div>
              </div>
              <button className="mt-4 w-full rounded-full border-2 border-primary px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">Add Money</button>
            </div>
            <div className="card-soft p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-bold text-foreground">Your Goals</span>
                <span className="text-sm text-muted-foreground"><b className="text-foreground">3</b> / 5 Completed</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-3/5 bg-secondary" />
              </div>
              <div className="mt-4 grid gap-2 text-sm">
                {[
                  { t: "Shortlist 5 courses", d: true },
                  { t: "Apply to 3 universities", d: true },
                  { t: "Book a mentor session", d: false },
                  { t: "Upload all documents", d: true },
                  { t: "Receive an offer", d: false },
                ].map((g) => (
                  <div key={g.t} className="flex items-center gap-2">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${g.d ? "bg-secondary text-secondary-foreground" : "border-2 border-border"}`}>
                      {g.d && <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
                    </span>
                    {g.t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-foreground p-6 text-background">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/30 blur-2xl" />
              <div className="relative">
                <div className="text-2xl font-extrabold">Need Expert Guidance?</div>
                <p className="mt-2 text-sm text-background/70">Connect with our verified mentors and fast-track your journey.</p>
                <div className="mt-5 flex -space-x-2">
                  {["bg-primary","bg-amber-300","bg-rose-400","bg-emerald-400"].map((c, i) => (
                    <div key={i} className={`h-10 w-10 rounded-full border-2 border-foreground ${c}`} />
                  ))}
                  <div className="ml-3 self-center text-xs"><b>4K+</b> Mentors</div>
                </div>
                <button className="btn-primary mt-5 w-full">Find a Mentor →</button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-foreground">Top Services for You</h2>
            <a className="text-sm font-semibold text-primary">View all services →</a>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {services.slice(0, 10).map((s) => (
              <div key={s.t} className="card-soft p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${s.c}`}>{s.i}</div>
                <div className="text-sm font-bold text-foreground">{s.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
                <button className="mt-3 text-xs font-semibold text-primary">Start Now →</button>
              </div>
            ))}
          </div>

          {/* Updates + Recommendations */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="card-soft p-6">
                <div className="mb-4 flex items-center gap-2 font-bold text-foreground">✨ Recommended for You</div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { t: "University of Toronto", c: "Canada", r: "QS Ranking #21" },
                    { t: "The University of Melbourne", c: "Australia", r: "QS Ranking #14" },
                    { t: "University College London", c: "UK", r: "QS Ranking #9" },
                  ].map((u) => (
                    <div key={u.t} className="overflow-hidden rounded-2xl border border-border">
                      <div className="h-24 bg-gradient-to-br from-primary-soft to-secondary-soft" />
                      <div className="p-4">
                        <div className="text-sm font-bold text-foreground">{u.t}</div>
                        <div className="text-xs text-muted-foreground">{u.c}</div>
                        <div className="mt-1 text-xs font-semibold text-primary">{u.r}</div>
                        <button className="mt-3 w-full rounded-full border border-border py-1.5 text-xs font-semibold hover:bg-muted">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-soft p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold text-foreground">Latest Updates</span>
                <a className="text-xs font-semibold text-primary">View all</a>
              </div>
              <div className="grid gap-4">
                {updates.map((u) => (
                  <div key={u.t} className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-secondary-soft" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{u.t}</div>
                      <div className="text-xs text-muted-foreground">{u.w}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
