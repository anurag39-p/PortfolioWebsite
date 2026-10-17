"use client";

import { Github } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      title: "Event-Driven E-Commerce Platform",
      description:
        "Dockerized microservices platform (User, Product, Order, Payment, Notification) with service-specific PostgreSQL and MongoDB stores. Orders are processed asynchronously with RabbitMQ and the Saga pattern, using the Transactional Outbox pattern, idempotent consumers, retries, and dead-letter queues for reliability. Secured with JWT role-based authorization and server-side price verification. Includes a React/Vite frontend with carts, checkout status polling, and order tracking.",
      tech: [
        "REACT",
        "NODE.JS",
        "EXPRESS",
        "RABBITMQ",
        "POSTGRESQL",
        "MONGODB",
        "DOCKER",
        "JEST",
      ],
      github:
        "https://github.com/anurag39-p/Event-driven-e-commerce-system-with-microservices",
    },
    {
      title: "Resume Screening App",
      description:
        "Machine learning-powered resume classifier using TF-IDF and logistic regression to predict job categories from raw resume text (PDF, DOCX, TXT). Includes text extraction, skill mining, fuzzy section detection (Experience, Education, Projects), and LSA-based summarization. The interactive Streamlit app shows the predicted job domain, top keywords, extracted skills, section summaries, and a word cloud.",
      tech: ["PYTHON", "STREAMLIT", "SCIKIT-LEARN", "NLTK", "NLP", "TF-IDF"],
      github: "https://github.com/anurag39-p/Resume-Screening-App",
    },
    {
      title: "Portfolio Website",
      description:
        "This site: a responsive, single-page developer portfolio with light/dark theming, animated section navigation, and a working contact form that delivers messages straight to my inbox through EmailJS. Deployed on Vercel.",
      tech: ["NEXT.JS", "REACT", "TAILWIND CSS", "DAISYUI", "EMAILJS"],
      github: "https://github.com/anurag39-p/PortfolioWebsite",
    },
  ];

  return (
    <div className="py-16 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Github size={18} /> Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
