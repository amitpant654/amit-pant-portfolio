"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-warm-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-warm-amber uppercase tracking-widest text-xs font-semibold mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl font-bold text-warm-text mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              className="group bg-warm-surface border border-warm-sand rounded-2xl p-5 hover:border-warm-amber hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-warm-sand text-warm-muted px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-warm-text mb-2 group-hover:text-warm-cta transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="text-warm-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1.5 text-warm-cta text-sm font-semibold hover:text-warm-brown transition-colors"
              >
                View Prototype <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
