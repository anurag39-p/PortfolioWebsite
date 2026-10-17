"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-gray-200 dark:border-gray-700 py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-3">
          <a href="https://github.com/anurag39-p" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/anuragpawar39/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/anurag3_39/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <FaInstagram size={22} />
          </a>
          <a href="https://leetcode.com/u/Anuragpawar/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Image
              src="/leetcode.png"
              alt="LeetCode"
              width={22}
              height={22}
            />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm mb-2">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Anurag Pawar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
