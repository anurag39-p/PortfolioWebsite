"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header({
  heroRef,
  aboutRef,
  projectsRef,
  skillsRef,
  experienceRef,
  contactRef,
}) {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef = useRef(null);
  const listRef = useRef(null);

  const refMap = {
    home: heroRef,
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  // Pick up the theme already applied by the inline script in layout.js
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable (private mode) - theme just won't persist */
    }
  };

  // Scroll spy: highlight the section currently in the middle of the viewport
  useEffect(() => {
    const order = [
      ["home", heroRef],
      ["about", aboutRef],
      ["projects", projectsRef],
      ["skills", skillsRef],
      ["experience", experienceRef],
      ["contact", contactRef],
    ];

    const handleScroll = () => {
      const probe = window.scrollY + window.innerHeight / 2;
      let current = "home";
      for (const [id, ref] of order) {
        const el = ref.current;
        if (el && probe >= el.getBoundingClientRect().top + window.scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef, aboutRef, projectsRef, skillsRef, experienceRef, contactRef]);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      refMap[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Slide the highlight pill under the active link (also on resize)
  const moveIndicator = useCallback(() => {
    const indicator = indicatorRef.current;
    const el = listRef.current?.querySelector(`[data-id="${activeSection}"]`);
    if (!indicator || !el) return;
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
  }, [activeSection]);

  useEffect(() => {
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [moveIndicator]);

  const linkClass = (id) =>
    `px-3 py-1 transition ${
      activeSection === id
        ? "font-bold text-black dark:text-white"
        : "text-gray-600 dark:text-gray-300"
    }`;

  return (
    <header className="sticky top-4 z-50 max-w-5xl mx-auto mt-4 px-4">
      <div
        className="
          navbar rounded-full shadow-md px-4 sm:px-6 py-2
          bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
          transition-all duration-300
        "
      >
        {/* Logo */}
        <div className="flex-none">
          <button
            type="button"
            aria-label="Back to top"
            className="btn btn-ghost text-xl font-bold px-2"
            onClick={() => scrollToSection("home")}
          >
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
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="flex-1 hidden md:flex justify-center" aria-label="Main">
          <ul ref={listRef} className="relative isolate flex space-x-6">
            <div
              ref={indicatorRef}
              aria-hidden="true"
              className="absolute inset-y-0 -z-10 rounded-full shadow-md bg-white/70 dark:bg-white/15 transition-all duration-300 ease-in-out"
            />
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  data-id={id}
                  onClick={() => scrollToSection(id)}
                  className={linkClass(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex-1 md:flex-none flex justify-end items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="btn btn-sm btn-circle"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="btn btn-sm btn-circle btn-ghost md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden mt-2 rounded-3xl shadow-lg p-3 bg-base-100 text-base-content border border-base-300"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-4 py-2 rounded-xl transition ${
                    activeSection === id
                      ? "font-bold bg-base-200 text-primary"
                      : "hover:bg-base-200"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
