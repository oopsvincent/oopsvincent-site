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
  const itchProjects = await getItchProjects("oopsvincent", process.env.ITCH_API_KEY!);
  const allProjects = [...customProjects, ...itchProjects];

  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">Projects</h1>
      <p className="text-muted-foreground max-w-xl mb-10">
        A growing archive of creations—games, tools, websites, experiments, and prototypes.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </main>
  );
}
