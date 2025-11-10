"use client";

import React from "react";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "pink";
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantStyles = {
    default: "bg-surfaceLight text-muted-light border-muted-dark",
    accent: "bg-accent/10 text-accent border-accent/30",
    pink: "bg-accentSecondary/10 text-accentSecondary border-accentSecondary/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;

