import Image from 'next/image';
import avatar from '/public/avatar.png'; // replace with your correct image path
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram,  } from "react-icons/fa6";

export default function Hero({reference}) {
  return (
    <section className=" flex flex-col items-center justify-center text-center py-20">
      <Image
        src={avatar}
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full border-4 border-white shadow-md"
      />
      <h1 className="text-4xl font-bold mt-6">
        Hi, I’m <span className="text-primary">Anurag Pawar</span>, a <span className="text-primary">software engineer</span> from India 👋
      </h1>
      <p className="mt-4 text-lg">
        I specialize in <span className="font-semibold">Software Development</span>, and I'm passionate about <em>transforming ideas into impactful products</em>.
      </p>
      <div className="flex gap-4 mt-6">
        <button className="btn btn-primary" href="#contact">Contact me here →</button>
<a href="/MyResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
  Download CV ⬇
</a>
      </div>
      <div className="flex gap-4 mt-4">
        <a href="https://www.linkedin.com/in/anuragpawar39/" className="text-2xl"><FaLinkedin /></a>
        <a href="https://github.com/anurag39-p" className="text-2xl"><FaGithub /></a>
        <a href="#" className="text-2xl"><FaXTwitter /></a>
        <a href="https://www.instagram.com/anurag3_39/" className="text-2xl"><FaInstagram /></a>
        <a
          href="https://leetcode.com/u/Anuragpawar/"
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
    </section>
  );
}
