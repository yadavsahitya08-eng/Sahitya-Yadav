import React, { useState } from 'react';
import { useRouter, RouteName } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { SITE_CONFIG } from '../data/config';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { route, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainNavItems: { label: string; to: RouteName }[] = [
    { label: 'About', to: 'about' },
    { label: 'Academic', to: 'academic-journey' },
    { label: 'Philosophy', to: 'philosophy' },
    { label: 'Literature', to: 'literature' },
    { label: 'Writings', to: 'writings' },
    { label: 'Projects', to: 'projects' },
  ];

  const secondaryNavItems: { label: string; to: RouteName }[] = [
    { label: 'Interests', to: 'interests' },
    { label: 'Personal Outlook', to: 'personal-outlook' },
    { label: 'Reading List', to: 'reading-list' },
    { label: 'Privacy Policy', to: 'privacy' },
  ];

  const handleNavClick = (to: RouteName) => {
    navigate(to);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111113]/95 backdrop-blur-md border-b-2 border-[#e2e2e4] px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6 transition-colors">
      
      {/* Zone 1: Syne 800 Bold Uppercase Logo */}
      <button
        onClick={() => handleNavClick('home')}
        className="font-syne font-extrabold text-xl sm:text-2xl tracking-[-0.04em] uppercase text-[#e2e2e4] hover:text-[#facc15] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        aria-label="Sahitya Yadav homepage"
      >
        {SITE_CONFIG.name}
      </button>

      {/* Zone 2: Navigation Links (JetBrains Mono uppercase 0.7rem) */}
      <nav className="hidden lg:flex items-center gap-6 font-mono text-[0.72rem] tracking-[0.1em] uppercase" aria-label="Main Navigation">
        {mainNavItems.map((item) => {
          const isActive = route === item.to;
          return (
            <button
              key={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`py-1 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'text-[#facc15] opacity-100 font-semibold'
                  : 'text-[#e2e2e4] opacity-60 hover:opacity-100 hover:text-[#facc15]'
              }`}
            >
              {item.label}
            </button>
          );
        })}

        {/* More dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 py-1 text-[#e2e2e4] opacity-60 hover:opacity-100 hover:text-[#facc15] transition-all cursor-pointer whitespace-nowrap shrink-0"
            aria-expanded={dropdownOpen}
          >
            <span>More</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-3 w-52 py-2 bg-[#18181c] border border-[rgba(226,226,228,0.15)] shadow-2xl z-50 text-left"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {secondaryNavItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => handleNavClick(item.to)}
                  className="block w-full px-4 py-2 font-mono text-[0.68rem] tracking-[0.08em] uppercase text-[#e2e2e4] opacity-70 hover:opacity-100 hover:bg-[#202026] hover:text-[#facc15] transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Zone 3: Actions + Saturated Yellow Primary Button */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={toggleTheme}
          aria-label="Toggle visual theme"
          className="w-8 h-8 rounded-full border border-[rgba(226,226,228,0.15)] flex items-center justify-center text-[#e2e2e4] opacity-70 hover:opacity-100 hover:border-[#facc15] transition-colors cursor-pointer"
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => handleNavClick('contact')}
          className="bg-[#facc15] text-[#111113] hover:bg-[#eab308] px-4 py-2 font-syne font-extrabold uppercase text-[0.75rem] tracking-[0.05em] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
        >
          Connect
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-[#e2e2e4] hover:text-[#facc15] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-b-2 border-[#e2e2e4] bg-[#111113] px-6 py-5 space-y-3 z-50">
          <div className="flex flex-col space-y-2">
            {[...mainNavItems, ...secondaryNavItems].map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`w-full text-left py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  route === item.to
                    ? 'text-[#facc15] font-semibold'
                    : 'text-[#e2e2e4] opacity-70 hover:opacity-100 hover:text-[#facc15]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[rgba(226,226,228,0.1)]">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-center font-syne font-extrabold uppercase text-xs tracking-wider bg-[#facc15] text-[#111113]"
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
