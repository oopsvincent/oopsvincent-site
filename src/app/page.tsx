// app/page.tsx
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-20 pb-10">
        <Hero />

        <div className="mt-10 max-w-2xl text-gray-400">
          <p className="text-lg">
            I’m Vincent — also known as <strong>oopsvincent</strong> — a web developer and systems thinker focused on
            building meaningful digital products that elevate how people work, grow, and live.
          </p>

          <p className="mt-6 text-gray-500">
            Currently building <Link href="/rhythme" className="underline hover:text-gray-300 transition">Rhythmé</Link>,
            a platform designed to align daily habits, productivity, and inner growth.
          </p>

          <p className="mt-6 text-gray-500">
            My long-term vision is to build a creative-tech studio that merges design, technology, and human purpose — 
            creating systems that endure beyond trends.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              Learn More About Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/farhanalireza"
              className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition"
            >
              Collaborate
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 text-sm">
        &copy; 2025 OOPSVINCENT — Crafted with discipline and intent.
      </footer>
    </main>
  );
}