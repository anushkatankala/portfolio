import { useState } from "react";
import { motion } from "framer-motion";
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";

const tracks = [
  { title: "Midnight City", artist: "M83" },
  { title: "Electric Feel", artist: "MGMT" },
  { title: "Digital Love", artist: "Daft Punk" },
  { title: "Genesis", artist: "Grimes" },
  { title: "Oblivion", artist: "Grimes" },
  { title: "Retrograde", artist: "James Blake" },
  { title: "Intro", artist: "The xx" },
];

const PlaylistWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prev = () => setCurrentIndex((i) => (i === 0 ? tracks.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === tracks.length - 1 ? 0 : i + 1));

  const track = tracks[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="inline-flex items-center gap-2 border border-primary/20 px-2.5 py-1.5"
    >
      <span className="font-mono text-[8px] text-primary/40">♫</span>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="min-w-0"
      >
        <p className="font-mono text-[9px] text-foreground">{track.title}</p>
        <p className="font-mono text-[8px] text-muted-foreground">{track.artist}</p>
      </motion.div>

      <div className="flex items-center gap-0.5">
        <button onClick={prev} className="p-0.5 text-primary/35 transition-colors hover:text-primary">
          <SkipBack size={8} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-0.5 text-primary/35 transition-colors hover:text-primary"
        >
          {isPlaying ? <Pause size={8} /> : <Play size={8} />}
        </button>
        <button onClick={next} className="p-0.5 text-primary/35 transition-colors hover:text-primary">
          <SkipForward size={8} />
        </button>
      </div>

      <span className="font-mono text-[7px] text-primary/25">
        {String(currentIndex + 1).padStart(2, '0')}/{String(tracks.length).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default PlaylistWidget;
