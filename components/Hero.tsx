"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-[80vh]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tight leading-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
          Vincent / oopsvincent
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gray-400 font-inter mt-4 text-lg md:text-xl"
      >
        Web Developer · Systems Thinker · Builder of Meaningful Products
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-2xl mt-6 text-gray-500 text-base md:text-lg"
      >
        Focused on building <strong>Rhythmé</strong> — a platform aligning productivity, 
        mental clarity, and human growth. Bridging design, technology, and purpose.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="flex gap-4 mt-8"
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
                        href="https://www.linkedin.com/in/farhanalireza/"
 target="_blank"
          className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition"
        >
          Collaborate
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;