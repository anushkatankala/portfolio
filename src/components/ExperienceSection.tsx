import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2025",
    description: "Worked on building scalable microservices and improved API response times by 40%. Collaborated with cross-functional teams to ship features.",
  },
  {
    role: "Teaching Assistant",
    company: "University CS Department",
    period: "2024 – Present",
    description: "Assisted in teaching data structures and algorithms to 200+ students. Held weekly office hours and graded assignments.",
  },
  {
    role: "Research Assistant",
    company: "Lab Name",
    period: "2024",
    description: "Contributed to research on machine learning applications in healthcare. Built data pipelines and ran experiments.",
  },
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
          Experience
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
                  <p className="font-body text-sm text-foreground">{exp.company}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[9px] text-primary/50">{exp.period}</p>
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
                      {exp.description}
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
