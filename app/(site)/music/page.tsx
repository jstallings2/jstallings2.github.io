"use client";

import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/animations/FadeIn";
import MusicEmbedPlaceholder from "@/components/music/MusicEmbedPlaceholder";

export default function MusicPage() {
  // TODO: Replace with real release data
  const releases = [
    {
      id: "ep-2024",
      title: "Emotional Circuits",
      type: "EP",
      year: "2024",
      label: "Independent",
    },
    {
      id: "ep-2023",
      title: "Psychedelic Systems",
      type: "EP",
      year: "2023",
      label: "Independent",
    },
  ];

  const mixes = [
    {
      id: "mix-01",
      title: "Deep Focus Mix Vol. 1",
      duration: "2 hours",
      date: "2024",
    },
    {
      id: "mix-02",
      title: "Groove Sessions",
      duration: "90 minutes",
      date: "2024",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* Intro */}
        <FadeIn>
          <SectionHeader
            title="Music & Sound"
            description="Electronic music exploring emotional, psychedelic, and groove-oriented spaces."
          />
          <p className="mb-16 max-w-2xl text-muted-light">
            Blending precision engineering with creative expression. From deep,
            introspective journeys to high-energy dance floor moments—each
            release is crafted with attention to sonic detail and emotional
            impact.
          </p>
        </FadeIn>

        {/* Releases */}
        <FadeIn delay={0.1}>
          <div className="mb-20">
            <h3 className="mb-6 text-3xl font-semibold text-accent">
              Releases
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {releases.map((release, index) => (
                <FadeIn key={release.id} delay={0.1 * index}>
                  <Card hoverable={false}>
                    <div className="mb-4">
                      <MusicEmbedPlaceholder
                        platform="spotify"
                        title={release.title}
                      />
                    </div>
                    <h4 className="mb-1 text-xl font-semibold text-gray-100">
                      {release.title}
                    </h4>
                    <div className="mb-3 flex items-center gap-2">
                      <Tag variant="accent">{release.type}</Tag>
                      <span className="text-sm text-muted">
                        {release.label} · {release.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Available on Spotify, Apple Music, and all major
                      platforms.
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* DJ Mixes */}
        <FadeIn delay={0.2}>
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-accentSecondary">
              DJ Mixes
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {mixes.map((mix, index) => (
                <FadeIn key={mix.id} delay={0.1 * index}>
                  <Card hoverable={false}>
                    <div className="mb-4">
                      <MusicEmbedPlaceholder
                        platform="soundcloud"
                        title={mix.title}
                      />
                    </div>
                    <h4 className="mb-1 text-xl font-semibold text-gray-100">
                      {mix.title}
                    </h4>
                    <div className="mb-3 flex items-center gap-2">
                      <Tag variant="pink">Mix</Tag>
                      <span className="text-sm text-muted">
                        {mix.duration} · {mix.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Deep, groovy, and mind-bending selections.
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}

