"use client";
import { useRef } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Page() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      <main>
        <section id="home" ref={heroRef}>
          <Hero />
        </section>
        <section id="about" ref={aboutRef} className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" ref={projectsRef} className="scroll-mt-24">
          <Projects />
        </section>
        <section id="skills" ref={skillsRef} className="scroll-mt-24">
          <Skills />
        </section>
        <section id="experience" ref={experienceRef} className="scroll-mt-24">
          <Experience />
        </section>
        <section id="contact" ref={contactRef} className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
