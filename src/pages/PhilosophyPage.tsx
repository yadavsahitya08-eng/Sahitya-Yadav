import React, { useState } from 'react';
import { PHILOSOPHY_THEMES, PhilosophicalTheme } from '../data/philosophy';
import { SITE_CONFIG } from '../data/config';
import { ASSETS } from '../assets';
import { Sparkles, HelpCircle, BookOpen, Quote, ShieldAlert } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const PhilosophyPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedThemeId, setSelectedThemeId] = useState<string>(PHILOSOPHY_THEMES[0].id);

  const currentTheme = PHILOSOPHY_THEMES.find((t) => t.id === selectedThemeId) || PHILOSOPHY_THEMES[0];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Editorial Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          A Digital Philosophy Journal
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Philosophy & The Questioning Spirit
        </h1>
        <blockquote className="text-lg sm:text-xl font-editorial italic text-[#73736D] dark:text-[#A1A19A] max-w-3xl leading-relaxed pt-2">
          "Philosophy, for me, is an invitation to question what appears obvious, examine what we believe, and confront the difficult questions that shape human life."
        </blockquote>
      </div>

      {/* Featured Artwork & Amor Fati Foundation */}
      <section className="rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Guiding Principle · Amor Fati
            </div>

            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Loving One's Fate as an Act of Defiant Clarity
            </h2>

            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              When Nietzsche introduced <em className="font-serif">amor fati</em> in <em>The Gay Science</em>, he was not proposing that we celebrate suffering or pretend misery is pleasant. Rather, he was asking whether human beings can develop the emotional fortitude to accept reality completely—without resentment, without retreating into comforting myths, and without wishing away the difficult circumstances that forged them.
            </p>

            <div className="p-4 rounded-md border border-[#762F3B]/20 bg-[#762F3B]/5 dark:bg-[#762F3B]/10 space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b] block">
                Original Reflection
              </span>
              <p className="text-sm font-editorial italic text-[#20211F] dark:text-[#EDEDE9]">
                "{SITE_CONFIG.amorFatiQuote.reflection}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full min-h-[320px] border-t lg:border-t-0 lg:border-l border-[#20211F]/10 dark:border-[#EDEDE9]/10 relative overflow-hidden">
            <img
              src={ASSETS.philosophy}
              alt="Contemplative abstract fine-art painting of dawn over stone"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Explicit Epistemological Boundary Notice */}
      <div className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] flex items-start gap-3 text-xs text-[#73736D] dark:text-[#A1A19A]">
        <ShieldAlert className="w-4 h-4 text-[#762F3B] dark:text-[#e07a8b] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-[#20211F] dark:text-[#EDEDE9]">Methodological Note:</strong> This journal strictly delineates between historical philosophical traditions (Stoic texts, Nietzsche's writings, existential philosophy) and original personal commentary. No fabricated quotes are attributed to historical thinkers.
        </p>
      </div>

      {/* Interactive Philosophy Explorations */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Thematic Inquiries
          </h2>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
            Examine core themes balancing historical foundations with personal reflections.
          </p>
        </div>

        {/* Theme tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 rounded-lg">
          {PHILOSOPHY_THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedThemeId(theme.id)}
              className={`p-3 text-left rounded-md transition-all cursor-pointer ${
                selectedThemeId === theme.id
                  ? 'bg-[#FAF9F5] dark:bg-[#1E1F1C] text-[#762F3B] dark:text-[#e07a8b] shadow-sm font-semibold'
                  : 'text-[#73736D] dark:text-[#A1A19A] hover:text-[#20211F] dark:hover:text-[#EDEDE9]'
              }`}
            >
              <div className="text-[11px] font-mono opacity-75">{theme.focus}</div>
              <div className="text-xs font-editorial font-bold truncate mt-0.5">{theme.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Theme Detail */}
        <div className="p-8 sm:p-10 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-8">
          
          <div className="border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Theme: {currentTheme.focus}
            </span>
            <h3 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-1">
              {currentTheme.title}
            </h3>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] mt-2 leading-relaxed">
              {currentTheme.summary}
            </p>
          </div>

          {/* Historical Root vs Original Reflection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#73736D] dark:text-[#A1A19A] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Historical Context & Philosophical Tradition</span>
              </div>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
                {currentTheme.historicalRoot}
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[#762F3B]/20 bg-[#762F3B]/5 dark:bg-[#762F3B]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                <span>Original Personal Reflection</span>
              </div>
              <p className="text-xs text-[#20211F] dark:text-[#EDEDE9] leading-relaxed font-serif italic">
                "{currentTheme.originalReflection}"
              </p>
            </div>

          </div>

          {/* Open Questions for Inquiry */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9] flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#762F3B] dark:text-[#e07a8b]" />
              <span>Questions for Ongoing Reflection</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
              {currentTheme.keyQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[#762F3B] dark:text-[#e07a8b]">·</span>
                  <span className="leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 flex items-center justify-between">
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A]">
              Related Essay in Writings
            </span>
            <button
              onClick={() => navigate('writings')}
              className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline"
            >
              Read full essay on Amor Fati →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
