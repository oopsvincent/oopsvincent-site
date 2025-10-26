// app/page.tsx
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-20 pb-10">
       <Hero />

        <div className="mt-10 max-w-2xl text-gray-400">
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Building Systems That Outlast Trends.
          </h1>

          <p className="text-lg text-gray-400 mb-6">
            I’m Farhan — also known as <strong>oopsvincent</strong> — a web developer, systems designer, 
            and student of Computer Science & Technology. I’m deeply focused on creating digital products that 
            help people grow — not just productively, but personally.
          </p>

          <p className="text-gray-500 mb-6">
            Currently, I’m developing <Link href="/rhythme" className="underline hover:text-gray-300 transition">
              Rhythmé
            </Link>, a human-centered productivity and well-being platform designed to align daily discipline, 
            focus, and personal transformation.
          </p>

          <p className="text-gray-500 mb-6">
            My long-term vision is to evolve this work into a creative-tech studio that merges technology, 
            design, and human purpose — building experiences that endure beyond algorithms, hype, and noise.
          </p>

          <p className="text-gray-500 mb-8">
            Alongside product development, I’m learning the architecture of business, finance, and leadership — 
            building the mindset and network for the next decade of creation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              About
            </Link>
            <Link
              href="/now"
              className="border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              Now
            </Link>
            <Link
              href="https://www.linkedin.com/in/farhanalireza/"
 target="_blank"
              className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition"
            >
              Collaborate
            </Link>
          </div>
        </div>

        {/* Optional Current Focus Section */}
        <div className="mt-20 border-t border-gray-800 pt-10 max-w-2xl text-gray-400">
          <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
          <ul className="list-disc pl-6 text-gray-500 space-y-2">
            <li>Developing and refining the <strong>Rhythmé</strong> ecosystem.</li>
            <li>Strengthening leadership and business acumen for future ventures.</li>
            <li>Documenting my process, principles, and growth across disciplines.</li>
            <li>Building long-term collaborations and networks that align with purpose.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 text-sm">
        &copy; 2025 OOPSVINCENT — Built with purpose, patience, and precision.
      </footer>
    </main>
  );
}