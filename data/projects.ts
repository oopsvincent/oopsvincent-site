// data/projects.ts

type Project = {
  slug: string;
  title: string;
  tagline?: string;
  year?: string;
  status?: "in-progress" | "shipped" | "archived";
  summary: string;
  role?: string;
  techStack?: string[];
  links?: { label: string; href: string }[];
  sections?: {
    heading: string;
    body: string;
  }[];
  coverImage?: string;
  logoImage?: string;
};

type ProjectOverview = {
  slug: string;
  title: string;
  tagline?: string;
  year?: string;
  status?: "in-progress" | "shipped" | "archived";
  summary: string;
  role?: string;
  techStack?: string[];
  links?: { label: string; href: string }[];
  coverImage?: string;
  logoImage?: string;
  featured?: boolean;
};

export const projectsOverview: ProjectOverview[] = [
  {
    slug: "rhythme",
    title: "Rhythmé",
    tagline:
      "Discipline-first productivity platform for long-term personal growth",
    year: "2025",
    status: "in-progress",
    summary:
      "A comprehensive personal alignment system integrating habits, wellness, and goal execution. Built around the philosophy that sustainable productivity requires emotional clarity and disciplined systems.",
    role: "Founder & Product Architect",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    logoImage: "/R.svg",
    featured: true,
  },
  {
    slug: "music-recommender",
    title: "GrooveEstrella",
    tagline: "Custom algorithm-driven music discovery system",
    year: "2024",
    status: "shipped",
    summary:
      "Led five-person team to build a music recommendation platform from first principles. Designed custom algorithms and data models without external APIs.",
    role: "Technical Lead",
    techStack: ["React", "JavaScript", "Vite.js", "Node.js"],
    logoImage: "/G.svg",
    featured: false,
  },
];

export const projects: Project[] = [
  {
    slug: "rhythme",
    title: "Rhythmé",
    tagline:
      "Discipline-first productivity platform for long-term personal growth",
    year: "2025",
    status: "in-progress",
    summary:
      "A comprehensive personal alignment system integrating habits, wellness, and goal execution. Built around the philosophy that sustainable productivity requires emotional clarity and disciplined systems.",
    role: "Founder & Product Architect",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: [
      { label: "Live Preview", href: "https://rhythme-gamma.vercel.app/" },
      {
        label: "Documentation",
        href: "https://github.com/oopsvincent/rhythme/tree/master/docs",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Most productivity tools treat users like task-completing machines. They optimize for output without considering emotional state, energy patterns, or long-term identity alignment. People burn out because their tools don't understand their internal rhythm. The market is saturated with apps that help you do more, but few that help you become who you want to be.",
      },
      {
        heading: "The Vision",
        body: "Rhythmé reimagines productivity as personal alignment. Instead of another task manager, it's a system that connects daily habits, emotional patterns, focus states, and long-term goals into one cohesive experience. The goal isn't to optimize for maximum output—it's to build sustainable systems that compound over time and support genuine personal growth.",
      },
      {
        heading: "Product Strategy",
        body: "Building in deliberate phases to validate assumptions and maintain quality. Phase 1 focuses on core functionality: habit tracking, task management, mood logging, and focus sessions. Phase 2 introduces AI-driven insights and pattern recognition. Phase 3 expands to community features and deeper personalization. Each phase ships a complete, valuable experience—not a half-built vision.",
      },
      {
        heading: "Technical Architecture",
        body: "Built on Next.js 14 with TypeScript for type safety and developer experience. Supabase provides authentication, real-time data, and PostgreSQL database. Designed for scale from day one with proper separation of concerns, optimistic updates, and efficient data fetching. The architecture prioritizes maintainability—this needs to support years of iteration, not just an MVP launch.",
      },
      {
        heading: "Design Philosophy",
        body: "The interface reflects the product philosophy: clean, intentional, and emotionally aware. Every element serves a purpose. No feature bloat, no dark patterns, no artificial engagement mechanics. Users should feel clarity, not overwhelm. The design system uses subtle animations and thoughtful micro-interactions to create a premium feel without distraction.",
      },
      {
        heading: "What I'm Learning",
        body: "Building Rhythmé solo is teaching me to balance multiple domains simultaneously: product strategy, technical execution, design craft, and business thinking. I'm learning how to scope features realistically, make strategic tradeoffs, and maintain quality under resource constraints. Most importantly, I'm learning what it takes to build a company, not just a product.",
      },
      {
        heading: "Challenges & Decisions",
        body: "The biggest challenge has been resisting feature creep. Every productivity problem feels solvable, but not every solution belongs in version 1. I've had to ruthlessly prioritize what creates immediate value versus what can wait. Another key decision was building custom solutions instead of relying on third-party services—more upfront work, but total control over user experience and data handling.",
      },
      {
        heading: "Current Progress",
        body: "Core infrastructure is complete: authentication, database schema, API layers, and component library. Currently building out the habit tracking and mood logging interfaces. Planning to launch private beta with 20-30 users in Q1 2025 to validate core assumptions before expanding features. The goal is to prove the concept works before scaling investment.",
      },
      {
        heading: "What's Next",
        body: "Immediate focus is finishing Phase 1 features and running internal beta. Then expanding to early adopters for feedback and iteration. Long-term plan includes AI-powered insights, community accountability features, and mobile apps. But those only happen after validating that the core product solves a real problem people will pay for.",
      },
    ],
    logoImage: "/R.svg",
    coverImage: "/project-cover.jpg",
  },
  {
    slug: "music-recommender",
    title: "Music Recommender Web App",
    tagline: "Logic-driven recommendations without external APIs.",
    year: "2024",
    status: "shipped",
    summary:
      "An academic project where I led a small team to design and build a music recommender web app using our own datasets and logic.",
    role: "Team lead & developer",
    techStack: ["React", "TypeScript", "Node.js"],
    links: [
        {label: "Try it out Now", href: "https://grooveestrella.vercel.app/"}
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "We built a recommendation engine based on user surveys, preferences, and manually curated song attributes instead of relying on third-party APIs.",
      },
      {
        heading: "My Role",
        body: "I coordinated the team, designed the data flow, and implemented core logic for the recommendation system along with the front-end experience.",
      },
      {
        heading: "Key Outcomes",
        body: "Learned how to lead a small technical team, collect data, and build something usable from scratch under academic constraints.",
      },
      {
        heading: "What's Next",
        body: "I will revisit this project, as soon as my Rhythmé's MVP V1 is completed. Because this idea was something unique and Me and my team will try to bring it back to life with a new vision that I am working on the side right now.",
      },
    ],
    logoImage: "/G.svg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
