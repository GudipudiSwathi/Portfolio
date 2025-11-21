import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    { name: "Python", level: "85%" },
    { name: "Java", level: "75%" },
    { name: "HTML & CSS", level: "90%" },
    { name: "MERN Stack", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "SQL / DBMS", level: "85%" },
    { name: "Microsoft Office", level: "95%" },
    { name: "C Language", level: "70%" },
  ];

  const softSkills = [
    "Teamwork",
    "Adaptability",
    "Decision Making",
    "Critical Thinking",
    "Empathy",
  ];

  return (
    <section
      id="skills"
      className="px-8 pt-10 pb-20 min-h-screen"
    >
      <h2 className="text-4xl font-extrabold text-lavender-400 text-center">
        Skills
      </h2>
      <div className="w-24 h-2 bg-peach-300 rounded-full mx-auto mt-2 mb-12"></div>

      {/* Technical Skills 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-neutral-800 font-semibold">
                {skill.name}
              </span>
              <span className="text-peach-400 font-semibold">
                {skill.level}
              </span>
            </div>

            <div className="w-full h-3 bg-lavender-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full"
                style={{ backgroundColor: "#C8A2C8" }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="max-w-4xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
          Soft Skills
        </h3>

        <div className="flex flex-wrap gap-6 text-neutral-700 text-lg">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="px-4 py-2 rounded-full border-l-4 border-peach-300 bg-white shadow-soft-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
