export interface AcademicTopic {
  id: string;
  title: string;
  category: 'Cost Accounting' | 'Management Accounting' | 'Analytical Methodology' | 'Problem Solving';
  description: string;
  keyConcepts: string[];
  workingNoteExample?: {
    problemContext: string;
    stepTitle: string;
    steps: { label: string; formula: string; explanation: string }[];
  };
}

export const ACADEMIC_TOPICS: AcademicTopic[] = [
  {
    id: "marginal-absorption-costing",
    title: "Marginal vs. Absorption Costing",
    category: "Cost Accounting",
    description: "Analyzing the behavioral difference between treating fixed production overheads as period costs (marginal) versus inventoriable product costs (absorption). Crucial for profit reconciliation and pricing decisions.",
    keyConcepts: [
      "Fixed overhead volume variance",
      "Impact of production exceeding sales on reported profit",
      "Contribution margin analysis (Sales - Variable Costs)",
      "Break-even and margin of safety calculations"
    ],
    workingNoteExample: {
      problemContext: "Reconciliation of profit when Closing Stock exceeds Opening Stock by 500 units with Fixed Overhead rate of NPR 40 per unit.",
      stepTitle: "Working Note 1: Profit Difference Calculation",
      steps: [
        {
          label: "Volume Change",
          formula: "Change in Inventory = Closing Stock (2,500 units) - Opening Stock (2,000 units) = +500 units",
          explanation: "When closing inventory is greater than opening, absorption costing carries forward fixed overhead into next period."
        },
        {
          label: "Valuation Differential",
          formula: "Difference in Profit = Change in Inventory × Standard Fixed Overhead Rate = 500 × NPR 40 = NPR 20,000",
          explanation: "Absorption Costing Profit = Marginal Costing Profit + NPR 20,000."
        }
      ]
    }
  },
  {
    id: "process-costing-equivalent-units",
    title: "Process Costing & Equivalent Units",
    category: "Cost Accounting",
    description: "Determining unit cost across sequential mass-production stages where unfinished work-in-progress (WIP) requires precise fractional completion evaluation under FIFO and Weighted Average methods.",
    keyConcepts: [
      "Statement of Equivalent Production Units",
      "Normal Loss vs. Abnormal Loss & Abnormal Gain",
      "Scrap realisable value adjustment against material cost",
      "Inter-process profit and transfer pricing"
    ],
    workingNoteExample: {
      problemContext: "Evaluating 800 units of Closing WIP completed 100% for materials and 60% for conversion costs.",
      stepTitle: "Working Note 2: Statement of Equivalent Production",
      steps: [
        {
          label: "Material Equivalent Units",
          formula: "800 units × 100% = 800 Equivalent Units",
          explanation: "All raw material is introduced at the commencement of the process stage."
        },
        {
          label: "Conversion Equivalent Units",
          formula: "800 units × 60% = 480 Equivalent Units",
          explanation: "Direct wages and production overheads accrue uniformly throughout processing."
        }
      ]
    }
  },
  {
    id: "overhead-allocation-apportionment",
    title: "Overhead Allocation & Repeated Distribution",
    category: "Management Accounting",
    description: "Distributing indirect production and administrative expenses to cost centers using rational bases (e.g., machine hours, floor area, kilowatt hours), followed by reciprocal service department reapportionment.",
    keyConcepts: [
      "Primary Distribution: Direct allocation & appropriate apportionment bases",
      "Secondary Distribution: Simultaneous equation & repeated distribution methods",
      "Predetermined overhead absorption rates (OAR)",
      "Under-absorption and over-absorption treatment in cost accounts"
    ]
  },
  {
    id: "labour-costing-incentive-schemes",
    title: "Labour Costing & Remuneration Schemes",
    category: "Cost Accounting",
    description: "Mathematical modeling of efficiency wage schemes comparing Halsey, Rowan, and differential piece-rate systems, evaluating their impact on effective hourly earnings and employer cost per unit.",
    keyConcepts: [
      "Halsey Premium Plan: Basic Time Wage + 50% of Time Saved × Time Rate",
      "Rowan Scheme: Basic Wage + (Time Saved / Time Allowed) × Basic Wage",
      "Idle time analysis: Normal idle time vs abnormal idle time",
      "Labour turnover ratios: Separation, replacement, and flux methods"
    ]
  },
  {
    id: "analytical-problem-solving",
    title: "Structured Working Notes & Logical Deductions",
    category: "Analytical Methodology",
    description: "A disciplined pedagogical practice: treating every numerical balance sheet or cost ledger problem as a deductive proof where assumptions are explicitly declared, and every ledger entry connects to a verified sub-calculation.",
    keyConcepts: [
      "Explicit statement of accounting assumptions",
      "Self-balancing reconciliation proofs",
      "Multi-perspective method comparison (e.g. FIFO vs Weighted Average)",
      "Clear line-item references linking figures back to working notes"
    ]
  }
];
