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
        What I’m currently focused on. Updated: October 2025.
      </p>

      <ul className="list-disc pl-6 text-gray-500 space-y-3">
        <li>
          Building <strong>Rhythmé</strong> — a human-centered productivity and growth system that integrates habits, 
          mental clarity, and well-being into one cohesive experience.
        </li>
        <li>
          Strengthening my foundation in <strong>business strategy, finance, and leadership</strong> to prepare for future ventures and studio development.
        </li>
        <li>
          Expanding my <strong>professional network</strong> — connecting with builders, founders, and visionaries across technology and design.
        </li>
        <li>
          Refining my <strong>personal brand identity</strong> through better communication, design direction, and consistent documentation.
        </li>
        <li>
          Deepening <strong>discipline, spiritual balance, and focus</strong> — maintaining alignment between ambition and inner peace.
        </li>
      </ul>

      <p className="text-gray-500 max-w-xl mt-10">
        <span className="italic">Last note:</span> I’m in a season of quiet building — laying foundations for systems, products, and relationships that
        will sustain the next decade of my work. Less noise, more precision.
      </p>
    </main>
  );
}