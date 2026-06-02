"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SKILLS } from "@/lib/skills";

// Animated progress bar — triggers only when in viewport
function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      style={{ marginBottom: "1.25rem" }}
    >
      {/* Skill name + percentage */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "var(--text-primary)",
            fontWeight: 400,
          }}
        >
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.07 + 0.8, duration: 0.3 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--accent-gold)",
          }}
        >
          {level}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(201,168,76,0.1)",
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            delay: index * 0.07 + 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, var(--accent-gold-muted), var(--accent-gold))",
            borderRadius: "1px",
          }}
        />
      </div>
    </motion.div>
  );
}

const CATEGORIES = ["Frontend", "Backend", "DevOps & Cloud", "AI & Tools"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const currentSkills = SKILLS[activeTab] ?? [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* STACK watermark — subtle, clipped, behind everything */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(6rem, 18vw, 18rem)",
          fontWeight: 700,
          color: "rgba(201,168,76,0.018)",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        STACK
      </div>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-16"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-gold)",
            marginBottom: "1rem",
          }}
        >
          — Skills
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}
        >
          Technical
          <br />
          Arsenal.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isSectionInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
            maxWidth: 480,
          }}
        >
          Tools I reach for daily — not a buzzword list.
        </motion.p>

        {/* Two-column layout: tabs left, skills right */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Tab list — vertical on desktop */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              borderLeft: "1px solid var(--border)",
              paddingLeft: "0",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.6rem 1rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: activeTab === cat ? 500 : 400,
                  color: activeTab === cat ? "var(--accent-gold)" : "var(--text-muted)",
                  backgroundColor: "transparent",
                  border: "none",
                  borderLeft:
                    activeTab === cat
                      ? "2px solid var(--accent-gold)"
                      : "2px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills list — animated on tab change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ minHeight: 280 }}
            >
              {currentSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile responsive fix */}
      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
