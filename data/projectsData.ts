// TODO: Replace with real project data
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "audio" | "fullstack" | "experiments";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "clipperx",
    title: "ClipperX",
    subtitle: "Solo project · JUCE + OpenGL",
    description:
      "Professional audio clipping plugin with real-time DSP processing and stunning OpenGL visualizations. Features multiple clipping algorithms, advanced metering, and a fully resizable UI. Built for professional audio production workflows.",
    tags: ["Audio Plugin", "JUCE", "C++", "OpenGL", "DSP"],
    category: "audio",
    featured: true,
  },
  {
    id: "analog-circuit",
    title: "Analog Circuit Factory",
    subtitle: "Creative tool · React + WebAudio",
    description:
      "A browser-based modular synthesis environment inspired by vintage analog circuits. Features drag-and-drop patching, real-time audio processing with WebAudio API, and a beautiful retro-futurist interface.",
    tags: ["WebAudio", "React", "TypeScript", "Audio UX", "Creative Coding"],
    category: "audio",
    featured: true,
  },
  {
    id: "artist-evolve",
    title: "Artist Evolve",
    subtitle: "Full-stack platform · React + AWS",
    description:
      "A platform for artists to manage their creative work, collaborate, and evolve their craft. Features real-time collaboration, asset management, and AI-assisted creative tools. Built with React, AWS AppSync, and GraphQL.",
    tags: ["React", "AWS", "AppSync", "GraphQL", "DynamoDB"],
    category: "fullstack",
    featured: false,
  },
  {
    id: "healthcare-pipeline",
    title: "Healthcare Transparency Pipeline",
    subtitle: "Data engineering · AWS + Python",
    description:
      "Serverless data pipeline for processing and analyzing healthcare price transparency data. Automated ETL workflows with AWS Lambda, S3, and Step Functions. Processes millions of records daily with sub-second latency.",
    tags: ["AWS", "Lambda", "Python", "Data Engineering", "ETL"],
    category: "fullstack",
    featured: true,
  },
  {
    id: "genesis-platform",
    title: "Genesis Platform",
    subtitle: "Enterprise system · Cloud infrastructure",
    description:
      "Comprehensive cloud infrastructure and automation platform. Built microservices architecture with AWS, Terraform, and CI/CD pipelines. Reduced deployment time by 80% and improved system reliability.",
    tags: [
      "AWS",
      "Terraform",
      "Microservices",
      "DevOps",
      "Infrastructure as Code",
    ],
    category: "fullstack",
    featured: false,
  },
  {
    id: "chord-generation",
    title: "Chord Generation ML",
    subtitle: "Research project · Machine Learning",
    description:
      "Machine learning model for generating chord progressions based on musical theory and emotional context. Trained on thousands of songs across multiple genres. Experiments with RNNs and transformers.",
    tags: ["Machine Learning", "Python", "Music Theory", "Research"],
    category: "experiments",
    featured: false,
  },
];

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};

