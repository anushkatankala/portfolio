import { motion } from "framer-motion";
import PlaylistWidget from "./PlaylistWidget";

const HeroSection = () => {
  return (
    <section className="relative px-6 pb-4 pt-14 overflow-hidden">
      {/* ASCII decorations */}
      <div className="pointer-events-none absolute left-3 top-12 hidden select-none font-mono text-[8px] leading-tight text-primary/10 md:block">
        <pre>{`  ·  ✦  ·
 · . * . ·
✦ . · . ✦
 · . * . ·
  ·  ✦  ·`}</pre>
      </div>

      <div className="pointer-events-none absolute right-4 top-20 hidden select-none font-mono text-[7px] leading-tight text-primary/8 md:block">
        <pre>{`    *
   /|\\
  / | \\
 /  |  \\
*---+---*
 \\  |  /
  \\ | /
   \\|/
    *`}</pre>
      </div>

      <div className="pointer-events-none absolute left-8 bottom-8 hidden select-none font-mono text-[6px] leading-tight text-primary/8 md:block">
        <pre>{`· · ✦ · ·
· ✦ · ✦ ·
✦ · ✦ · ✦
· ✦ · ✦ ·
· · ✦ · ·`}</pre>
      </div>

      <div className="pointer-events-none absolute right-12 bottom-4 hidden select-none font-mono text-[7px] text-primary/6 md:block">
        ✧ · ✦ · ✧
      </div>

      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
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
                  anushka tankala
                </h1>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  cs @ carleton university
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-mono text-[8px] text-muted-foreground text-right">some of my favorite songs</p>
              <PlaylistWidget />
            </div>
          </div>

          <p className="mb-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
            a 2nd-year student interested in full stack development, 
            intrigued by machine learning, and dabbling in design
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
