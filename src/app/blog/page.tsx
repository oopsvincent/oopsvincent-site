// app/blog/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | oopsvincent",
  description: "Read thoughts, insights, and development stories from Vincent.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">Blog</h1>
      <p className="text-gray-400 max-w-xl mb-10">
        Here you’ll find reflections, tutorials, devlogs, and explorations—documenting a journey of building games and growing as a creator.
      </p>

      {/* Placeholder for future blog posts */}
      <div className="text-sm text-gray-600">No blog posts yet. Stay tuned.</div>
    </main>
  );
}
