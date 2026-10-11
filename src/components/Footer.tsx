import React from 'react';
import { useRouter, RouteName } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/config';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNav = (to: RouteName) => {
    navigate(to);
  };

  return (
    <footer className="w-full border-t-[1.5px] border-[#e2e2e4] px-4 sm:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[0.65rem] tracking-[0.05em] uppercase text-[#e2e2e4] opacity-80 z-10 bg-[#111113]">
      <div>
        © {currentYear} {SITE_CONFIG.name}. Crafted with intellectual care.
      </div>
      <div className="text-[#facc15] font-medium">
        ICAN Academic Journey // Nepal Coordinate [UTC +5:45]
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleNav('privacy')}
          className="hover:text-[#facc15] transition-colors cursor-pointer"
        >
          Privacy
        </button>
        <button
          onClick={() => handleNav('reading-list')}
          className="hover:text-[#facc15] transition-colors cursor-pointer"
        >
          Reading List
        </button>
        <button
          onClick={() => handleNav('projects')}
          className="hover:text-[#facc15] transition-colors cursor-pointer"
        >
          Unfiltered Opinion
        </button>
      </div>
    </footer>
  );
};
