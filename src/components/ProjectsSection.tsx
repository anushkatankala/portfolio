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
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 font-display text-xl text-foreground"
        >
          Projects
        </motion.h2>

        <div className="grid gap-2 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group cursor-pointer border-b border-border py-3 sm:border-b-0 sm:border-l sm:border-border sm:py-2 sm:pl-3"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-sm text-foreground">{project.title}</h3>
                <span className="text-[10px] text-muted-foreground">{project.year}</span>
              </div>
              <p className="mt-0.5 font-body text-xs font-light text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] text-muted-foreground"
                  >
                    {tag}{" "}
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
