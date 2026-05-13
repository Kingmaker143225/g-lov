// import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
// import { useState } from "react";
// import { Logo } from "@/components/Logo";
// import mapDomestic from "@/assets/map-domestic.png";
// import mapInternational from "@/assets/map-international.png";

// export const Route = createFileRoute("/onboarding")({
//   head: () => ({
//     meta: [
//       { title: "Get Started — Yotrix Global Onboarding" },
//       { name: "description", content: "Tell us about your study level and preferred countries to get personalized matches." },
//     ],
//   }),
//   component: OnboardingPage,
// });

// const levels = [
//   { id: "10", icon: "🎓", label: "10th Grade" },
//   { id: "12", icon: "📖", label: "12th Grade" },
//   { id: "deg", icon: "📜", label: "Degree" },
//   { id: "eng", icon: "⚙️", label: "Engineering" },
//   { id: "mas", icon: "🏆", label: "Masters" },
// ];

// const intCountries = ["Australia 🇦🇺","Canada 🇨🇦","New Zealand 🇳🇿","United Kingdom 🇬🇧","United States 🇺🇸","Germany 🇩🇪","Ireland 🇮🇪","France 🇫🇷","Netherlands 🇳🇱","Spain 🇪🇸","Switzerland 🇨🇭","Sweden 🇸🇪"];
// const states = ["Andhra Pradesh","Delhi","Karnataka","Kerala","Tamil Nadu","Telangana","Maharashtra","Gujarat"];

// function OnboardingPage() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [level, setLevel] = useState("12");
//   const [tab, setTab] = useState<"domestic"|"international">("international");
//   const [picks, setPicks] = useState<string[]>(["Canada 🇨🇦","Germany 🇩🇪","Ireland 🇮🇪"]);

//   const togglePick = (c: string) => {
//     setPicks((p) => p.includes(c) ? p.filter(x => x !== c) : (tab === "international" ? p.length < 6 : p.length < 3) ? [...p, c] : p);
//   };

//   const totalSteps = 4;

//   return (
//     <div className="min-h-screen bg-cream-grad">
//       <div className="mx-auto max-w-6xl px-6 py-8">
//         <Logo />

//         <div className="mt-10 card-soft p-8 md:p-12">
//           {step === 1 && (
//             <>
//               <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Level of study</h1>
//               <p className="mt-2 text-muted-foreground">Pick your current level of study</p>
//               <div className="mt-2 h-1 w-16 rounded bg-primary" />

//               <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
//                 {levels.map((l) => {
//                   const active = level === l.id;
//                   return (
//                     <button
//                       key={l.id}
//                       onClick={() => setLevel(l.id)}
//                       className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition ${active ? "border-primary bg-primary-soft/40" : "border-border bg-card hover:border-primary/40"}`}
//                     >
//                       <div className="text-4xl">{l.icon}</div>
//                       <div className="text-sm font-bold text-foreground">{l.label}</div>
//                       <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
//                         {active && <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </>
//           )}

//           {step === 2 && (
//             <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
//               <div>
//               <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Preferred {tab === "international" ? "country" : "state"} of study</h1>
//               <p className="mt-2 text-muted-foreground">
//                 Pick up to {tab === "international" ? "6 countries" : "3 states"} of your choice
//               </p>

//               <div className="mt-6 inline-flex rounded-full bg-muted p-1">
//                 <button onClick={() => { setTab("domestic"); setPicks([]); }} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${tab==="domestic" ? "bg-foreground text-background" : "text-muted-foreground"}`}>
//                   Domestic
//                 </button>
//                 <button onClick={() => { setTab("international"); setPicks([]); }} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${tab==="international" ? "bg-foreground text-background" : "text-muted-foreground"}`}>
//                   🌍 International
//                 </button>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 {(tab === "international" ? intCountries : states).map((c) => {
//                   const active = picks.includes(c);
//                   return (
//                     <button key={c} onClick={() => togglePick(c)} className={`chip ${active ? "chip-active" : ""}`}>
//                       {c} {active && <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
//                     </button>
//                   );
//                 })}
//               </div>

//               {picks.length > 0 && (
//                 <div className="mt-6 rounded-2xl bg-secondary-soft p-5">
//                   <div className="mb-3 flex items-center justify-between">
//                     <span className="font-semibold text-foreground">Your selected {tab === "international" ? "countries" : "states"}</span>
//                     <span className="text-sm font-semibold text-secondary">{picks.length} selected</span>
//                   </div>
//                   <div className="grid gap-2">
//                     {picks.map((p, i) => (
//                       <div key={p} className="flex items-center justify-between rounded-xl bg-card px-4 py-2.5">
//                         <div className="flex items-center gap-3">
//                           <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">{i+1}</span>
//                           <span className="text-sm font-medium text-foreground">{p}</span>
//                         </div>
//                         <button onClick={() => togglePick(p)} className="text-muted-foreground hover:text-foreground">✕</button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               </div>

