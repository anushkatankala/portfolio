import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2025",
    description: "Worked on building scalable microservices and improved API response times by 40%.",
  },
  {
    role: "Teaching Assistant",
    company: "University CS Department",
    period: "2024 – Present",
    description: "Assisted in teaching data structures and algorithms to 200+ students.",
  },
  {
    role: "Research Assistant",
    company: "Lab Name",
    period: "2024",
    description: "Contributed to research on machine learning applications in healthcare.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-display text-4xl text-foreground">Experience</h2>
          <div className="mb-12 h-px w-12 bg-foreground/30" />
        </motion.div>

        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10 pl-8"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-foreground/30 bg-background" />

              <p className="mb-1 font-body text-xs uppercase tracking-widest text-muted-foreground">
                {exp.period}
              </p>
              <h3 className="font-display text-xl text-foreground">{exp.role}</h3>
              <p className="mb-2 font-body text-sm text-muted-foreground">{exp.company}</p>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
