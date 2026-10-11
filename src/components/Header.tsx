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
    <header className="sticky top-0 z-40 w-full bg-[#F7F5EF]/95 dark:bg-[#171816]/95 backdrop-blur-md border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl font-editorial font-bold tracking-tight text-[#20211F] dark:text-[#EDEDE9] hover:text-[#762F3B] dark:hover:text-[#b45366] transition-colors whitespace-nowrap shrink-0 text-left"
            aria-label="Sahitya Yadav homepage"
          >
            {SITE_CONFIG.name}
          </button>

          {/* Zone 2: Desktop Navigation Links (Single-line, unboxed) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#73736D] dark:text-[#A1A19A]" aria-label="Main Navigation">
            {mainNavItems.map((item) => {
              const isActive = route === item.to;
              return (
                <button
                  key={item.to}
                  onClick={() => handleNavClick(item.to)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#762F3B] dark:text-[#e07a8b] font-semibold'
                      : 'hover:text-[#20211F] dark:hover:text-[#EDEDE9]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#762F3B] dark:bg-[#e07a8b]" />
                  )}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 py-1 hover:text-[#20211F] dark:hover:text-[#EDEDE9] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 py-2 bg-[#F7F5EF] dark:bg-[#22231F] border border-[#20211F]/10 dark:border-[#EDEDE9]/10 rounded-lg shadow-lg z-50 text-left"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {secondaryNavItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className="block w-full px-4 py-2 text-xs font-medium text-[#73736D] dark:text-[#A1A19A] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 text-[#73736D] dark:text-[#A1A19A] hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors rounded-md hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] dark:bg-[#762F3B] dark:hover:bg-[#8d3846] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              Let's Connect
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#20211F] dark:text-[#EDEDE9] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {[...mainNavItems, ...secondaryNavItems].map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  route === item.to
                    ? 'text-[#762F3B] dark:text-[#e07a8b] bg-[#762F3B]/10 font-semibold'
                    : 'text-[#73736D] dark:text-[#A1A19A] hover:text-[#20211F] dark:hover:text-[#EDEDE9] hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-center text-xs font-semibold tracking-wide text-[#F7F5EF] bg-[#762F3B] rounded-md transition-colors"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
