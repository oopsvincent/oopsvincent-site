"use client";
import { motion } from "framer-motion";
import { Code2, Compass, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TimelineSection } from "@/components/TimelineSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Builder • Founder • Systems Thinker
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-bold tracking-tight leading-none mb-8">
            Building Systems<br />That Matter
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl tracking-tighter">
            Building a multi-product, human-centered technology ecosystem—where platforms like Rhythmé and GrooveEstrella unify under one long-term, systems-driven company vision.          </p>
        </motion.div>
      </section>

      <Separator className="my-12" />

      {/* Identity & Mission Grid */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Identity & Direction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              What drives my work, how I think about building, and where I&apos;m headed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-semibold">Who I Am</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Computer Science student turned product builder. I started with game development, moved into team leadership, and now focus on building meaningful digital systems.
                </p>
                <p>
                  My background spans interactive systems, recommendation algorithms, and user-centered design. I&apos;ve led teams, shipped products, and learned that the best software serves people first.
                </p>
              </div>
            </motion.div>

            {/* What I'm Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-semibold">What I&apos;m Building</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Rhythmé</strong> — a productivity platform designed around discipline, clarity, and sustainable personal growth. Not another task manager, but a system for aligning daily actions with long-term identity.
                </p>
                <p>
                  It integrates wellness, habit formation, and goal execution into a unified experience. Built to help people build the lives they want through consistent, intentional action.
                </p>
              </div>
            </motion.div>

            {/* How I Think */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-semibold">How I Think</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I believe in building slowly and deliberately. Quality compounds. Shortcuts don&apos;t scale. Systems outlast trends.
                </p>
                <p>
                  My approach balances technical execution with design thinking and strategic positioning. Every decision should serve both immediate functionality and long-term vision. Clean architecture. Clear value. Sustainable growth.
                </p>
              </div>
            </motion.div>

            {/* Where I'm Going */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-semibold">Where I&apos;m Going</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Expanding Rhythmé into a full creative-tech studio. Building interconnected products that address wellness, creativity, and personal systems at scale.
                </p>
                <p>
                  Long-term: establishing a company that merges exceptional design, human-centered technology, and business sustainability. Building products that last and teams that grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Timeline */}
      <div className="px-6 md:px-16 lg:px-24">
        <TimelineSection />
      </div>

      <Separator className="my-12" />

      {/* Philosophy & Principles */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Philosophy & Operating Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The beliefs that shape how I build, lead, and make decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Bias Toward Action",
                description: "Ship early. Iterate fast. Learn by building. Perfect is the enemy of shipped."
              },
              {
                icon: TrendingUp,
                title: "Compound Thinking",
                description: "Small, consistent improvements over time create exponential results. Focus on systems, not goals."
              },
              {
                icon: Users,
                title: "User-Centered Always",
                description: "Technology serves people, not the other way around. Every feature must justify its existence."
              },
              {
                icon: Target,
                title: "Clear Positioning",
                description: "Know exactly what you're building and for whom. Specificity creates clarity. Clarity drives execution."
              },
              {
                icon: Code2,
                title: "Technical Excellence",
                description: "Quality architecture enables speed. Write code that's maintainable, testable, and scalable."
              },
              {
                icon: Compass,
                title: "Long-Term Orientation",
                description: "Build for decades, not quarters. Optimize for sustainability over short-term metrics."
              }
            ].map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4">
                  <principle.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-space-grotesk font-semibold mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Leadership & Business Interest */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Leadership & Business
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building products is only part of the equation. Understanding markets, leading teams, and making strategic decisions determines whether those products create lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I&apos;m fascinated by the intersection of technology and commerce — how great products become sustainable businesses, how teams scale without losing quality, and how strategic positioning creates competitive advantages.
            </p>
            <p className="text-lg">
              My experience leading a five-person development team taught me that technical skills alone don&apos;t ship products. Clear communication, structured workflows, and the ability to make decisive calls under constraints matter just as much as clean code.
            </p>
            <p className="text-lg">
              I study business models, market dynamics, and organizational design because building a product studio requires more than engineering excellence. It requires understanding unit economics, customer acquisition, retention mechanics, and how to structure teams for sustainable growth.
            </p>
            <p className="text-lg">
              The goal isn&apos;t just to build great products — it&apos;s to build a company that consistently delivers exceptional work while growing both the business and the people within it.
            </p>
          </motion.div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* What I'm Open To */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Open To
            </h2>
            <p className="text-lg text-muted-foreground">
              Conversations and collaborations that move both parties forward.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              "Product collaborations with founders building meaningful tools",
              "Conversations with experienced builders and operators",
              "Strategic partnerships aligned with Rhythmé's vision",
              "Learning from people who've scaled products and teams"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Vision Statement */}
      <section className="px-6 md:px-16 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-2xl">
              <Target className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Building for the Long Term
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            My focus is singular: build exceptional products, cultivate strong teams, and establish systems that compound over time. Everything else is noise.
          </p>
        </motion.div>
      </section>
    </main>
  );
}