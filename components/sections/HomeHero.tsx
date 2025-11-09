"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/animations/FadeIn";

const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto max-w-4xl text-center">
          {/* Tag row */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Tag variant="accent">Engineer</Tag>
            <Tag variant="pink">Producer</Tag>
            <Tag variant="accent">Audio Developer</Tag>
            <Tag variant="pink">Creative Technologist</Tag>
          </div>

          {/* Main headline */}
          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight text-gray-100 md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building tools, systems,{" "}
            <span className="glow-text">and sound</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-10 text-lg text-muted-light md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Audio plugins, full-stack systems, electronic music. Bridging the
            gap between engineering precision and creative expression.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="/music" variant="secondary">
              Listen to Music
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeHero;

