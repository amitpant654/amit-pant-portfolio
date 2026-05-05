"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";

const contactItems = [
  {
    icon: Mail,
    label: "amitpant239@gmail.com",
    href: "mailto:amitpant239@gmail.com",
    ariaLabel: "Send email",
  },
  {
    icon: Phone,
    label: "+91 7517296691",
    href: "tel:+917517296691",
    ariaLabel: "Call phone number",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    href: "https://wa.me/917517296691",
    ariaLabel: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amit-pant-/",
    ariaLabel: "LinkedIn profile",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-warm-sand">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-warm-amber uppercase tracking-widest text-xs font-semibold mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl font-bold text-warm-text mb-12"
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <p className="text-warm-muted text-lg mb-8 leading-relaxed">
            Open to new opportunities, collaborations, and interesting
            conversations. Reach out through any of the channels below.
          </p>

          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.ariaLabel}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 text-warm-text hover:text-warm-amber transition-colors group"
              >
                <div className="w-10 h-10 bg-warm-surface rounded-full flex items-center justify-center border border-warm-sand group-hover:border-warm-amber group-hover:bg-warm-amber/10 transition-colors shrink-0">
                  <item.icon size={16} className="text-warm-cta" />
                </div>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
