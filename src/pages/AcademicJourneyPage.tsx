import React, { useState } from 'react';
import { ACADEMIC_TOPICS, AcademicTopic } from '../data/academic';
import { BookOpen, Calculator, ChevronDown, CheckCircle2, Layers, HelpCircle } from 'lucide-react';

export const AcademicJourneyPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(ACADEMIC_TOPICS[0].id);
  const [calculatorUnits, setCalculatorUnits] = useState<number>(500);
  const [overheadRate, setOverheadRate] = useState<number>(40);

  const activeTopicData = ACADEMIC_TOPICS.find((t) => t.id === selectedTopic) || ACADEMIC_TOPICS[0];

  // Dynamic calculation for working note demonstration
  const profitDifference = calculatorUnits * overheadRate;

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Academic Focus & Analytical Study
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          The Academic Journey
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          Preparing for professional examinations under the Institute of Chartered Accountants of Nepal (ICAN), focusing on cost and management accounting as disciplines of structured deductive logic.
        </p>
      </div>

      {/* Overview statement */}
      <div className="p-8 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4">
        <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Accounting as Applied Deductive Logic
        </h2>
        <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          In preparing for ICAN examinations, my central approach is to deconstruct accounting from mechanical memory into logical deduction. Whether reconciling absorption costing with marginal costing or tracing equivalent units through multi-stage industrial processes, every solution depends on explicitly stated assumptions, audit trails, and systematic working notes.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#73736D] dark:text-[#A1A19A]">
          <span className="font-medium text-[#20211F] dark:text-[#EDEDE9]">Study Areas:</span>
          <span>Cost Behavior</span>
          <span aria-hidden="true">·</span>
          <span>Process Costing</span>
          <span aria-hidden="true">·</span>
          <span>Overhead Apportionment</span>
          <span aria-hidden="true">·</span>
          <span>Labour Wage Systems</span>
        </div>
      </div>

      {/* Interactive Topic Exploration & Working Notes */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Core Subjects of Analytical Study
          </h2>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
            Select a subject to inspect conceptual frameworks, examination focus areas, and sample working notes.
          </p>
        </div>

        {/* Topic Selector Tabs (Functional segmented control) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 rounded-lg">
          {ACADEMIC_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedTopic === topic.id
                  ? 'bg-[#FAF9F5] dark:bg-[#1E1F1C] text-[#762F3B] dark:text-[#e07a8b] shadow-sm font-semibold'
                  : 'text-[#73736D] dark:text-[#A1A19A] hover:text-[#20211F] dark:hover:text-[#EDEDE9]'
              }`}
            >
              {topic.title}
            </button>
          ))}
        </div>

        {/* Detailed Topic Card */}
        <div className="p-8 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-4">
            <div>
              <span className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] uppercase tracking-wider">
                {activeTopicData.category}
              </span>
              <h3 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] mt-0.5">
                {activeTopicData.title}
              </h3>
            </div>
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A]">
              ICAN Examination Focus
            </span>
          </div>

          <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            {activeTopicData.description}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
              Key Conceptual Invariants & Models:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeTopicData.keyConcepts.map((concept, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#762F3B] dark:text-[#e07a8b] shrink-0 mt-0.5" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Working note walkthrough */}
          {activeTopicData.workingNoteExample && (
            <div className="mt-6 pt-6 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#20211F] dark:text-[#EDEDE9]">
                <Layers className="w-4 h-4 text-[#762F3B] dark:text-[#e07a8b]" />
                <span>{activeTopicData.workingNoteExample.stepTitle}</span>
              </div>
              <p className="text-xs text-[#73736D] dark:text-[#A1A19A] italic">
                Context: {activeTopicData.workingNoteExample.problemContext}
              </p>

              <div className="space-y-3">
                {activeTopicData.workingNoteExample.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] space-y-1 text-xs"
                  >
                    <div className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">{step.label}</div>
                    <div className="font-mono text-[#762F3B] dark:text-[#e07a8b] py-0.5">{step.formula}</div>
                    <div className="text-[#73736D] dark:text-[#A1A19A] leading-relaxed">{step.explanation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Demonstration: Marginal vs Absorption Costing Working Note Calculator */}
      <section className="p-8 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>Interactive Analytical Demonstrator</span>
        </div>

        <div>
          <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Inventory Difference & Profit Reconciliation Model
          </h2>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] mt-1">
            Simulate how closing inventory changes alter reported profits under Absorption vs. Marginal Costing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9] mb-1">
                Net Inventory Increase (Closing Stock - Opening Stock in units):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={calculatorUnits}
                  onChange={(e) => setCalculatorUnits(Number(e.target.value))}
                  className="w-full accent-[#762F3B]"
                />
                <span className="font-mono text-xs w-16 text-right font-semibold text-[#20211F] dark:text-[#EDEDE9]">
                  {calculatorUnits} units
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9] mb-1">
                Standard Fixed Overhead Absorption Rate per Unit (NPR):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={overheadRate}
                  onChange={(e) => setOverheadRate(Number(e.target.value))}
                  className="w-full accent-[#762F3B]"
                />
                <span className="font-mono text-xs w-16 text-right font-semibold text-[#20211F] dark:text-[#EDEDE9]">
                  NPR {overheadRate}
                </span>
              </div>
            </div>
          </div>

          {/* Reconciliation Output Box */}
          <div className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] flex flex-col justify-between space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A]">
              Working Note Proof
            </div>
            <div className="space-y-1">
              <div className="text-xs text-[#73736D] dark:text-[#A1A19A]">Absorption Profit exceeds Marginal Profit by:</div>
              <div className="text-2xl font-mono font-bold text-[#762F3B] dark:text-[#e07a8b] tabular-nums">
                + NPR {profitDifference.toLocaleString()}
              </div>
            </div>
            <div className="text-[11px] text-[#73736D] dark:text-[#A1A19A] border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 pt-2 leading-relaxed">
              Reason: Under absorption costing, NPR {profitDifference.toLocaleString()} of fixed production overhead is capitalized in balance sheet inventory rather than expensed as period cost.
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Learning Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-2">
          <h4 className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Logical Reasoning
          </h4>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Deriving formulas from business first principles instead of committing arbitrary equations to memory.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-2">
          <h4 className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Method Comparison
          </h4>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Contrasting FIFO against Weighted Average, Halsey against Rowan, to recognize trade-offs across operational conditions.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-2">
          <h4 className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Auditable Proof
          </h4>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Constructing step-by-step working notes that any auditor or examiner can trace back to verifiable source data.
          </p>
        </div>
      </div>

    </div>
  );
};
