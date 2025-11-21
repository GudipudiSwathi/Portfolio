import React from "react";
import { motion } from "framer-motion";
import myphoto from "../assets/beach.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 pt-4 pb-20 py-20"
    >
      {/* LEFT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-soft-lg border-4 border-peach-300">
          <img
            src={myphoto}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT — TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 max-w-xl"
      >
        <h2 className="text-4xl font-extrabold text-lavender-400">
          About Me
        </h2>
        <div className="w-24 h-2 bg-peach-300 rounded-full mt-2 mb-6"></div>

        <p className="text-neutral-700 leading-relaxed text-lg">
          Hello! I’m <span className="font-semibold text-peach-400">Gudipudi Durga Swathi</span>, 
          a passionate Computer Science Engineering student and an aspiring Full Stack 
          Developer with a strong interest in creating beautiful, responsive, and 
          user-friendly applications.
        </p>

        <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
          I enjoy working with the MERN stack, modern UI frameworks, databases, and 
          creative pastel-themed designs. My goal is to build clean, elegant, and 
          high-quality digital experiences that truly make an impact.
        </p>

        <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
          I believe in continuous learning, teamwork, and problem-solving. 
          With every project, I strive to grow as a developer and create 
          something meaningful.
        </p>
      </motion.div>
    </section>
  );
}
