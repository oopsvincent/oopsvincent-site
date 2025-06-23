"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
// import { clsx } from "clsx";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className="flex justify-between px-5 md:px-20 items-center py-5 select-none">
      <div className="font-space-grotesk text-white text-xl">OV</div>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex list-none gap-5 font-inter text-white">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setNavIsOpen((prev) => !prev)}
        className="sm:hidden text-white"
      >
        <Menu size={32} />
      </motion.button>

      {/* Mobile Nav Dropdown */}
      {navIsOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-black p-5 flex flex-col gap-4 sm:hidden z-50"
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-gray-300 hover:text-white"
                onClick={() => setNavIsOpen(false)} // Close menu after click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
