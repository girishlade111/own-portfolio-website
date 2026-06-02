"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background: subtle radial glow — top right, very restrained */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 75% 15%, rgba(201,168,76,0.055) 0%, transparent 65%)",
        }}
      />

      {/* Decorative year — smaller, right-aligned, clipped so it never escapes viewport */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 14vw, 16rem)",
          fontWeight: 300,
          color: "rgba(201,168,76,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          userSelect: "none",
          overflow: "hidden",
          maxWidth: "45vw",
        }}
        aria-hidden="true"
      >
        {new Date().getFullYear()}
      </div>

      {/* Main content — left-side, vertically centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-24">
        <div className="max-w-2xl">

          {/* Gold separator line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 72,
              height: 1,
              background: "var(--accent-gold)",
              transformOrigin: "left",
              marginBottom: "1.5rem",
            }}
          />

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            {PERSONAL.title}
          </motion.p>

          {/* Name headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              marginBottom: "1.75rem",
            }}
          >
            {PERSONAL.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              maxWidth: 460,
              marginBottom: "2.5rem",
            }}
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--accent-gold)",
                color: "#050A18",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View My Work <ArrowDown size={14} />
            </Link>

            <a
              href={PERSONAL.resumeUrl}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "var(--accent-gold)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
                border: "1px solid var(--accent-gold)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-gold)";
                e.currentTarget.style.color = "#050A18";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent-gold)";
              }}
            >
              <Download size={14} /> Resume
            </a>
          </motion.div>

          {/* Availability badge */}
          {PERSONAL.availableForWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.9rem",
                border: "1px solid rgba(74, 222, 128, 0.25)",
                borderRadius: "100px",
                backgroundColor: "rgba(74, 222, 128, 0.06)",
              }}
            >
              {/* Pulsing green dot */}
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    opacity: 0.5,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "#4ade80",
                  letterSpacing: "0.08em",
                }}
              >
                Available for freelance
              </span>
            </motion.div>
          )}

        </div>
      </div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} color="var(--text-muted)" />
        </motion.div>
      </motion.div>

      {/* Ping animation keyframe */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

    </section>
  );
}
