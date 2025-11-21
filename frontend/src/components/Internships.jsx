import React from "react";
import { motion } from "framer-motion";

export default function Internships() {

  const internships = [
    {
      title: "Front-End Development Intern",
      company: "Micro IIT",
      duration: "Mar 2025 – Apr 2025",
      description:
        "Worked on developing responsive user interfaces, improving UI performance, and building interactive components using modern frontend technologies.",
    },
    {
      title: "Web Full Stack Developer Intern",
      company: "EduSkills Academy",
      duration: "Jan 2025 – Mar 2025",
      description:
        "Built full-stack web applications using the MERN stack, collaborated on API integration, and contributed to both frontend and backend development.",
    },
    {
      title: "AI & ML Intern",
      company: "APSSDC & Edunet Foundation",
      duration: "May 2024 – Jun 2024",
      description:
        "Gained hands-on experience in machine learning algorithms, dataset preprocessing, and developing basic AI-driven applications.",
    },
  ];

  return (
    <section id="internships" className="px-8 py-20 min-h-screen">
      
      <h2 className="text-4xl font-extrabold text-lavender-400 text-center">
        Internships
      </h2>
      <div className="w-24 h-2 bg-peach-300 rounded-full mx-auto mt-2 mb-12"></div>

      <div className="max-w-5xl mx-auto space-y-12">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* LEFT SIDE — TITLE + COMPANY + DATE */}
            <div>
              <p className="text-peach-400 font-semibold text-lg">
                {item.duration}
              </p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-1">
                {item.title}
              </h3>
              <p className="text-lavender-400 font-medium mt-1">
                {item.company}
              </p>
            </div>

            {/* RIGHT SIDE — DESCRIPTION */}
            <p className="text-neutral-700 leading-relaxed text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
