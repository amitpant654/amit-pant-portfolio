"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
  {
    institution: "Welingkar Institute of Management",
    degree: "PGDM, Research and Business Analytics",
    period: "2020 – 2022",
    grade: "9.03 / 10",
    achievements: [
      "Won 'The Financial' — Financial research and writing competition at NMIMS Mumbai. Investigated the low participation of Indians in capital markets.",
      "Won the Finance & Analytics case study at Sardar Patel Institute of Technology. Formulated risk management strategies for a manufacturer.",
      "Runner-up at Arti-culation — Article Writing Competition at IIM Lucknow. Designed a sustainable supermarket for the lower-income group in India.",
      "Won the Article of the Month contest at IIM Rohtak.",
      "National Finalist at SJMSOM-IIT Bombay for developing a Go-To-Market strategy for a digital stethoscope — 'AyuSynk'.",
      "National Finalist in Ad-Sense, IIM Calcutta. Rounds involved quiz, producing an Ad, and presenting the business strategy.",
      "National Finalist in Prod-It-Friendly at MICA. Rounds involved quizzes, presentations, and a boardroom simulation.",
      "Won 2nd position for Article of the Month contest at KJ Somaiya Institute of Management.",
    ],
  },
  {
    institution: "Symbiosis School of Economics",
    degree: "Bachelor of Science, Economics",
    period: "2015 – 2018",
    grade: null,
    achievements: ["Student Council Member, 2016 – 2017"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-warm-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-warm-amber uppercase tracking-widest text-xs font-semibold mb-4"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl font-bold text-warm-text mb-12"
        >
          Academic Background
        </motion.h2>

        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-warm-surface border border-warm-sand rounded-2xl p-7 hover:border-warm-amber transition-colors"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-warm-sand rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap size={18} className="text-warm-cta" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-bold text-warm-text leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-warm-muted text-sm mt-0.5">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-xs text-warm-muted">{edu.period}</span>
                    {edu.grade && (
                      <>
                        <span className="text-warm-sand">·</span>
                        <span className="text-xs font-semibold text-warm-cta bg-warm-sand px-2 py-0.5 rounded-full">
                          Grade: {edu.grade}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <ul className="flex flex-col gap-2.5 pl-14">
                  {edu.achievements.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-warm-muted leading-relaxed">
                      <Trophy size={13} className="text-warm-amber shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
