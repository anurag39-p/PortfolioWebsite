import Image from "next/image";
import avatar from "/public/avatar.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const socialProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  className: "text-2xl hover:opacity-80 transition",
};

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <Image
        src={avatar}
        alt="Profile Picture"
        width={150}
        height={150}
        priority
        className="rounded-full border-4 border-white shadow-md"
      />
      <h1 className="text-4xl font-bold mt-6">
        Hi, I’m <span className="text-primary">Anurag Pawar</span>, a{" "}
        <span className="text-primary">software engineer</span> from India 👋
      </h1>
      <p className="mt-4 text-lg">
        I specialize in <span className="font-semibold">Software Development</span>, and I&apos;m
        passionate about <em>transforming ideas into impactful products</em>.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="#contact" className="btn btn-primary">
          Contact me here →
        </a>
        <a
          href="/MyResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Download CV ⬇
        </a>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <a href="https://www.linkedin.com/in/anuragpawar39/" aria-label="LinkedIn" {...socialProps}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/anurag39-p" aria-label="GitHub" {...socialProps}>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/anurag3_39/" aria-label="Instagram" {...socialProps}>
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/u/Anuragpawar/"
          aria-label="LeetCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/leetcode.png"
            alt="LeetCode"
            width={24}
            height={24}
            className="hover:opacity-80 transition"
          />
        </a>
      </div>
    </div>
  );
}
