import React, { useState } from 'react';
import { LITERARY_WORKS, LiteraryWork } from '../data/literature';
import { ASSETS } from '../assets';
import { Feather, Copy, Check, Share2, Globe, Heart } from 'lucide-react';

export const LiteraturePage: React.FC = () => {
  const [selectedLanguageMode, setSelectedLanguageMode] = useState<'both' | 'nepali' | 'english'>('both');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const genres = ['all', 'Ghazal', 'Kavita (Poem)', 'Muktak'];
  const themes = ['all', 'Loneliness', 'Existence', 'Reflection', 'Memory'];

  const filteredWorks = LITERARY_WORKS.filter((work) => {
    const genreMatch = selectedGenre === 'all' || work.genre === selectedGenre;
    const themeMatch = selectedTheme === 'all' || work.theme === selectedTheme;
    return genreMatch && themeMatch;
  });

  const handleCopy = (work: LiteraryWork) => {
    const textToCopy = `${work.titleNepali} (${work.titleEnglish})\n\n${work.stanzasNepali.join('\n\n')}\n\n— Sahitya Yadav`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(work.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShare = (work: LiteraryWork) => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `${work.titleNepali} - ${work.titleEnglish}`,
        text: `Read this Nepali literary piece by Sahitya Yadav.`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setShareFeedback(work.id);
      setTimeout(() => setShareFeedback(null), 2500);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Nepali Literature & Literary Solitude
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Literature, Poetry & Ghazals
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] max-w-2xl leading-relaxed">
          A dedicated sanctuary for original Nepali couplets, ghazals, and introspective verses. Where formal Devanagari meter meets existential solitude and honest human emotion.
        </p>
      </div>

      {/* Featured Visual Banner */}
      <div className="rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Cultural & Linguistic Roots
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              नेपाली साहित्य र मनको मौनता
            </h2>
            <p className="text-xs sm:text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed font-devanagari">
              साहित्य मेरो लागि केवल शब्दहरूको सङ्कलन होइन, यो जीवनका अव्यक्त पीडा, आशा र मौनतालाई स्पर्श गर्ने एउटा आत्मीय यात्रा हो। गजलको अनुशासन र कविताको स्वतन्त्रताले मलाई आफ्नै अस्तित्वसँग संवाद गर्न सिकाउँछ।
            </p>
            <p className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed pt-1">
              "Literature is where numerical precision yields to emotional vulnerability. Each couplet is an inquiry into the silent spaces we carry within."
            </p>
          </div>
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] border-t lg:border-t-0 lg:border-l border-[#20211F]/10 dark:border-[#EDEDE9]/10 relative">
            <img
              src={ASSETS.literature}
              alt="Handmade Lokta paper journal with calligraphy and ink pot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="p-6 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#762F3B] dark:text-[#e07a8b]" />
            <span className="text-xs font-medium text-[#20211F] dark:text-[#EDEDE9]">Language Display:</span>
            <div className="flex items-center p-1 bg-[#20211F]/5 dark:bg-[#EDEDE9]/5 rounded-md">
              <button
                onClick={() => setSelectedLanguageMode('both')}
                className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                  selectedLanguageMode === 'both' ? 'bg-[#FAF9F5] dark:bg-[#1E1F1C] text-[#762F3B] dark:text-[#e07a8b] font-semibold shadow-xs' : 'text-[#73736D] dark:text-[#A1A19A]'
                }`}
              >
                Bilingual (Both)
              </button>
              <button
                onClick={() => setSelectedLanguageMode('nepali')}
                className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                  selectedLanguageMode === 'nepali' ? 'bg-[#FAF9F5] dark:bg-[#1E1F1C] text-[#762F3B] dark:text-[#e07a8b] font-semibold shadow-xs' : 'text-[#73736D] dark:text-[#A1A19A]'
                }`}
              >
                नेपाली मात्र
              </button>
              <button
                onClick={() => setSelectedLanguageMode('english')}
                className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                  selectedLanguageMode === 'english' ? 'bg-[#FAF9F5] dark:bg-[#1E1F1C] text-[#762F3B] dark:text-[#e07a8b] font-semibold shadow-xs' : 'text-[#73736D] dark:text-[#A1A19A]'
                }`}
              >
                English Reflection
              </button>
            </div>
          </div>

          {/* Result Count (Clean unboxed text) */}
          <div className="text-xs text-[#73736D] dark:text-[#A1A19A]">
            Showing {filteredWorks.length} of {LITERARY_WORKS.length} works
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 pt-4">
          
          {/* Genre tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A] mr-1">Form:</span>
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                className={`px-3 py-1 text-xs rounded-md capitalize transition-colors cursor-pointer ${
                  selectedGenre === g
                    ? 'bg-[#762F3B] text-[#F7F5EF] font-medium'
                    : 'text-[#73736D] dark:text-[#A1A19A] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5'
                }`}
              >
                {g === 'all' ? 'All Forms' : g}
              </button>
            ))}
          </div>

          {/* Theme tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#73736D] dark:text-[#A1A19A] mr-1">Theme:</span>
            {themes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTheme(t)}
                className={`px-3 py-1 text-xs rounded-md capitalize transition-colors cursor-pointer ${
                  selectedTheme === t
                    ? 'bg-[#777D61] text-[#F7F5EF] font-medium'
                    : 'text-[#73736D] dark:text-[#A1A19A] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5'
                }`}
              >
                {t === 'all' ? 'All Themes' : t}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Literary Pieces List */}
      <div className="space-y-12">
        {filteredWorks.map((work) => (
          <article
            key={work.id}
            className="p-8 sm:p-12 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                  <span className="font-semibold text-[#762F3B] dark:text-[#e07a8b]">{work.genre}</span>
                  <span aria-hidden="true">·</span>
                  <span>Theme: {work.theme}</span>
                  <span aria-hidden="true">·</span>
                  <span>{work.date}</span>
                </div>
                <h3 className="text-3xl font-devanagari font-bold text-[#20211F] dark:text-[#EDEDE9] mt-2 leading-normal">
                  {work.titleNepali}
                </h3>
                <div className="text-sm font-editorial italic text-[#73736D] dark:text-[#A1A19A] mt-0.5">
                  "{work.titleEnglish}"
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(work)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-[#20211F]/10 dark:border-[#EDEDE9]/10 hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 text-[#20211F] dark:text-[#EDEDE9] transition-colors cursor-pointer"
                  title="Copy couplet lines to clipboard"
                >
                  {copiedId === work.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleShare(work)}
                  className="p-1.5 rounded-md border border-[#20211F]/10 dark:border-[#EDEDE9]/10 hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 text-[#20211F] dark:text-[#EDEDE9] transition-colors cursor-pointer"
                  title="Share link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                {shareFeedback === work.id && (
                  <span className="text-xs text-emerald-600">Link copied!</span>
                )}
              </div>
            </div>

            {/* Stanzas Display */}
            <div className="space-y-8">
              {work.stanzasNepali.map((nepaliStanza, idx) => {
                const englishStanza = work.stanzasEnglish[idx];
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-[#F7F5EF] dark:bg-[#171816] border border-[#20211F]/5 dark:border-[#EDEDE9]/5 space-y-4"
                  >
                    {/* Nepali Script */}
                    {(selectedLanguageMode === 'both' || selectedLanguageMode === 'nepali') && (
                      <div className="font-devanagari text-lg sm:text-xl font-medium text-[#20211F] dark:text-[#EDEDE9] leading-relaxed whitespace-pre-line tracking-wide">
                        {nepaliStanza}
                      </div>
                    )}

                    {/* English translation / reflection */}
                    {(selectedLanguageMode === 'both' || selectedLanguageMode === 'english') && (
                      <div className="font-editorial italic text-sm sm:text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed whitespace-pre-line border-t border-[#20211F]/5 dark:border-[#EDEDE9]/5 pt-3">
                        {englishStanza}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Author's contextual note */}
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 pt-4 flex items-start gap-2">
              <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">Poet's Note:</span>
              <span className="italic leading-relaxed">{work.reflectionNote}</span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
