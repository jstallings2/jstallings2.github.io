"use client";

import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import HomeHero from "@/components/sections/HomeHero";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeMusicStrip from "@/components/sections/HomeMusicStrip";

export default function Home() {
  return (
    <PageTransition>
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeMusicStrip />
    </PageTransition>
  );
}

