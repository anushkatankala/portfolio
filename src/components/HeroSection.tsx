import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const ASCII_STAR = `    *    
   ***   
  *****  
*********
  *****  
   ***   
    *    `;

const ASCII_BORDER = `╔══════════════════════╗
║                      ║
║   > PORTFOLIO v1.0   ║
║   > STATUS: ONLINE   ║
║   > LOADING...OK     ║
║                      ║
╚══════════════════════╝`;

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-4 pt-14 overflow-hidden">
      {/* Scattered ASCII decorations */}
      <div className="pointer-events-none absolute -right-4 top-6 hidden select-none font-mono text-[7px] leading-tight text-primary/10 md:block">
        <pre>{ASCII_BORDER}</pre>
      </div>
      <div className="pointer-events-none absolute left-4 bottom-2 hidden select-none font-mono text-[6px] leading-tight text-primary/8 md:block">
        <pre>{ASCII_STAR}</pre>
      </div>

      {/* Glitch lines */}
      <div className="pointer-events-none absolute left-0 top-[30%] h-px w-full bg-primary/5" />
      <div className="pointer-events-none absolute left-0 top-[60%] h-px w-[60%] bg-primary/8" />
      <div className="pointer-events-none absolute right-0 top-[45%] h-px w-[30%] bg-primary/6" />

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex items-center gap-4">
            {/* Placeholder photo with ASCII border */}
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
                cs @ university · est. 2003
              </p>
            </div>
          </div>

          <div className="mb-6 border-l-2 border-primary/20 pl-3">
            <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
              I build things at the intersection of design and code.
            </p>
            <p className="mt-1 font-mono text-[9px] text-primary/40">
              // software engineer · creative developer · student
            </p>
          </div>

          <div className="flex items-center gap-3">
            <PlaylistWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