//               <div className="relative hidden lg:flex items-center justify-center">
//                 <img
//                   key={tab}
//                   src={tab === "international" ? mapInternational : mapDomestic}
//                   alt={tab === "international" ? "Illustrated world map" : "Illustrated map of India"}
//                   width={1024}
//                   height={1024}
//                   loading="lazy"
//                   className="w-full max-w-xl object-contain animate-in fade-in duration-500"
//                 />
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <>
//               <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Your goals</h1>
//               <p className="mt-2 text-muted-foreground">Select what matters most to you (pick any)</p>
//               <div className="mt-8 grid gap-4 md:grid-cols-2">
//                 {["Top-ranked universities","Scholarships & funding","Affordable tuition","Post-study work options","Strong career outcomes","STEM-focused programs"].map((g) => (
//                   <label key={g} className="card-soft flex cursor-pointer items-center gap-4 p-5 hover:border-primary/40">
//                     <input type="checkbox" defaultChecked className="h-5 w-5 accent-[oklch(0.7_0.21_42)]" />
//                     <span className="font-semibold text-foreground">{g}</span>
//                   </label>
//                 ))}
//               </div>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Almost done!</h1>
//               <p className="mt-2 text-muted-foreground">Confirm your preferences and we'll build your matches.</p>
//               <div className="mt-8 grid gap-4">
//                 <Row label="Level of study" value={levels.find(l => l.id === level)?.label || ""} />
//                 <Row label="Mode" value={tab === "international" ? "International" : "Domestic"} />
//                 <Row label="Picks" value={picks.join(", ") || "—"} />
//               </div>
//             </>
//           )}

//           {/* Footer */}
//           <div className="mt-12 flex items-center justify-between">
//             <button
//               onClick={() => step > 1 ? setStep(step - 1) : navigate({ to: "/" })}
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-muted"
//               aria-label="Back"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m6 6l-6-6 6-6" /></svg>
//             </button>

//             <div className="flex items-center gap-3">
//               {Array.from({ length: totalSteps }).map((_, i) => {
//                 const n = i + 1;
//                 const active = n === step;
//                 const done = n < step;
//                 return (
//                   <div key={n} className="flex items-center gap-3">
//                     <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${active ? "bg-primary text-primary-foreground scale-110" : done ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground"}`}>
//                       {n}
//                     </div>
//                     {n < totalSteps && <div className={`h-1 w-10 rounded-full ${done ? "bg-primary" : "bg-border"}`} />}
//                   </div>
//                 );
//               })}
//             </div>

//             {step < totalSteps ? (
//               <button onClick={() => setStep(step + 1)} className="btn-primary !px-8">
//                 Next <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6l6 6-6 6" /></svg>
//               </button>
//             ) : (
//               <Link to="/success" className="btn-primary !px-8">Finish 🎉</Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4">
//       <span className="text-sm font-semibold text-muted-foreground">{label}</span>
//       <span className="text-sm font-bold text-foreground">{value}</span>
//     </div>
//   );
// }






import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import mapDomestic from "@/assets/map-domestic.png";
import mapInternational from "@/assets/map-international.png";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Get Started — Yotrix Global Onboarding" },
      { name: "description", content: "Tell us about your study level and preferred countries to get personalized matches." },
    ],
  }),
  component: OnboardingPage,
});

const levels = [
  { id: "10", icon: "🎓", label: "10th Grade" },
  { id: "12", icon: "📖", label: "12th Grade" },
  { id: "deg", icon: "📜", label: "Degree" },
  { id: "eng", icon: "⚙️", label: "Engineering" },
  { id: "mas", icon: "🏆", label: "Masters" },
];

const intCountries = ["Australia 🇦🇺","Canada 🇨🇦","New Zealand 🇳🇿","United Kingdom 🇬🇧","United States 🇺🇸","Germany 🇩🇪","Ireland 🇮🇪","France 🇫🇷","Netherlands 🇳🇱","Spain 🇪🇸","Switzerland 🇨🇭","Sweden 🇸🇪"];
const states = ["Andhra Pradesh","Delhi","Karnataka","Kerala","Tamil Nadu","Telangana","Maharashtra","Gujarat"];

