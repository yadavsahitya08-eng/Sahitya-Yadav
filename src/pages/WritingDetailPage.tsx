import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { WRITINGS, WritingArticle } from '../data/writings';
import { ArrowLeft, ArrowRight, Share2, Copy, Check, Clock, Calendar, User, BookOpen } from 'lucide-react';

interface WritingDetailPageProps {
  slug: string;
}

export const WritingDetailPage: React.FC<WritingDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);

  const articleIndex = WRITINGS.findIndex((a) => a.slug === slug);
  const article: WritingArticle = articleIndex !== -1 ? WRITINGS[articleIndex] : WRITINGS[0];

  const prevArticle = articleIndex > 0 ? WRITINGS[articleIndex - 1] : null;
  const nextArticle = articleIndex < WRITINGS.length - 1 ? WRITINGS[articleIndex + 1] : null;

  const relatedArticles = WRITINGS.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  return (
    <article className="max-w-3xl mx-auto space-y-12 pb-20">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('writings')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all writings</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-8">
        
        {/* Category & Read Time (Zero-Pill clean unboxed text) */}
        <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
          <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b]">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>Published {article.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] leading-[1.18] text-balance">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[#73736D] dark:text-[#A1A19A] leading-relaxed font-normal">
          {article.subtitle}
        </p>

        {/* Author row & share controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 text-xs text-[#73736D] dark:text-[#A1A19A]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">{article.author}</span>
            <span aria-hidden="true">·</span>
            <span>Nepal</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-[#20211F]/10 dark:border-[#EDEDE9]/10 hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedLink ? 'Copied' : 'Copy link'}</span>
            </button>
            <button
              onClick={handleShare}
              className="p-1 rounded border border-[#20211F]/10 dark:border-[#EDEDE9]/10 hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 transition-colors cursor-pointer"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Prose (Readable long-form typography, 65-75ch) */}
      <div className="space-y-6 text-base sm:text-lg leading-[1.8] text-[#20211F]/90 dark:text-[#EDEDE9]/90 font-normal">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="tracking-[-0.003em]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags (Zero-Pill clean unboxed text) */}
      <div className="pt-6 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 flex flex-wrap items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
        <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">Topics:</span>
        {article.tags.map((tag, idx) => (
          <span key={idx}>
            #{tag}
            {idx < article.tags.length - 1 && <span className="ml-2" aria-hidden="true">·</span>}
          </span>
        ))}
      </div>

      {/* Prev / Next Article Navigation */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10" aria-label="Adjacent articles">
        {prevArticle ? (
          <button
            onClick={() => navigate('writing-detail', prevArticle.slug)}
            className="p-4 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] text-left hover:border-[#762F3B]/30 transition-all cursor-pointer space-y-1"
          >
            <span className="text-[11px] uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A] flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous Essay
            </span>
            <div className="text-sm font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] line-clamp-1">
              {prevArticle.title}
            </div>
          </button>
        ) : <div />}

        {nextArticle ? (
          <button
            onClick={() => navigate('writing-detail', nextArticle.slug)}
            className="p-4 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] text-right hover:border-[#762F3B]/30 transition-all cursor-pointer space-y-1"
          >
            <span className="text-[11px] uppercase tracking-wider text-[#73736D] dark:text-[#A1A19A] flex items-center justify-end gap-1">
              Next Essay <ArrowRight className="w-3 h-3" />
            </span>
            <div className="text-sm font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] line-clamp-1">
              {nextArticle.title}
            </div>
          </button>
        ) : <div />}
      </nav>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
            More in {article.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigate('writing-detail', rel.slug)}
                className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] hover:border-[#762F3B]/30 transition-all cursor-pointer space-y-2"
              >
                <div className="text-xs text-[#762F3B] dark:text-[#e07a8b] font-medium">{rel.readTime}</div>
                <h4 className="text-base font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9] line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#73736D] dark:text-[#A1A19A] line-clamp-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  );
};
