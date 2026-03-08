import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Decorative blueprint lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-full w-px bg-blueprint/40" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-blueprint/40" />
        <div className="absolute left-0 top-1/3 h-px w-full bg-blueprint/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Computer Science Student
        </p>
        <h1 className="mb-6 font-display text-6xl leading-tight text-foreground md:text-8xl">
          Your Name
        </h1>
        <p className="mx-auto mb-12 max-w-md font-body text-lg font-light leading-relaxed text-muted-foreground">
          Building things at the intersection of design and code.
        </p>
      </motion.div>

      <PlaylistWidget />
    </section>
  );
};

export default HeroSection;
