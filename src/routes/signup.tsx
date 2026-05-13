import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import signupStudent from "@/assets/signup-student.png";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Yotrix Global" },
      { name: "description", content: "Join thousands of students discovering top universities and building dream careers abroad with Yotrix Global." },
    ],
  }),
  component: SignupPage,
});

const perks = [
  { icon: "🎓", title: "Find & compare", sub: "universities" },
  { icon: "📄", title: "Apply to top", sub: "courses" },
  { icon: "💬", title: "Expert mentor", sub: "guidance" },
  { icon: "🛡️", title: "Secure & easy", sub: "document upload" },
  { icon: "📈", title: "Track your", sub: "applications" },
  { icon: "🎁", title: "Exciting rewards", sub: "& benefits" },
];

function SignupPage() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(true);
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-0 lg:grid-cols-[1.05fr_1fr]">
        {/* Left */}
        <div className="relative overflow-hidden bg-cream-grad p-8 md:p-12">
          <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <Logo />

          <h1 className="mt-12 text-5xl font-extrabold leading-[1.1] text-foreground md:text-6xl">
            Your global future<br />starts <span className="text-primary">here.</span>
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Join thousands of students who are discovering top universities and building their dream careers abroad.
          </p>

          <div className="relative mt-10 flex justify-center">
            <img src={signupStudent} alt="Student" width={896} height={1024} className="h-72 w-auto drop-shadow-xl" loading="lazy" />
          </div>

          <div className="card-soft mt-8 p-6">
            <div className="mb-4 text-base font-bold text-foreground">Everything you need,<br />all in one place</div>
            <div className="grid grid-cols-3 gap-4">
              {perks.map((p) => (
                <div key={p.title} className="text-center">
                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-xl">{p.icon}</div>
                  <div className="text-xs font-semibold text-foreground">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="card-soft w-full max-w-md p-8">
            <h2 className="text-3xl font-extrabold text-foreground">Create your account</h2>
            <div className="mt-2 h-1 w-12 rounded bg-secondary" />

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Already have an account?</span>
              <Link to="/signup" className="font-semibold text-primary">Log in</Link>
            </div>

            <div className="mt-5 grid gap-3">
              <button className="btn-ghost w-full !rounded-2xl">
                <span className="text-lg">G</span> Continue with Google
              </button>
              <button className="btn-ghost w-full !rounded-2xl">
                <span className="text-lg"></span> Continue with Apple
              </button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" /> or sign up with email <div className="h-px flex-1 bg-border" />
            </div>

            <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); navigate({ to: "/onboarding" }); }}>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Full Name</label>
                <input className="input-base" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Email Address</label>
                <input type="email" className="input-base" placeholder="Enter your email address" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Mobile Number</label>
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-1">
                  <span className="text-sm">🇮🇳 +91</span>
                  <div className="h-6 w-px bg-border" />
                  <input className="flex-1 bg-transparent py-2.5 text-sm focus:outline-none" placeholder="Enter your mobile number" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Password</label>
                <input type="password" className="input-base" placeholder="Create a strong password" />
                <div className="mt-2 flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded ${i <= 2 ? "bg-secondary" : "bg-border"}`} />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">Use 8+ characters with a mix of letters, numbers & symbols.</p>
              </div>

              <label className="flex items-start gap-2 text-sm text-foreground">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 accent-[oklch(0.7_0.21_42)]" />
                <span>I agree to the <span className="font-semibold text-primary">Terms of Use</span> and <span className="font-semibold text-primary">Privacy Policy</span></span>
              </label>

              <button type="submit" className="btn-primary mt-2 w-full !py-4 text-base">
                <span>🛡️</span> Create Account
              </button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-center">
              {[
                { i: "🛡️", t: "Secure", s: "Your data is 100% protected" },
                { i: "🔒", t: "Trusted by", s: "10K+ students worldwide" },
                { i: "🎧", t: "24/7 Support", s: "We're here to help" },
              ].map((x) => (
                <div key={x.t}>
                  <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-lg">{x.i}</div>
                  <div className="text-xs font-semibold text-foreground">{x.t}</div>
                  <div className="text-[11px] text-muted-foreground">{x.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
