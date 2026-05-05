export interface Project {
  id: number;
  title: string;
  description: string;
  prototypeUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Title One",
    description: "A brief overview of the product, the problem it solved, and the impact it delivered for users and the business.",
    prototypeUrl: "#",
    tags: ["Mobile", "0→1"],
  },
  {
    id: 2,
    title: "Project Title Two",
    description: "Short description of the initiative — what was built, why it mattered, and key outcomes from the launch.",
    prototypeUrl: "#",
    tags: ["B2B", "SaaS"],
  },
  {
    id: 3,
    title: "Project Title Three",
    description: "A product redesign focused on improving core user flows, reducing drop-off, and boosting engagement metrics.",
    prototypeUrl: "#",
    tags: ["B2C", "Growth"],
  },
  {
    id: 4,
    title: "Project Title Four",
    description: "End-to-end feature development from discovery through launch — research, prioritisation, and cross-functional execution.",
    prototypeUrl: "#",
    tags: ["Platform", "API"],
  },
  {
    id: 5,
    title: "Project Title Five",
    description: "A strategic initiative that tackled a core user pain point and resulted in measurable retention improvements.",
    prototypeUrl: "#",
    tags: ["Retention", "UX"],
  },
  {
    id: 6,
    title: "Project Title Six",
    description: "Built a new product vertical from scratch — defining the problem space, MVP scope, and go-to-market strategy.",
    prototypeUrl: "#",
    tags: ["0→1", "Strategy"],
  },
  {
    id: 7,
    title: "Project Title Seven",
    description: "Data-driven optimisation of a key conversion funnel, leading to significant uplift in activation and revenue.",
    prototypeUrl: "#",
    tags: ["Growth", "Analytics"],
  },
  {
    id: 8,
    title: "Project Title Eight",
    description: "Cross-functional collaboration to ship an enterprise feature on time, meeting complex compliance and UX requirements.",
    prototypeUrl: "#",
    tags: ["Enterprise", "B2B"],
  },
];
