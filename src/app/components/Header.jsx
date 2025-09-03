'use client'
import { useEffect, useState, useRef } from 'react';

export default function Header({aboutRef, skillsRef, projectsRef, experienceRef,contactRef }) {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const indicatorRef = useRef(null);

  const sections = [
    { id: "home", label: "Home", ref: { current: { offsetTop: 0 } } },
    { id: "about", label: "About", ref: aboutRef},
    { id: "projects", label: "Projects", ref: projectsRef },
    { id: "skills", label: "Skills", ref: skillsRef },
    { id: "experience", label: "Experience", ref: experienceRef },
    { id: "contact", label: "Contact", ref :contactRef },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].ref?.current && scrollY >= sections[i].ref.current.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectsRef, skillsRef, experienceRef]);

  const scrollToSection = (ref, sectionId) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const moveIndicator = (el) => {
    if (indicatorRef.current && el) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  };

  useEffect(() => {
    const activeEl = document.querySelector(`[data-id="${activeSection}"]`);
    if (activeEl) moveIndicator(activeEl);
  }, [activeSection]);

  return (
<div
  className="
    navbar rounded-full max-w-5xl mx-auto mt-4 shadow-md px-6 py-2 sticky top-4 z-50
    transition-all duration-300
    bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200
    dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
  "
>

      {/* Logo Left */}
      <div className="flex-none">
  <a
    className="btn btn-ghost text-xl font-bold"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection("home");
    }}
  >
    {/* SVG Logo */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className="w-8 h-8"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        A
      </text>
    </svg>
  </a>
</div>


      {/* Center Nav Links */}
      <div className="flex-1 flex justify-center relative">
        <ul className="flex space-x-6 relative">
          {/* Highlight Indicator */}
          <div
            ref={indicatorRef}
className={`absolute bottom-0 h-8 rounded-full shadow-md transition-all duration-300 ease-in-out 
  ${theme === "light" ? "bg-indicatorLight" : "bg-indicatorDark"}`}

            style={{ zIndex: -1 }}
          ></div>

          {sections.map((sec) => (
            <li key={sec.id}>
              {sec.ref ? (
                <button
                  data-id={sec.id}
                  onClick={() => scrollToSection(sec.ref, sec.id)}
                  className={`px-3 py-1 transition ${
                    activeSection === sec.id 
                      ? "font-bold text-black dark:text-white" 
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {sec.label}
                </button>
              ) : (
                <a
                  data-id={sec.id}
                  href={sec.href}
                  className={`px-3 py-1 transition ${
                    activeSection === sec.id 
                      ? "font-bold text-black dark:text-white" 
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {sec.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Button Right */}
      <div className="flex-none">
        <button
          className="btn btn-sm btn-circle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}