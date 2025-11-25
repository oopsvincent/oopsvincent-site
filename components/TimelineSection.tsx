import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface TimelineItem {
  year: string;
  title: string;
  role?: string;
  description: string;
  highlights: string[];
  impact?: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Foundations in Interactive Systems",
    role: "Independent Developer",
    description:
      "Entered software development through game engineering, building interactive systems in Unity. Developed Flappee Bird as a foundational project to understand core programming principles, physics simulation, and user interaction patterns.",
    highlights: [
      "Shipped first complete project with collision detection and scoring systems",
      "Learned C# and object-oriented programming fundamentals",
      "Established disciplined iteration and debugging methodology",
    ],
    impact:
      "Proved ability to learn complex technical frameworks and ship working software independently.",
  },
  {
    year: "2024",
    title: "Team Leadership & Systems Architecture",
    role: "Technical Lead",
    description:
      "Led cross-functional team of five to architect and deliver a music recommendation platform from first principles. Managed full product lifecycle from concept to deployment, building custom recommendation algorithms without external APIs.",
    highlights: [
      "Coordinated distributed team across design, backend, and frontend streams",
      "Designed data models and recommendation logic for personalized user experiences",
      "Delivered production-ready web application under academic timeline constraints",
      "Established team workflows, code standards, and collaborative practices",
    ],
    impact:
      "Demonstrated leadership capacity, systems thinking, and ability to deliver complex products with limited resources.",
  },
  {
    year: "2025",
    title: "Strategic Pivot to Human-Centered Systems",
    role: "Founder & Product Architect",
    description:
      "Transitioned from entertainment software to building tools that enhance human capability. Founded Rhythmé as a discipline-first productivity platform addressing systemic issues in personal organization and long-term goal execution.",
    highlights: [
      "Identified gap in market for wellness-integrated productivity systems",
      "Designed product architecture balancing simplicity with depth",
      "Established brand identity rooted in clarity, focus, and intentional design",
      "Building toward sustainable, bootstrapped product development",
    ],
    impact:
      "Positioned as founder building meaningful technology with clear product vision and user-centered philosophy.",
  },
  {
    year: "Next",
    title: "Human-Centered Product Ecosystem & Company Formation",
    role: "Founder & Ecosystem Architect",
    description:
      "Laying the foundation for a long-term, multi-product ecosystem built around human-centered digital experiences. Establishing a unified company that owns, integrates, and scales multiple platforms — starting with Rhythmé and GrooveEstrella — under one coherent brand and philosophy.",
    highlights: [
      "Building a connected ecosystem of products focused on productivity, creativity, wellness, and personal systems",
      "Establishing a parent company to strategically own and unify all platforms under one identity",
      "Developing cross-product frameworks, shared design languages, and a consistent user philosophy",
      "Exploring data-driven and AI-enhanced features to create adaptive, personalized experiences",
      "Creating long-term infrastructure for global expansion, partnerships, and multi-platform innovation",
    ],
    impact:
      "Building the early architecture of a global company designed to deliver meaningful, human-centered technology for decades.",
  },
];

export function TimelineSection() {
  return (
    <>
      <Separator className="my-20" />

      <section className="px-6 py-24 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tight mb-4">
              Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A record of focused execution, strategic pivots, and progressive
              capability building — from individual contributor to technical
              leader to founder.
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid md:grid-cols-[180px_1fr] gap-8 group"
              >
                {/* Year Column */}
                <div className="md:text-right">
                  <div className="inline-block md:block">
                    <div className="text-6xl font-space-grotesk font-bold tracking-tight">
                      {item.year}
                    </div>
                    {item.role && (
                      <div className="text-sm text-muted-foreground mt-2 font-medium">
                        {item.role}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="relative pb-8 border-l-2 border-border pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                  <h3 className="text-2xl md:text-3xl font-space-grotesk font-semibold mb-4 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-sm md:text-base text-foreground/80">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Impact Statement */}
                  {item.impact && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm md:text-base font-medium text-foreground/90 italic">
                        {item.impact}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-20" />
    </>
  );
}
