// app/projects/page.tsx
import { Metadata } from "next";
import ProjectCard from "@/components/project/ProjectCard";
import { getItchProjects } from "@/lib/getItchProjects";
import { customProjects } from "@/lib/customProjects";

export const metadata: Metadata = {
  title: "Projects | oopsvincent",
  description: "Explore projects and prototypes built by Vincent.",
};

export default async function ProjectsPage() {
  const itchProjects = await getItchProjects(
    "oopsvincent",
    process.env.ITCH_API_KEY!
  );
  const allProjects = [...customProjects, ...itchProjects];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
              ✨ Featured Work
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Projects
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of digital experiences—from interactive games to experimental prototypes, 
            each project tells a unique story of creativity and innovation.
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {allProjects.length} Projects Available
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm text-muted-foreground">
              Updated Recently
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((proj, index) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              cover_url={proj.cover_url}
              description={proj.short_text}
              url={proj.url}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-sm">More projects coming soon</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>
    </main>
  );
}
