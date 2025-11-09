"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

const HomeMusicStrip: React.FC = () => {
  return (
    <section className="bg-surface/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
              Music & Sound
            </h2>
            <p className="text-lg text-muted-light md:text-xl">
              Electronic music exploring emotional, psychedelic, and
              groove-oriented spaces.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Release */}
          <FadeIn delay={0.1}>
            <Card title="Latest Release" subtitle="EP · 2024" hoverable={false}>
              <motion.div
                className="mb-4 aspect-square w-full rounded-xl bg-gradient-to-br from-accent/20 to-accentSecondary/20"
                whileHover={{ scale: 1.02 }}
              >
                {/* Placeholder for album art */}
                <div className="flex h-full items-center justify-center text-sm text-muted">
                  Album Art
                </div>
              </motion.div>
              <p className="mb-4 text-sm text-gray-300">
                A collection of emotional, psychedelic journeys through sound.
                Out now on all platforms.
              </p>
              <Button href="/music" variant="ghost">
                Listen Now →
              </Button>
            </Card>
          </FadeIn>

          {/* Latest Mix */}
          <FadeIn delay={0.2}>
            <Card title="Latest DJ Mix" subtitle="Mix · 2024" hoverable={false}>
              <motion.div
                className="mb-4 aspect-square w-full rounded-xl bg-gradient-to-br from-accentSecondary/20 to-accent/20"
                whileHover={{ scale: 1.02 }}
              >
                {/* Placeholder for mix cover */}
                <div className="flex h-full items-center justify-center text-sm text-muted">
                  Mix Cover
                </div>
              </motion.div>
              <p className="mb-4 text-sm text-gray-300">
                Two hours of deep, groovy, and mind-bending selections from the
                studio.
              </p>
              <Button href="/music" variant="ghost">
                Listen Now →
              </Button>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="/music" variant="secondary">
              Explore More Music
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeMusicStrip;

