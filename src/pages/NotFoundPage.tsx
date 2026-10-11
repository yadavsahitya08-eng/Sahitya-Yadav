import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="max-w-xl mx-auto text-center py-24 space-y-6">
      <div className="w-12 h-12 rounded-full bg-[#762F3B]/10 text-[#762F3B] dark:text-[#e07a8b] flex items-center justify-center mx-auto">
        <Compass className="w-6 h-6" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#762F3B] dark:text-[#e07a8b]">Error 404</span>
        <h1 className="text-4xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          The requested essay, reflection, or route does not exist in this catalog.
        </p>
      </div>
      <div className="pt-2">
        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] rounded-md transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
