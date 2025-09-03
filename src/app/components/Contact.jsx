"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({reference}) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vryb7yi", // Replace
        "template_yh13eil", // Replace
        formRef.current,
        "WexxrDjihv5IgOwqW" // Replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center  px-4"
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-sky-900 mb-8">Contact Me</h2>
<p>Please contact me directly at anuragpawar024@gmail.com or through this form.</p>
      {/* Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-8 rounded-xl shadow-lg border border-gray-200 "
      >
        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition transform hover:scale-105"
        >
          SUBMIT 
        </button>
      </form>
    </section>
  );
}
