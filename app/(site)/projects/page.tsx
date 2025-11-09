import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { projects, getProjectsByCategory } from "@/data/projectsData";

export default function ProjectsPage() {
  const audioProjects = getProjectsByCategory("audio");
  const fullstackProjects = getProjectsByCategory("fullstack");
  const experiments = getProjectsByCategory("experiments");

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* Page Header */}
        <FadeIn>
          <SectionHeader
            title="Projects"
            description="A selection of work spanning audio plugins, full-stack systems, data pipelines, and creative experiments."
          />
        </FadeIn>

        {/* Audio / Creative Tools */}
        <FadeIn delay={0.1}>
          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-accent">
              Audio & Creative Tools
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {audioProjects.map((project, index) => (
                <FadeIn key={project.id} delay={0.1 * index}>
                  <Card
                    title={project.title}
                    subtitle={project.subtitle}
                    tags={project.tags}
                  >
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Full-stack / Data / Infrastructure */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-accentSecondary">
              Full-Stack & Infrastructure
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {fullstackProjects.map((project, index) => (
                <FadeIn key={project.id} delay={0.1 * index}>
                  <Card
                    title={project.title}
                    subtitle={project.subtitle}
                    tags={project.tags}
                  >
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Experiments */}
        {experiments.length > 0 && (
          <FadeIn delay={0.3}>
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-muted-light">
                Experiments & Research
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {experiments.map((project, index) => (
                  <FadeIn key={project.id} delay={0.1 * index}>
                    <Card
                      title={project.title}
                      subtitle={project.subtitle}
                      tags={project.tags}
                    >
                      <p className="text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </PageTransition>
  );
}

