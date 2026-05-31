"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Check } from "lucide-react";
import Link from "next/link";
import { PERSONAL } from "@/lib/constants";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent immediate navigation so we can show state
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Subtle radial gradient glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)"
        }}
      />

      {/* Large decorative text (Desktop only) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 font-display font-light text-[20vw] leading-none text-gold/3 pointer-events-none select-none z-0"
      >
        {new Date().getFullYear()}
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Decorative horizontal line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[80px] h-[1px] bg-gold mb-8 origin-left"
          />

          {/* Eyebrow text */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-muted uppercase tracking-[0.2em] text-xs mb-6"
          >
            {PERSONAL.title}
          </motion.p>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-display font-light text-foreground text-[clamp(3.5rem,8vw,7rem)] leading-none mb-6 tracking-tight"
          >
            {PERSONAL.name}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-secondary text-[1.1rem] leading-[1.7] max-w-[480px] mb-10"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link 
              href="#projects"
              className="inline-flex items-center justify-center bg-gold text-background hover:bg-gold-light rounded-sm px-8 py-6 h-auto font-body text-sm tracking-wide transition-colors duration-300"
            >
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a 
              href={PERSONAL.resumeUrl} 
              download
              onClick={handleDownload}
              className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-background bg-transparent rounded-sm px-8 py-6 h-auto font-body text-sm tracking-wide transition-colors duration-300 w-52"
            >
              {isDownloading ? (
                <>Downloading... <Check className="ml-2 w-4 h-4" /></>
              ) : (
                <>Download Resume <Download className="ml-2 w-4 h-4" /></>
              )}
            </a>
          </motion.div>

          {/* Status Badge */}
          {PERSONAL.availableForWork && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-body text-muted uppercase tracking-wider">
                Available for freelance work
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
