import { useState } from "react";
import { motion } from "framer-motion";
import { SkipBack, SkipForward, Play, Pause, Music } from "lucide-react";

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
      transition={{ delay: 0.5, duration: 0.6 }}
      className="inline-flex items-center gap-3 rounded-lg border border-border bg-playlist px-3 py-2 text-playlist-foreground"
    >
      <Music size={11} className="opacity-40" />

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="min-w-0"
      >
        <p className="text-xs">{track.title}</p>
        <p className="text-[10px] opacity-50">{track.artist}</p>
      </motion.div>

      <div className="flex items-center gap-1">
        <button onClick={prev} className="p-0.5 opacity-40 transition-opacity hover:opacity-80">
          <SkipBack size={10} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-0.5 opacity-40 transition-opacity hover:opacity-80"
        >
          {isPlaying ? <Pause size={10} /> : <Play size={10} />}
        </button>
        <button onClick={next} className="p-0.5 opacity-40 transition-opacity hover:opacity-80">
          <SkipForward size={10} />
        </button>
      </div>

      <span className="text-[9px] opacity-30">{currentIndex + 1}/{tracks.length}</span>
    </motion.div>
  );
};

export default PlaylistWidget;
