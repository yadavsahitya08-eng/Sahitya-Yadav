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
      
      {/* A. Hero Section (Split Screen Editorial) */}
      <section className="pt-6 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              <span>Personal Portfolio & Intellectual Journal</span>
              <span aria-hidden="true">·</span>
              <span>Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold tracking-tight text-[#20211F] dark:text-[#EDEDE9] leading-[1.12] text-balance">
              Between Reason, Reflection, and Expression.
            </h1>

            <p className="text-base sm:text-lg text-[#73736D] dark:text-[#A1A19A] max-w-xl leading-relaxed">
              An ongoing journey through accounting, philosophy, literature, and the questions that make us human. Exploring the intersection of analytical thinking, philosophical inquiry, and creative expression.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] dark:bg-[#762F3B] dark:hover:bg-[#8d3846] rounded-md transition-colors cursor-pointer shadow-sm"
              >
                <span>Explore My World</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('writings')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#20211F] dark:text-[#EDEDE9] hover:text-[#762F3B] dark:hover:text-[#e07a8b] border border-[#20211F]/15 dark:border-[#EDEDE9]/15 rounded-md hover:border-[#762F3B]/40 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read My Writings</span>
              </button>
            </div>

            {/* Quiet Academic & Philosophical status */}
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <span>Institute of Chartered Accountants of Nepal (ICAN) Student</span>
              <span aria-hidden="true">/</span>
              <span>Independent Thinker</span>
              <span aria-hidden="true">/</span>
              <span>Nepali Poetry</span>
            </div>
          </div>

          {/* Right Column: Visual Container (Abstract Fine-Art Parchment Composition) */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#EDEAE1] dark:bg-[#20211D] shadow-sm aspect-[4/3] lg:aspect-auto lg:h-[460px]">
              <img
                src={ASSETS.hero}
                alt="Minimalist abstract editorial parchment composition with fine geometric lines and ink"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#F7F5EF] bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
                <span className="font-editorial italic">"Geometry of Thought"</span>
                <span className="opacity-75 ml-2">· Archival Paper & Geometric Inquiry</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Dimension Metric Strip below split */}
        <div className="mt-16 pt-8 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A]">Focus 01</div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">Cost & Accounting</div>
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-0.5">ICAN professional studies</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A]">Focus 02</div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">Philosophical Ethics</div>
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-0.5">Amor fati & Stoic resilience</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A]">Focus 03</div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">Nepali Literature</div>
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-0.5">Ghazals, Kavita & Muktak</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A]">Focus 04</div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">Systems & Linux</div>
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-0.5">Live USBs & hardware</div>
          </div>
        </div>
      </section>

      {/* B. Identity Overview (4 Dimensions Grid) */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Core Pillars
            </div>
            <h2 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">
              Four Dimensions of Inquiry
            </h2>
          </div>
          <button
            onClick={() => navigate('interests')}
            className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
          >
            <span>View detailed breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Accounting */}
          <div className="p-8 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-md bg-[#762F3B]/10 text-[#762F3B] dark:text-[#e07a8b] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                01. Accounting & Financial Logic
              </h3>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
                Structured thinking, cost systems, and analytical problem-solving.
              </p>
            </div>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Studying under the Institute of Chartered Accountants of Nepal (ICAN), focusing on marginal costing, process accounting, overhead apportionment, and transparent working notes.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('academic-journey')}
                className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
              >
                <span>Explore ICAN Academic Journey</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Philosophy */}
          <div className="p-8 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-md bg-[#777D61]/15 text-[#777D61] dark:text-[#9EA585] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                02. Philosophy & Critical Inquiry
              </h3>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
                Questions of existence, morality, suffering, freedom, and human nature.
              </p>
            </div>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Deeply influenced by Friedrich Nietzsche and ancient Stoicism, engaging concepts like amor fati, the discipline of assent, and the courage to interrogate inherited dogmas.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('philosophy')}
                className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
              >
                <span>Read Philosophy Journal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Literature */}
          <div className="p-8 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-md bg-[#762F3B]/10 text-[#762F3B] dark:text-[#e07a8b] flex items-center justify-center">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                03. Literature & Creative Expression
              </h3>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
                Nepali poetry, classical ghazals, and emotionally nuanced writing.
              </p>
            </div>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Writing couplets and verses exploring loneliness, memory, longing, and existential wonder, honoring both classical Devanagari meter and modern interior monologue.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('literature')}
                className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
              >
                <span>Discover Nepali Ghazals & Poetry</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 4: Technology */}
          <div className="p-8 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-md bg-[#777D61]/15 text-[#777D61] dark:text-[#9EA585] flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                04. Technology & Scientific Inquiry
              </h3>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
                Linux operating systems, live USB testing, and hardware architecture.
              </p>
            </div>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Hands-on experimentation with Kali Linux live USB environments, hardware troubleshooting, operating system paradigms, and foundational physics.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('interests')}
                className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
              >
                <span>Read Technology Reflections</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* C. Featured Philosophy Statement (Amor Fati Focal Section) */}
      <section className="rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Signature Philosophical Outlook
            </div>

            <blockquote className="text-2xl sm:text-3xl font-editorial italic text-[#20211F] dark:text-[#EDEDE9] leading-relaxed">
              "{SITE_CONFIG.amorFatiQuote.reflection}"
            </blockquote>

            <div className="space-y-1 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <div className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">
                {SITE_CONFIG.amorFatiQuote.attribution}
              </div>
              <div>
                Theme: {SITE_CONFIG.amorFatiQuote.theme} · Not an external quote, but an original guiding principle.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('philosophy')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline"
              >
                <span>Explore the Philosophy of Amor Fati</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] border-t lg:border-t-0 lg:border-l border-[#20211F]/10 dark:border-[#EDEDE9]/10 overflow-hidden relative">
            <img
              src={ASSETS.philosophy}
              alt="Minimalist fine art painting of stone at dawn representing amor fati"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* D. Featured Writing (Curated 3 Articles) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Essays & Reflections
            </div>
            <h2 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">
              Featured Writings
            </h2>
          </div>
          <button
            onClick={() => navigate('writings')}
            className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
          >
            <span>Browse all articles ({WRITINGS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WRITINGS.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate('writing-detail', article.slug)}
              className="p-6 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <span className="font-medium text-[#762F3B] dark:text-[#e07a8b]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 flex items-center justify-between text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span>{article.date}</span>
                <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b] inline-flex items-center gap-1">
                  Read Essay <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* E. Projects Preview (Unfiltered Opinion & Philosophy YouTube) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Creative & Social Initiatives
            </div>
            <h2 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">
              Active & Developing Projects
            </h2>
          </div>
          <button
            onClick={() => navigate('projects')}
            className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
          >
            <span>View project roadmaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-8 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span>{proj.platform}</span>
                <span className="font-medium text-[#762F3B] dark:text-[#e07a8b]">
                  {proj.status === 'Active' ? 'Active Platform' : 'Status: In Development'}
                </span>
              </div>

              <h3 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                {proj.title}
              </h3>

              <div className="text-xs font-serif italic text-[#777D61] dark:text-[#A6AC88]">
                "{proj.tagline}"
              </div>

              <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
                {proj.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('projects')}
                  className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
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
      <section className="text-center py-16 px-6 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-5">
        <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] text-balance">
          Curious minds, thoughtful conversations, and honest expressions are always welcome.
        </h2>
        <p className="text-sm text-[#73736D] dark:text-[#A1A19A] max-w-xl mx-auto leading-relaxed">
          Whether you want to discuss accounting principles, analyze an existential query, share a literary critique, or exchange ideas, my inbox is open.
        </p>
        <div className="pt-2">
          <button
            onClick={() => navigate('contact')}
            className="px-6 py-3 text-sm font-semibold text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] dark:bg-[#762F3B] dark:hover:bg-[#8d3846] rounded-md transition-colors cursor-pointer shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
};
