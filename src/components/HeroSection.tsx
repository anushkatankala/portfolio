import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-6 pt-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-1 font-display text-4xl text-foreground md:text-5xl">
                Your Name
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                Computer Science at University
              </p>
            </div>
            <PlaylistWidget />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-base font-light leading-relaxed text-muted-foreground"
        >
          I'm a software engineer who builds experiences that feel intentional.
          Currently exploring the intersection of design and code.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
