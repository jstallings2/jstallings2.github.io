"use client";

import React from "react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedProjects } from "@/data/projectsData";

const HomeFeaturedProjects: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

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
                href={project.url || "/projects"}
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

