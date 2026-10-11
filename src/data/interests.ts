export interface InterestCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullNarrative: string;
  keyAreas: { name: string; detail: string }[];
}

export const INTEREST_CATEGORIES: InterestCategory[] = [
  {
    id: "accounting-reasoning",
    title: "Accounting & Analytical Reasoning",
    shortDescription: "Structured thinking, cost systems, financial logic, and systematic problem-solving.",
    fullNarrative: "Preparing for professional accounting examinations under the Institute of Chartered Accountants of Nepal (ICAN) is more than memorizing regulatory codes; it is the practice of imposing logical clarity upon complex economic activity. Cost and management accounting reveals how resources flow through organizations—tracing direct materials, modeling worker efficiency schemes, and structuring overhead allocation.",
    keyAreas: [
      {
        name: "Cost Behavior & Marginal Analysis",
        detail: "Distinguishing fixed from variable cost behaviors to evaluate contribution margins, break-even limits, and operational risk."
      },
      {
        name: "Process & Equivalent Unit Valuation",
        detail: "Decomposing continuous manufacturing sequences into precise fractional equivalent units under FIFO and Weighted Average logic."
      },
      {
        name: "Overhead Distribution & Cost Centers",
        detail: "Allocating and apportioning indirect costs across primary production and secondary service departments using simultaneous equations."
      },
      {
        name: "Deductive Working Notes",
        detail: "Cultivating an uncompromising discipline: treating financial statements as deductive proofs backed by auditable line-item working calculations."
      }
    ]
  },
  {
    id: "philosophy-inquiry",
    title: "Philosophy & Critical Inquiry",
    shortDescription: "Questions of existence, morality, suffering, freedom, and the courage to think independently.",
    fullNarrative: "Philosophy is not an academic vanity; it is an existential necessity for navigating life honestly. Through the rigorous examination of Friedrich Nietzsche and ancient Stoic thinkers like Marcus Aurelius and Epictetus, I seek frameworks that do not flinch before reality's harshness. Amor fati—the active, loving acceptance of necessity—serves as an anchor against resentment.",
    keyAreas: [
      {
        name: "Amor Fati & Radical Acceptance",
        detail: "Transforming the unavoidable trials of living from causes of bitterness into fuel for emotional maturity and purpose."
      },
      {
        name: "Stoic Autonomy & Discipline of Assent",
        detail: "Disentangling internal moral agency from uncontrollable external circumstances, guarding tranquility without indifference."
      },
      {
        name: "Nietzschean Critique of Conventional Dogma",
        detail: "Interrogating unexamined social morals, herd conformity, and the difficult challenge of forging genuine personal values."
      },
      {
        name: "Consciousness, Love & Suffering",
        detail: "Reflecting on how vulnerability, human attachment, and our brief presence in the universe give emotional weight to existence."
      }
    ]
  },
  {
    id: "literature-expression",
    title: "Literature & Creative Expression",
    shortDescription: "Nepali poetry, classical Ghazals, emotional nuance, and introspective literary prose.",
    fullNarrative: "While accounting exercises the analytical intellect, literature gives voice to that which numbers cannot compute. Nepali poetry and the disciplined musicality of the Ghazal provide a vessel for exploring solitude, longing, memory, and the tender fragility of human bonds. Writing in Devanagari grounds thought in cultural roots while seeking universal resonance.",
    keyAreas: [
      {
        name: "Ghazal Form & Meter",
        detail: "Honoring the classical cadence of radif, qafiya, and matla while expressing modern existential ambivalence."
      },
      {
        name: "Themes of Memory & Longing",
        detail: "Exploring how distance, time, and changing landscapes shape human affection and personal solitude."
      },
      {
        name: "Bilingual Literary Reflection",
        detail: "Translating and annotating Nepali poetic sensibilities into English prose to invite cross-linguistic understanding."
      },
      {
        name: "Emotional Authenticity",
        detail: "Writing without melodrama—capturing quiet truths about loneliness, duty, and quiet beauty in everyday Nepal."
      }
    ]
  },
  {
    id: "technology-science",
    title: "Technology & Scientific Inquiry",
    shortDescription: "Linux operating systems, live USB testing, hardware architecture, and foundational scientific principles.",
    fullNarrative: "Technology represents hands-on curiosity about how constructed systems function beneath their user interfaces. Exploring Linux environments, testing bootable Kali Linux distributions on live USBs, troubleshooting computer hardware, and studying principles of mathematics and physics provide a practical, empirical counterpart to philosophical inquiry.",
    keyAreas: [
      {
        name: "Linux Systems & Terminal Fluency",
        detail: "Investigating Unix philosophy: modular tools, directory hierarchies, permissions, shell scripting, and kernel-user space separation."
      },
      {
        name: "Kali Linux Live USB Environments",
        detail: "Running non-destructive persistent and live environments to study network tools, security concepts, and hardware diagnostics."
      },
      {
        name: "Hardware Troubleshooting & System Assembly",
        detail: "Understanding memory bus architecture, storage bottlenecks, CPU thermal profiles, and component diagnostics."
      },
      {
        name: "Physics & Foundational Mathematics",
        detail: "Following the mathematical descriptions of physical laws—from thermodynamics to mechanics—as models of reality's deep order."
      }
    ]
  }
];
