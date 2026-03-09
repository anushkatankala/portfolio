import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SkipBack, SkipForward, Play } from "lucide-react";

const tracks = [
  { title: "How to Pretend", artist: "Lucy Bedroque" },
  { title: "5am", artist: "Esdeekid" },
  { title: "Lover/Friend", artist: "KAYTRANADA, Rochelle Jordan" },
  { title: "Faded in my Last Song", artist: "NCT U" },
  { title: "GREENGREENGREEN", artist: "Chase Atlantic" },
  { title: "Sayso", artist: "Che" },
  { title: "Princess Going Digital", artist: "Amaarae" },
  { title: "134340", artist: "BTS" },
  { title: "ADRENALINE", artist: "Haechan" },
  { title: "poppop", artist: "NCT WISH" },
  { title: "Coming Down", artist: "The Weeknd" },
  { title: "Your Love", artist: "She Wants Revenge" },
  { title: "Blooming Day", artist: "EXO-CBX" },
  { title: "Dreamflasher", artist: "Jane Remover" },
];

function shuffleIndices(): number[] {
  const arr = tracks.map((_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PlaylistWidget = () => {
  const [shuffledOrder, setShuffledOrder] = useState<number[]>(shuffleIndices);
  const [position, setPosition] = useState(0);

  const prev = () => setPosition((p) => Math.max(0, p - 1));

  const next = useCallback(() => {
    if (position === shuffledOrder.length - 1) {
      setShuffledOrder(shuffleIndices());
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }, [position, shuffledOrder]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const currentIndex = shuffledOrder[position];
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
        key={position}
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
        <span className="p-0.5 text-primary/35 cursor-default">
          <Play size={8} />
        </span>
        <button onClick={next} className="p-0.5 text-primary/35 transition-colors hover:text-primary">
          <SkipForward size={8} />
        </button>
      </div>

      <span className="font-mono text-[7px] text-primary/25">
        {String(position + 1).padStart(2, '0')}/{String(tracks.length).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default PlaylistWidget;
