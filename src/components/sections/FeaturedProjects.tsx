"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          className="mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-gold uppercase tracking-[0.15em] text-sm mb-6">
            — Selected Work
          </div>
          <h2 className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground whitespace-pre-line mb-4">
            {"Selected\nWork."}
          </h2>
          <p className="font-body text-muted max-w-[500px] text-[1.05rem]">
            Things I've shipped. Some are live. Some are experiments.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32 max-w-5xl mx-auto">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.01, boxShadow: "0 0 0 1px var(--border-hover)" }}
                className="relative bg-surface/30 rounded-lg p-6 md:p-10 transition-all duration-200"
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-8 font-display font-light text-[4rem] text-gold opacity-30 select-none pointer-events-none">
                  {projectNumber}
                </div>

                <div className={cn(
                  "flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10",
                  !isEven && "lg:flex-row-reverse"
                )}>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "mb-4 font-body text-xs rounded-sm tracking-wide",
                        project.status === "live" && "bg-green-500/10 text-green-500 border-green-500/20",
                        project.status === "development" && "bg-gold/10 text-gold border-gold/20",
                        project.status === "archived" && "bg-muted/10 text-muted border-muted/20 hover:bg-transparent"
                      )}
                    >
                      {project.status === "live" ? "Live" : project.status === "development" ? "In Development" : "Archived"}
                    </Badge>
                    
                    <h3 className="font-display font-light text-primary text-[2.2rem] leading-tight mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="font-body text-secondary leading-[1.8] line-clamp-3 mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-card border border-gold/20 text-muted font-mono text-[0.7rem] uppercase tracking-wider rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 mt-auto">
                      <Link 
                        href={`/projects/${project.id}`} 
                        className="group flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-gold transition-colors"
                      >
                        Case Study 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-body text-sm font-medium text-muted hover:text-primary transition-colors"
                        >
                          <Code2 className="w-4 h-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image/Visual Placeholder */}
                  <Link href={`/projects/${project.id}`} className="w-full lg:w-1/2 block group">
                    <div className="relative w-full aspect-video bg-card border border-border/50 overflow-hidden flex items-center justify-center transition-border duration-500 group-hover:border-gold/40 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
                      
                      {/* Placeholder Corner Accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 opacity-0 group-hover:opacity-100" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100" />
                      
                      <span className="font-mono text-muted/40 uppercase tracking-widest text-sm">
                        Screenshot / Visual
                      </span>
                    </div>
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 font-body text-gold font-medium tracking-wide hover:underline underline-offset-4 decoration-gold/50 transition-all"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
