import React from 'react';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight, CheckCircle, Clock, Youtube, MessageSquare, Compass, PlusCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const ProjectsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Digital Platforms & Creative Initiatives
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Projects & Explorations
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          Tangible manifestations of philosophical and social inquiry. From an active Facebook community offering a haven from noise, to a developing video project translating classic ideas for modern minds.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        
        {/* Project 1: Unfiltered Opinion */}
        <section className="p-8 sm:p-12 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span>Facebook Platform</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">Active Community</span>
              </div>
              <h2 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                Unfiltered Opinion
              </h2>
              <div className="text-sm font-serif italic text-[#762F3B] dark:text-[#e07a8b]">
                "Solidarity in the struggle."
              </div>
            </div>

            {/* External Facebook Link */}
            <a
              href="https://www.facebook.com/unfilteredopinion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] rounded-md transition-colors whitespace-nowrap"
            >
              <span>Visit Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-4 text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            <p>
              <strong>Purpose & Direction:</strong> An inclusive, non-political platform dedicated to discussing everyday life, human experiences, and the struggles people share. In an online environment saturated with partisan debates, curated vanity, and outrage algorithms, <em>Unfiltered Opinion</em> serves as a quiet space for genuine expression and mutual recognition.
            </p>
            <p>
              The platform rejects the idea that public discourse must always be sensational or adversarial. Instead, it invites readers to articulate their quiet battles—academic pressure, social loneliness, family obligations, and the pursuit of honest living in contemporary Nepal.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
              Editorial Content Focus:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Everyday Life & Lived Realities in Nepal",
                "Human Vulnerability & Shared Burdens",
                "Independent Social Observations",
                "Non-political, Empathetic Reflection"
              ].map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#762F3B] dark:text-[#e07a8b] shrink-0" />
                  <span>{cat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion themes */}
          <div className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] space-y-2">
            <span className="text-xs font-semibold text-[#20211F] dark:text-[#EDEDE9] block">
              Representative Inquiries:
            </span>
            <ul className="space-y-1 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <li>· "Why is youth burnout in professional study rarely discussed without shame?"</li>
              <li>· "The difference between performing happiness on social feeds and enduring reality in private."</li>
              <li>· "How small acts of attentive listening create genuine solidarity across generations."</li>
            </ul>
          </div>
        </section>

        {/* Project 2: Philosophy YouTube Channel */}
        <section className="p-8 sm:p-12 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span>Video Essay Series</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-amber-700 dark:text-amber-400">Status: In Development</span>
              </div>
              <h2 className="text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                Philosophy Video Project
              </h2>
              <div className="text-sm font-serif italic text-[#777D61] dark:text-[#A6AC88]">
                "Connecting philosophical ideas with contemporary life."
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 text-[#73736D] dark:text-[#A1A19A]">
              <Clock className="w-3.5 h-3.5" />
              <span>Pre-Production / Scripting</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            <p>
              A future creative media project dedicated to bridging rigorous philosophical concepts (Stoic tranquility, Nietzschean revaluation, existential anxiety) with the real, unvarnished questions of modern living through thoughtful visual explanations, quiet narration, and zero academic pretension.
            </p>
          </div>

          {/* Planned Video Curriculum */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
              Planned Series Subjects:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <div className="p-3 rounded-md bg-[#F7F5EF] dark:bg-[#171816] space-y-1">
                <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">01. Nietzsche Without Jargon</span>
                <p className="text-[11px]">Unpacking the will to power and slave morality through psychological reality, not mythology.</p>
              </div>
              <div className="p-3 rounded-md bg-[#F7F5EF] dark:bg-[#171816] space-y-1">
                <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">02. Stoicism in Everyday Struggles</span>
                <p className="text-[11px]">How the dichotomy of control preserves peace during academic and emotional stress.</p>
              </div>
              <div className="p-3 rounded-md bg-[#F7F5EF] dark:bg-[#171816] space-y-1">
                <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">03. Meaning in the Absence of Guarantees</span>
                <p className="text-[11px]">Existential insights from Viktor Frankl and Albert Camus on finding purpose in adversity.</p>
              </div>
              <div className="p-3 rounded-md bg-[#F7F5EF] dark:bg-[#171816] space-y-1">
                <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">04. The Architecture of Critical Thought</span>
                <p className="text-[11px]">Practical techniques for separating evidence from emotional attachment in beliefs.</p>
              </div>
            </div>
          </div>

          {/* 6-Step Production Roadmap */}
          <div className="space-y-4 pt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
              Production Roadmap (Phases 1–6):
            </h3>
            <div className="space-y-3">
              {[
                { step: "01", title: "Define Core Identity & Standards", desc: "No clickbait thumbnails or superficial hacks. Focus on depth, clarity, and thoughtful cadence." },
                { step: "02", title: "Develop Visual Language", desc: "Establish consistent typography, archival imagery, and calm color palette." },
                { step: "03", title: "Draft Initial Scripts", desc: "Complete 4 pilot scripts examining Amor Fati, academic solitude, and Stoic assent." },
                { step: "04", title: "Audio & Recording Setup", desc: "Test voice clarity, software editing workflows, and ambient acoustics." },
                { step: "05", title: "Pilot Video Publication", desc: "Release introductory essay and solicit critical peer feedback." },
                { step: "06", title: "Sustained Library of Video Essays", desc: "Publish regular long-form reflections forming an evergreen archive." }
              ].map((phase) => (
                <div key={phase.step} className="flex items-start gap-3 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <span className="font-mono text-[#762F3B] dark:text-[#e07a8b] font-semibold">{phase.step}.</span>
                  <div>
                    <strong className="text-[#20211F] dark:text-[#EDEDE9]">{phase.title}: </strong>
                    <span>{phase.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Projects Canvas */}
        <section className="p-8 rounded-xl border border-dashed border-[#20211F]/20 dark:border-[#EDEDE9]/20 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 flex items-center justify-center mx-auto text-[#73736D] dark:text-[#A1A19A]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Future Projects in Incubation
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] max-w-lg mx-auto leading-relaxed">
            As studies and writings mature, this space will expand to include open-source study guides for ICAN cost accounting and bilingual literary anthologies.
          </p>
        </section>

      </div>

    </div>
  );
};
