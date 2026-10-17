"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Sending..." });

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      console.error(error?.text || error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later or email me directly.",
      });
    }
  };

  const sending = status.type === "sending";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-5xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="mb-8 text-center">
        Please contact me directly at{" "}
        <a href="mailto:anuragpawar024@gmail.com" className="link link-primary">
          anuragpawar024@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-8 rounded-xl shadow-lg border border-base-300 bg-base-100"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="textarea textarea-bordered w-full mb-6"
          required
        />

        <button type="submit" disabled={sending} className="btn btn-primary w-full">
          {sending ? "SENDING..." : "SUBMIT"}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-center text-sm min-h-5 ${
            status.type === "success"
              ? "text-success"
              : status.type === "error"
              ? "text-error"
              : ""
          }`}
        >
          {status.type !== "sending" ? status.message : ""}
        </p>
      </form>
    </div>
  );
}
