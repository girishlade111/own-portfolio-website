"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (!hasVisited) {
        setShowLoader(true);
        sessionStorage.setItem("hasVisited", "true");

        const timer = setTimeout(() => {
          setShowLoader(false);
        }, 1800);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Session storage access failed:", error);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex items-center justify-center font-display font-light text-gold text-5xl md:text-7xl overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              G.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              L.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
