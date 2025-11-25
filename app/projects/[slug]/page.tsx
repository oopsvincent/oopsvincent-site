"use client";
import { notFound, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, User, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const path = usePathname();
  const slug = path.split("/").pop();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="px-6 md:px-16 lg:px-24 pt-17 pb-5 border-b border-border">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-12">
        <div className="max-w-5xl">
          {/* Logo + Title */}
          <div className="flex items-start gap-6 mb-8">
            {project.logoImage && (
              <div className="w-20 h-20 rounded-2xl border-2 border-border bg-background flex items-center justify-center p-4 flex-shrink-0">
                <Image
                  src={project.logoImage}
                  alt={`${project.title} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-bold tracking-tight leading-none mb-4">
                {project.title}
              </h1>
              {project.tagline && (
                <p className="text-xl md:text-2xl text-muted-foreground">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Meta Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {project.status && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Status
                  </div>
                  <div className="font-medium capitalize">
                    {project.status === "in-progress" && "In Development"}
                    {project.status === "shipped" && "Shipped"}
                    {project.status === "archived" && "Archived"}
                  </div>
                </div>
              </div>
            )}

            {project.year && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Year
                  </div>
                  <div className="font-medium">{project.year}</div>
                </div>
              </div>
            )}

            {project.role && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Role
                  </div>
                  <div className="font-medium">{project.role}</div>
                </div>
              </div>
            )}

            {project.techStack && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Tech Stack
                  </div>
                  <div className="font-medium">
                    {project.techStack.length} technologies
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-primary/50 transition-colors font-medium text-sm"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Summary Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 border-y border-border bg-muted/30">
        <div className="max-w-5xl">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Tech Stack Sidebar */}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg border border-border bg-background text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      {project.sections && project.sections.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 py-20">
          <div className="max-w-4xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
                Case Study
              </h2>
              <p className="text-lg text-muted-foreground">
                Deep dive into the thinking, decisions, and lessons behind this
                project.
              </p>
            </div>

            <div className="space-y-16">
              {project.sections.map((section, index) => (
                <article key={section.heading} className="relative">
                  {/* Section Number */}
                  <div className="absolute -left-12 top-0 hidden lg:block">
                    <span className="text-5xl font-space-grotesk font-bold text-muted-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Section Content */}
                  <div className="lg:pl-8">
                    <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-4 lg:mb-6">
                      {section.heading}
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      {section.body.split("\n").map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border bg-muted/30">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Key Takeaways
          </h2>
          <div className="space-y-4">
            {[
              "Building a product solo requires ruthless prioritization and clear phase planning",
              "Technical architecture decisions compound—investing in quality early pays dividends later",
              "User psychology matters more than feature count—understanding behavior beats adding complexity",
              "Sustainable products require sustainable processes—no shortcuts, no burnout",
            ].map((takeaway, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 border border-border rounded-xl bg-background"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <p className="text-lg text-foreground">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps / CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Interested in This Work?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            If you&apos;re working on similar problems or want to discuss this
            project in depth, let&apos;s connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Your Name — Building with discipline, clarity, and purpose.
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
