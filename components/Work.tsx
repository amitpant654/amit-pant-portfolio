"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "4", label: "Years in Product" },
  { value: "15+", label: "Features Launched" },
  { value: "B2B · B2C", label: "Domains" },
  { value: "User-First", label: "Approach" },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-warm-sand">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-warm-amber uppercase tracking-widest text-xs font-semibold mb-4"
        >
          What I Do
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-text mb-6 leading-tight">
              Building products<br />people love to use.
            </h2>
            <p className="text-warm-muted text-lg leading-relaxed">
              I&apos;m a Product Manager with 4 years of experience, currently at
              Infosys where I&apos;ve shipped 15+ features that achieved a ~35%
              vendor activation improvement on a global vendor platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-warm-surface rounded-2xl p-6 border border-warm-sand hover:border-warm-amber transition-colors"
              >
                <p className="font-playfair text-2xl font-bold text-warm-cta mb-1">
                  {item.value}
                </p>
                <p className="text-warm-muted text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
