"use client";

import { motion } from "framer-motion";

export default function FuturisticSidePanel() {
  return (
    <aside className="hidden lg:block relative">
      <div className="sticky top-24">
        <div className="relative w-full aspect-[4/5] max-h-[520px] rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background/90 to-muted/40 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.45)]">
          {/* Soft gradient blobs */}
          <motion.div
            className="absolute -top-16 -right-10 h-48 w-48 bg-primary/25 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 h-56 w-56 bg-accent/20 blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: "easeInOut",
            }}
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-6 rounded-2xl border border-border/40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Center “system node” */}
          <motion.div
            className="absolute inset-12 rounded-2xl border border-border/60 bg-background/60 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Inner orb */}
            <motion.div
              className="absolute inset-10 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border/60"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            {/* Small floating nodes */}
            <motion.div
              className="absolute top-6 left-8 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror" as const,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(244,114,182,0.8)]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror" as const,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70"
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />

            {/* Text / label area */}
            <div className="absolute inset-x-8 bottom-8 text-xs text-muted-foreground space-y-2">
              <p className="uppercase tracking-[0.2em] text-[10px] text-muted-foreground/70">
                SYSTEM SNAPSHOT
              </p>
              <p className="text-sm text-foreground/80">
                Designing disciplined, human-centered systems for long-term
                growth.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-[11px]">
                <span className="px-2 py-1 rounded-full border border-border/70">
                  Structure
                </span>
                <span className="px-2 py-1 rounded-full border border-border/70">
                  Discipline
                </span>
                <span className="px-2 py-1 rounded-full border border-border/70">
                  Product Thinking
                </span>
              </div>
            </div>
          </motion.div>

          {/* Soft vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </div>
      </div>
    </aside>
  );
}
