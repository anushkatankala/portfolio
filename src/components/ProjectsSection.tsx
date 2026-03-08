import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Alpha",
    description: "Full-stack web app for collaborative workflows.",
    tags: ["React", "Node.js", "WebSocket"],
    year: "2025",
  },
  {
    title: "Data Viz Tool",
    description: "Interactive dashboard for complex datasets.",
    tags: ["D3.js", "Python", "Flask"],
    year: "2024",
  },
  {
    title: "ML Pipeline",
    description: "End-to-end ML pipeline for text classification.",
    tags: ["PyTorch", "FastAPI"],
    year: "2024",
  },
  {
    title: "Mobile App",
    description: "Minimal habit tracker with local-first storage.",
    tags: ["React Native", "SQLite"],
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 flex items-baseline gap-2"
        >
          <span className="font-mono text-[10px] text-primary/40">02</span>
          <h2 className="font-display text-xl text-foreground">Projects</h2>
        </motion.div>

        <div className="grid gap-2 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group cursor-pointer rounded-sm border border-border bg-card p-3 transition-all hover:border-primary/30"
            >
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className="font-body text-sm font-medium text-foreground">{project.title}</h3>
                <span className="font-mono text-[9px] text-muted-foreground">{project.year}</span>
              </div>
              <p className="mb-2 font-body text-xs font-light text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-accent px-1.5 py-0.5 font-mono text-[9px] text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
