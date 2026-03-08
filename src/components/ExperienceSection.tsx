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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 flex items-baseline gap-2"
        >
          <span className="font-mono text-[10px] text-primary/40">01</span>
          <h2 className="font-display text-xl text-foreground">Previously...</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex items-center justify-between border-b border-border py-2.5 transition-colors last:border-0 hover:bg-accent/30"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-primary/30">{'>'}</span>
                <div>
                  <p className="font-body text-sm text-foreground">{exp.company}</p>
                  <p className="font-body text-xs text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
