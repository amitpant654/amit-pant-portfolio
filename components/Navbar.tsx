"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-surface/95 backdrop-blur-sm shadow-sm border-b border-warm-sand"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="font-playfair text-xl font-bold text-warm-cta"
        >
          AP
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-warm-muted hover:text-warm-text transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/amit-pant-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/amitpant654"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1KAXJD_nzs-TiT-MSzkSn5EH9TncZByQw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-cta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-warm-brown transition-colors"
          >
            Resume →
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-warm-text"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-warm-surface border-t border-warm-sand px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.href); }}
              className="text-warm-text font-medium py-1 border-b border-warm-sand/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/amit-pant-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-warm-muted"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1KAXJD_nzs-TiT-MSzkSn5EH9TncZByQw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-cta text-white font-semibold px-4 py-2.5 rounded-full text-center hover:bg-warm-brown transition-colors"
          >
            Resume →
          </a>
        </div>
      )}
    </header>
  );
}
