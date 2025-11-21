import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lavender-200 mt-20 py-10 text-center text-neutral-700">

      {/* Peach top border */}
      <div className="w-full h-2 bg-peach-300 mb-8"></div>

      {/* Name */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-neutral-800"
      >
        Gudipudi Durga Swathi
      </motion.h3>

      {/* Icon Row */}
      <div className="flex justify-center gap-8 mt-6">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/durga-swathi-gudipudi-aa6b09255"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-peach-400 text-3xl"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/GudipudiSwathi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-peach-400 text-3xl"
        >
          <FaGithub />
        </a>

        {/* Email (NOT clickable, only hover color) */}
        <span className="text-neutral-700 hover:text-peach-400 text-3xl cursor-default">
          <FaEnvelope />
        </span>

        {/* Phone (NOT clickable, only hover color) */}
        <span className="text-neutral-700 hover:text-peach-400 text-3xl cursor-default">
          <FaPhone />
        </span>
      </div>

      {/* Contact details below icons */}
      <div className="mt-6 text-neutral-700 space-y-1">
        <p className="hover:text-peach-400 transition cursor-default">
          Email: gudipudi.durgaswathi@gmail.com
        </p>
        <p className="hover:text-peach-400 transition cursor-default">
          Phone: +91 8919250684
        </p>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-neutral-600">
        © {new Date().getFullYear()} Gudipudi Durga Swathi. All rights reserved.
      </p>
    </footer>
  );
}
