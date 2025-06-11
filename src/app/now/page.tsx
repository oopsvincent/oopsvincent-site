// app/now/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | oopsvincent",
  description: "What Vincent is focused on right now — updated regularly.",
};

export default function NowPage() {
  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">Now</h1>
      <p className="text-gray-400 max-w-xl mb-6 italic">
        This page tells you what I’m currently focused on. Updated: June 2025.
      </p>

      <ul className="list-disc pl-6 text-gray-500 space-y-2">
        <li>Building my second indie game project in Unity</li>
        <li>Writing blog posts on game development and self-growth</li>
        <li>Setting up my first personal workspace soon</li>
        <li>Studying design systems and animation pipelines</li>
        <li>Practicing spiritual alignment and focus</li>
      </ul>
    </main>
  );
}
