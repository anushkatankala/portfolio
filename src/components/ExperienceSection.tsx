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
    <section className="px-6 py-8">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-2xl text-foreground"
        >
          Previously...
        </motion.h2>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent/50"
            >
              <div>
                <p className="font-body text-sm font-medium text-foreground">{exp.company}</p>
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
