import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Competiton Bureau Canada",
    role: "Data Engineering Intern",
    period: "May 2025 - August 2025",
    description: [
      "- Engineered a full-stack data visualization platform using AWS Amplify, React, and Typescript", 
      "- Integrated an agentic chatbot using Amazon Bedrock to support real-time insights within the platform", 
      "- Developed a data ETL pipeline with AWS Glue and Python (Pandas, Numpy) to automate data processing and analysis"
    ]
  },
  {
    company: "Ignition Hacks 2026",
    role: "Sponsorship Executive",
    period: "Feb 2026 - Present",
    description: ["hi", "hello", "how are you"]
  },
  {
    company: "Carleton South Asian Association",
    role: "VP External",
    period: "March 2026 - Present",
    description: ["hi", "hello", "how are you"]
  },
  {
    company: "Carleton Science Student Success Centre",
    role: "First Year Representative",
    period: "Oct 2024 - April 2025",
    description: [
      "- Communicated student concerns and feedback between first-year students and council leadership", 
      "- Helped organize events and outreach initiatives to increase student participation", 
      "- Collaborated with executives, strengthening leadership and communication skills"
    ]
  }
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-5">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-display text-lg text-foreground"
        >
          Experiences
        </motion.h2>

        <div className="space-y-0 border-l border-primary/15 pl-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-2 text-left transition-colors hover:bg-accent/30"
              >
                <div>
                  <p className="font-body text-[15px] text-foreground">{exp.role}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[10px] text-primary/60">{exp.period}</p>
                  <ChevronDown
                    size={12}
                    className={`text-primary/40 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-2 font-body text-xs font-light leading-relaxed text-muted-foreground">
                      {exp.description.map((desc, j) => (
                        <p key={j} className="font-body text-xs font-light leading-relaxed text-muted-foreground">{desc}</p>
                      ))}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
