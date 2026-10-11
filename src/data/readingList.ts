export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  category: 'Philosophy' | 'Stoicism' | 'Literature' | 'Psychology' | 'Accounting' | 'Technology';
  note: string;
  status: 'Completed' | 'Currently Reading' | 'Queued';
}

export const READING_LIST: ReadingItem[] = [
  {
    id: "meditations-marcus-aurelius",
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Stoicism",
    note: "A masterwork of private psychological discipline. Reminds me that external chaos cannot breach the inner citadel unless we invite it in.",
    status: "Completed"
  },
  {
    id: "beyond-good-and-evil",
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    note: "A relentless interrogation of inherited philosophical prejudices and the psychology behind moral systems.",
    status: "Completed"
  },
  {
    id: "the-gay-science",
    title: "The Gay Science",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    note: "Home of the Amor Fati aphorism. Teaches an affirmative, joyful realism in the face of profound difficulty.",
    status: "Currently Reading"
  },
  {
    id: "cost-management-accounting-study",
    title: "Cost and Management Accounting (ICAN Study Series)",
    author: "Institute of Chartered Accountants of Nepal",
    category: "Accounting",
    note: "Foundational exploration of standard costing, variance analysis, and operational decision models.",
    status: "Currently Reading"
  },
  {
    id: "muna-madan",
    title: "Muna Madan",
    author: "Laxmi Prasad Devkota",
    category: "Literature",
    note: "The timeless pinnacle of Nepali poetic sensitivity, highlighting the human cost of economic exile and true nobility of heart.",
    status: "Completed"
  },
  {
    id: "man-and-his-symbols",
    title: "Man and His Symbols",
    author: "Carl G. Jung",
    category: "Psychology",
    note: "An accessible introduction to the collective unconscious, shadow integration, and archetypal dreams.",
    status: "Queued"
  },
  {
    id: "linux-command-line",
    title: "The Linux Command Line",
    author: "William Shotts",
    category: "Technology",
    note: "A systematic journey from basic shell commands to shell scripting and system architecture.",
    status: "Completed"
  },
  {
    id: "enchiridion",
    title: "Enchiridion (Handbook)",
    author: "Epictetus",
    category: "Stoicism",
    note: "Concise, unflinching manual on the dichotomy of control and preserving tranquil judgment.",
    status: "Completed"
  }
];
