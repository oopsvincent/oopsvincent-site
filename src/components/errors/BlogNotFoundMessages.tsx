"use client";

import Link from "next/link";
import { ArrowLeftIcon, FileX2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const randomMessages = [
  {
    title: "404: Blog Void",
    subtitle: "You ventured deep into the archives… but nothing lives here.",
  },
  {
    title: "Missing Entry",
    subtitle: "This page took a break from reality. Try another one?",
  },
  {
    title: "This blog self-destructed.",
    subtitle: "Only memories remain. Choose another tale.",
  },
  {
    title: "Entry not found.",
    subtitle: "Or maybe… it was never written at all.",
  },
  {
    title: "Here lies nothing.",
    subtitle: "That blog post you seek has vanished into the abyss.",
  },
];

export default function BlogNotFoundMessage() {
  const [message, setMessage] = useState(randomMessages[0]);

  useEffect(() => {
    const pick = Math.floor(Math.random() * randomMessages.length);
    setMessage(randomMessages[pick]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <FileX2Icon size={64} className="text-gray-400 dark:text-gray-600 mb-6" />

      <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-[#D45000] mb-4">
        {message.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-base md:text-lg">
        {message.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D45000] hover:bg-[#aa3a00] transition-colors"
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Blog
        </Link>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
