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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="inline-flex flex-col items-center gap-3 rounded-2xl bg-playlist px-6 py-5 text-playlist-foreground shadow-lg"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
        <Music size={12} />
        <span>now playing</span>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <p className="font-display text-lg">{track.title}</p>
        <p className="text-sm opacity-60">{track.artist}</p>
      </motion.div>

      {/* Progress bar (decorative) */}
      <div className="h-0.5 w-full rounded-full bg-playlist-foreground/20">
        <motion.div
          className="h-full rounded-full bg-playlist-foreground/50"
          initial={{ width: "0%" }}
          animate={{ width: isPlaying ? "65%" : "30%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      <div className="flex items-center gap-4">
        <button onClick={prev} className="opacity-60 transition-opacity hover:opacity-100">
          <SkipBack size={16} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded-full bg-playlist-foreground/10 p-2 transition-colors hover:bg-playlist-foreground/20"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button onClick={next} className="opacity-60 transition-opacity hover:opacity-100">
          <SkipForward size={16} />
        </button>
      </div>

      <p className="text-[10px] opacity-40">
        {currentIndex + 1} / {tracks.length}
      </p>
    </motion.div>
  );
};

export default PlaylistWidget;
