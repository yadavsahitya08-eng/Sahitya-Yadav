import React, { useState } from 'react';
import { READING_LIST, ReadingItem } from '../data/readingList';
import { BookOpen, CheckCircle, Clock, Bookmark } from 'lucide-react';

export const ReadingListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const categories = ['all', 'Philosophy', 'Stoicism', 'Literature', 'Psychology', 'Accounting', 'Technology'];
  const statuses = ['all', 'Completed', 'Currently Reading', 'Queued'];

  const filteredBooks = READING_LIST.filter((item) => {
    const catMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const statMatch = selectedStatus === 'all' || item.status === selectedStatus;
    return catMatch && statMatch;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Intellectual Influences & In-Progress Texts
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Curated Reading List
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          The works that nourish my understanding of philosophy, accounting, human nature, and literature. Explicitly distinguishing books completed from those currently being annotated.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="p-6 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A] mr-1">Category:</span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer capitalize ${
                  selectedCategory === c
                    ? 'bg-[#762F3B] text-[#F7F5EF] font-medium'
                    : 'text-[#73736D] dark:text-[#A1A19A] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5'
                }`}
              >
                {c === 'all' ? 'All Disciplines' : c}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A] mr-1">Status:</span>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer capitalize ${
                  selectedStatus === s
                    ? 'bg-[#777D61] text-[#F7F5EF] font-medium'
                    : 'text-[#73736D] dark:text-[#A1A19A] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5'
                }`}
              >
                {s === 'all' ? 'All Statuses' : s}
              </button>
            ))}
          </div>

        </div>

        <div className="text-xs text-[#73736D] dark:text-[#A1A19A] pt-2 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
          Showing {filteredBooks.length} of {READING_LIST.length} recorded texts
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((item) => (
          <div
            key={item.id}
            className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              {/* Zero-Pill Unboxed Metadata */}
              <div className="flex items-center justify-between text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b]">{item.category}</span>
                <span className="font-medium flex items-center gap-1">
                  {item.status === 'Completed' && <CheckCircle className="w-3 h-3 text-emerald-600" />}
                  {item.status === 'Currently Reading' && <Clock className="w-3 h-3 text-amber-600" />}
                  {item.status === 'Queued' && <Bookmark className="w-3 h-3 text-sky-600" />}
                  <span>{item.status}</span>
                </span>
              </div>

              <h3 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                {item.title}
              </h3>

              <div className="text-xs text-[#73736D] dark:text-[#A1A19A]">
                By <span className="font-medium text-[#20211F] dark:text-[#EDEDE9]">{item.author}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed pt-1">
                {item.note}
              </p>
            </div>

            <div className="pt-3 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 text-[11px] text-[#73736D] dark:text-[#A1A19A] italic">
              Annotated personal reading log
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
