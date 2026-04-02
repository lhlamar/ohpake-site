"use client";

import { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const jersey10 = localFont({ src: "../../public/Jersey10-Regular.ttf" });

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Upcoming Shows", href: "/#shows" },
  { label: "Stream", href: "/stream" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
  { label: "Bandcamp", href: "https://ohpake.bandcamp.com/", external: true },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/oh.pake/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#0e1019]/90 backdrop-blur-md border-b border-[#9aaedf]/10">
      <div className="max-w-7xl flex items-center justify-between mx-auto px-6 py-4 sm:px-10">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className={`${jersey10.className} text-4xl text-[#9aaedf] hover:text-[#c4ceec] transition-colors`}>
            OH.PAKE!
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <span className="spin-border relative inline-flex items-center justify-center overflow-hidden rounded-full p-px hover:scale-105 active:scale-100 transition duration-300 hover:shadow-lg hover:shadow-[#6280c4]/40">
                <Link
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${jersey10.className} relative z-10 px-4 py-1.5 text-lg text-[#c4ceec] bg-[#0e1019] rounded-full whitespace-nowrap`}
                >
                  {link.label}
                </Link>
              </span>
            </li>
          ))}

          {/* Social icon buttons */}
          <li className="flex items-center gap-2 ml-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full text-[#9aaedf] hover:text-[#c4ceec] hover:bg-[#6280c4]/15 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 rounded-lg text-[#9aaedf] hover:bg-[#6280c4]/15 focus:outline-none focus:ring-2 focus:ring-[#6280c4]"
        >
          <span className="sr-only">Open menu</span>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#9aaedf]/10 bg-[#0e1019]/95 backdrop-blur-md"
        >
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${jersey10.className} block py-3 px-3 text-2xl text-[#c4ceec] rounded-lg hover:bg-[#6280c4]/15 hover:text-[#e8edf8] transition-colors`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Social links in mobile */}
            <li className="flex gap-4 pt-4 px-3 border-t border-[#9aaedf]/10 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#9aaedf] hover:text-[#c4ceec] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
