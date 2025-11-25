"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 pb-20 min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Name & Identity */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-space-grotesk font-bold tracking-tight leading-none bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
              Farhan Ali Reza
            </h1>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold tracking-tight leading-none mb-3 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
              AKA oopsvincent
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-space-grotesk">
              Building disciplined technology for meaningful human progress.
            </p>
          </div>

          {/* Role & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl tracking-tighter">
              Founder building <strong className="text-foreground">Rhythmé</strong>, a productivity platform designed around discipline, clarity, and long-term personal growth. Working toward a creative-tech studio focused on human-centered digital systems.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all"
            >
              About & Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/now"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              What I&apos;m Doing Now
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              Connect
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-border to-transparent"
          />
        </motion.div>
      </section>

      {/* What I'm Building */}
      <section className="px-6 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Current Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Building Rhythmé
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A discipline-first productivity platform that integrates habit formation, mental wellness, and goal execution into a unified system. Designed for people building meaningful lives through consistent, intentional action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Discipline-Centered",
                description: "Built around sustainable habits and long-term commitment, not quick fixes or productivity theater."
              },
              {
                title: "Wellness-Integrated",
                description: "Combines productivity with mental clarity, physical health, and emotional balance for holistic growth."
              },
              {
                title: "Systems-Driven",
                description: "Focuses on building resilient personal systems that compound over time, not chasing daily metrics."
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-space-grotesk font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              Read more about the vision
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="px-6 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Right Now
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Where My Focus Is
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Product Development",
                items: [
                  "Building and refining Rhythmé's core features and user experience",
                  "Designing architecture for scalable, maintainable systems",
                  "Testing with early users to validate product-market fit"
                ]
              },
              {
                title: "Strategic Growth",
                items: [
                  "Deepening understanding of business models and market dynamics",
                  "Studying leadership, finance, and organizational design",
                  "Building foundation for sustainable, bootstrapped company growth"
                ]
              },
              {
                title: "Network & Learning",
                items: [
                  "Connecting with founders, developers, and operators",
                  "Learning from people who've scaled products and teams",
                  "Building relationships with creators focused on meaningful impact"
                ]
              },
              {
                title: "Documentation & Knowledge",
                items: [
                  "Documenting lessons learned from building and leading",
                  "Sharing frameworks and insights for other builders",
                  "Creating resources that help future founders avoid common mistakes"
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-space-grotesk font-semibold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              href="/now"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              See detailed /now page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Open To Collaboration */}
      <section className="px-6 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Open to Collaboration
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Interested in connecting with founders, builders, and operators working on meaningful products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            {[
              "Product collaborations aligned with Rhythmé's mission",
              "Conversations with experienced builders and leaders",
              "Strategic partnerships in wellness and productivity space",
              "Learning opportunities from people who've scaled companies"
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-foreground/90 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Farhan — Building with discipline, clarity, and purpose.
          </div>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/now"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Now
            </Link>
            <Link
              href="/connect"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}