"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-[#090909] to-black">
      {/* Hero Section */}
      <section className="flex flex-col justify-center px-6 md:px-20 pt-24 pb-16 min-h-[85vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Farhan / oopsvincent
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 font-inter mt-4 text-lg md:text-xl"
        >
          Web Developer · Systems Thinker · Builder of Human-Centered Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mt-6 text-gray-500 text-base md:text-lg"
        >
          Currently creating <strong>Rhythmé</strong> — a platform designed to help people align their 
          habits, mental clarity, and personal growth into one cohesive system.  
          Focused on merging design, technology, and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
        >
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
            href="/contact"
 target="_blank"
            className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition"
          >
            Collaborate
          </Link>
        </motion.div>
      </section>

      {/* Divider / Transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-6 md:mx-20"
      />

      {/* Current Focus Section */}
      <section className="px-6 md:px-20 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold text-gray-200 mb-6"
        >
          Current Focus
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="list-disc pl-6 text-gray-500 space-y-3 max-w-2xl"
        >
          <li>
            Building and refining <strong>Rhythmé</strong> — a human-centered productivity ecosystem integrating 
            discipline, reflection, and balance.
          </li>
          <li>
            Deepening my foundation in <strong>business strategy</strong>, <strong>finance</strong>, and <strong>leadership</strong> 
            to prepare for long-term ventures.
          </li>
          <li>
            Expanding my <strong>network</strong> by connecting with visionaries, developers, and founders across the globe.
          </li>
          <li>
            Documenting lessons, frameworks, and reflections for future creators and entrepreneurs.
          </li>
        </motion.ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 text-sm">
        &copy; 2025 OOPSVINCENT — Built with Purpose, Patience, and Precision.
      </footer>
    </main>
  );
}