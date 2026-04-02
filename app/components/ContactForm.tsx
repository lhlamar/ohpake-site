"use client";

import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import localFont from "next/font/local";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const paramSubject = searchParams.get("subject");
    const paramMessage = searchParams.get("message");
    if (paramSubject) setSubject(paramSubject);
    if (paramMessage) setMessage(paramMessage);
  }, [searchParams]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-[#1a1f2e] border border-[#9aaedf]/20 focus:border-[#6280c4] focus:outline-none rounded-xl px-4 py-3 text-[#e8edf8] placeholder-[#9aaedf]/40 transition-colors text-sm";
  const labelCls = `${jersey10.className} block text-sm text-[#9aaedf] mb-1.5`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-12">
        <div className="w-14 h-14 rounded-full bg-[#6280c4]/20 border border-[#6280c4]/40 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#7b96d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className={`${jersey10.className} text-2xl text-[#c4ceec]`}>Message Sent!</p>
        <p className="text-[#9aaedf] text-sm max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-[#e8edf8]">{email}</span> as soon as we can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className={`${jersey10.className} mt-2 text-sm text-[#9aaedf]/60 hover:text-[#9aaedf] transition-colors`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>Your Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Your Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelCls}>Subject</label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Booking inquiry"
          required
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind..."
          required
          rows={6}
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`${jersey10.className} text-lg self-start disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-px bg-linear-to-r from-[#6280c4] via-[#8b4eab] to-[#6280c4] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 hover:scale-105 active:scale-100 hover:shadow-lg hover:shadow-[#6280c4]/40`}
      >
        <span className={`${jersey10.className} block px-8 py-3 bg-[#0e1019] rounded-full text-[#c4ceec] hover:text-[#e8edf8] transition-colors`}>
          {status === "loading" ? "Sending…" : "Send Message"}
        </span>
      </button>
    </form>
  );
}
