export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_6px_18px_-6px_oklch(0.7_0.21_42/0.6)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M5 4l7 8 7-8" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-lg font-extrabold tracking-tight text-foreground">YOTRIX GLOBAL</div>
        <div className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">YOUR OPPORTUNITY MATRIX</div>
      </div>
    </div>
  );
}
