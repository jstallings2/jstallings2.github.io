"use client";

import React from "react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

// TODO: Move this to a separate data file when adding real project content
const featuredProjects = [
  {
    id: "clipperx",
    title: "ClipperX",
    description:
      "Real-time audio clipping plugin with advanced DSP and OpenGL visualization. Built with JUCE for professional audio production.",
    tags: ["Audio Plugin", "JUCE", "C++", "OpenGL"],
  },
  {
    id: "analog-circuit",
    title: "Analog Circuit Factory",
    description:
      "Modular synthesis environment inspired by vintage analog circuits. Web-based audio workstation with WebAudio API.",
    tags: ["WebAudio", "React", "TypeScript", "Audio UX"],
  },
  {
    id: "healthcare-pipeline",
    title: "Healthcare Transparency Pipeline",
    description:
      "AWS-based data pipeline for processing healthcare transparency data. Serverless architecture with automated ETL workflows.",
    tags: ["AWS", "Lambda", "Python", "Data Engineering"],
  },
];

const HomeFeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeader
            title="Featured Work"
            description="Selected projects spanning audio development, full-stack systems, and creative tools."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card
                title={project.title}
                tags={project.tags}
                href="/projects"
              >
                <p className="text-sm leading-relaxed">{project.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;

