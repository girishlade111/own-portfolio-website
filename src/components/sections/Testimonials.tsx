"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Testimonials() {
  // If fewer than 2 testimonials: skip this section entirely
  // TODO: Add more testimonials if needed
  if (TESTIMONIALS.length < 2) {
    return null;
  }

  return (
    <section id="testimonials" className="py-[120px] relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-gold uppercase tracking-[0.15em] text-sm mb-6">
            — Testimonials
          </div>
          <h2 className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground whitespace-pre-line">
            {"What People\nSay."}
          </h2>
        </motion.div>

        {/* Static Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="relative bg-card border border-border p-8 md:p-10 rounded-sm"
            >
              {/* Large opening quote mark */}
              <div className="absolute top-2 left-4 font-display text-[5rem] leading-none text-gold opacity-30 select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="font-body text-secondary italic leading-[1.8] text-[1rem] mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="w-[30px] h-[1px] bg-gold/50 mb-6" />

                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder / Image */}
                  {testimonial.avatar ? (
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-card border border-gold/20 flex items-center justify-center shrink-0">
                      <span className="font-display text-muted text-xs">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="font-body text-primary font-medium text-sm">
                      {testimonial.author}
                    </span>
                    <span className="font-mono text-muted text-[0.8rem]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
