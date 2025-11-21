import React from "react";
import { motion } from "framer-motion";
import myphoto from "../assets/beach.jpg"; // your image

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 pt-20 pb-5"
    >
      {/* LEFT SIDE — ROUND IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center"
      >
        <div className="w-96 h-96 md:w-[25rem] md:h-[25rem] rounded-full overflow-hidden shadow-soft-lg border-4 border-peach-300">
          <img
            src={myphoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE — TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-xl"
      >
        {/* TAGLINE */}
        <p className="text-sm tracking-wider text-lavender-400 font-semibold uppercase">
          Student • Full Stack Developer
        </p>

        {/* NAME */}
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-neutral-800 leading-tight">
          I’m <span className="text-peach-400">Gudipudi Durga Swathi</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-neutral-700 leading-relaxed text-base md:text-lg">
          I build MERN stack applications with elegant UI, clean structure, and pastel-themed
          interfaces. Passionate about problem-solving, development, and creating meaningful
          digital experiences.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">

          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-peach-400 text-peach-400 hover:bg-peach-300 hover:text-white transition font-medium"
          >
            View Projects
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-lavender-400 text-lavender-400 hover:bg-lavender-400 hover:text-white transition font-medium"
          >
            Contact Me
          </a>

          {/* ⭐ DOWNLOAD RESUME BUTTON */}
          <a
            href="/resume/Durga-Swathi-Resume.pdf"
            download
            className="px-6 py-3 rounded-full bg-peach-300 text-white hover:bg-peach-400 transition font-medium shadow-soft-lg"
          >
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}
