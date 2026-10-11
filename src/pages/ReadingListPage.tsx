import React, { useState, useEffect } from 'react';
import { READING_LIST, ReadingItem } from '../data/readingList';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { BookOpen, CheckCircle, Clock, Bookmark, RotateCcw } from 'lucide-react';

interface BookState {
  status: 'Completed' | 'Currently Reading' | 'Queued';
  progress: number;
}

export const ReadingListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Local state for all books: status & progress percentage
  const [bookStates, setBookStates] = useState<Record<string, BookState>>(() => {
    try {
      const stored = localStorage.getItem('portfolio_reading_progress');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }

    const initial: Record<string, BookState> = {};
    READING_LIST.forEach((b) => {
      let defaultProgress = 0;
      if (b.status === 'Completed') defaultProgress = 100;
      else if (b.status === 'Currently Reading') defaultProgress = 60;
      else defaultProgress = 0;

      initial[b.id] = {
        status: b.status,
        progress: defaultProgress,
      };
    });
    return initial;
  });

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_reading_progress', JSON.stringify(bookStates));
    } catch {
      // ignore
    }
  }, [bookStates]);

  const categories = ['all', 'Philosophy', 'Stoicism', 'Literature', 'Psychology', 'Accounting', 'Technology'];
  const statuses = ['all', 'Completed', 'Currently Reading', 'Queued'];

  // Toggle completion status for a given book
  const handleToggleCompletion = (bookId: string) => {
    setBookStates((prev) => {
      const current = prev[bookId] || { status: 'Queued', progress: 0 };
      const willBeCompleted = current.status !== 'Completed';

      return {
        ...prev,
        [bookId]: {
          status: willBeCompleted ? 'Completed' : 'Currently Reading',
          progress: willBeCompleted ? 100 : 50,
        },
      };
    });
  };

  // Adjust percentage progress for a given book
  const handleUpdateProgress = (bookId: string, newProgress: number) => {
    setBookStates((prev) => {
      const isComplete = newProgress >= 100;
      return {
        ...prev,
        [bookId]: {
          status: isComplete ? 'Completed' : newProgress === 0 ? 'Queued' : 'Currently Reading',
          progress: newProgress,
        },
      };
    });
  };

  // Reset to default
  const handleResetDefaults = () => {
    localStorage.removeItem('portfolio_reading_progress');
    const initial: Record<string, BookState> = {};
    READING_LIST.forEach((b) => {
      initial[b.id] = {
        status: b.status,
        progress: b.status === 'Completed' ? 100 : b.status === 'Currently Reading' ? 60 : 0,
      };
    });
    setBookStates(initial);
  };

  // Filter books taking user local state into account
  const filteredBooks = READING_LIST.filter((item) => {
    const currentState = bookStates[item.id] || { status: item.status, progress: 0 };
    const catMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const statMatch = selectedStatus === 'all' || currentState.status === selectedStatus;
    return catMatch && statMatch;
  });

  // Calculate overall metrics
  const totalBooks = READING_LIST.length;
  const completedCount = Object.values(bookStates).filter((s) => s.status === 'Completed').length;
  const inProgressCount = Object.values(bookStates).filter((s) => s.status === 'Currently Reading').length;
  const overallPercentage = Math.round(
    Object.values(bookStates).reduce((acc, curr) => acc + curr.progress, 0) / totalBooks
  );

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <span className="tech-label">Intellectual Influences & In-Progress Texts</span>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-[-0.05em] text-[#e2e2e4] leading-tight">
          Curated Reading List
        </h1>
        <p className="text-base text-[#e2e2e4] opacity-70 max-w-2xl leading-relaxed">
          The works that nourish my understanding of philosophy, accounting, human nature, and literature. Toggle your reading progress for each text below.
        </p>
      </div>

      {/* Aggregate Reading Progress Metric Card */}
      <section className="border border-[rgba(226,226,228,0.15)] bg-[rgba(255,255,255,0.02)] p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(226,226,228,0.1)] pb-4">
          <div>
            <span className="tech-label">Reading Journey Metrics</span>
            <h2 className="text-2xl font-syne font-bold text-[#e2e2e4] mt-0.5">
              Overall Corpus Completion
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleResetDefaults}
              className="font-mono text-[0.65rem] uppercase tracking-wider text-[#e2e2e4] opacity-60 hover:opacity-100 hover:text-[#facc15] flex items-center gap-1 cursor-pointer"
              title="Reset progress to defaults"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-[#facc15] tabular-nums">
              {overallPercentage}%
            </div>
          </div>
        </div>

        {/* Aggregate Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-[rgba(226,226,228,0.08)] border border-[rgba(226,226,228,0.12)]">
            <div
              className="h-full bg-[#facc15] transition-all duration-500 ease-out"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between font-mono text-[0.68rem] text-[#e2e2e4] opacity-70">
            <span>{completedCount} of {totalBooks} texts completed</span>
            <span>{inProgressCount} currently active in rotation</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="p-6 border border-[rgba(226,226,228,0.1)] bg-[rgba(255,255,255,0.02)] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[0.68rem] uppercase text-[#e2e2e4] opacity-60 mr-1">Category:</span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === c
                    ? 'bg-[#facc15] text-[#111113] font-bold'
                    : 'text-[#e2e2e4] opacity-70 hover:opacity-100 hover:bg-[rgba(226,226,228,0.08)]'
                }`}
              >
                {c === 'all' ? 'All Disciplines' : c}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[0.68rem] uppercase text-[#e2e2e4] opacity-60 mr-1">Status:</span>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedStatus === s
                    ? 'bg-[#facc15] text-[#111113] font-bold'
                    : 'text-[#e2e2e4] opacity-70 hover:opacity-100 hover:bg-[rgba(226,226,228,0.08)]'
                }`}
              >
                {s === 'all' ? 'All Statuses' : s}
              </button>
            ))}
          </div>

        </div>

        <div className="font-mono text-[0.65rem] text-[#e2e2e4] opacity-50 pt-2 border-t border-[rgba(226,226,228,0.1)] flex items-center justify-between">
          <span>Showing {filteredBooks.length} of {READING_LIST.length} recorded texts</span>
          <span className="text-[#facc15]">Local state toggle active</span>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((item) => {
          const state = bookStates[item.id] || { status: item.status, progress: 0 };
          const isFinished = state.status === 'Completed';

          return (
            <div
              key={item.id}
              className={`p-7 border bg-[rgba(255,255,255,0.02)] space-y-4 flex flex-col justify-between transition-all ${
                isFinished
                  ? 'border-[rgba(250,204,21,0.35)] shadow-xs'
                  : 'border-[rgba(226,226,228,0.1)] hover:border-[rgba(226,226,228,0.25)]'
              }`}
            >
              <div className="space-y-3">
                {/* Header Metadata */}
                <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-wider uppercase">
                  <span className="text-[#facc15] font-semibold">{item.category}</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    {state.status === 'Completed' && (
                      <span className="text-[#facc15] flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    )}
                    {state.status === 'Currently Reading' && (
                      <span className="text-amber-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>In Progress</span>
                      </span>
                    )}
                    {state.status === 'Queued' && (
                      <span className="opacity-50 flex items-center gap-1">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>Queued</span>
                      </span>
                    )}
                  </span>
                </div>

                <h3 className="text-xl font-syne font-bold text-[#e2e2e4] leading-snug">
                  {item.title}
                </h3>

                <div className="font-mono text-xs text-[#e2e2e4] opacity-60">
                  By <span className="font-semibold text-[#e2e2e4] opacity-90">{item.author}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#e2e2e4] opacity-75 leading-relaxed pt-1">
                  {item.note}
                </p>
              </div>

              {/* Reading Progress Bar Component with Completion Toggle */}
              <ReadingProgressBar
                bookId={item.id}
                status={state.status}
                progress={state.progress}
                onToggleCompletion={() => handleToggleCompletion(item.id)}
                onUpdateProgress={(newProgress) => handleUpdateProgress(item.id, newProgress)}
              />
            </div>
          );
        })}
      </div>

    </div>
  );
};
