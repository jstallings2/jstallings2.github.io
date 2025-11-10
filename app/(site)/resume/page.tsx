"use client";

import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/animations/FadeIn";

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* Header with download button */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <FadeIn>
            <div>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
                Jacob C. Stallings
              </h1>
              <p className="text-lg text-muted-light">
                Nashville, TN | stallingsaudio@gmail.com
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              href="#" // TODO: Add link to PDF resume
              variant="primary"
            >
              Download PDF
            </Button>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Education */}
          <FadeIn delay={0.1}>
            <section className="mb-10">
              <h2 className="mb-4 text-3xl font-bold text-accent">Education</h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-accent/30 bg-surface p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        MS, Audio Engineering
                      </h3>
                      <p className="text-muted">Belmont University</p>
                    </div>
                    <span className="text-sm text-muted-light">May 2023</span>
                  </div>
                  <div className="mt-3 text-sm text-gray-300">
                    <p className="mb-2 font-medium">Coursework:</p>
                    <p className="leading-relaxed">
                      Deep Learning & AI Ethics (PyTorch), Audio Software
                      Development (C++, JUCE), Audio Signal Processing (Matlab),
                      Audio Mastering & Applied Critical Listening
                    </p>
                    <p className="mb-2 mt-3 font-medium">Projects:</p>
                    <p className="leading-relaxed">
                      Digital Audio Effect Modeling w/ PyTorch, Distortion
                      VST/AU Plugin w/ JUCE, Applied Mastering, Measurement of
                      Head-Related Transfer Functions
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-accent/30 bg-surface p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        BS, Computer Science
                      </h3>
                      <p className="text-muted">Vanderbilt University</p>
                    </div>
                    <span className="text-sm text-muted-light">
                      December 2020
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-gray-300">
                    <p className="mb-2 font-medium">Coursework:</p>
                    <p className="leading-relaxed">
                    Software Development (C++), Data Structures, Design Patterns, Object-Oriented Programming, Cloud Computing (Virtualization, Networking, Docker,
                      Kubernetes, AWS), Artificial Intelligence, Computer
                      Architecture, Operating Systems (Linux, C), Algorithms
                      (Performance Optimization, Big-O Analysis, Graph
                      Algorithms), Statistics, Linear Algebra, Spanish
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Technical Skills */}
          <FadeIn delay={0.2}>
            <section className="mb-10 rounded-2xl border border-muted-dark bg-surface p-6 md:p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-100">
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-muted-light">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Tag>Python</Tag>
                    <Tag>C++ (JUCE)</Tag>
                    <Tag>Java</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>React</Tag>
                    <Tag>SQL</Tag>
                    <Tag>OpenGL</Tag>
                    <Tag>HTML/CSS</Tag>
                    <Tag>Tailwind</Tag>
                    <Tag>Matlab</Tag>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-muted-light">
                    Tools & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Tag>PyTorch</Tag>
                    <Tag>REST APIs</Tag>
                    <Tag>GraphQL</Tag>
                    <Tag>MongoDB</Tag>
                    <Tag>PostgreSQL</Tag>
                    <Tag>Docker</Tag>
                    <Tag>Git</Tag>
                    <Tag>SVN</Tag>
                    <Tag>Cursor / AI Agents</Tag>
                    <Tag>SSH</Tag>
                    <Tag>Jupyter Notebooks</Tag>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-muted-light">
                    AWS Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Tag>S3</Tag>
                    <Tag>Lambda</Tag>
                    <Tag>SQS</Tag>
                    <Tag>EC2</Tag>
                    <Tag>SES</Tag>
                    <Tag>CloudFormation</Tag>
                    <Tag>AppSync</Tag>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Work Experience Header */}
          <FadeIn delay={0.3}>
            <h2 className="mb-6 text-3xl font-bold text-accent">
              Work Experience
            </h2>
          </FadeIn>

          {/* Genesis Studio */}
          <FadeIn delay={0.4}>
            <section className="mb-8 rounded-2xl border border-accent/30 bg-surface p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-accent">
                    Genesis Studio
                  </h3>
                  <p className="text-sm font-medium text-gray-100">
                    Full-Stack Engineer, Artist Evolve
                  </p>
                  <p className="text-sm text-muted-light">
                    Remote (Nashville) | June 2024 - Present
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag>Node.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>React</Tag>
                  <Tag>AWS</Tag>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Implemented social platform API integrations: Content
                    scheduling, metrics & insights, auth flows
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Architected and implemented a multi-channel live
                    notification system with GraphQL + AWS AppSync
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Implement and maintain UI elements: Interactive timeline
                    view (React + Tailwind), Email HTML templates
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Designed and maintain CI/CD for multiple production Lambdas
                    with environment-specific workflows (AWS)
                  </span>
                </li>
              </ul>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-muted hover:text-gray-100">
                  View detailed project highlights →
                </summary>
                <div className="mt-3 space-y-4 border-l-2 border-muted-dark pl-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-light">
                      AWS Services & Content Automation:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Implemented social publishing/platform integrations:
                          TikTok photo post API (request restructuring, 24-hour
                          creator caching, resilient retries/timeouts),
                          Instagram insights and scheduled post pipelines, and
                          robust error logging/metrics
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Migrated ChartMetrics daily scheduler from Lambda into
                          the core web service with consolidated infra and code
                          paths
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Evolved notification system: new HTML templates,
                          data-driven level-up emails, and consolidated digest
                          rollups; improved filtering and required scheduling
                          fields for better data integrity
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-light">
                      Web Platform (Node/TypeScript, Monorepo):
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Contributed across server modules (cron services,
                          gamification metrics, Spotify/TikTok helpers) and
                          release automation (semantic-release)
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Improved analytics depth (growth rate metrics,
                          listeners insights) and consolidated cron
                          orchestration with clearer source of truth
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </section>
          </FadeIn>

          {/* Hack Audio */}
          <FadeIn delay={0.5}>
            <section className="mb-8 rounded-2xl border border-accent/30 bg-surface p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-accent">Hack Audio, LLC</h3>
                  <p className="text-sm font-medium text-gray-100">
                    Developer, Web & Audio UI
                  </p>
                  <p className="text-sm text-muted-light">
                    Remote (Nashville) | July 2024 - Present (Part-time)
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag>JUCE</Tag>
                  <Tag>React</Tag>
                  <Tag>WordPress</Tag>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Overhauled the public-facing website UI using WordPress and
                    custom CSS, driving 1,000+ monthly views
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Developing a JUCE 8 + WebView-powered preset browser
                    feature, with live registry hosted via WordPress
                  </span>
                </li>
              </ul>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-muted hover:text-gray-100">
                  View detailed project highlights →
                </summary>
                <div className="mt-3 space-y-4 border-l-2 border-muted-dark pl-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-light">
                      Analog Circuit Factory - WebView UI:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Shipped JUCE WebView UI for circuit browsing with
                          dynamic theming, offline handling, and download
                          progress states; added toast notifications, skeleton
                          loaders, and polished modal UX for detail views
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Integrated staging WordPress server for content
                          delivery and release bundling; wrote deployment guide
                          and streamlined deploy scripts
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Implemented preset packs, schematic imagery, and
                          category iconography to improve discoverability and
                          engagement
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-light">
                      WordPress Custom Plugin Development:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Built custom plugin `acf-circuit-registry` to expose
                          circuit metadata and assets to the Analog Circuit
                          Factory app via WordPress REST API
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Implemented CORS allowances for JUCE and localhost to
                          enable secure local/dev integration and staging
                          deployments
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 text-muted">•</span>
                        <span>
                          Added schema fields (downloads/likes/comments) and
                          automated media/preset asset handling to support
                          circuit packs and tutorials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </section>
          </FadeIn>

          {/* Bender Audio - ClipperX */}
          <FadeIn delay={0.6}>
            <section className="mb-8 rounded-2xl border border-accent/30 bg-surface p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-accent">
                    Bender Audio, LLC
                  </h3>
                  <p className="text-sm font-medium text-gray-100">
                    Lead Developer, ClipperX
                  </p>
                  <p className="text-sm text-muted-light">
                    Remote (Nashville) | Feb 2024 - Oct 2025
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag>C++</Tag>
                  <Tag>JUCE</Tag>
                  <Tag>OpenGL</Tag>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Implemented fully controllable professional audio effect in
                    JUCE with real-time audio visualization
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Instrumented and optimized real-time waveform visualization
                    with cross-platform OpenGL GPU shaders
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-accent">•</span>
                  <span>
                    Communicated technical requirements with stakeholders and
                    coordinated smooth handoff to dev team
                  </span>
                </li>
              </ul>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-muted hover:text-gray-100">
                  View detailed technical highlights →
                </summary>
                <div className="mt-3 border-l-2 border-muted-dark pl-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex">
                      <span className="mr-2 text-muted">•</span>
                      <span>
                        Shipped multi-format plugin support (AU/VST3) and
                        Windows compatibility via Projucer exporter updates and
                        platform fixes
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-muted">•</span>
                      <span>
                        Optimized OpenGL UI and general GUI drawing to improve
                        render efficiency; reduced asset load by halving
                        filmstrip frames
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-muted">•</span>
                      <span>
                        Implemented internal bypass/power control wired to DSP,
                        with responsive UI states and menu LookAndFeel upgrades
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-muted">•</span>
                      <span>
                        Improved waveform accuracy and scaling with input gain;
                        added dynamic build info string and refined UX elements
                        (icons, defaults)
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
            </section>
          </FadeIn>

          {/* Vitech Systems Group */}
          <FadeIn delay={0.7}>
            <section className="mb-8 rounded-2xl border border-muted-dark bg-surface p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-muted-light">
                    Vitech Systems Group
                  </h3>
                  <p className="text-sm font-medium text-gray-100">
                    Backend Engineer, Disbursements Team
                  </p>
                  <p className="text-sm text-muted-light">
                    Remote (Nashville) | Jan 2022 - Apr 2024
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag>Java</Tag>
                  <Tag>Spring</Tag>
                  <Tag>PostgreSQL</Tag>
                  <Tag>TypeScript</Tag>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex">
                  <span className="mr-3 text-muted-light">•</span>
                  <span>
                    Developed features and bug fixes for V3locity, a
                    cloud-native, web-based insurance admin platform
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-muted-light">•</span>
                  <span>
                    Technologies used: Java (Spring), Hibernate, PostgreSQL,
                    REST, Node.js, TypeScript, React, Git, SVN
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-muted-light">•</span>
                  <span>
                    Participated in Scrum ceremonies such as backlog refinement
                    and code reviews
                  </span>
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Other Highlights */}
          <FadeIn delay={0.8}>
            <section className="mb-10">
              <h2 className="mb-6 text-3xl font-bold text-accent">
                Other Highlights
              </h2>
              <div className="space-y-4 rounded-2xl border border-accent/30 bg-surface p-6 md:p-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex">
                    <span className="mr-3 text-accent">•</span>
                    <span>
                      <span className="font-semibold text-gray-100">
                        Music Production:
                      </span>{" "}
                      10 years experience in music production (Ableton Live /
                      Logic Pro), releases on labels such as Houstrike
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 text-accent">•</span>
                    <span>
                      <span className="font-semibold text-gray-100">
                        Generative AI Music Workshop:
                      </span>{" "}
                      Attended workshop hosted by The Sound of AI and Pompeu
                      Fabra University (Music Technology Group) in Barcelona,
                      Spain, December 2023
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 text-accent">•</span>
                    <span>
                      <span className="font-semibold text-gray-100">
                        Education & Mentorship:
                      </span>{" "}
                      Juni Learning - Taught 1-on-1 programming classes to
                      students aged 11-17 in Python, Java, HTML/CSS/JS
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 text-accent">•</span>
                    <span>
                      <span className="font-semibold text-gray-100">
                        Study Abroad:
                      </span>{" "}
                      Studied one semester of undergraduate computer science at
                      Carlos III University in Madrid, Spain
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </FadeIn>

          {/* Additional Projects */}
          <FadeIn delay={0.9}>
            <section className="mb-10">
              <h2 className="mb-6 text-3xl font-bold text-muted-light">
                Additional Projects
              </h2>
              <div className="space-y-4">
                {/* MRF Pipeline */}
                <details className="rounded-2xl border border-accent/30 bg-surface p-6">
                  <summary className="cursor-pointer text-xl font-bold text-accent hover:text-accent-light">
                    Healthcare Price Transparency Pipeline →
                  </summary>
                  <p className="mb-3 mt-3 text-sm text-muted-light">
                    Personal Project | AWS + Docker + Python
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex">
                      <span className="mr-3 text-accent">•</span>
                      <span>
                        Implemented streaming scraper with Step Functions
                        orchestration and CloudFormation-based IaC; &quot;all states&quot;
                        mode and index discovery
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-3 text-accent">•</span>
                      <span>
                        Built a unified processor with per-file CMS validation
                        and hybrid standardization; produced CSV/Parquet outputs
                        and versioned processing reports
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-3 text-accent">•</span>
                      <span>
                        Dockerized end-to-end pipeline, validated at scale on
                        BCBS LA and Cigna; integrated cost/metrics extraction
                        pre-deploy for predictable ops
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-3 text-accent">•</span>
                      <span>
                        Established CI/CD and versioned deployments (Lambda/ECS
                        variants) plus email notifications on pipeline results;
                        reproducible S3 outputs for audits
                      </span>
                    </li>
                  </ul>
                </details>

                {/* ChordGeneration */}
                <details className="rounded-2xl border border-muted-dark bg-surface p-6">
                  <summary className="cursor-pointer text-xl font-bold text-muted-light hover:text-gray-100">
                    ChordGeneration - Generative AI Music Workshop →
                  </summary>
                  <p className="mb-3 mt-3 text-sm text-muted-light">
                    December 2023 | Python, ML, Music Theory
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex">
                      <span className="mr-3 text-muted-light">•</span>
                      <span>
                        Curated chord progression dataset (iReal Pro → JAMS) and
                        exploratory notebooks; prepared trimmed
                        training/selection sets
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-3 text-muted-light">•</span>
                      <span>
                        Implemented showcase scripts and experimentation
                        notebooks to demonstrate chord/voicing generation
                        strategies for the workshop
                      </span>
                    </li>
                  </ul>
                </details>
              </div>
            </section>
          </FadeIn>

          {/* Footer note */}
          <FadeIn delay={1.0}>
            <div className="rounded-xl border border-muted-dark bg-surfaceLight p-6 text-center">
              <p className="mb-2 text-sm text-muted">
                For more information about my work, explore:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/projects"
                  className="text-accent transition-colors hover:text-accent-light hover:underline"
                >
                  Projects
                </a>
                <span className="text-muted">·</span>
                <a
                  href="/music"
                  className="text-accent transition-colors hover:text-accent-light hover:underline"
                >
                  Music
                </a>
                <span className="text-muted">·</span>
                <a
                  href="/labs"
                  className="text-accent transition-colors hover:text-accent-light hover:underline"
                >
                  Labs
                </a>
                <span className="text-muted">·</span>
                <a
                  href="/contact"
                  className="text-accent transition-colors hover:text-accent-light hover:underline"
                >
                  Contact
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}

