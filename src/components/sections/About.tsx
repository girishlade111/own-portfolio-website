"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start">
          
          {/* Left Column - Content */}
          <motion.div 
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-mono text-gold uppercase tracking-[0.15em] text-sm mb-6">
              — About
            </div>
            
            <h2 className="font-display font-light text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-foreground whitespace-pre-line mb-8">
              {"Builder by instinct,\nFounder by choice."}
            </h2>

            <div className="space-y-0 font-body text-secondary leading-[1.8] text-[1.05rem]">
              <p>
                I&apos;m Girish Lade, a developer from Pandharpur, Maharashtra — now building in Mumbai. I started with curiosity and zero roadmap, figuring out software the only way that works: by shipping things.
              </p>
              
              <div className="w-[40px] h-[1px] bg-gold/30 my-6" />
              
              <p>
                I build full-stack products at LadeStack — a brand I created to house tools that solve real developer problems without the bloat. I believe the best software feels invisible: it just works.
              </p>
              
              <div className="w-[40px] h-[1px] bg-gold/30 my-6" />
              
              <p>
                Right now I&apos;m deep in building LadeStack&apos;s core suite. When I&apos;m not shipping, I&apos;m composing — I score cinematic music that lives in the space between hustle and momentum.
              </p>
            </div>

            {/* Stats Row */}
            <motion.div 
              className="mt-12 flex gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
            >
              <motion.div variants={statVariants} className="flex flex-col">
                <span className="font-display text-4xl lg:text-5xl text-gold mb-2">3+</span>
                <span className="font-body text-sm text-muted">Years Building</span>
              </motion.div>
              <motion.div variants={statVariants} className="flex flex-col">
                <span className="font-display text-4xl lg:text-5xl text-gold mb-2">10+</span>
                <span className="font-body text-sm text-muted">Products Shipped</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Profile Photo Placeholder */}
            <div className="relative w-full max-w-[320px] aspect-[4/5] bg-card border border-gold/20 shadow-[inset_0_0_40px_rgba(201,168,76,0.05)] flex items-center justify-center group">
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/60 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-gold/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              
              {/* Subtle Initial/Logo */}
              <span className="font-display text-muted/30 text-4xl tracking-widest">G.L.</span>
            </div>

            {/* Currently Building Card */}
            <div className="w-full max-w-[320px] mt-8 bg-surface border-l-2 border-gold p-5 flex items-start gap-4">
              <div className="p-2 bg-background rounded-sm border border-border">
                <Code2 className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-mono text-[0.7rem] text-muted uppercase tracking-wider mb-1">Currently Building</h4>
                <p className="font-body text-foreground font-medium text-sm">LadeStack Suite</p>
                <p className="font-body text-xs text-secondary mt-1">AI-powered developer tools</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
