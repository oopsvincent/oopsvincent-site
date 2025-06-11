// app/projects/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | oopsvincent",
  description: "Explore projects and prototypes built by Vincent.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">Projects</h1>
      <p className="text-gray-400 max-w-xl mb-10">
        A growing archive of creations—games, tools, websites, experiments, and prototypes.
      </p>

      {/* Placeholder for future projects */}
      <div className="text-sm text-gray-600">Projects will be listed here soon.</div>
    </main>
  );
}
