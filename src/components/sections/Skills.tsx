"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SKILLS } from "@/lib/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const skillRowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 } 
  }
};

const barVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
};

const percentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } }
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="skills" className="py-[120px] relative overflow-hidden bg-surface/30">
      {/* Background faded text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light text-[20vw] leading-none text-gold/[0.02] pointer-events-none select-none z-0 whitespace-nowrap">
        STACK
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={sectionRef}>
        
        {/* Header Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-gold uppercase tracking-[0.15em] text-sm mb-6">
            — Skills
          </div>
          <h2 className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground whitespace-pre-line mb-4">
            {"Technical\nArsenal."}
          </h2>
          <p className="font-body text-muted max-w-[500px] text-[1.05rem]">
            Tools I use to build. Not a buzzword list — actual daily-driver skills.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="Frontend" className="w-full max-w-4xl mx-auto">
          
          <TabsList className="w-full flex flex-wrap h-auto bg-transparent mb-12 border-b border-border/50 justify-start p-0 rounded-none gap-6 md:gap-10">
            {Object.keys(SKILLS).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className={cn(
                  "px-0 py-3 rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "font-body text-sm md:text-base text-muted tracking-wide transition-colors duration-300",
                  "data-[state=active]:text-gold relative group"
                )}
              >
                {category}
                {/* Active Tab Underline */}
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold scale-x-0 group-data-[state=active]:scale-x-100 origin-left transition-transform duration-300" />
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      custom={index}
                      variants={skillRowVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.08 }} // Staggered entry
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-body text-primary font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <motion.span 
                          variants={percentVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          className="font-mono text-gold text-xs"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full h-[2px] bg-card rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gold"
                          custom={skill.level}
                          variants={barVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>

        </Tabs>
      </div>
    </section>
  );
}
