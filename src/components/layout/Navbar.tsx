"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll handler for background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Adjust to trigger when section is in top view
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/80 backdrop-blur-[12px] border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-display text-[1.1rem] tracking-[0.08em] text-gold hover:opacity-80 transition-opacity"
        >
          {PERSONAL.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const hashId = link.href.replace("#", "");
              const isActive = activeSection === hashId;
              
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative font-body text-sm font-medium transition-colors duration-200 py-1",
                      isActive ? "text-gold" : "text-muted hover:text-gold"
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-medium border border-gold text-gold hover:bg-gold hover:text-background transition-colors duration-300 bg-transparent"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => {
                const hashId = link.href.replace("#", "");
                const isActive = activeSection === hashId;
                
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-body text-base font-medium py-2 transition-colors",
                      isActive ? "text-gold" : "text-muted hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link 
                href="#contact"
                className="w-full inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-medium border border-gold text-gold hover:bg-gold hover:text-background mt-2 bg-transparent transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
