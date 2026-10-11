import React from 'react';
import { useRouter, RouteName } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/config';
import { Mail, ArrowUpRight, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNav = (to: RouteName) => {
    navigate(to);
  };

  return (
    <footer className="w-full border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] transition-colors py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10">
          
          {/* Col 1: Wordmark & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-[#73736D] dark:text-[#A1A19A]">
                · {SITE_CONFIG.location}
              </span>
            </div>
            <p className="text-sm text-[#73736D] dark:text-[#A1A19A] max-w-md leading-relaxed">
              {SITE_CONFIG.shortBio}
            </p>
            <div className="pt-2 text-xs text-[#73736D] dark:text-[#A1A19A] font-serif italic">
              "{SITE_CONFIG.closingMotto}"
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic-journey')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Academic Journey
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('philosophy')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Philosophy Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('literature')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Literature & Ghazals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('writings')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Writings & Essays
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
              Connect & Insights
            </h4>
            <ul className="space-y-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
              <li>
                <button onClick={() => handleNav('personal-outlook')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Personal Outlook
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reading-list')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors flex items-center gap-1">
                  <span>Reading List</span>
                  <BookOpen className="w-3 h-3 text-[#762F3B] dark:text-[#e07a8b]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Projects: Unfiltered Opinion
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors flex items-center gap-1">
                  <span>Get in Touch</span>
                  <Mail className="w-3 h-3" />
                </button>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors inline-flex items-center gap-1"
                >
                  <span>Facebook Platform</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73736D] dark:text-[#A1A19A]">
          <div>
            © {currentYear} {SITE_CONFIG.name}. Crafted with intellectual care and independent inquiry.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#20211F] dark:hover:text-[#EDEDE9] transition-colors"
            >
              Privacy Notice
            </button>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px]">ICAN Academic Journey</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
