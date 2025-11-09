import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050509",
        surface: "#0d0d14",
        surfaceLight: "#1a1a24",
        accent: {
          DEFAULT: "#14b8a6", // teal
          light: "#2dd4bf",
          dark: "#0d9488",
        },
        accentSecondary: {
          DEFAULT: "#ec4899", // pink/magenta
          light: "#f472b6",
          dark: "#db2777",
        },
        muted: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
          dark: "#4b5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(20, 184, 166, 0.3)",
        glowPink: "0 0 20px rgba(236, 72, 153, 0.3)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