function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState("12");
  const [tab, setTab] = useState<"domestic"|"international">("international");
  const [picks, setPicks] = useState<string[]>(["Canada 🇨🇦","Germany 🇩🇪","Ireland 🇮🇪"]);

  const togglePick = (c: string) => {
    setPicks((p) => p.includes(c) ? p.filter(x => x !== c) : (tab === "international" ? p.length < 6 : p.length < 3) ? [...p, c] : p);
  };

  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-cream-grad">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Logo />


          {step === 1 && (
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
              <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Preferred {tab === "international" ? "country" : "state"} of study</h1>
              <p className="mt-2 text-muted-foreground">
                Pick up to {tab === "international" ? "6 countries" : "3 states"} of your choice
              </p>

              <div className="mt-6 inline-flex rounded-full bg-muted p-1">
                <button onClick={() => { setTab("domestic"); setPicks([]); }} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${tab==="domestic" ? "bg-foreground text-background" : "text-muted-foreground"}`}>
                  Domestic
                </button>
                <button onClick={() => { setTab("international"); setPicks([]); }} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${tab==="international" ? "bg-foreground text-background" : "text-muted-foreground"}`}>
                  🌍 International
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {(tab === "international" ? intCountries : states).map((c) => {
                  const active = picks.includes(c);
                  return (
                    <button key={c} onClick={() => togglePick(c)} className={`chip ${active ? "chip-active" : ""}`}>
                      {c} {active && <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
                    </button>
                  );
                })}
              </div>

              {picks.length > 0 && (
                <div className="mt-6 rounded-2xl bg-secondary-soft p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-semibold text-foreground">Your selected {tab === "international" ? "countries" : "states"}</span>
                    <span className="text-sm font-semibold text-secondary">{picks.length} selected</span>
                  </div>
                  <div className="grid gap-2">
                    {picks.map((p, i) => (
                      <div key={p} className="flex items-center justify-between rounded-xl bg-card px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">{i+1}</span>
                          <span className="text-sm font-medium text-foreground">{p}</span>
                        </div>
                        <button onClick={() => togglePick(p)} className="text-muted-foreground hover:text-foreground">✕</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>

              <div className="relative hidden lg:flex items-center justify-center">
                <img
                  key={tab}
                  src={tab === "international" ? mapInternational : mapDomestic}
                  alt={tab === "international" ? "Illustrated world map" : "Illustrated map of India"}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full max-w-xl object-contain animate-in fade-in duration-500"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Your goals</h1>
              <p className="mt-2 text-muted-foreground">Select what matters most to you (pick any)</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {["Top-ranked universities","Scholarships & funding","Affordable tuition","Post-study work options","Strong career outcomes","STEM-focused programs"].map((g) => (
                  <label key={g} className="card-soft flex cursor-pointer items-center gap-4 p-5 hover:border-primary/40">
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[oklch(0.7_0.21_42)]" />
                    <span className="font-semibold text-foreground">{g}</span>
                  </label>
                ))}
              </div>
            </>
          )}
          <div className="mt-10 card-soft p-8 md:p-12">
          {step === 3 && (
            <>
              <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Level of study</h1>
              <p className="mt-2 text-muted-foreground">Pick your current level of study</p>
              <div className="mt-2 h-1 w-16 rounded bg-primary" />

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
                {levels.map((l) => {
                  const active = level === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setLevel(l.id)}
                      className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition ${active ? "border-primary bg-primary-soft/40" : "border-border bg-card hover:border-primary/40"}`}
                    >
                      <div className="text-4xl">{l.icon}</div>
                      <div className="text-sm font-bold text-foreground">{l.label}</div>
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                        {active && <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Almost done!</h1>
              <p className="mt-2 text-muted-foreground">Confirm your preferences and we'll build your matches.</p>
              <div className="mt-8 grid gap-4">
                <Row label="Level of study" value={levels.find(l => l.id === level)?.label || ""} />
                <Row label="Mode" value={tab === "international" ? "International" : "Domestic"} />
                <Row label="Picks" value={picks.join(", ") || "—"} />
              </div>
            </>
          )}

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate({ to: "/" })}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-muted"
              aria-label="Back"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5m6 6l-6-6 6-6" /></svg>
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalSteps }).map((_, i) => {
                const n = i + 1;
                const active = n === step;
                const done = n < step;
                return (
                  <div key={n} className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${active ? "bg-primary text-primary-foreground scale-110" : done ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground"}`}>
                      {n}
                    </div>
                    {n < totalSteps && <div className={`h-1 w-10 rounded-full ${done ? "bg-primary" : "bg-border"}`} />}
                  </div>
                );
              })}
            </div>

            {step < totalSteps ? (
              <button onClick={() => setStep(step + 1)} className="btn-primary !px-8">
                Next <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6l6 6-6 6" /></svg>
              </button>
            ) : (
              <Link to="/success" className="btn-primary !px-8">Finish 🎉</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4">
      <span className="text-sm font-semibold text-muted-foreground">{label}</span>
      <span className="text-sm font-bold text-foreground">{value}</span>
    </div>
  );
}






