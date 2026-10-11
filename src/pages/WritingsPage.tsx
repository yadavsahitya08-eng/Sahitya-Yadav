import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { WRITINGS, WritingArticle } from '../data/writings';
import { Search, ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';

export const WritingsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'all',
    'Philosophy',
    'Accounting & Learning',
    'Literature',
    'Personal Reflections',
    'Technology'
  ];

  const filteredArticles = useMemo(() => {
    return WRITINGS.filter((article) => {
      const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const searchMatch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = WRITINGS[0];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Essays, Reflections & Technical Inquiries
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Writings & Thoughts
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          Long-form essays bridging philosophical investigations, ICAN cost accounting principles, literary ruminations, and open systems technology.
        </p>
      </div>

      {/* Featured Lead Article */}
      {selectedCategory === 'all' && !searchQuery && (
        <section
          onClick={() => navigate('writing-detail', featuredArticle.slug)}
          className="p-8 sm:p-12 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all cursor-pointer space-y-6"
        >
          <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
            <span className="font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Featured Essay
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-[#20211F] dark:text-[#EDEDE9]">{featuredArticle.category}</span>
            <span aria-hidden="true">·</span>
            <span>{featuredArticle.readTime}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] leading-tight">
            {featuredArticle.title}
          </h2>

          <p className="text-sm sm:text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed max-w-3xl">
            {featuredArticle.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-[#73736D] dark:text-[#A1A19A] pt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
            <span>By {featuredArticle.author} · {featuredArticle.date}</span>
            <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b] inline-flex items-center gap-1">
              Read Complete Essay <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </section>
      )}

      {/* Search & Category Filter Controls */}
      <div className="space-y-6">
        
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#73736D] dark:text-[#A1A19A]" />
          <input
            type="text"
            placeholder="Search essays by keyword, topic, or concept (e.g. 'Amor Fati', 'Marginal Costing', 'Linux')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] text-sm text-[#20211F] dark:text-[#EDEDE9] placeholder-[#73736D]/60 dark:placeholder-[#A1A19A]/60 focus:outline-none focus:ring-1 focus:ring-[#762F3B]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#73736D] hover:text-[#20211F] dark:hover:text-[#EDEDE9]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer capitalize ${
                selectedCategory === cat
                  ? 'bg-[#762F3B] text-[#F7F5EF] font-semibold shadow-xs'
                  : 'text-[#73736D] dark:text-[#A1A19A] hover:text-[#20211F] dark:hover:text-[#EDEDE9] bg-[#20211F]/5 dark:bg-[#EDEDE9]/5'
              }`}
            >
              {cat === 'all' ? 'All Writings' : cat}
            </button>
          ))}
        </div>

        {/* Results counter */}
        <div className="text-xs text-[#73736D] dark:text-[#A1A19A]">
          Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'essay' : 'essays'}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate('writing-detail', article.slug)}
              className="p-8 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                {/* Zero-Pill clean unboxed text */}
                <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 flex items-center justify-between text-xs text-[#73736D] dark:text-[#A1A19A]">
                <span>{article.date}</span>
                <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b] inline-flex items-center gap-1">
                  Read Essay <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-xl border border-dashed border-[#20211F]/20 dark:border-[#EDEDE9]/20 space-y-3">
          <BookOpen className="w-8 h-8 text-[#73736D] mx-auto opacity-60" />
          <h3 className="text-lg font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            No writings match your search query
          </h3>
          <p className="text-xs text-[#73736D] dark:text-[#A1A19A]">
            Try adjusting your search terms or selecting 'All Writings'.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
