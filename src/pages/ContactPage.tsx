import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';
import { Send, Check, Copy, ArrowUpRight, Inbox, Trash2 } from 'lucide-react';

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Local storage message management for live testing
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('portfolio_messages');
      if (stored) {
        setSavedMessages(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (honeypot) return;

    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setError('Please provide a subject for transmission.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError('Please enter a message with at least 10 characters.');
      return;
    }
    if (!consent) {
      setError('Please confirm transmission acknowledgment.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newMessage: SavedMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleString(),
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      try {
        localStorage.setItem('portfolio_messages', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setConsent(false);
    }, 500);
  };

  const handleClearMessages = () => {
    localStorage.removeItem('portfolio_messages');
    setSavedMessages([]);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError('Please provide a valid email address.');
      return;
    }

    try {
      const subs = JSON.parse(localStorage.getItem('portfolio_subscribers') || '[]');
      subs.push({ email: newsletterEmail.trim(), date: new Date().toISOString() });
      localStorage.setItem('portfolio_subscribers', JSON.stringify(subs));
    } catch {
      // ignore
    }

    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  const formattedLogCount = savedMessages.length < 10 ? `0${savedMessages.length}` : `${savedMessages.length}`;

  return (
    <div className="w-full pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-[rgba(226,226,228,0.1)] bg-[#111113]">
        
        {/* Sidebar: Technical Coordinates & Live Local Logs */}
        <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[rgba(226,226,228,0.1)] p-6 sm:p-10 flex flex-col gap-8 bg-[rgba(255,255,255,0.01)]">
          <section>
            <span className="tech-label mb-2">Primary Coordinate</span>
            <div className="border border-[rgba(226,226,228,0.12)] p-4 bg-[rgba(255,255,255,0.02)] flex items-center justify-between gap-2">
              <span className="font-mono text-xs sm:text-sm text-[#e2e2e4] break-all">
                {SITE_CONFIG.primaryEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-[#e2e2e4] opacity-70 hover:opacity-100 hover:text-[#facc15] cursor-pointer shrink-0"
                title="Copy email coordinate"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#facc15]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </section>

          <section>
            <span className="tech-label mb-1">Location Status</span>
            <p className="text-sm font-semibold text-[#e2e2e4]">
              {SITE_CONFIG.location} [UTC +5:45]
            </p>
          </section>

          <section>
            <span className="tech-label mb-2">Connected Profiles</span>
            <div className="space-y-2">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-[#e2e2e4] opacity-80 hover:opacity-100 hover:text-[#facc15] transition-colors py-1"
              >
                <span>Facebook: {SITE_CONFIG.socials.facebookPageName}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center justify-between text-xs sm:text-sm text-[#e2e2e4] opacity-40 py-1">
                <span>YouTube: {SITE_CONFIG.socials.youtubeStatus}</span>
              </div>
            </div>
          </section>

          {/* Stat Block: Local Logs */}
          <section className="border-t border-[rgba(226,226,228,0.1)] pt-6 mt-2">
            <span className="tech-label mb-1">Local Logs</span>
            <div className="flex items-baseline justify-between">
              <div className="font-syne font-extrabold text-4xl text-[#facc15]">
                {formattedLogCount}
              </div>
              {savedMessages.length > 0 && (
                <button
                  onClick={() => setShowInbox(!showInbox)}
                  className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#facc15] hover:underline cursor-pointer"
                >
                  {showInbox ? 'Close Box' : 'Inspect Log'}
                </button>
              )}
            </div>
            <p className="text-[0.7rem] text-[#e2e2e4] opacity-50 mt-2 leading-relaxed">
              Messages sent through this form are logged in browser local storage for direct client verification.
            </p>
          </section>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-8 p-6 sm:p-12 lg:p-14 space-y-10">
          <div>
            <span className="tech-label mb-2">01 / Outreach</span>
            <h1 className="font-syne font-extrabold text-4xl sm:text-6xl tracking-[-0.05em] text-[#e2e2e4] leading-[0.95] mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#e2e2e4] opacity-70 max-w-xl">
              Have a thoughtful idea, a literary reflection, a collaboration proposal, or simply something worth discussing? I'd be glad to hear from you.
            </p>
          </div>

          {/* Grid UI: Direct Messaging & Dispatch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Direct Messaging Form */}
            <div className="border border-[rgba(226,226,228,0.1)] p-6 sm:p-8 bg-[rgba(255,255,255,0.02)] space-y-5">
              <span className="tech-label">Direct Messaging</span>

              {success ? (
                <div className="p-5 border border-[#facc15] bg-[#facc15]/10 space-y-3">
                  <div className="flex items-center gap-2 text-[#facc15] font-syne font-bold text-sm">
                    <Check className="w-4 h-4" />
                    <span>Transmission Confirmed</span>
                  </div>
                  <p className="text-xs text-[#e2e2e4] opacity-80 leading-relaxed">
                    Your transmission has been logged into the local verification store. A direct response will be dispatched via email.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="font-mono text-[0.7rem] tracking-wider uppercase text-[#facc15] underline pt-1 cursor-pointer"
                  >
                    Send another transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                  />

                  {error && (
                    <div className="p-3 border border-rose-500 bg-rose-950/30 font-mono text-[0.7rem] text-rose-300">
                      {error}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-[#e2e2e4] opacity-60">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aavash Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[rgba(226,226,228,0.06)] border border-transparent focus:border-[#facc15] focus:outline-none p-3 text-sm text-[#e2e2e4]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-[#e2e2e4] opacity-60">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[rgba(226,226,228,0.06)] border border-transparent focus:border-[#facc15] focus:outline-none p-3 text-sm text-[#e2e2e4]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-[#e2e2e4] opacity-60">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Question on Cost Accounting..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[rgba(226,226,228,0.06)] border border-transparent focus:border-[#facc15] focus:outline-none p-3 text-sm text-[#e2e2e4]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-[0.62rem] uppercase tracking-wider text-[#e2e2e4] opacity-60">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your thoughts..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[rgba(226,226,228,0.06)] border border-transparent focus:border-[#facc15] focus:outline-none p-3 text-sm text-[#e2e2e4] leading-relaxed resize-y"
                    />
                  </div>

                  <div className="flex gap-2.5 items-start pt-1">
                    <input
                      type="checkbox"
                      id="form-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 accent-[#facc15] cursor-pointer"
                    />
                    <label htmlFor="form-consent" className="text-[0.7rem] text-[#e2e2e4] opacity-60 leading-normal cursor-pointer">
                      I acknowledge that this message is sent voluntarily for correspondence.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#facc15] text-[#111113] hover:bg-[#eab308] p-3 font-syne font-extrabold uppercase text-[0.8rem] tracking-[0.05em] transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? <span>Transmitting...</span> : <span>Send Transmission</span>}
                  </button>
                </form>
              )}
            </div>

            {/* Right Stack: Occasional Dispatch & Profile Summary */}
            <div className="flex flex-col gap-6">
              
              {/* Occasional Dispatch Card */}
              <div className="border border-[#facc15] p-6 sm:p-8 bg-[#facc15]/10 space-y-4">
                <span className="tech-label">Occasional Dispatch</span>
                <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-[#e2e2e4] leading-tight">
                  Letters on Thought, Literature, and Life
                </h3>
                <p className="text-xs sm:text-sm text-[#e2e2e4] opacity-80 leading-relaxed">
                  Personal reflections and ideas worth revisiting. No algorithms or sponsored noise.
                </p>

                {newsletterSuccess ? (
                  <div className="p-3 border border-[#facc15] bg-[#111113] text-xs text-[#facc15] font-mono">
                    Subscribed to letters.
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                    {newsletterError && (
                      <div className="text-xs text-rose-400">{newsletterError}</div>
                    )}
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-[#111113]/70 border border-[rgba(226,226,228,0.15)] focus:border-[#facc15] focus:outline-none p-3 text-sm text-[#e2e2e4]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#facc15] text-[#111113] hover:bg-[#eab308] p-3 font-syne font-extrabold uppercase text-[0.8rem] tracking-[0.05em] transition-colors cursor-pointer"
                    >
                      Join Letters
                    </button>
                  </form>
                )}
              </div>

              {/* Profile Summary Card */}
              <div className="border border-[rgba(226,226,228,0.1)] p-6 sm:p-8 bg-[rgba(255,255,255,0.02)] space-y-3">
                <span className="tech-label">Profile Summary</span>
                <p className="text-xs sm:text-sm text-[#e2e2e4] opacity-80 leading-relaxed">
                  Nepal-based student exploring the intersection of analytical thinking, philosophical inquiry, literary expression, and technology.
                </p>
                <p className="text-xs sm:text-sm italic text-[#facc15] pt-2">
                  "{SITE_CONFIG.closingMotto}"
                </p>
              </div>

            </div>

          </div>

          {/* Local Inbox Drawer */}
          {showInbox && (
            <div className="border border-[rgba(226,226,228,0.15)] p-6 bg-[#18181c] space-y-4">
              <div className="flex items-center justify-between border-b border-[rgba(226,226,228,0.1)] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#facc15]">
                  <Inbox className="w-4 h-4" />
                  <span>Local Verification Log ({savedMessages.length})</span>
                </div>
                {savedMessages.length > 0 && (
                  <button
                    onClick={handleClearMessages}
                    className="font-mono text-[0.65rem] text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {savedMessages.length > 0 ? (
                <div className="space-y-3">
                  {savedMessages.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 border border-[rgba(226,226,228,0.08)] bg-[#111113] space-y-1.5 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between text-[#e2e2e4]">
                        <span className="font-bold text-[#facc15]">{m.name}</span>
                        <span className="opacity-50 text-[0.65rem]">{m.timestamp}</span>
                      </div>
                      <div className="opacity-75">{m.email} // {m.subject}</div>
                      <div className="text-[0.75rem] font-sans text-[#e2e2e4] opacity-90 pt-1 border-t border-[rgba(226,226,228,0.05)]">
                        {m.message}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs font-mono text-[#e2e2e4] opacity-50 py-2">
                  No transmissions currently logged.
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
