import React from "react";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";  // <-- added
import Certifications from "./components/Certifications";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Fixed navbar */}
      <Navbar />

      {/* Main content container */}
      <div className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />     {/* <-- added */}
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
