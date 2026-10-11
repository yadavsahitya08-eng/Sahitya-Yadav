import React from 'react';
import { PERSONAL_OUTLOOK_MANIFESTO } from '../data/outlook';
import { ShieldCheck, Compass, Heart, Brain, PenTool, RefreshCw } from 'lucide-react';

export const PersonalOutlookPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Compass className="w-5 h-5 text-[#762F3B] dark:text-[#e07a8b]" />,
    '02': <Brain className="w-5 h-5 text-[#777D61] dark:text-[#9EA585]" />,
    '03': <Heart className="w-5 h-5 text-[#762F3B] dark:text-[#e07a8b]" />,
    '04': <PenTool className="w-5 h-5 text-[#777D61] dark:text-[#9EA585]" />,
    '05': <ShieldCheck className="w-5 h-5 text-[#762F3B] dark:text-[#e07a8b]" />,
    '06': <RefreshCw className="w-5 h-5 text-[#777D61] dark:text-[#9EA585]" />,
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Ethical & Intellectual Values
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Personal Outlook
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          The internal principles that guide my academic studies, writing, and relationship to the surrounding world.
        </p>
      </div>

      {/* Manifesto Statement Banner */}
      <section className="p-8 sm:p-12 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Core Manifesto
        </div>
        <blockquote className="text-xl sm:text-2xl font-editorial italic text-[#20211F] dark:text-[#EDEDE9] leading-relaxed">
          "{PERSONAL_OUTLOOK_MANIFESTO.quote}"
        </blockquote>
        <div className="text-xs text-[#73736D] dark:text-[#A1A19A] pt-2 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
          Personal stance on reconciling analytical exactness with emotional depth.
        </div>
      </section>

      {/* Six Core Pillars */}
      <div className="space-y-6">
        <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Six Governing Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_OUTLOOK_MANIFESTO.principles.map((p) => (
            <div
              key={p.number}
              className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#762F3B] dark:text-[#e07a8b] font-semibold">
                  Pillar {p.number}
                </span>
                <div className="p-1.5 rounded bg-[#20211F]/5 dark:bg-[#EDEDE9]/5">
                  {iconMap[p.number]}
                </div>
              </div>

              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
                {p.summary}
              </p>

              <div className="pt-2 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 text-xs text-[#20211F]/80 dark:text-[#EDEDE9]/80">
                <strong className="text-[#762F3B] dark:text-[#e07a8b] block mb-0.5">Application:</strong>
                {p.application}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modesty disclaimer */}
      <div className="p-6 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
        These principles are not framed as universal dogmas or assertions of superiority over others. They are simply personal benchmarks against which I examine my own conduct, studying habits, and creative expression.
      </div>

    </div>
  );
};
