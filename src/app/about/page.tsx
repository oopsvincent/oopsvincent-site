// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | oopsvincent",
  description: "Learn about Vincent—his journey, mindset, and mission.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">About Me</h1>
      <p className="text-gray-400 max-w-2xl mb-6">
        I’m Vincent—a game developer, web craftsman, and traveler at heart.
        <br />
        This site is my digital garden: a space to share what I build, learn, and love.
      </p>
      <p className="text-gray-500 max-w-2xl">
        I started my journey blending code and creativity, learning how pixels and poetry collide to form immersive worlds. 
        I believe in building slowly, deeply, and authentically—with purpose over hype.
      </p>
    </main>
  );
}
