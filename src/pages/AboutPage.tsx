import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/config';
import { ArrowRight, BookOpen, Compass, ShieldCheck, PenTool, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Biography & Background
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          About Sahitya Yadav
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          Student preparing for professional accounting examinations under the Institute of Chartered Accountants of Nepal (ICAN), independent thinker, and writer of Nepali poetry.
        </p>
      </div>

      {/* Primary Narrative Block */}
      <section className="p-8 sm:p-10 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
        <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Who I Am
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-[#20211F]/90 dark:text-[#EDEDE9]/90 leading-relaxed font-normal">
          <p>
            I am a Nepal-based student with a strong interest in professional accounting, philosophy, literature, and technology. I am preparing for professional accounting examinations under the Institute of Chartered Accountants of Nepal (ICAN), with a particular focus on cost and management accounting.
          </p>
          <p>
            Beyond academics, I am deeply interested in exploring human nature, morality, love, suffering, freedom, and the meaning of existence. The philosophical ideas of Friedrich Nietzsche and Stoicism have influenced my intellectual interests, particularly the concepts of <em className="font-serif">amor fati</em>, resilience, and the courage to question conventional beliefs.
          </p>
          <p>
            I do not view analytical discipline and creative sensitivity as opposing forces. Rather, I see them as complementary lenses: accounting teaches the discipline of structure and transparent proof, while philosophy and literature grant the emotional honesty necessary to confront life's deeper complexities.
          </p>
        </div>
      </section>

      {/* 4 Thematic Pillars: What I Study, What I Question, What I Create, What I Hope to Explore */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* What I Study */}
        <div className="p-7 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>01. What I Study</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Professional Accounting & Analysis
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Cost and management accounting, marginal and absorption models, equivalent units in process costing, labour incentive schemes, and disciplined preparation of self-balancing working notes.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('academic-journey')}
              className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore study areas</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* What I Question */}
        <div className="p-7 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#777D61] dark:text-[#A6AC88] uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>02. What I Question</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Conventional Norms & Meaning
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            The origins of inherited social dogmas, herd conformity, the nature of suffering, and how one preserves emotional resilience and moral clarity when faced with unpredictable circumstance.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('philosophy')}
              className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
            >
              <span>Read philosophical notes</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* What I Create */}
        <div className="p-7 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] uppercase tracking-wider">
            <PenTool className="w-4 h-4" />
            <span>03. What I Create</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Poetry, Ghazals & Dialogue
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Nepali couplets, meditative poetry, reflective prose, and community conversation through the Facebook platform "Unfiltered Opinion" under the motto "Solidarity in the struggle."
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('literature')}
              className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
            >
              <span>Read literary works</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* What I Hope to Explore */}
        <div className="p-7 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#777D61] dark:text-[#A6AC88] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>04. What I Hope to Explore</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Philosophy Video Essays & Tech
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Developing an accessible video channel translating deep philosophical questions into everyday human contexts, alongside deepening fluency in Linux systems and hardware architecture.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('projects')}
              className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline inline-flex items-center gap-1"
            >
              <span>View video roadmap</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Verified Academic & Milestone Timeline */}
      <section className="space-y-6 pt-6 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
        <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Active Journey & Verified Milestones
        </h2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l border-[#762F3B]/30 space-y-1">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#762F3B]" />
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Present Ongoing
            </div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Professional Accounting Examination Preparation
            </div>
            <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Institute of Chartered Accountants of Nepal (ICAN). Rigorous coursework in cost analysis, accounting standards, management reporting, and commercial statutory frameworks.
            </p>
          </div>

          <div className="relative pl-6 border-l border-[#762F3B]/30 space-y-1">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#762F3B]" />
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Active Initiative
            </div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Founder & Administrator, "Unfiltered Opinion"
            </div>
            <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Managing a non-political space centered on everyday human struggles, personal reflections, and constructive discourse.
            </p>
          </div>

          <div className="relative pl-6 border-l border-[#762F3B]/30 space-y-1">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#762F3B]" />
            <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Pre-Production Stage
            </div>
            <div className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Philosophy Video Essay Project
            </div>
            <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
              Scriptwriting and curriculum mapping for upcoming digital video content addressing Stoicism, amor fati, and critical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Principle Callout */}
      <div className="p-6 rounded-lg border border-[#762F3B]/20 bg-[#762F3B]/5 dark:bg-[#762F3B]/10 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b]">
          <ShieldCheck className="w-4 h-4" />
          <span>Core Commitment to Transparency</span>
        </div>
        <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          I do not present myself as a qualified Chartered Accountant, a formal university professor of philosophy, or an established commercial influencer. I am a dedicated student and independent thinker documenting my sincere journey through study, writing, and questions.
        </p>
      </div>

    </div>
  );
};
