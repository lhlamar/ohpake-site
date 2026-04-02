import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import ContactForm from "../components/ContactForm";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

export const metadata: Metadata = {
  title: "Contact – Ohpake",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0e1019] text-[#e8edf8] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-px bg-[#6280c4]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#6280c4]">Contact</span>
          </div>
          <h1 className={`${jersey10.className} text-5xl sm:text-6xl text-[#c4ceec]`}>Get In Touch</h1>
          <p className="text-[#9aaedf] text-base leading-relaxed mt-2 text-center">
            Reach out for booking, questios, or whatever else! We make charity read all the emails, so send lots.
          </p>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        <div className="border-t border-[#9aaedf]/10 pt-8 flex flex-col gap-2">
          <p className={`${jersey10.className} text-[#9aaedf]/50 text-xs tracking-widest uppercase`}>
            Or email directly
          </p>
          <a
            href="mailto:contact@ohpake.com"
            className="text-[#7b96d4] hover:text-[#9aaedf] transition-colors text-sm"
          >
            contact@ohpake.com
          </a>
        </div>

      </div>
    </main>
  );
}
