"use client";

import React from "react";
import { motion } from "framer-motion";

interface MusicEmbedPlaceholderProps {
  platform?: "soundcloud" | "spotify" | "youtube";
  title?: string;
}

const MusicEmbedPlaceholder: React.FC<MusicEmbedPlaceholderProps> = ({
  platform = "soundcloud",
  title = "Track",
}) => {
  const platformColors = {
    soundcloud: "from-orange-500/20 to-orange-700/20",
    spotify: "from-green-500/20 to-green-700/20",
    youtube: "from-red-500/20 to-red-700/20",
  };

  const platformIcons = {
    soundcloud: "🎵",
    spotify: "🎧",
    youtube: "▶️",
  };

  return (
    <motion.div
      className={`flex aspect-video w-full items-center justify-center rounded-xl border border-muted-dark bg-gradient-to-br ${platformColors[platform]}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-center">
        <div className="mb-3 text-4xl">{platformIcons[platform]}</div>
        <p className="mb-1 text-sm font-medium text-gray-200">{title}</p>
        <p className="text-xs text-muted">
          {platform.charAt(0).toUpperCase() + platform.slice(1)} embed coming
          soon
        </p>
        <p className="mt-2 text-xs text-muted-light">
          {/* TODO: Replace with actual embed iframe */}
          Placeholder for embedded player
        </p>
      </div>
    </motion.div>
  );
};

export default MusicEmbedPlaceholder;

