import React from "react";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "C Language",
      org: "Techyuva",
      date: "Jul 2022 – Sep 2022",
      file: "/certificates/techyuva.jpg",
    },
    {
      title: "Complete Python Course",
      org: "Aajhub",
      date: "Feb 2025",
      file: "/certificates/python.png",
    },
    {
      title: "HTML5 - The Language",
      org: "Infosys SpringBoard",
      date: "Jan 2025",
      file: "/certificates/HTML5.jpg",
    },
    {
      title: "MongoDB Developer Toolkit",
      org: "GeeksforGeeks",
      date: "Apr 2025",
      file: "/certificates/geeks.jpg",
    },
    {
      title: "Advanced Python",
      org: "CodeChef",
      date: "Mar 2025",
      file: "/certificates/Advanced Python.jpg",
    },
    {
      title: "Golden Sachs Interview Preparation",
      org: "Unstop",
      date: "Oct 2025",
      file: "/certificates/Goldensachs.png",
    },
    {
      title: "Java Developer",
      org: "Aajhub",
      date: "Feb 2025",
      file: "/certificates/java Developer.png",
    },
    {
      title: "The Java Language",
      org: "Coursera",
      date: "Feb 2025",
      file: "/certificates/Coursera java.png",
    }
  ];

  return (
    <section
      id="certifications"
      className="px-8 pt-10 pb-20 min-h-screen"
    >
      <h2 className="text-4xl font-extrabold text-lavender-400 text-center">
        Certifications
      </h2>
      <div className="w-24 h-2 bg-peach-300 rounded-full mx-auto mt-2 mb-12"></div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-soft-lg rounded-3xl p-6 border-l-8 border-peach-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800">
                {cert.title}
              </h3>
              <p className="text-lavender-400 font-medium mt-2">{cert.org}</p>
              <p className="text-neutral-500 mt-1">{cert.date}</p>
            </div>

            {/* Button */}
            {cert.file && (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-5 py-2 bg-peach-300 text-white font-semibold rounded-full shadow-soft-lg hover:opacity-90 transition self-start"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
