"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Tool", "App", "SaaS", "AI"];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-5xl pt-32 pb-24">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-body text-muted hover:text-gold transition-colors text-sm mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="font-display font-light text-[3.5rem] leading-none mb-6 text-foreground">
          All Projects
        </h1>
        <p className="font-body text-muted text-[1.1rem] max-w-2xl">
          Everything I've built — products, experiments, and tools.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap items-center gap-3 mt-16 mb-12"
      >
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 border",
              activeCategory === category
                ? "bg-gold border-gold text-background"
                : "bg-transparent border-border/50 text-muted hover:border-gold/50 hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col bg-card border border-border p-6 md:p-8 rounded-sm hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Link href={`/projects/${project.id}`} className="group pr-4">
                  <h2 className="font-body font-semibold text-xl text-primary group-hover:text-gold transition-colors leading-tight">
                    {project.title}
                  </h2>
                </Link>
                <Badge
                  variant="outline"
                  className={cn(
                    "font-body text-xs rounded-sm tracking-wide shrink-0",
                    project.status === "live" && "bg-green-500/10 text-green-500 border-green-500/20",
                    project.status === "development" && "bg-gold/10 text-gold border-gold/20",
                    project.status === "archived" && "bg-muted/10 text-muted border-muted/20 hover:bg-transparent"
                  )}
                >
                  {project.status === "live" ? "Live" : project.status === "development" ? "In Dev" : "Archived"}
                </Badge>
              </div>

              <p className="font-body text-secondary text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-8 mt-auto">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background border border-gold/20 text-muted font-mono text-[0.65rem] uppercase tracking-wider rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <Link 
                  href={`/projects/${project.id}`} 
                  className="font-body text-sm font-medium text-gold hover:text-gold-light transition-colors mr-auto"
                >
                  Read Case Study →
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                    title="View Source"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
