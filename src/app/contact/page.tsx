"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 md:px-20 py-16">
      <section className="flex flex-col justify-center min-h-[80vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-space-grotesk font-black tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Let’s Build Something Meaningful
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-500 mt-6 max-w-2xl text-base md:text-lg"
        >
          I’m always open to conversations about product design, business strategy,
          leadership, and purposeful technology. If you believe in long-term vision,
          human-centered innovation, and disciplined creativity — we’re already aligned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 space-y-4 text-gray-400"
        >
          <div className="flex items-center gap-3">
            <Mail size={18} />
            <Link
              href="mailto vincentadambrown@gmail.com"
              className="hover:text-white transition"
            >
              E-mail
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin size={18} />
            <Link
              href="https://linkedin.com/in/farhanalireza"
              target="_blank"
              className="hover:text-white transition"
            >
              linkedin.com/in/farhanalireza
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Twitter size={18} />
            <Link
              href="https://twitter.com/oopsvincent"
              target="_blank"
              className="hover:text-white transition"
            >
              twitter.com/oopsvincent
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Github size={18} />
            <Link
              href="https://github.com/oopsvincent"
              target="_blank"
              className="hover:text-white transition"
            >
              github.com/oopsvincent
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 text-sm">
        &copy; 2025 OOPSVINCENT — Built with Purpose, Patience, and Precision.
      </footer>
    </main>
  );
}