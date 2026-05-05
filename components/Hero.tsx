"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ChevronDown } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-warm-bg"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #B45309 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#F5EAD8_0%,transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-warm-amber uppercase tracking-[0.3em] text-xs font-semibold mb-5"
        >
          Product Manager
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]"
          style={{
            background: "linear-gradient(135deg, #B45309 0%, #78604A 45%, #D97706 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Amit Pant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-warm-muted text-lg md:text-xl italic max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Turning user insights into products that matter — one sprint at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-warm-amber text-warm-amber font-semibold px-7 py-3 rounded-full hover:bg-warm-amber hover:text-white transition-all"
          >
            View My Work ↓
          </a>
          <a
            href="https://drive.google.com/file/d/1KAXJD_nzs-TiT-MSzkSn5EH9TncZByQw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-cta text-white font-semibold px-7 py-3 rounded-full hover:bg-warm-brown transition-colors shadow-md shadow-warm-cta/20"
          >
            Resume →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/amit-pant-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:amitpant239@gmail.com"
            aria-label="Email"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/917517296691"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <Phone size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-warm-muted/60"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
