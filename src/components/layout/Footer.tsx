import Link from "next/link";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-[60px] pb-[32px] bg-background">
      {/* Row 1 - Top horizontal line */}
      <div className="w-full h-[1px] bg-border mb-12" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Row 2 - Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          {/* Left: Logo & Subtext */}
          <div className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="font-display text-[1.2rem] tracking-[0.08em] text-gold hover:opacity-80 transition-opacity"
            >
              {PERSONAL.name}
            </Link>
            <p className="font-body text-sm text-muted">
              Building tools at LadeStack.
            </p>
          </div>

          {/* Right: Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6 md:gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="font-body text-sm text-muted hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Row 3 - Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted">
            © {currentYear} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.7rem] text-muted flex items-center gap-1.5 uppercase tracking-wider">
            Built with Next.js <span className="text-gold text-xs">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
