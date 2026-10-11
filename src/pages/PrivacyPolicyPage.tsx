import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Legal & Operational Transparency
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Privacy Policy
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
          Last updated: February 2026. A straightforward, non-corporate explanation of how information is handled on this personal portfolio website.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8 text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
        
        <section className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
            <ShieldCheck className="w-4 h-4 text-[#762F3B] dark:text-[#e07a8b]" />
            <span>01. Core Principle: Zero Exploitative Data Practices</span>
          </div>
          <p>
            This website is a personal academic and creative portfolio maintained by {SITE_CONFIG.name}. It does not deploy third-party advertising networks, surveillance analytics, behavioral profiling pixels, or cross-site tracking scripts.
          </p>
        </section>

        <section className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
            <Database className="w-4 h-4 text-[#777D61] dark:text-[#9EA585]" />
            <span>02. Browser Local Storage (Client-Side State)</span>
          </div>
          <p>
            This website utilizes standard browser <code className="font-mono text-xs px-1 py-0.5 rounded bg-[#20211F]/5 dark:bg-[#EDEDE9]/5">localStorage</code> strictly to preserve your visual preferences:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Theme Preference:</strong> Remembers whether you chose Light mode or Dark mode across browsing sessions.</li>
            <li><strong>Form Testing Log:</strong> Retains messages submitted through the contact form in your browser session for your immediate inspection.</li>
          </ul>
          <p className="text-xs pt-1">
            This data never leaves your device unless you explicitly submit communication to my email.
          </p>
        </section>

        <section className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
            <Lock className="w-4 h-4 text-[#762F3B] dark:text-[#e07a8b]" />
            <span>03. Contact Form Submissions & Email Inquiries</span>
          </div>
          <p>
            When you send a message through the contact form, you provide your name, email address, subject, and text message voluntarily. This information is used solely to read and reply to your personal inquiry. It is never sold, leased, or distributed to mailing lists or third parties.
          </p>
        </section>

        <section className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
            <Eye className="w-4 h-4 text-[#777D61] dark:text-[#9EA585]" />
            <span>04. Data Rights & Contact</span>
          </div>
          <p>
            If you have previously submitted an inquiry and wish to verify, update, or request the deletion of your correspondence, you can email directly at <strong className="font-mono text-[#20211F] dark:text-[#EDEDE9]">{SITE_CONFIG.primaryEmail}</strong>.
          </p>
        </section>

      </div>

    </div>
  );
};
