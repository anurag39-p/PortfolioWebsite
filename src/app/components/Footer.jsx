"use client";
import React from "react";
import Link from "next/link";
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
          <a href="https://leetcode.com/Anuragpawar/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Image
              src="/leetcode.png"
              alt="LeetCode"
              width={22}
              height={22}
            />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-4 text-sm mb-2">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#projects" scroll={false} className="hover:underline">Projects</Link>
          <Link href="#skills" scroll={false} className="hover:underline">Skills</Link>
          <Link href="#experience" scroll={false} className="hover:underline">Experience</Link>
          <Link href="#contact" scroll={false} className="hover:underline">Contact</Link>
        </div>

       

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Anurag Pawar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
