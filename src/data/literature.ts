export interface LiteraryWork {
  id: string;
  titleNepali: string;
  titleEnglish: string;
  genre: 'Ghazal' | 'Kavita (Poem)' | 'Muktak' | 'Prose Reflection';
  theme: 'Loneliness' | 'Memory' | 'Longing' | 'Love' | 'Existence' | 'Reflection';
  language: 'Nepali' | 'English' | 'Bilingual';
  stanzasNepali: string[];
  stanzasEnglish: string[];
  reflectionNote: string;
  date: string;
}

export const LITERARY_WORKS: LiteraryWork[] = [
  {
    id: "ghazal-khamoshi",
    titleNepali: "मौनताको गहिराइ",
    titleEnglish: "The Depth of Silence",
    genre: "Ghazal",
    theme: "Loneliness",
    language: "Bilingual",
    stanzasNepali: [
      "शब्द हराए जहाँ, त्यहीँबाट संवाद सुरु भयो,\nसोध्नेहरू धेरै थिए, तर मन मौनमै अडिग रह्यो।",
      "सपनाहरूको भार बोकेर हिँड्दा थाहै भएन,\nकुन दोबाटोमा मेरो आफ्नै पदचाप अलमल पर्यो।",
      "हर रात ऐना अगाडि उभिँदा एउटै प्रश्न आउँछ,\nयो अनुहार मेरै हो कि समयले कोरिदिएको भ्रम भयो?"
    ],
    stanzasEnglish: [
      "Where words dissolved, that was where true dialogue began;\nMany came with questions, yet the heart remained steadfast in silence.",
      "Walking beneath the quiet weight of distant aspirations,\nI hardly noticed at which forgotten crossroad my own footsteps faltered.",
      "Standing before the mirror each night, one lone riddle remains:\nIs this face truly mine, or merely an illusion sculpted by passing time?"
    ],
    reflectionNote: "A meditation on the quiet solitary spaces of life, where one confronts identity beyond external social expectations.",
    date: "2025"
  },
  {
    id: "ghazal-yatra-ra-samaya",
    titleNepali: "यात्रा र समयको पाना",
    titleEnglish: "Pages of the Journey and Time",
    genre: "Ghazal",
    theme: "Existence",
    language: "Bilingual",
    stanzasNepali: [
      "नदी बगेझैँ दिनहरू बित्दैछन् बिना कुनै हल्ला,\nआँधी आउँदा पनि दियो बल्छ, यदि विश्वास भए मनमा खुला।",
      "हरेक पीडाले एउटा नयाँ ज्ञानको ढोका खोल्छ यहाँ,\nपतन स्वीकार नगरी शिखरको अर्थ कसले बुझ्ला?"
    ],
    stanzasEnglish: [
      "Like rivers quietly flowing, the days pass without fanfare or shout;\nEven when storms arrive, a small flame endures if faith stays awake within.",
      "Every ache quietly opens a doorway to newly awakened clarity;\nWho could ever comprehend the summit without first embracing the descent?"
    ],
    reflectionNote: "Connecting the philosophical notion of amor fati with the rhythm of classical ghazal matla and maqta.",
    date: "2025"
  },
  {
    id: "kavita-eklo-kotha",
    titleNepali: "पुस्तक र रातको पहरेदार",
    titleEnglish: "Books and the Night Watchman",
    genre: "Kavita (Poem)",
    theme: "Reflection",
    language: "Bilingual",
    stanzasNepali: [
      "टेबलमा फिँजिएका हिसाबका पानाहरू,\nर छेउमै निदाएको एउटा पुरानो डायरी।\nएकातिर अंकहरूको स्पष्ट सत्य,\nअर्कातिर भावहरूको अन्तहीन गहिराइ।\n\nम दुवै संसारको बीचमा उभिएर सोच्छु—\nजीवन हिसाब हो कि कविता?"
    ],
    stanzasEnglish: [
      "Pages of balance sheets spread across the solitary desk,\nAnd right beside them, resting, an old weathered diary.\nOn one side, the indisputable clarity of cold arithmetic;\nOn the other, the bottomless resonance of human longing.\n\nStanding right between these two worlds, I wonder:\nIs life a balance sheet to be reconciled, or a verse to be felt?"
    ],
    reflectionNote: "Written late at night during ICAN accounting preparation, pondering the bridge between numerical exactness and human sentiment.",
    date: "2025"
  },
  {
    id: "muktak-bhavana",
    titleNepali: "समयको डोब",
    titleEnglish: "Traces of Memory",
    genre: "Muktak",
    theme: "Memory",
    language: "Bilingual",
    stanzasNepali: [
      "भुल्न खोज्दा झन् चहकिलो बन्छ अतीतको छाया,\nकहिले नमेटिने गरी बसेछ यो मनको माया।\nबाटो छुट्टिए पनि सम्झनाको बाटो कहिल्यै बन्द हुँदैन,\nजीवन यस्तै रहेछ—केही सत्य, केही अधुरो काया।"
    ],
    stanzasEnglish: [
      "The more one tries to forget, the brighter the shadow of memory glows;\nIndelible remains the quiet tender devotion of the soul.\nPaths may diverge, yet the corridor of remembrance never seals shut;\nSuch is living—a blend of undeniable truth and unfinished forms."
    ],
    reflectionNote: "A 4-line traditional Nepali Muktak touching on memory, detachment, and emotional nostalgia.",
    date: "2024"
  }
];
