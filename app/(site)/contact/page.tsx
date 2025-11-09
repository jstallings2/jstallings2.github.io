import React from "react";
import PageTransition from "@/components/animations/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      value: "hello@example.com", // TODO: Replace with actual email
      href: "mailto:hello@example.com",
      icon: "📧",
    },
    {
      label: "GitHub",
      value: "github.com/yourusername", // TODO: Replace with actual GitHub
      href: "https://github.com/yourusername",
      icon: "💻",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile", // TODO: Replace with actual LinkedIn
      href: "https://linkedin.com/in/yourprofile",
      icon: "💼",
    },
    {
      label: "Instagram",
      value: "@yourartistname", // TODO: Replace with actual Instagram
      href: "https://instagram.com/yourartistname",
      icon: "📸",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionHeader title="Let's Connect" />
            <p className="mb-12 text-lg text-muted-light">
              Let's talk about tools, sound, or projects. Whether you're
              interested in collaboration, have a project in mind, or just want
              to chat about audio technology and music—I'd love to hear from
              you.
            </p>
          </FadeIn>

          {/* Contact Links */}
          <FadeIn delay={0.1}>
            <div className="mb-12 space-y-4">
              {contactLinks.map((link, index) => (
                <FadeIn key={link.label} delay={0.1 * (index + 1)}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block rounded-xl border border-muted-dark bg-surface p-6 transition-all hover:border-accent hover:shadow-glow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{link.icon}</span>
                        <div className="text-left">
                          <p className="text-sm font-medium text-muted">
                            {link.label}
                          </p>
                          <p className="text-lg font-semibold text-gray-100 group-hover:text-accent">
                            {link.value}
                          </p>
                        </div>
                      </div>
                      <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Alternative CTA */}
          <FadeIn delay={0.5}>
            <div className="rounded-2xl border border-accent/30 bg-surface p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-100">
                Quick Links
              </h3>
              <p className="mb-6 text-sm text-muted-light">
                Explore my work or download my resume.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/projects" variant="secondary">
                  View Projects
                </Button>
                <Button href="/music" variant="secondary">
                  Listen to Music
                </Button>
                <Button
                  href="#" // TODO: Add link to resume PDF
                  variant="ghost"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}

