export interface WritingArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Philosophy' | 'Accounting & Learning' | 'Literature' | 'Personal Reflections' | 'Technology';
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const WRITINGS: WritingArticle[] = [
  {
    slug: "amor-fati-beyond-mere-acceptance",
    title: "Amor Fati: Why Loving One's Fate is More Than Passive Acceptance",
    subtitle: "A personal reflection on Nietzschean thought, Stoic resolve, and finding purpose through unavoidable friction.",
    category: "Philosophy",
    readTime: "6 min read",
    date: "February 2026",
    author: "Sahitya Yadav",
    excerpt: "Most people view acceptance as a tired surrender to circumstances they cannot control. Amor fati demands something far more audacious: treating each obstacle as an indispensable ingredient of one's becoming.",
    content: [
      "In modern everyday parlance, 'acceptance' often sounds like defeat. We speak of accepting a bad exam outcome, accepting an unfair judgment, or accepting personal grief with a tone of heavy resignation, as if we are merely settling for second-best because the universe refused our preferred script.",
      "Friedrich Nietzsche proposed a concept that cuts directly across this passive posture: Amor Fati—the love of fate. In 'The Gay Science', he writes of wanting nothing to be different, neither forwards nor backwards, not for all eternity. This is not fatalism. Fatalism says, 'Nothing I do matters, so I will lie down.' Amor fati says, 'Whatever has brought me to this moment—every error, every bitter setback, every solitary night of doubt—is the necessary ground upon which my character must stand.'",
      "When we prepare for demanding professional hurdles, such as the ICAN examinations in Nepal, it is easy to cultivate a hidden resentment. We resent the volume of cost formulas, we resent the hours sacrificed, we resent the quiet isolation while others seem to progress effortlessly. Yet resentment poisons the mind and clouds analytical thought.",
      "To apply amor fati to study and to life is to ask: 'How does this exact difficulty instruct me?' When a complex process-costing reconciliation fails to balance, the error is not a personal curse; it is an objective instruction. When personal solitude feels heavy, it is also the quiet space where original thinking takes root.",
      "Loving one's fate is therefore not an excuse for passivity. It is an active posture of courage. It is saying yes to reality as it actually is, so that our subsequent choices are grounded in truth rather than comforting illusion."
    ],
    tags: ["Philosophy", "Amor Fati", "Nietzsche", "Stoicism", "Mindset"]
  },
  {
    slug: "logic-of-cost-behavior-marginal-contribution",
    title: "The Logic of Cost Behavior: Why Marginal Contribution Precedes Profit",
    subtitle: "Demystifying fixed versus variable behavior and the foundational discipline of working notes.",
    category: "Accounting & Learning",
    readTime: "7 min read",
    date: "January 2026",
    author: "Sahitya Yadav",
    excerpt: "Before an enterprise can report an operating profit, every unit sold must first wage an incremental battle against fixed overheads. Understanding this dynamic turns accounting from cold bookkeeping into strategic deduction.",
    content: [
      "Accounting is frequently misunderstood by outside observers as an exercise in rote memorization—endless rules of debit and credit, standard voucher formats, and statutory compliance. But when one dives into Cost and Management Accounting, one discovers a branch of applied deductive logic as elegant as geometry.",
      "The central insight of marginal costing lies in understanding how costs behave in response to operational volume. In the short run, fixed production overheads—such as factory rent, equipment depreciation, and supervisory salaries—remain static within relevant capacity limits. Variable costs—raw materials, direct piece wages, consumable tools—fluctuate in direct proportion to units produced.",
      "Thus emerges the concept of the Contribution Margin: Sales Revenue minus Variable Cost. This margin does not belong to profit yet. Its first duty is to cover the sunk mass of fixed overheads. Only after total contribution equals fixed costs—the Break-Even Point—does every additional rupee earned drop directly into net operating surplus.",
      "Why is this vital for an ICAN student or a decision-maker? Because conventional financial accounting, with its absorption of fixed costs into ending inventory, can easily mislead. In an absorption costing system, an overproducing firm can manufacture unneeded stock, trap fixed overhead in closing inventory on the balance sheet, and artificially inflate this quarter's reported profit. Marginal costing exposes this illusion cleanly.",
      "In solving these numerical scenarios, the difference between an average answer and an impeccable working note is the declaration of underlying assumptions. State your basis of apportionment clearly. Prove the self-balancing mechanism. Clear thinking in accounting produces clear working notes."
    ],
    tags: ["Cost Accounting", "ICAN", "Marginal Costing", "Analytical Reasoning"]
  },
  {
    slug: "echoes-in-the-valley-nepali-ghazal",
    title: "Echoes in the Valley: On the Emotional Landscape of the Nepali Ghazal",
    subtitle: "Reflections on the disciplined cadence of matla, radif, and the quiet beauty of solitary contemplation.",
    category: "Literature",
    readTime: "5 min read",
    date: "December 2025",
    author: "Sahitya Yadav",
    excerpt: "The ghazal is a unique literary architecture: each couplet (sher) is an independent universe, yet they are all bound together by the same rhythmic heartbeat and recurring rhyme.",
    content: [
      "There is an exquisite tension at the heart of the ghazal tradition. In Western free verse, a thought can ramble across broken lines and irregular rhythms. In the ghazal, however, emotion must pass through an exacting architectural crucible: the matla (the opening couplet), the radif (the identical repeating refrain), and the qafiya (the rhyming sound that immediately precedes it).",
      "Yet far from suffocating expression, this formal constraint intensifies it. Because each sher must stand on its own feet as a complete philosophical or emotional realization, there is no room for filler words.",
      "In contemporary Nepali literature, the ghazal has found a deeply fertile ground. The Nepali language possesses a natural softness and rhythmic flexibility that accommodates both classical Persian dignity and the intimate, bittersweet longing of rural and urban Nepali life.",
      "When I write couplets late at night, I am drawn to themes of unexpressed silence, the alienation of modern city living, and the contrast between human tenderness and the passage of time. A ghazal does not shout; it whispers a question that lingers long after the book is closed."
    ],
    tags: ["Nepali Literature", "Ghazal", "Poetry", "Culture"]
  },
  {
    slug: "courage-to-think-in-solitude",
    title: "The Courage to Think in Solitude: Navigating Social Pressure as a Student",
    subtitle: "Why intellectual independence is uncomfortable, and why it remains the most necessary virtue.",
    category: "Personal Reflections",
    readTime: "6 min read",
    date: "November 2025",
    author: "Sahitya Yadav",
    excerpt: "Conformity offers warmth and social safety. But when you begin examining your assumptions honestly, you inevitably step outside the comfort of the crowd.",
    content: [
      "Society loves answers; it is deeply unsettled by genuine questions. From childhood, we are rewarded for reciting the approved responses—in school examinations, in family gatherings, in political discourse, and on social media algorithms designed to amplify consensus.",
      "To step back and ask: 'Why do we believe this? Is this principle true because it has genuine merit, or merely because everyone around me repeats it?' is an act that immediately isolates you. You suddenly realize that many of the beliefs people defend with passionate anger are convictions they never chose for themselves.",
      "This is why intellectual independence requires moral courage. It is not about being contrarian or seeking disagreement for spectacle—contrarianism for its own sake is just another form of being defined by the herd. Genuine independent thought is the quiet willingness to sit alone with an idea, examine its evidence and counter-arguments, and arrive at a conclusion even if none of your peers share it.",
      "In my own journey balancing professional examination pressures with philosophical study, solitude has become a sanctuary rather than a punishment. In solitude, the noise of other people's expectations quiets down, and the true voice of reason and conscience has room to speak."
    ],
    tags: ["Critical Thinking", "Solitude", "Personal Outlook", "Ethics"]
  },
  {
    slug: "learning-through-terminal-linux-systems",
    title: "Learning Through the Terminal: What Linux Teaches Us About Transparent Systems",
    subtitle: "Moving past graphical illusions to understand the mechanics of operating systems and command-line agency.",
    category: "Technology",
    readTime: "5 min read",
    date: "October 2025",
    author: "Sahitya Yadav",
    excerpt: "A GUI hides the machine behind metaphors of desktops and trash cans. The Linux shell strips away the veneer and invites you to understand how computation actually happens.",
    content: [
      "My fascination with technology took a sharp turn the first time I booted a live Kali Linux distribution from a modest USB flash drive. Up until that point, using a computer meant existing within the padded walls of proprietary operating systems where everything was wrapped in glossy icons and hidden permissions.",
      "Booting into a live Linux environment was an intellectual awakening comparable to reading primary philosophical texts instead of secondary summaries. In Linux, everything is a file. The processes, the memory mapping, the hardware devices under /dev, the network sockets—they are not magical abstractions, but tangible parts of an open hierarchy.",
      "Learning standard terminal commands, understanding how pipes connect standard output of one tool to standard input of another, and inspecting logs taught me that complexity is manageable when built on clear, modular first principles.",
      "This perspective directly complements my accounting studies. Both accounting ledgers and Unix systems demand systemic transparency, accurate audit trails, and respect for immutable rules. When you understand the underlying mechanics, you are no longer a passive spectator; you become someone who can troubleshoot, repair, and build."
    ],
    tags: ["Technology", "Linux", "Open Source", "Command Line", "Systems"]
  }
];
