import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-soft-lg px-8 py-4 flex justify-between items-center">
      
      {/* LEFT SIDE — Portfolio Title */}
      <div className="text-2xl font-bold text-lavender-400 tracking-wide">
        My Portfolio
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-neutral-700 font-medium">

        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer hover:text-peach-400"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-40}
          className="cursor-pointer hover:text-peach-400"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-40}
          className="cursor-pointer hover:text-peach-400"
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={10}
          className="cursor-pointer hover:text-peach-400"
        >
          Projects
        </Link>

        <Link
          to="internships"
          smooth={true}
          duration={500}
          offset={-20}
          className="cursor-pointer hover:text-peach-400"
        >
          Internships
        </Link>

        <Link
          to="certifications"
          smooth={true}
          duration={500}
          offset={-30}
          className="cursor-pointer hover:text-peach-400"
        >
          Certifications
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-30}
          className="cursor-pointer hover:text-peach-400"
        >
          Contact
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">

          <Link to="hero" smooth duration={500} offset={-50} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="about" smooth duration={500} offset={-70} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link to="skills" smooth duration={500} offset={-120} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Skills
          </Link>

          <Link to="projects" smooth duration={500} offset={-90} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Projects
          </Link>

          <Link to="internships" smooth duration={500} offset={-110} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Internships
          </Link>

          <Link to="certifications" smooth duration={500} offset={-140} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Certifications
          </Link>

          <Link to="contact" smooth duration={500} offset={-100} className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}
