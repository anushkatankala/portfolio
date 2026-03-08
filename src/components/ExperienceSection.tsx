import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2025",
  },
  {
    role: "Teaching Assistant",
    company: "University CS Department",
    period: "2024 – Present",
  },
  {
    role: "Research Assistant",
    company: "Lab Name",
    period: "2024",
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-display text-xl text-foreground"
        >
          Previously...
        </motion.h2>

        <div className="space-y-1.5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-between border-b border-border py-2.5 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-foreground">{exp.company}</p>
                <p className="font-body text-xs text-muted-foreground">{exp.role}</p>
              </div>
              <p className="font-body text-xs text-muted-foreground">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
