"use client";

import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
  const focusAreas = [
    "Audio Plugin Development",
    "DSP & Real-time Audio",
    "WebAudio & Creative Tools",
    "Full-Stack Web Development",
    "Cloud Infrastructure & Data Pipelines",
    "Music Production & Sound Design",
  ];

  const tools = [
    "JUCE",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Python",
    "WebAudio API",
    "OpenGL",
    "GraphQL",
    "Terraform",
    "Docker",
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <FadeIn>
          <SectionHeader title="About" />
        </FadeIn>

        {/* Bio */}
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="mb-12 space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                <span className="font-semibold text-accent">
                  Engineer. Artist. Builder.
                </span>{" "}
                I create tools that bridge the gap between technical precision
                and creative expression.
              </p>

              <p>
                My work spans{" "}
                <span className="font-medium text-gray-200">
                  audio plugin development
                </span>
                , where I build professional tools with JUCE and C++, to{" "}
                <span className="font-medium text-gray-200">
                  full-stack systems
                </span>{" "}
                using modern web technologies and cloud infrastructure.
              </p>

              <p>
                With a background in{" "}
                <span className="font-medium text-gray-200">
                  Computer Science and Audio Engineering
                </span>
                , I approach every project with both analytical rigor and
                creative intuition. Whether designing DSP algorithms, building
                scalable data pipelines, or producing electronic music, I&apos;m
                driven by the intersection of technology and art.
              </p>

              <p>
                As an{" "}
                <span className="font-medium text-accentSecondary">
                  artist and producer
                </span>
                , I explore emotional, psychedelic, and groove-oriented spaces
                through sound. My music reflects the same attention to detail
                and technical excellence that defines my engineering work.
              </p>
            </div>
          </FadeIn>

          {/* Two-column layout */}
          <FadeIn delay={0.2}>
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              {/* Focus Areas */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-accent">
                  Focus Areas
                </h3>
                <ul className="space-y-2">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex items-start">
                      <span className="mr-2 text-accent">→</span>
                      <span className="text-gray-300">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Tech */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-accentSecondary">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Tag key={tool} variant="default">
                      {tool}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Download Resume */}
          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-accent/30 bg-surface p-8 text-center">
              <h3 className="mb-3 text-2xl font-semibold text-gray-100">
                Let&apos;s Work Together
              </h3>
              <p className="mb-6 text-muted-light">
                Interested in collaboration or want to learn more about my work?
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/resume" variant="primary">
                  View Resume
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}

