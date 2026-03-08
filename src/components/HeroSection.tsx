import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-4 pt-14 overflow-hidden">
      {/* Subtle decorative lines */}
      <div className="pointer-events-none absolute left-0 top-[35%] h-px w-[40%] bg-primary/5" />
      <div className="pointer-events-none absolute right-0 top-[55%] h-px w-[25%] bg-primary/5" />

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <div className="absolute -inset-1 border border-primary/20" />
              <div className="flex h-full w-full items-center justify-center border border-primary/30 bg-accent">
                <span className="font-mono text-[10px] text-primary/60">
                  {'>'}_
                </span>
              </div>
            </div>

            <div>
              <h1 className="font-display text-4xl text-foreground md:text-5xl">
                Your Name
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                cs @ university
              </p>
            </div>
          </div>

          <div className="mb-6 border-l-2 border-primary/20 pl-3">
            <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
              I build things at the intersection of design and code.
            </p>
          </div>

          <PlaylistWidget />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
