import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const ASCII_ART = `┌──────────────┐
│  ░░░░░░░░░░  │
│  ░ SYSTEM ░  │
│  ░ ONLINE ░  │
│  ░░░░░░░░░░  │
└──────────────┘`;

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-4 pt-14 overflow-hidden">
      {/* ASCII decorative element */}
      <div className="pointer-events-none absolute right-6 top-8 hidden select-none font-mono text-[9px] leading-tight text-primary/15 md:block">
        <pre>{ASCII_ART}</pre>
      </div>

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex items-center gap-4">
            {/* Placeholder photo */}
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border border-border bg-accent">
              <div className="flex h-full w-full items-center justify-center font-mono text-[10px] text-muted-foreground">
                {'>'}_
              </div>
            </div>

            <div>
              <h1 className="font-display text-4xl text-foreground md:text-5xl">
                Your Name
              </h1>
              <p className="font-body text-sm tracking-wide text-muted-foreground">
                Computer Science at University
              </p>
            </div>
          </div>

          <p className="mb-6 max-w-lg font-body text-sm font-light leading-relaxed text-muted-foreground">
            I'm a software engineer who builds experiences that feel intentional
            and remove hidden friction.{" "}
            <span className="text-primary">Currently exploring the edges of design and code.</span>
          </p>

          <div className="flex items-center gap-3">
            <PlaylistWidget />
            <span className="hidden font-mono text-[9px] text-primary/30 sm:inline">
              ← now playing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
