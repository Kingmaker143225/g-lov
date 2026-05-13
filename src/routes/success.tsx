import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import successImg from "@/assets/success-student.png";

export const Route = createFileRoute("/success")({
  head: () => ({
    meta: [
      { title: "You're all set — Yotrix Global" },
      { name: "description", content: "Your Yotrix Global profile is ready. Explore courses and connect with mentors." },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-muted/40 p-6 md:p-12">
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] bg-card shadow-xl md:grid-cols-2">
        <div className="p-10 md:p-12">
          <Logo />
          <h1 className="mt-10 text-4xl font-extrabold text-foreground md:text-5xl">Awesome, Tej! 🎉</h1>
          <div className="mt-4 text-6xl font-extrabold text-secondary">INR 0</div>
          <div className="mt-3 inline-block rounded-full bg-secondary-soft px-4 py-1.5 text-sm font-semibold text-secondary">
            Credited to your wallet
          </div>
          <p className="mt-6 max-w-md text-muted-foreground">
            We've saved your details and you're all set to explore the best study abroad options.
          </p>

          <div className="mt-8 rounded-2xl bg-secondary-soft/60 p-5">
            {[
              { i: "🔍", t: "Shortlist & compare courses" },
              { i: "✈️", t: "Apply for up to 5 courses" },
              { i: "💬", t: "Chat with our friendly advisors" },
              { i: "🛡️", t: "Securely upload your documents" },
              { i: "📈", t: "Track your application progress" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3 py-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-base">{x.i}</span>
                <span className="text-sm font-medium text-foreground">{x.t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            <Link to="/dashboard" className="btn-secondary !py-4 text-base">Pick a Mentor →</Link>
            <Link to="/dashboard" className="btn-ghost !py-4 text-base">View My Dashboard</Link>
          </div>
        </div>

        <div className="relative overflow-hidden bg-secondary-soft/40 p-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
          </div>
          <div className="grid gap-3">
            <Pin label="Global Universities" sub="Top destinations" icon="🏛️" />
            <Pin label="Personalized Guidance" sub="Expert mentors" icon="🧑‍🏫" right />
            <Pin label="End-to-End Support" sub="We're with you" icon="🎧" />
          </div>
          <img src={successImg} alt="Celebrating student" width={1024} height={896} className="mx-auto mt-4 max-h-[420px] w-auto" loading="lazy" />
          <div className="mt-6 rounded-2xl bg-primary-soft p-5">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎁</span>
              <div>
                <div className="font-bold text-foreground">More opportunities await!</div>
                <div className="text-sm text-muted-foreground">Complete your profile to unlock personalized recommendations.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pin({ label, sub, icon, right }: { label: string; sub: string; icon: string; right?: boolean }) {
  return (
    <div className={`card-soft flex items-center gap-3 px-4 py-3 ${right ? "ml-auto" : ""} w-fit`}>
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-sm font-bold text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
