"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, MessageCircle, ArrowRight, Check } from "lucide-react";
import { PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: wire up email service (Formspree/Resend)
    // Simulating a network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-[120px] relative overflow-hidden">
      {/* Subtle radial background glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 10% 90%, rgba(201,168,76,0.05) 0%, transparent 50%)"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Info (60%) */}
          <motion.div 
            className="w-full lg:w-[60%] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-mono text-gold uppercase tracking-[0.15em] text-sm mb-6">
              — Contact
            </div>
            <h2 className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground whitespace-pre-line mb-6">
              {"Let's Build\nSomething."}
            </h2>
            <p className="font-body text-secondary text-[1.1rem] leading-[1.7] max-w-[480px] mb-12">
              Available for freelance projects and consulting. Response within 24 hours.
            </p>

            {/* Social Links List */}
            <div className="flex flex-col gap-6 max-w-md">
              
              {/* Email (Copy to Clipboard) */}
              <button 
                onClick={handleCopyEmail}
                title="Click to copy"
                className="group flex items-center justify-between w-full p-4 border border-border/50 bg-surface/30 rounded-sm hover:border-gold/30 hover:bg-surface/50 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gold" />
                  <span className="font-body text-primary font-medium">{PERSONAL.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  {copied ? (
                    <span className="text-xs font-mono text-green-500 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
                  )}
                </div>
              </button>

              {/* GitHub */}
              <a 
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 border border-border/50 bg-surface/30 rounded-sm hover:border-gold/30 hover:bg-surface/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Code2 className="w-5 h-5 text-gold" />
                  <span className="font-body text-primary font-medium">GitHub</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
              </a>

              {/* LinkedIn */}
              <a 
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 border border-border/50 bg-surface/30 rounded-sm hover:border-gold/30 hover:bg-surface/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Briefcase className="w-5 h-5 text-gold" />
                  <span className="font-body text-primary font-medium">LinkedIn</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
              </a>

              {/* Twitter */}
              <a 
                href={PERSONAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 border border-border/50 bg-surface/30 rounded-sm hover:border-gold/30 hover:bg-surface/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-5 h-5 text-gold" />
                  <span className="font-body text-primary font-medium">Twitter / X</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
              </a>

            </div>

            {/* Availability Status */}
            <div className="mt-12 inline-flex items-center gap-2">
              <span className={cn(
                "text-xs font-mono uppercase tracking-widest flex items-center gap-2",
                PERSONAL.availableForWork ? "text-green-500" : "text-amber-500"
              )}>
                <span className={cn(
                  "block w-2 h-2 rounded-full",
                  PERSONAL.availableForWork ? "bg-green-500" : "bg-amber-500"
                )} />
                {PERSONAL.availableForWork ? "Open to work" : "Currently at capacity"}
              </span>
            </div>
          </motion.div>

          {/* Right Column - Form (40%) */}
          <motion.div 
            className="w-full lg:w-[40%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-sm text-center">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Message Sent</h3>
                <p className="font-body text-secondary">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="bg-card border border-border/50 p-6 md:p-8 rounded-sm shadow-sm flex flex-col gap-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-body text-secondary">Name</label>
                  <Input 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border/50 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold rounded-sm h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-body text-secondary">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border/50 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold rounded-sm h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-body text-secondary">Inquiry Type</label>
                  <Select 
                    value={formData.projectType} 
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="bg-background border-border/50 focus:border-gold focus:ring-1 focus:ring-gold rounded-sm h-12 text-primary">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/50 rounded-sm">
                      <SelectItem value="freelance">Freelance Project</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="hello">Just saying hi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-body text-secondary">Message</label>
                  <Textarea 
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border/50 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold rounded-sm min-h-[140px] resize-y"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold text-background hover:bg-gold-light rounded-sm h-12 font-body font-medium tracking-wide transition-colors mt-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <ArrowRight className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
