import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/onboarding" className="text-sm font-medium text-muted-foreground hover:text-foreground">Get Started</Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/signup" className="hidden text-sm font-semibold text-foreground hover:text-primary md:inline">Log in</Link>
          <Link to="/signup" className="btn-primary !py-2.5 !px-5">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
