"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Sparkles, TrendingUp, Users, BookOpen, Target, Brain, Zap } from "lucide-react";

export default function NowPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              What I&apos;m Doing Now
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold tracking-tight leading-none mb-8">
            Current<br />Focus
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <p className="text-lg">
              Last updated: <span className="text-foreground font-medium">November 2025</span>
            </p>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mt-6">
            A snapshot of where my time, energy, and attention are going right now. This page follows the <Link href="https://nownownow.com/about" target="_blank" className="underline hover:text-foreground transition-colors">/now page movement</Link> — keeping myself accountable and others informed.
          </p>
        </motion.div>
      </section>

      {/* Primary Focus */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Primary Focus
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Building Rhythmé
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border rounded-2xl p-8 md:p-10 bg-muted/30 mb-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              All core energy is directed toward <strong className="text-foreground">Rhythmé</strong> — my productivity and personal growth platform. This isn&apos;t a side project; it&apos;s the foundation of everything I&apos;m building toward.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-space-grotesk font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Product Development
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Refining core UX/UI for habit tracking and goal systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Building wellness integration features (mood, energy, focus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Testing with early users and incorporating feedback loops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Architecting for scalability and long-term maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-space-grotesk font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Current Sprint Goals
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Launch private beta with 20 selected users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Complete onboarding flow and first-run experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Establish feedback collection and iteration process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Document product decisions and technical architecture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-foreground not-italic">Why this matters:</strong> Rhythmé represents my transition from developer to founder. Every decision is a lesson in product thinking, user psychology, and business strategy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              Learn more about Rhythmé&apos;s vision
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Learning & Development
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Building Business Foundations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Technical skills got me here. Business understanding will determine how far I go. Investing heavily in learning beyond code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Business Strategy",
                areas: [
                  "Market positioning and competitive analysis",
                  "Unit economics and pricing strategies",
                  "Go-to-market planning for SaaS products",
                  "Business model design and validation"
                ]
              },
              {
                icon: Users,
                title: "Leadership & Management",
                areas: [
                  "Team building and organizational design",
                  "Decision-making frameworks for founders",
                  "Communication and stakeholder management",
                  "Building culture in early-stage companies"
                ]
              },
              {
                icon: Brain,
                title: "Product & Growth",
                areas: [
                  "User psychology and behavioral design",
                  "Retention mechanics and engagement loops",
                  "Product-led growth strategies",
                  "Data-driven iteration and experimentation"
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-space-grotesk font-semibold mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.areas.map((area, areaIdx) => (
                    <li key={areaIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{area}</span>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 border border-border rounded-xl p-6 bg-muted/20"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Current resources:</strong> Reading case studies from successful founders, studying financial statements of public companies, analyzing product teardowns, and connecting with operators who&apos;ve scaled businesses. Learning by doing, but also learning from those who&apos;ve already done it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network & Relationships */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Network Building
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Expanding Strategic Relationships
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Building a network of high-caliber people who share similar values: long-term thinking, disciplined execution, and meaningful impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-border rounded-xl p-8"
            >
              <h3 className="text-xl font-space-grotesk font-semibold mb-4">
                Who I&apos;m Connecting With
              </h3>
              <ul className="space-y-3">
                {[
                  "Technical founders building in productivity/wellness space",
                  "Experienced operators who've scaled 0→1 products",
                  "Design-focused builders who prioritize craft",
                  "Strategic thinkers interested in long-term company building"
                ].map((person, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{person}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-border rounded-xl p-8"
            >
              <h3 className="text-xl font-space-grotesk font-semibold mb-4">
                How I&apos;m Building Relationships
              </h3>
              <ul className="space-y-3">
                {[
                  "Regular conversations with founders at similar stage",
                  "Attending focused events and small-group gatherings",
                  "Sharing learnings and being generous with knowledge",
                  "Following up consistently and maintaining real connections"
                ].map((method, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              Interested in connecting? See how
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personal Development */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-5 h-5" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Personal Systems
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Maintaining Balance & Clarity
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Building sustainably requires personal discipline. Can&apos;t build systems for others if my own foundation is unstable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Daily Practices",
                items: [
                  "Morning routine: planning, reflection, intention-setting",
                  "Regular exercise and movement throughout the day",
                  "Evening reviews to track progress and adjust course",
                  "Consistent sleep schedule (non-negotiable 7-8 hours)"
                ]
              },
              {
                title: "Mental & Spiritual",
                items: [
                  "Meditation and mindfulness practice for clarity",
                  "Journaling to process thoughts and make better decisions",
                  "Reading and studying philosophy, spirituality, wisdom",
                  "Creating space for rest, reflection, and creative thinking"
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-space-grotesk font-semibold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 border border-border rounded-xl p-6 bg-muted/20"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Philosophy:</strong> Ambition without balance leads to burnout. Discipline without rest leads to brittleness. Building Rhythmé taught me that sustainable productivity requires integration of mind, body, and purpose. Practicing what I&apos;m building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Mindset */}
      <section className="px-6 md:px-16 lg:px-24 py-32 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-border rounded-2xl p-10 md:p-14 bg-muted/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold">
                Current Mindset
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m in a <strong className="text-foreground">season of quiet building</strong>. No grand announcements. No premature celebration. Just focused, disciplined execution toward a clear vision.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Building foundations that will support the next decade: product systems, business understanding, strategic relationships, and personal discipline. This phase isn&apos;t glamorous, but it&apos;s essential.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed font-medium italic">
              Less noise. More precision. Building something that lasts.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                This page follows the <Link href="https://nownownow.com/about" target="_blank" className="underline hover:text-foreground transition-colors">/now page movement</Link>
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: <span className="text-foreground font-medium">November 2025</span>
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/connect"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Farhan — Building with discipline, clarity, and purpose.
          </div>
        </div>
      </footer>
    </main>
  );
}