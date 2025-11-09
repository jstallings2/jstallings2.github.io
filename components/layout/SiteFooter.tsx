import React from "react";
import Link from "next/link";

const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted-dark/50 bg-surface/30">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left: Copyright & tagline */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted">
              © {currentYear} Jacob Stallings
            </p>
            <p className="mt-1 text-xs text-muted-light">
              Building tools for sound and systems.
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex items-center space-x-6">
            <Link
              href="mailto:hello@example.com" // TODO: Replace with actual email
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Email
            </Link>
            <Link
              href="https://github.com" // TODO: Replace with actual GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              GitHub
            </Link>
            <Link
              href="https://instagram.com" // TODO: Replace with actual Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

