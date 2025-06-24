"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeSwitch";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-5 md:px-20 py-5 select-none">
      {/* Logo */}
      <div className="font-space-grotesk text-xl text-foreground">
        <Link href="/">OV</Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center gap-6 font-inter">
        <ul className="flex list-none gap-5 text-sm">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Theme Toggle on Desktop */}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setNavIsOpen((prev) => !prev)}
        className="sm:hidden text-foreground z-50"
        aria-label="Toggle mobile menu"
      >
        <Menu size={28} />
      </motion.button>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {navIsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-background border-t border-border px-5 py-6 flex flex-col gap-5 sm:hidden z-40"
          >
            <ul className="flex flex-col gap-3 text-base font-inter">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition"
                    onClick={() => setNavIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Theme Toggle on Mobile */}
            <div className="pt-2 border-t border-border">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
