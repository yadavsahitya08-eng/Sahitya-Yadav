import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/config';
import { WRITINGS } from '../data/writings';
import { PROJECTS } from '../data/projects';
import { ASSETS } from '../assets';
import { ArrowRight, BookOpen, Sparkles, Feather, Terminal, Layers } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* A. Hero Section (Split Screen Technical/Editorial) */}
      <section className="pt-4 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typographic Hierarchy with Syne Display */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.15em] uppercase text-[#facc15]">
              <span>Personal Portfolio // Intellectual Log</span>
              <span aria-hidden="true">·</span>
              <span>Nepal [UTC +5:45]</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold tracking-[-0.05em] text-[#e2e2e4] leading-[0.94] text-balance">
              Between Reason, Reflection, and Expression.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e2e4] opacity-75 max-w-xl leading-relaxed">
              An ongoing journey through accounting, philosophy, literature, and the questions that make us human. Exploring the intersection of analytical thinking, philosophical inquiry, and creative expression.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-syne font-extrabold uppercase text-xs tracking-wider bg-[#facc15] text-[#111113] hover:bg-[#eab308] transition-colors cursor-pointer shadow-sm"
              >
                <span>Explore My World</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('writings')}
                className="inline-flex items-center gap-2 px-5 py-3.5 font-mono text-xs tracking-wider uppercase text-[#e2e2e4] border border-[rgba(226,226,228,0.15)] hover:border-[#facc15] hover:text-[#facc15] transition-colors cursor-pointer bg-[rgba(255,255,255,0.02)]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read My Writings</span>
              </button>
            </div>

            {/* Quiet Academic & Philosophical status */}
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] uppercase tracking-wider text-[#e2e2e4] opacity-50">
              <span>ICAN Student</span>
              <span aria-hidden="true">//</span>
              <span>Independent Thinker</span>
              <span aria-hidden="true">//</span>
              <span>Nepali Poetry</span>
            </div>
          </div>

          {/* Right Column: Visual Container (Abstract Fine-Art Parchment Composition) */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden border border-[rgba(226,226,228,0.15)] bg-[#18181c] aspect-[4/3] lg:aspect-auto lg:h-[460px]">
              <img
                src={ASSETS.hero}
                alt="Minimalist abstract editorial parchment composition with fine geometric lines and ink"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-110 transition-transform duration-700 group-hover:scale-102 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[0.68rem] uppercase tracking-wider text-[#e2e2e4] bg-[#111113]/80 backdrop-blur-sm p-3 border border-[rgba(226,226,228,0.1)] flex items-center justify-between">
                <span className="text-[#facc15]">Geometry of Thought</span>
                <span className="opacity-60">Nepal Archive</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Dimension Metric Strip below split */}
        <div className="mt-16 pt-8 border-t border-[rgba(226,226,228,0.1)] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-l border-[rgba(226,226,228,0.1)] pl-4">
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[#facc15]">Focus 01</div>
            <div className="text-lg font-syne font-bold text-[#e2e2e4] mt-1">Cost Accounting</div>
            <div className="font-mono text-[0.65rem] text-[#e2e2e4] opacity-50 mt-0.5">ICAN professional studies</div>
          </div>
          <div className="border-l border-[rgba(226,226,228,0.1)] pl-4">
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[#facc15]">Focus 02</div>
            <div className="text-lg font-syne font-bold text-[#e2e2e4] mt-1">Philosophical Ethics</div>
            <div className="font-mono text-[0.65rem] text-[#e2e2e4] opacity-50 mt-0.5">Amor fati & Stoic resilience</div>
          </div>
          <div className="border-l border-[rgba(226,226,228,0.1)] pl-4">
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[#facc15]">Focus 03</div>
            <div className="text-lg font-syne font-bold text-[#e2e2e4] mt-1">Nepali Literature</div>
            <div className="font-mono text-[0.65rem] text-[#e2e2e4] opacity-50 mt-0.5">Ghazals, Kavita & Muktak</div>
          </div>
          <div className="border-l border-[rgba(226,226,228,0.1)] pl-4">
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[#facc15]">Focus 04</div>
            <div className="text-lg font-syne font-bold text-[#e2e2e4] mt-1">Systems & Linux</div>
            <div className="font-mono text-[0.65rem] text-[#e2e2e4] opacity-50 mt-0.5">Live USBs & hardware</div>
          </div>
        </div>
      </section>

      {/* B. Identity Overview (4 Dimensions Grid) */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[rgba(226,226,228,0.1)] pb-4">
          <div>
            <span className="tech-label">Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-[#e2e2e4] mt-1">
              Four Dimensions of Inquiry
            </h2>
          </div>
          <button
            onClick={() => navigate('interests')}
            className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Detailed breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Accounting */}
          <div className="p-8 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[#facc15] transition-all space-y-4">
            <div className="w-10 h-10 bg-[#facc15]/10 text-[#facc15] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[0.65rem] text-[#facc15] uppercase tracking-wider">Dimension 01</span>
              <h3 className="text-2xl font-syne font-bold text-[#e2e2e4]">
                Accounting & Financial Logic
              </h3>
            </div>
            <p className="text-sm text-[#e2e2e4] opacity-75 leading-relaxed">
              Studying under the Institute of Chartered Accountants of Nepal (ICAN), focusing on marginal costing, process accounting, overhead apportionment, and transparent working notes.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('academic-journey')}
                className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explore ICAN Academic Journey</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Philosophy */}
          <div className="p-8 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[#facc15] transition-all space-y-4">
            <div className="w-10 h-10 bg-[#facc15]/10 text-[#facc15] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[0.65rem] text-[#facc15] uppercase tracking-wider">Dimension 02</span>
              <h3 className="text-2xl font-syne font-bold text-[#e2e2e4]">
                Philosophy & Critical Inquiry
              </h3>
            </div>
            <p className="text-sm text-[#e2e2e4] opacity-75 leading-relaxed">
              Deeply influenced by Friedrich Nietzsche and ancient Stoicism, engaging concepts like amor fati, the discipline of assent, and the courage to interrogate inherited dogmas.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('philosophy')}
                className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read Philosophy Journal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Literature */}
          <div className="p-8 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[#facc15] transition-all space-y-4">
            <div className="w-10 h-10 bg-[#facc15]/10 text-[#facc15] flex items-center justify-center">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[0.65rem] text-[#facc15] uppercase tracking-wider">Dimension 03</span>
              <h3 className="text-2xl font-syne font-bold text-[#e2e2e4]">
                Literature & Creative Expression
              </h3>
            </div>
            <p className="text-sm text-[#e2e2e4] opacity-75 leading-relaxed">
              Writing couplets and verses exploring loneliness, memory, longing, and existential wonder, honoring both classical Devanagari meter and modern interior monologue.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('literature')}
                className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Discover Nepali Ghazals & Poetry</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 4: Technology */}
          <div className="p-8 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[#facc15] transition-all space-y-4">
            <div className="w-10 h-10 bg-[#facc15]/10 text-[#facc15] flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[0.65rem] text-[#facc15] uppercase tracking-wider">Dimension 04</span>
              <h3 className="text-2xl font-syne font-bold text-[#e2e2e4]">
                Technology & Scientific Inquiry
              </h3>
            </div>
            <p className="text-sm text-[#e2e2e4] opacity-75 leading-relaxed">
              Hands-on experimentation with Kali Linux live USB environments, hardware troubleshooting, operating system paradigms, and foundational physics.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('interests')}
                className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read Technology Reflections</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* C. Featured Philosophy Statement (Amor Fati Focal Section) */}
      <section className="border border-[rgba(226,226,228,0.15)] bg-[rgba(255,255,255,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <span className="tech-label">Signature Philosophical Outlook</span>

            <blockquote className="text-2xl sm:text-3xl font-syne font-bold text-[#e2e2e4] leading-snug">
              "{SITE_CONFIG.amorFatiQuote.reflection}"
            </blockquote>

            <div className="space-y-1 font-mono text-xs text-[#e2e2e4] opacity-70">
              <div className="text-[#facc15] font-semibold">
                {SITE_CONFIG.amorFatiQuote.attribution}
              </div>
              <div className="text-[0.68rem]">
                Theme: {SITE_CONFIG.amorFatiQuote.theme} // Original guiding principle
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('philosophy')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline cursor-pointer"
              >
                <span>Explore Amor Fati Journal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] border-t lg:border-t-0 lg:border-l border-[rgba(226,226,228,0.1)] overflow-hidden relative">
            <img
              src={ASSETS.philosophy}
              alt="Minimalist fine art painting of stone at dawn representing amor fati"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </section>

      {/* D. Featured Writing (Curated 3 Articles) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[rgba(226,226,228,0.1)] pb-4">
          <div>
            <span className="tech-label">Essays & Reflections</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-[#e2e2e4] mt-1">
              Featured Writings
            </h2>
          </div>
          <button
            onClick={() => navigate('writings')}
            className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>All articles ({WRITINGS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WRITINGS.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate('writing-detail', article.slug)}
              className="p-6 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[#facc15] transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-wider uppercase text-[#facc15]">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#e2e2e4] opacity-50">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-syne font-bold text-[#e2e2e4] leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#e2e2e4] opacity-70 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(226,226,228,0.1)] flex items-center justify-between font-mono text-[0.68rem] text-[#e2e2e4] opacity-70">
                <span>{article.date}</span>
                <span className="font-semibold text-[#facc15] inline-flex items-center gap-1">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* E. Projects Preview (Unfiltered Opinion & Philosophy YouTube) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[rgba(226,226,228,0.1)] pb-4">
          <div>
            <span className="tech-label">Initiatives</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-[#e2e2e4] mt-1">
              Active & Developing Projects
            </h2>
          </div>
          <button
            onClick={() => navigate('projects')}
            className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Project Roadmaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-8 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] space-y-4 hover:border-[#facc15] transition-all"
            >
              <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-wider">
                <span className="text-[#e2e2e4] opacity-60">{proj.platform}</span>
                <span className="text-[#facc15] font-semibold">
                  {proj.status === 'Active' ? 'Active Platform' : 'In Development'}
                </span>
              </div>

              <h3 className="text-2xl font-syne font-bold text-[#e2e2e4]">
                {proj.title}
              </h3>

              <div className="font-mono text-xs text-[#facc15] opacity-90">
                "{proj.tagline}"
              </div>

              <p className="text-sm text-[#e2e2e4] opacity-70 leading-relaxed">
                {proj.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('projects')}
                  className="font-mono text-xs uppercase tracking-wider text-[#facc15] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn more about {proj.title}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* F. Closing Invitation */}
      <section className="text-center py-16 px-6 border border-[rgba(226,226,228,0.15)] bg-[rgba(255,255,255,0.02)] space-y-5">
        <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-[#e2e2e4] text-balance max-w-2xl mx-auto leading-tight">
          Curious minds, thoughtful conversations, and honest expressions are always welcome.
        </h2>
        <p className="text-sm text-[#e2e2e4] opacity-70 max-w-xl mx-auto leading-relaxed">
          Whether you want to discuss accounting principles, analyze an existential query, share a literary critique, or exchange ideas, my transmission coordinate is open.
        </p>
        <div className="pt-3">
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-3.5 font-syne font-extrabold uppercase text-xs tracking-wider bg-[#facc15] text-[#111113] hover:bg-[#eab308] transition-colors cursor-pointer shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
};
