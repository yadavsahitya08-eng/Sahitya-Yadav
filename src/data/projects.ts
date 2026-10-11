export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Social Platform' | 'Creative Media' | 'Writing & Publication';
  status: 'Active' | 'In Development' | 'Planned';
  description: string;
  platform: string;
  link?: string;
  contentCategories: string[];
  roadmap?: { step: number; title: string; detail: string }[];
  featuredTopics?: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "unfiltered-opinion",
    title: "Unfiltered Opinion",
    tagline: "Solidarity in the struggle.",
    category: "Social Platform",
    status: "Active",
    platform: "Facebook Page",
    link: "https://www.facebook.com/unfilteredopinion",
    description: "An inclusive, non-political platform dedicated to discussing everyday life, human experiences, and the struggles people share. Created to offer a space for honest reflection free from partisan posturing or sensationalist noise.",
    contentCategories: [
      "Everyday Life & Lived Realities",
      "Human Vulnerability & Shared Burdens",
      "Independent Social Observation",
      "Constructive & Honest Dialogue"
    ],
    featuredTopics: [
      "The quiet weight of youth expectations in contemporary Nepal",
      "Why listening without judgment is an act of social solidarity",
      "Navigating career anxiety while staying grounded in personal values"
    ]
  },
  {
    id: "philosophy-youtube-channel",
    title: "Philosophy Video Project",
    tagline: "Bridging classical questions with contemporary dilemmas.",
    category: "Creative Media",
    status: "In Development",
    platform: "YouTube (In Production)",
    description: "A planned digital video initiative connecting philosophical traditions—Stoicism, Nietzschean ethics, existential inquiry—to real human questions through accessible explanations, thoughtful visual pacing, and genuine inquiry.",
    contentCategories: [
      "Nietzsche Explained Without Jargon",
      "Stoicism in Everyday Struggles",
      "Philosophy & Human Relationships",
      "Existential Questions on Meaning & Mortality",
      "Critical Thinking & Intellectual Independence"
    ],
    roadmap: [
      {
        step: 1,
        title: "Define Core Identity & Audience Needs",
        detail: "Clarify educational principles: no clickbait, no superficial motivational clichés, focus on conceptual rigor made accessible."
      },
      {
        step: 2,
        title: "Visual & Narrative Language",
        detail: "Develop clean editorial graphic motifs, typography, and calm pacing suitable for reflective viewing."
      },
      {
        step: 3,
        title: "Draft Initial Video Scripts",
        detail: "Complete first 4 scripts: 'Amor Fati: Loving What You Cannot Change', 'The Stoic Mind in Academic Pressure', 'Beyond Good and Herd', and 'Why We Dread Silence'."
      },
      {
        step: 4,
        title: "Audio & Recording Calibration",
        detail: "Configure clear voice recording, minimalist backdrop, and software workflow for clean production."
      },
      {
        step: 5,
        title: "Pilot Release & Community Feedback",
        detail: "Publish the pilot essay video, invite thoughtful critique from peers and reading groups."
      },
      {
        step: 6,
        title: "Sustained Library of Video Essays",
        detail: "Build a permanent repository of evergreen philosophical reflections."
      }
    ]
  }
];
