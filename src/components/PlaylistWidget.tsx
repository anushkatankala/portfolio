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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex items-center gap-3 rounded-xl bg-playlist px-4 py-2.5 text-playlist-foreground shadow-md"
    >
      <Music size={12} className="opacity-50" />

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="min-w-0"
      >
        <p className="truncate text-xs font-medium">{track.title}</p>
        <p className="truncate text-[10px] opacity-50">{track.artist}</p>
      </motion.div>

      <div className="flex items-center gap-1.5">
        <button onClick={prev} className="opacity-50 transition-opacity hover:opacity-100">
          <SkipBack size={11} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded-full bg-playlist-foreground/10 p-1 transition-colors hover:bg-playlist-foreground/20"
        >
          {isPlaying ? <Pause size={10} /> : <Play size={10} />}
        </button>
        <button onClick={next} className="opacity-50 transition-opacity hover:opacity-100">
          <SkipForward size={11} />
        </button>
      </div>
    </motion.div>
  );
};

export default PlaylistWidget;
