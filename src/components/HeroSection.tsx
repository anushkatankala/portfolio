import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-4 pt-16">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-1 font-display text-5xl font-normal text-foreground md:text-6xl">
            Your Name
          </h1>
          <p className="mb-6 font-body text-sm tracking-wide text-muted-foreground">
            Computer Science at University
          </p>

          <p className="mb-8 max-w-lg font-body text-sm font-light leading-relaxed text-muted-foreground">
            I'm a software engineer who builds experiences that feel intentional
            and remove hidden friction.
          </p>

          <PlaylistWidget />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
