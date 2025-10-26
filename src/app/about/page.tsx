// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | oopsvincent",
  description:
    "Vincent (aka oopsvincent) — web developer, product thinker, and creator of Rhythmé. Exploring the intersection of design, technology, and human growth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">About Me</h1>

      <p className="text-gray-400 max-w-2xl mb-6">
        <strong>Farhan</strong> — also known online as <strong>oopsvincent</strong> — is my professional alias and creative identity.
        It represents the intersection of experimentation, design, and personal philosophy that drives my work.
      </p>

      <p className="text-gray-500 max-w-2xl mb-6">
        I am a web developer and student of Computer Science & Technology with a growing interest in building digital products that
        actually help people — not just functionally, but personally.
      </p>

      <p className="text-gray-500 max-w-2xl mb-6">
        Over the past year, I have led and contributed to several projects that taught me more than just code. 
        In my previous semester, I led a small team to develop a music recommender web app from scratch — no APIs, just logic, user feedback, and a great deal of learning by doing.
      </p>

      <p className="text-gray-500 max-w-2xl mb-6">
        I have also explored game development in the past. While that passion remains alive, I have temporarily shifted focus toward building
        systems for meaningful productivity and holistic growth.
      </p>

      <p className="text-gray-500 max-w-2xl mb-6">
        Currently, I am creating <strong>Rhythmé</strong> — a product designed to help people align daily habits, mental well-being,
        and personal growth into one cohesive system. It is part application, part philosophy, and reflects where I am heading as a builder and a person.
      </p>

      <p className="text-gray-500 max-w-2xl mb-10">
        My long-term vision is to evolve this into a creative-tech studio that merges product design, wellness, and human-centered innovation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Timeline</h2>
      <div className="border-l border-gray-700 pl-6 max-w-2xl mb-10 space-y-6">
        <div>
          <h3 className="font-medium text-gray-300">2023 — First Steps in Game Development</h3>
          <p className="text-gray-500 text-sm">
            Built my first game <em>“Flappee Bird”</em> in Unity, learning the fundamentals of physics, logic, and player feedback.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-300">2024 — Academic Projects & Leadership</h3>
          <p className="text-gray-500 text-sm">
            Led a five-member team to develop a music recommender web app without APIs. Gained experience in collaboration,
            data collection, and project management.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-300">2025 — Building Rhythmé</h3>
          <p className="text-gray-500 text-sm">
            Began developing <strong>Rhythmé</strong>, a productivity and well-being ecosystem designed around discipline, growth, and human-centered design.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-300">Future — Creative-Tech Studio</h3>
          <p className="text-gray-500 text-sm">
            Planning to scale Rhythmé into a global creative-tech studio that crafts meaningful digital experiences combining 
            design, wellness, and purposeful innovation.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
      <ul className="list-disc list-inside text-gray-500 max-w-2xl mb-10">
        <li>Clean, purposeful design</li>
        <li>Systems that last longer than trends</li>
        <li>Building slowly, intentionally, and with heart</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Open To</h2>
      <ul className="list-disc list-inside text-gray-500 max-w-2xl">
        <li>Collaborating on digital products or ideas</li>
        <li>Connecting with developers, creatives, and founders</li>
        <li>Learning from those who have built things that matter</li>
      </ul>
    </main>
  );
}