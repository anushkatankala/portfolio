import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application for managing collaborative workflows with real-time updates.",
    tags: ["React", "Node.js", "WebSocket"],
  },
  {
    title: "Data Viz Tool",
    description: "An interactive data visualization dashboard built for exploring complex datasets.",
    tags: ["D3.js", "Python", "Flask"],
  },
  {
    title: "ML Pipeline",
    description: "End-to-end machine learning pipeline for text classification with 95% accuracy.",
    tags: ["PyTorch", "FastAPI", "Docker"],
  },
  {
    title: "Mobile App",
    description: "A minimal habit tracking app with clean UI and local-first data storage.",
    tags: ["React Native", "SQLite"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-display text-4xl text-foreground">Projects</h2>
          <div className="mb-12 h-px w-12 bg-foreground/30" />
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-display text-xl text-card-foreground">{project.title}</h3>
                <ArrowUpRight
                  size={16}
                  className="mt-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <p className="mb-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground"
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
