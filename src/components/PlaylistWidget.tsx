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
      transition={{ delay: 0.5, duration: 0.5 }}
      className="inline-flex items-center gap-2.5 rounded-sm border border-primary/20 bg-playlist px-3 py-1.5 text-playlist-foreground"
    >
      <span className="font-mono text-[9px] text-primary/50">♪</span>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="min-w-0"
      >
        <p className="font-mono text-[10px]">{track.title}</p>
        <p className="font-mono text-[9px] opacity-45">{track.artist}</p>
      </motion.div>

      <div className="flex items-center gap-1">
        <button onClick={prev} className="p-0.5 text-primary/40 transition-colors hover:text-primary">
          <SkipBack size={9} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-0.5 text-primary/40 transition-colors hover:text-primary"
        >
          {isPlaying ? <Pause size={9} /> : <Play size={9} />}
        </button>
        <button onClick={next} className="p-0.5 text-primary/40 transition-colors hover:text-primary">
          <SkipForward size={9} />
        </button>
      </div>
    </motion.div>
  );
};

export default PlaylistWidget;
