"use client";

import React from "react";
import { motion } from "framer-motion";

interface CanvasShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const CanvasShell: React.FC<CanvasShellProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Header */}
      <div className="border-b border-accent/20 bg-surfaceLight p-6">
        <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-muted-light">{subtitle}</p>}
      </div>

      {/* Canvas/Demo area */}
      <div className="p-6">{children}</div>
    </motion.div>
  );
};

export default CanvasShell;

