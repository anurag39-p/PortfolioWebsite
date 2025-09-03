"use client";
import { useRef } from "react";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero"
import About from "@/app/components/About";
import Footer from "@/app/components/Footer"
import Contact from "./components/Contact";



export default function Page() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef=useRef(null);
  const heroRef=useRef(null);
  const contactRef= useRef(null);

  return (
    <>
      <Header
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        aboutRef={aboutRef}
        heroRef={heroRef}
        contactRef={contactRef}
      />
    
      <main>
        <section ref={heroRef}><Hero /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={experienceRef}><Experience /></section>
        <section ref={contactRef}><Contact/></section>
      </main>
      <Footer/>
    </>
  );
}
