export interface PhilosophicalTheme {
  id: string;
  title: string;
  focus: string;
  summary: string;
  historicalRoot: string;
  originalReflection: string;
  keyQuestions: string[];
}

export const PHILOSOPHY_THEMES: PhilosophicalTheme[] = [
  {
    id: "amor-fati",
    title: "Amor Fati: Active Embracing of Life",
    focus: "Radical Acceptance & Purpose",
    summary: "The philosophical practice of not merely enduring one's fate, but actively welcoming every triumph, hardship, loss, and turn of circumstance as the very raw material of existence.",
    historicalRoot: "Articulated by Friedrich Nietzsche in 'Ecce Homo' and 'The Gay Science', echoing older Stoic attitudes from Marcus Aurelius and Epictetus regarding the unchosen nature of circumstance.",
    originalReflection: "To embrace life is not merely to accept what happens, but to confront it honestly, learn from it, and find meaning in the act of living. When we cease treating difficulty as an intrusion into life, we begin to realize that adversity is the very medium through which human depth is forged.",
    keyQuestions: [
      "How do we distinguish between genuine acceptance and passive resignation?",
      "Can profound suffering be integrated into one's sense of self without denial?",
      "Does loving one's fate require justifying past injustices, or choosing how to stand before them?"
    ]
  },
  {
    id: "stoicism-resilience",
    title: "Stoicism & The Discipline of Assent",
    focus: "Inner Autonomy & Perception",
    summary: "The dichotomy of control: distinguishing between what lies within our sovereign power (opinions, intentions, moral choices) and what is fundamentally outside of it (outcomes, reputations, external events).",
    historicalRoot: "Epictetus' Enchiridion, Seneca's Moral Letters to Lucilius, and Marcus Aurelius' Meditations.",
    originalReflection: "Stoicism is often mistakenly flattened into emotional coldness. In truth, it is an ethics of quiet clarity: freeing the mind from panic over things it cannot command, so that it can direct its complete energy toward how it acts, reasons, and treats others in the present hour.",
    keyQuestions: [
      "Where does our true sphere of agency begin and end?",
      "How can emotional sensitivity coexist with stoic fortitude?",
      "Why is clarity of judgment more protective than defense mechanisms?"
    ]
  },
  {
    id: "nietzsche-morality",
    title: "Nietzsche & The Revaluation of Values",
    focus: "Intellectual Courage & Autonomy",
    summary: "Investigating the cultural origins of morality, the danger of herd conformity, and the courage required to question unquestioned social axioms.",
    historicalRoot: "Friedrich Nietzsche's 'On the Genealogy of Morals' and 'Beyond Good and Evil'.",
    originalReflection: "Inherited beliefs offer psychological safety at the expense of genuine moral understanding. Questioning convention is not a rebellion for rebellion's sake; it is the difficult obligation to ask whether what we call good is truly life-affirming or merely comfortable obedience.",
    keyQuestions: [
      "Which of our convictions are genuinely ours, and which are cultural habits?",
      "Why does independent thought often trigger collective anxiety?",
      "How does one construct values after dismantling dogma?"
    ]
  },
  {
    id: "existential-meaning",
    title: "Existential Vulnerability & Meaning",
    focus: "Freedom, Solitude & Responsibility",
    summary: "Acknowledging that meaning is not pre-packaged in the cosmos, but cultivated through conscious choices, honest vulnerability, and the courage to endure uncertainty.",
    historicalRoot: "Existential traditions from Søren Kierkegaard, Jean-Paul Sartre, and Viktor Frankl.",
    originalReflection: "We are born into an unfinished world without a handbook. Rather than despairing over absence of absolute guarantees, human dignity resides in making conscious commitments—to learn, to love, to write, to bear one's responsibilities—even while knowing our impermanence.",
    keyQuestions: [
      "Can vulnerability be our greatest source of authentic connection?",
      "What is the relationship between solitary reflection and communal solidarity?",
      "How do we live meaningfully in the face of inevitable mortality?"
    ]
  }
];
