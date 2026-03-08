import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-display text-4xl text-foreground">About</h2>
          <div className="mb-8 h-px w-12 bg-foreground/30" />
          <p className="mb-4 font-body text-lg font-light leading-relaxed text-muted-foreground">
            Hi! I'm a computer science student passionate about creating elegant
            solutions to complex problems. I love working across the full stack,
            from crafting pixel-perfect interfaces to designing robust backend
            systems.
          </p>
          <p className="font-body text-lg font-light leading-relaxed text-muted-foreground">
            When I'm not coding, you'll find me exploring new music, reading
            about emerging technologies, or experimenting with creative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
