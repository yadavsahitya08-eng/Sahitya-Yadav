import React from 'react';
import { INTEREST_CATEGORIES } from '../data/interests';
import { Layers, Sparkles, Feather, Terminal, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const InterestsPage: React.FC = () => {
  const { navigate } = useRouter();

  const iconMap: Record<string, React.ReactNode> = {
    'accounting-reasoning': <Layers className="w-5 h-5 text-[#762F3B] dark:text-[#e07a8b]" />,
    'philosophy-inquiry': <Sparkles className="w-5 h-5 text-[#777D61] dark:text-[#9EA585]" />,
    'literature-expression': <Feather className="w-5 h-5 text-[#762F3B] dark:text-[#e07a8b]" />,
    'technology-science': <Terminal className="w-5 h-5 text-[#777D61] dark:text-[#9EA585]" />,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Intellectual Pursuits & Curiosity
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Interests & Areas of Inquiry
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          Four distinct yet interconnected pursuits that shape my worldview: the structured rigor of accounting, the fearless questioning of philosophy, the emotional depth of literature, and the mechanical clarity of technology.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {INTEREST_CATEGORIES.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className="p-8 sm:p-10 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 flex items-center justify-center shrink-0">
                  {iconMap[category.id]}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#73736D] dark:text-[#A1A19A]">
                    Category 0{index + 1}
                  </span>
                  <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                    {category.title}
                  </h2>
                </div>
              </div>
              <span className="text-xs text-[#73736D] dark:text-[#A1A19A] font-medium">
                {category.shortDescription}
              </span>
            </div>

            {/* Narrative */}
            <p className="text-sm sm:text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              {category.fullNarrative}
            </p>

            {/* Key Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {category.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-[#20211F]/5 dark:border-[#EDEDE9]/5 bg-[#F7F5EF] dark:bg-[#171816] space-y-1.5"
                >
                  <h3 className="text-sm font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                    {area.name}
                  </h3>
                  <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Context link */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#73736D] dark:text-[#A1A19A]">
                Intellectual pursuit · Not commercial credentialing
              </span>
              {category.id === 'accounting-reasoning' && (
                <button
                  onClick={() => navigate('academic-journey')}
                  className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
                >
                  <span>View ICAN study notes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {category.id === 'philosophy-inquiry' && (
                <button
                  onClick={() => navigate('philosophy')}
                  className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Philosophy Journal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {category.id === 'literature-expression' && (
                <button
                  onClick={() => navigate('literature')}
                  className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Ghazals & Poetry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {category.id === 'technology-science' && (
                <button
                  onClick={() => navigate('writings')}
                  className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Linux Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};
