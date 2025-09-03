"use client";

import { Code2, Layers, Wrench } from "lucide-react";

export default function Skills({ reference }) {
  return (
    <section
      id="skills"
      ref={reference}
      className="py-20 bg-base-200 animate-fade-in min-h-[60vh] px-6"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-base-100 rounded-xl shadow hover:bg-base-300 transition">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <Code2 className="w-5 h-5" /> Languages
          </div>
          <ul className="list-disc list-inside text-sm leading-6">
            <li>Python, C, Java</li>
            <li>SQL (MySQL)</li>
            <li>HTML5/CSS3,JavaScript (ES6+)</li>
            <li>Apex,Salesforce</li>
          </ul>
        </div>

        <div className="p-6 bg-base-100 rounded-xl shadow hover:bg-base-300 transition">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <Layers className="w-5 h-5" /> Frameworks & Libraries
          </div>
          <ul className="list-disc list-inside text-sm leading-6">
            <li>Tailwind,Bootstrap, React.js,Next.js, NodeJs,ExpressJs</li>
            <li>Flask, Django, FastAPI</li>
            <li>pandas, NumPy, Matplotlib,scikit-learn</li>
            <li>NLP,Deep learning</li>
          </ul>
        </div>

        <div className="p-6 bg-base-100 rounded-xl shadow hover:bg-base-300 transition">
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <Wrench className="w-5 h-5" /> Developer Tools
          </div>
          <ul className="list-disc list-inside text-sm leading-6">
            <li>VS Code, IntelliJ, MATLAB</li>
            <li>Git, GitHub</li>
            <li>LaTeX, MS Office</li>
          </ul>
        </div>
      </div>
    </section>
  );
}