"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Twitter, Github, Linkedin, MessageSquare, Calendar, FileText, ExternalLink, Clock } from "lucide-react";

export default function ConnectPage() {
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
              Connect
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold tracking-tight leading-none mb-8">
            Let&apos;s Build<br />Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl tracking-tighter">
            Open to conversations with founders, builders, and operators who value long-term thinking, disciplined execution, and meaningful impact.
          </p>
        </motion.div>
      </section>

      {/* What I'm Looking For */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
              What I&apos;m Open To
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I&apos;m selective about where I invest time and energy. Here&apos;s what I&apos;m actively interested in.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Product Collaborations",
                description: "Working with founders building tools in productivity, wellness, or personal systems. Especially interested in projects with clear vision and disciplined execution.",
                status: "High Priority"
              },
              {
                title: "Strategic Conversations",
                description: "Discussions about business models, market positioning, product strategy, or scaling challenges. Learning from people who've built and grown companies.",
                status: "Always Open"
              },
              {
                title: "Technical Partnerships",
                description: "Collaborating on complex technical problems, architecture decisions, or engineering challenges that require systems thinking.",
                status: "Case by Case"
              },
              {
                title: "Advisory & Mentorship",
                description: "Connecting with experienced operators who can provide guidance on company building, leadership, or product development.",
                status: "Actively Seeking"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-space-grotesk font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Ways to Reach Me */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4 tracking-tighter">
              Best Ways to Reach Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl tracking-tighter">
              Choose the channel that works best for your message type.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Email",
                subtitle: "For detailed proposals",
                description: "Best for in-depth discussions, partnership proposals, or anything requiring context.",
                link: "mailto:farhan44@duck.com",
                linkText: "farhan44@duck.com",
                recommended: true,
                responseTime: "24-48 hours"
              },
              {
                icon: Calendar,
                title: "Schedule a Call",
                subtitle: "For focused conversations",
                description: "Book time for strategy discussions, product feedback, or collaborative brainstorming.",
                link: "https://cal.com/oopsvincent",
                linkText: "Schedule on Cal.com",
                recommended: false,
                responseTime: "Same week"
              },
              {
                icon: Twitter,
                title: "Twitter/X",
                subtitle: "For quick exchanges",
                description: "Public discussions, quick questions, or sharing interesting ideas worth discussing.",
                link: "https://twitter.com/oopsvincent",
                linkText: "@oopsvincent",
                recommended: false,
                responseTime: "Variable"
              }
            ].map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors relative"
              >
                {method.recommended && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Recommended
                  </div>
                )}
                
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <method.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-space-grotesk font-semibold mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.subtitle}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <div className="space-y-3">
                  <Link
                    href={method.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {method.linkText}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Response time: {method.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4 tracking-tighter">
              Find Me Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl tracking-tighter">
              Follow my work, see what I&apos;m building, and stay updated on new projects.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Twitter,
                platform: "Twitter/X",
                handle: "@oopsvincent",
                description: "Thoughts on building, product, and strategy",
                link: "https://twitter.com/oopsvincent"
              },
              {
                icon: Github,
                platform: "GitHub",
                handle: "oopsvincent",
                description: "Open source work and technical projects",
                link: "https://github.com/oopsvincent"
              },
              {
                icon: Linkedin,
                platform: "LinkedIn",
                handle: "Farhan Ali Reza",
                description: "Professional network and company updates",
                link: "https://linkedin.com/in/farhanalireza"
              },
              {
                icon: FileText,
                platform: "Blog/Newsletter",
                handle: "Coming Soon",
                description: "Long-form writing on building and growth",
                link: "#",
                disabled: true
              }
            ].map((social, idx) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  className={`block border border-border rounded-xl p-5 hover:border-primary/50 transition-all group ${
                    social.disabled ? 'opacity-50 pointer-events-none' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-space-grotesk font-semibold text-sm">
                        {social.platform}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {social.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before You Reach Out */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-border rounded-2xl p-8 md:p-12 bg-muted/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold">
                Before You Reach Out
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I respond to every thoughtful message, but I&apos;m most excited about conversations that:
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Show you've read my work or understand what I'm building",
                "Have a clear ask or specific topic for discussion",
                "Demonstrate long-term thinking and genuine interest",
                "Come from a place of mutual value exchange"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-muted-foreground italic">
              Not interested in: Generic outreach, cold sales pitches, requests without context, or anything that doesn&apos;t align with building meaningful, long-term work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Send me an email or schedule a call. Looking forward to hearing what you&apos;re building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:farhan44@duck.com"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-foreground/90 transition-all"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Link>
            <Link
              href="https://cal.com/oopsvincent"
              target="_blank"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium text-lg hover:bg-muted transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule Call
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Farhan — Building with discipline, clarity, and purpose.
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
              href="/now"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Now
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}