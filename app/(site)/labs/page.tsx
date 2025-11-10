"use client";

import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";
import ClipperDemoPlaceholder from "@/components/labs/ClipperDemoPlaceholder";

export default function LabsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <FadeIn>
          <SectionHeader
            title="Labs"
            description="A playground for interactive audio tools and visual experiments."
          />
          <p className="mb-12 max-w-2xl text-muted-light">
            This space is dedicated to experimental interfaces, WebAudio demos,
            and creative coding projects. These are living tools—prototypes,
            research, and explorations of what&apos;s possible when code meets sound.
          </p>
        </FadeIn>

        {/* Clipper Demo */}
        <FadeIn delay={0.1}>
          <div className="mb-12">
            <ClipperDemoPlaceholder />
          </div>
        </FadeIn>

        {/* Future demos placeholder */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-muted-dark bg-surface/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold text-gray-100">
              More Experiments Coming Soon
            </h3>
            <p className="text-sm text-muted-light">
              Future additions: Modular synthesis visualizer, WebGL audio
              reactive animations, interactive DSP tutorials, and more.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              {/* This shell is ready for WebGL canvas + WebAudio node graph integrations */}
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}

