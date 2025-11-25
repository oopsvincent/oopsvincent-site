import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectsOverview } from "@/data/projects";

const projects = projectsOverview;



export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <div className="max-w-6xl">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Selected Work
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold tracking-tight leading-none mb-8">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            A curated selection of products and systems I&apos;ve built. Each project represents lessons in product thinking, technical execution, and strategic decision-making.
          </p>
        </div>
      </section>

      {/* Featured Project - Full Width */}
      {featuredProjects.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 pb-20 border-t border-border pt-20">
          <div className="max-w-6xl">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Current Focus
              </span>
            </div>
            
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                  {/* Featured Project Header */}
                  <div className="p-8 md:p-12 bg-muted/30">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {project.logoImage && (
                          <div className="w-16 h-16 rounded-xl border border-border bg-background flex items-center justify-center p-3">
                            <Image
                              src={project.logoImage}
                              alt={`${project.title} logo`}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h2>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                              {project.status === "in-progress" && "In Development"}
                              {project.status === "shipped" && "Shipped"}
                              {project.status === "archived" && "Archived"}
                            </span>
                          </div>
                          {project.tagline && (
                            <p className="text-muted-foreground text-lg">
                              {project.tagline}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-[2fr,1fr] gap-8 mb-8">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.summary}
                        </p>
                        
                        {project.role && (
                          <div className="flex items-start gap-3 text-sm">
                            <span className="text-muted-foreground">Role:</span>
                            <span className="font-medium">{project.role}</span>
                          </div>
                        )}
                      </div>

                      {project.techStack && project.techStack.length > 0 && (
                        <div>
                          <div className="text-sm text-muted-foreground mb-3">
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                      View case study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
          <div className="max-w-6xl">
            <div className="mb-12">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Previous Work
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
                Past Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Earlier work that helped build the foundation for where I am today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group border border-border rounded-xl p-8 hover:border-primary/50 transition-all bg-muted/20"
                >
                  <div className="flex items-start gap-4 mb-6">
                    {project.logoImage && (
                      <div className="w-12 h-12 rounded-lg border border-border bg-background flex items-center justify-center p-2 flex-shrink-0">
                        <Image
                          src={project.logoImage}
                          alt={`${project.title} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-xl font-space-grotesk font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.year && (
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        )}
                      </div>
                      {project.tagline && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {project.role && (
                    <div className="text-xs text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">{project.role}</span>
                    </div>
                  )}

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md border border-border bg-background text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 text-xs text-muted-foreground">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Read case study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="border border-border rounded-2xl p-10 md:p-14 bg-muted/30">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Project Philosophy
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I don&apos;t build to pad a portfolio. Every project here represents a genuine attempt to solve a real problem or learn something specific about product development, systems architecture, or user behavior.
              </p>
              
              <p className="text-lg">
                <strong className="text-foreground">Quality over quantity.</strong> I&apos;d rather ship one exceptional product than ten mediocre ones. Each project gets the time and attention it deserves—proper planning, thoughtful execution, and honest evaluation of outcomes.
              </p>
              
              <p className="text-lg">
                <strong className="text-foreground">Learning in public.</strong> These case studies document not just what I built, but what I learned, what failed, and what I&apos;d do differently. Real growth comes from honest reflection, not curated success stories.
              </p>
              
              <p className="text-lg font-medium text-foreground">
                The goal isn&apos;t to impress—it&apos;s to demonstrate capability, judgment, and trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            What&apos;s Next
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Currently focused on building Rhythmé to product-market fit. Future projects will emerge from user needs and strategic opportunities, not a desire to build for building&apos;s sake.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              Learn about my approach
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all"
            >
              Discuss a project
              <ArrowRight className="w-4 h-4" />
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