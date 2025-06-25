"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Ghost, MapPinOff, Brain, Globe } from "lucide-react";

const quirkyMessages = [
  {
    title: "Lost in the Void.",
    subtitle: "You found a secret room… but it's empty.",
    icon: <Ghost size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "Oops, wrong timeline.",
    subtitle: "This page exists in a parallel universe.",
    icon: <Globe size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "404: Creativity Not Found",
    subtitle: "But hey, at least you're exploring.",
    icon: <Brain size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "You're off the map!",
    subtitle: "Even Google Maps can't help you here.",
    icon: <MapPinOff size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "Page? What page?",
    subtitle: "Try again, but with ✨ direction ✨.",
    icon: <Ghost size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "You broke the simulation.",
    subtitle: "Morpheus is looking for you.",
    icon: <Brain size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "CTRL + Z won’t fix this.",
    subtitle: "But going home might.",
    icon: <Ghost size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
  {
    title: "404. But make it fashion.",
    subtitle: "This page didn’t get the dress code.",
    icon: <Globe size={64} className="text-gray-400 dark:text-gray-600 mb-6" />,
  },
];

export default function UniversalNotFoundMessage() {
  const [message, setMessage] = useState(quirkyMessages[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * quirkyMessages.length);
    setMessage(quirkyMessages[random]);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center transition-colors duration-300">
      {message.icon}
      <h1 className="text-5xl md:text-6xl font-bold text-[#D45000] mb-4 font-space-grotesk">
        {message.title}
      </h1>
      <p className="text-lg md:text-xl text-foreground/80 mb-6 font-inter max-w-md">
        {message.subtitle}
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 text-base rounded-xl font-inter font-medium bg-[#D45000] text-white hover:bg-[#aa3a00] transition-colors duration-200"
      >
        Go Home
      </Link>
    </main>
  );
}
