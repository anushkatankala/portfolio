import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "Full-stack web app for collaborative workflows with real-time updates.",
    tags: ["React", "Node.js", "WebSocket"],
    year: "2025",
  },
  {
    title: "Data Viz Tool",
    description: "Interactive dashboard for exploring complex datasets.",
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
    <section className="px-6 py-8">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-2xl text-foreground"
        >
          Projects
        </motion.h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group cursor-pointer rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-1.5 flex items-start justify-between">
                <h3 className="font-display text-base text-card-foreground">{project.title}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-muted-foreground">{project.year}</span>
                  <ArrowUpRight
                    size={12}
                    className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </div>
              <p className="mb-2 font-body text-xs font-light leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2 py-0.5 font-body text-[10px] text-secondary-foreground"
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
