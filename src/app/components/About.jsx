"use client";
import React from "react";

export default function About({ reference }) {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-16 scroll-mt-20"
    >
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

      {/* Brief Intro */}
      <div className="mb-12 text-lg text-center leading-relaxed">
        <p>
          Hi, I’m <span className="font-semibold">Anurag Pawar</span> — a
          passionate software engineer from India.  
          I specialize in building scalable applications and love turning
          ideas into impactful products.  
          Apart from coding, I enjoy exploring new technologies across several domains, reading books and sharing my
          knowledge with others.
        </p>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
        <div className="bg-white/5 dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-4">
          <div>
            <p className="font-semibold">
              Shri Govindram Seksaria Institute of Technology and Science, Indore
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bachelor of Technology in Electrical Engineering — 7.44 CGPA
            </p>
            <p className="" >July 2019- June-2023</p>
            <p className="mt-2">
              My college journey exposed me to a wide range of fields including electronics, electrical machines, IoT, embedded systems, and control systems. Over time, I developed a deep interest in coding and software development, complementing my core electrical engineering skills.
            </p>
          </div>

          {/* Major Project */}
          <div className="p-4 bg-white/10 dark:bg-gray-700 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold mb-2">
              📑 Major Project: Improved Power Quality Based AC-DC Converter
            </h4>
            <p>
              Designed and implemented an AC-DC converter aimed at enhancing power quality by minimizing harmonic distortion and improving efficiency. The system integrates advanced control strategies for better performance under variable loads, contributing to improved reliability in power electronics applications. I developed MATLAB simulink model and then a prototype of the converter.
            </p>
            <a
              href="/thesis.pdf" // Replace with your actual thesis file path
              target="_blank"
              className="inline-block mt-3 px-4 py-2 bg-cyan-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              📄 View Thesis
            </a>
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">🎯 Hobbies</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="p-4 bg-white/5 dark:bg-gray-800 rounded-lg shadow-md">
            📚 Reading tech blogs & books
          </li>
          <li className="p-4 bg-white/5 dark:bg-gray-800 rounded-lg shadow-md">
            🏏 Playing cricket
          </li>
          <li className="p-4 bg-white/5 dark:bg-gray-800 rounded-lg shadow-md">
            🎵 Listening to music
          </li>
          <li className="p-4 bg-white/5 dark:bg-gray-800 rounded-lg shadow-md">
            🌍 Traveling & exploring new cultures
          </li>
        </ul>
      </div>
    </section>
  );
}
