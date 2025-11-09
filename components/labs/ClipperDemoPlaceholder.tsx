"use client";

import React from "react";
import { motion } from "framer-motion";
import CanvasShell from "./CanvasShell";

const ClipperDemoPlaceholder: React.FC = () => {
  return (
    <CanvasShell
      title="Clipper Demo"
      subtitle="WebAudio × WebGL real-time clipping visualizer"
    >
      <motion.div
        className="flex aspect-video w-full items-center justify-center rounded-xl border border-accent/20 bg-bg"
        whileHover={{ borderColor: "rgba(20, 184, 166, 0.5)" }}
      >
        <div className="max-w-md text-center">
          <motion.div
            className="mb-4 text-6xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎛️
          </motion.div>
          <h4 className="mb-2 text-xl font-semibold text-accent">
            Coming Soon
          </h4>
          <p className="text-sm text-muted-light">
            Live demo ready for WebGL canvas + WebAudio node graph.
            <br />
            This shell is structured and waiting for the interactive
            implementation.
          </p>
          <div className="mt-6 text-xs text-muted">
            <p className="mb-2 font-mono">
              // TODO: Integrate WebAudio API
              <br />
              // TODO: Add WebGL visualization
              <br />
              // TODO: Implement real-time clipping algorithm
            </p>
          </div>
        </div>
      </motion.div>

      {/* Placeholder controls */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {["Input Gain", "Threshold", "Output Gain", "Mix"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-muted-dark bg-surfaceLight p-3"
          >
            <p className="mb-2 text-xs font-medium text-muted-light">{label}</p>
            <div className="h-2 w-full rounded-full bg-muted-dark">
              <div
                className="h-full w-1/2 rounded-full bg-accent"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </CanvasShell>
  );
};

export default ClipperDemoPlaceholder;

