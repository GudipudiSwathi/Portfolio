import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Employee Attendance Management System",
      description:
        "A modern attendance tracking system featuring secure login, employee profiles, attendance dashboard, and admin view.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://employeeattendancemanagement.netlify.app/",
    },
    {
      id: 2,
      title: "Password Generator",
      description:
        "A customizable password generator with sliders, strength indicator, copy-to-clipboard, and randomization logic.",
      tech: ["React", "JavaScript", "UI Design"],
      link: "https://instant-passwordgenerator.netlify.app/",
    },
    {
      id: 3,
      title: "Smart AI Tic-Tac-Toe Game",
      description:
        "An interactive Tic-Tac-Toe game powered by a smart AI opponent with dynamic UI animations and instant feedback.",
      tech: ["React", "JavaScript", "Game Logic"],
      link: "https://smartai-tic-tac-toe-game.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="mb-10 px-8 py-20 ">
      <h2 className="text-4xl font-extrabold text-lavender-400 text-center">
        Projects
      </h2>
    <div className="w-24 h-2 bg-peach-300 rounded-full mx-auto mt-2 mb-12"></div>


      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="card-soft bg-white/70"
          >
            <h3 className="text-xl font-semibold text-lavender-400">
              {p.title}
            </h3>

            <p className="mt-2 text-neutral-700 text-sm leading-relaxed">
              {p.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-lavender-200 text-xs text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block px-4 py-2 rounded-full bg-peach-300 text-white text-sm hover:shadow-md transition"
            >
              Visit Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
