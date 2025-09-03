"use client";

import { Github } from "lucide-react";

export default function Projects({ reference }) {
  const projectList = [
    {
      title: "Real Estate Price Prediction",
      description:
        "Built a Bangalore-based real estate price prediction model using machine learning techniques such as linear regression and K-Fold cross-validation. The project involved extensive data cleaning with NumPy and Pandas, visualizing market trends using Matplotlib, and implementing predictive models with Scikit-Learn.",
      tech: ["PYTHON", "NUMPY", "PANDAS", "MATPLOTLIB", "SCIKIT-LEARN"],
      github: "https://github.com/anurag39-p/Predicting-Home-Prices-in-Banglore-",
    },
    {
      title: "To-Do List App",
      description:
        "Full-stack task management app with React.js on the frontend and Express.js with MySQL on the backend. Users can add, edit, delete, and mark tasks as complete, with timestamps ensuring accurate tracking.",
      tech: ["REACT", "EXPRESS", "MYSQL", "NODEJS"],
      github: "https://github.com/anurag39-p/To-Do-App-using-React-and-Express",
    },
    {
      title: "Resume Screening App",
      description:
        "Machine learning-powered resume classifier using TF-IDF and logistic regression to predict job categories. Built an interactive Streamlit app to display predictions, keyword analysis, and skills extraction.",
      tech: ["PYTHON", "TF-IDF", "LOGISTIC REGRESSION", "STREAMLIT"],
      github: "https://github.com/anurag39-p/Resume-Screening-App",
    },
    {
      title: "Online Marketplace",
      description:
        "E-commerce marketplace built with Django and SQLite3. Features include authentication, product listing management, and category-based browsing.",
      tech: ["DJANGO", "SQLITE3", "HTML", "CSS"],
      github: "https://github.com/anurag39-p/Online_Market_Place_django",
    },
  ];

  return (
    <section ref={reference} className="py-16 bg-base-100 text-base-content">
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
    </section>
  );
}
