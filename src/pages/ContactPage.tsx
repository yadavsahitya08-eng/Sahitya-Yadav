import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, ShieldCheck, Inbox, Trash2 } from 'lucide-react';

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
  const [honeypot, setHoneypot] = useState(''); // Anti-bot field

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Local storage message management for live testing
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
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

    // Spam honeypot trap
    if (honeypot) {
      return;
    }

    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address so I can reply.');
      return;
    }
    if (!subject.trim()) {
      setError('Please provide a brief subject for your message.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError('Please write a message with at least 10 characters.');
      return;
    }
    if (!consent) {
      setError('Please acknowledge the privacy notice to send a message.');
      return;
    }

    setLoading(true);

    // Simulate sending with safe local persistence
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
    }, 600);
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
    if (!newsletterConsent) {
      setNewsletterError('Please confirm your consent to receive letters.');
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
    setNewsletterConsent(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
          Dialogue, Collaboration & Exchange
        </div>
        <h1 className="text-4xl sm:text-5xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
          Get in Touch
        </h1>
        <p className="text-base text-[#73736D] dark:text-[#A1A19A] leading-relaxed max-w-2xl">
          Have a thoughtful idea, a literary reflection, a collaboration proposal, or simply something worth discussing? I'd be glad to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-7 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
            <h2 className="text-xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Contact Coordinates
            </h2>

            {/* Email Address with Copy Button */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
                Primary Email
              </div>
              <div className="flex items-center justify-between gap-2 p-3 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816]">
                <span className="font-mono text-xs text-[#20211F] dark:text-[#EDEDE9] truncate">
                  {SITE_CONFIG.primaryEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-[#20211F]/5 dark:hover:bg-[#EDEDE9]/5 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#73736D]" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] text-emerald-600 font-medium">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Location */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
                Location
              </div>
              <div className="text-sm text-[#20211F] dark:text-[#EDEDE9]">
                {SITE_CONFIG.location}
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3 pt-2 border-t border-[#20211F]/10 dark:border-[#EDEDE9]/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#20211F] dark:text-[#EDEDE9]">
                Connected Profiles
              </div>
              <ul className="space-y-2 text-xs text-[#73736D] dark:text-[#A1A19A]">
                <li>
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#762F3B] dark:hover:text-[#e07a8b] transition-colors"
                  >
                    <span>Facebook: {SITE_CONFIG.socials.facebookPageName}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-1.5 opacity-80">
                    <span>YouTube Channel: {SITE_CONFIG.socials.youtubeStatus}</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Mailto alternative */}
            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.primaryEmail}?subject=Inquiry%20from%20Portfolio`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 hover:border-[#762F3B]/40 hover:text-[#762F3B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Default Mail Client</span>
              </a>
            </div>

          </div>

          {/* Test Submission Local Inbox trigger */}
          <div className="p-5 rounded-lg border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#20211F] dark:text-[#EDEDE9] flex items-center gap-1.5">
                <Inbox className="w-3.5 h-3.5 text-[#762F3B] dark:text-[#e07a8b]" />
                <span>Local Message Box ({savedMessages.length})</span>
              </span>
              <button
                onClick={() => setShowInbox(!showInbox)}
                className="text-xs font-semibold text-[#762F3B] dark:text-[#e07a8b] hover:underline cursor-pointer"
              >
                {showInbox ? 'Hide' : 'Inspect'}
              </button>
            </div>
            <p className="text-[11px] text-[#73736D] dark:text-[#A1A19A]">
              Messages sent through this form are logged in browser local storage for complete verification and review.
            </p>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          
          <div className="p-8 sm:p-10 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-6">
            <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
              Send a Message
            </h2>

            {success ? (
              <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Message recorded successfully</span>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                  Thank you for reaching out. Your transmission has been received and saved into the review log. You can also send directly to {SITE_CONFIG.primaryEmail}.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 underline pt-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot anti-spam (hidden from real users) */}
                <input
                  type="text"
                  name="website_url_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {error && (
                  <div className="p-3 rounded-md bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:rose-300">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullname" className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9]">
                    Full Name <span className="text-[#762F3B]">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aavash Sharma"
                    className="w-full px-3 py-2 text-sm rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] focus:outline-none focus:ring-1 focus:ring-[#762F3B]"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9]">
                    Email Address <span className="text-[#762F3B]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 text-sm rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] focus:outline-none focus:ring-1 focus:ring-[#762F3B]"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9]">
                    Subject <span className="text-[#762F3B]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Question on Cost Accounting / Discussion on Amor Fati"
                    className="w-full px-3 py-2 text-sm rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] focus:outline-none focus:ring-1 focus:ring-[#762F3B]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-medium text-[#20211F] dark:text-[#EDEDE9]">
                    Message <span className="text-[#762F3B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your thoughts or inquiry here..."
                    className="w-full px-3 py-2 text-sm rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] focus:outline-none focus:ring-1 focus:ring-[#762F3B] leading-relaxed resize-y"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#762F3B] cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-[#73736D] dark:text-[#A1A19A] leading-relaxed cursor-pointer">
                    I acknowledge that this message is sent voluntarily for correspondence, subject to the website's privacy notice.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 text-xs font-semibold tracking-wide text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] disabled:opacity-60 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>

      {/* Local Inbox Viewer (Inspecting submitted test messages) */}
      {showInbox && (
        <section className="p-8 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4">
          <div className="flex items-center justify-between border-b border-[#20211F]/10 dark:border-[#EDEDE9]/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#20211F] dark:text-[#EDEDE9]">
              <Inbox className="w-4 h-4 text-[#762F3B]" />
              <span>Locally Stored Form Submissions ({savedMessages.length})</span>
            </div>
            {savedMessages.length > 0 && (
              <button
                onClick={handleClearMessages}
                className="text-xs text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            )}
          </div>

          {savedMessages.length > 0 ? (
            <div className="space-y-3">
              {savedMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 rounded-md border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#F7F5EF] dark:bg-[#171816] space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#20211F] dark:text-[#EDEDE9]">{msg.name} ({msg.email})</span>
                    <span className="text-[#73736D] dark:text-[#A1A19A]">{msg.timestamp}</span>
                  </div>
                  <div className="font-medium text-[#762F3B] dark:text-[#e07a8b]">{msg.subject}</div>
                  <p className="text-[#73736D] dark:text-[#A1A19A] leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-[#73736D] dark:text-[#A1A19A] italic py-2">
              No messages logged yet. Submit the form above to verify real-time persistence.
            </div>
          )}
        </section>
      )}

      {/* Newsletter Section: Letters on Thought, Literature, and Life */}
      <section className="p-8 sm:p-10 rounded-xl border border-[#20211F]/10 dark:border-[#EDEDE9]/10 bg-[#FAF9F5] dark:bg-[#1E1F1C] space-y-4">
        <div className="max-w-xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#762F3B] dark:text-[#e07a8b]">
            Occasional Dispatch
          </div>
          <h2 className="text-2xl font-editorial font-bold text-[#20211F] dark:text-[#EDEDE9]">
            Letters on Thought, Literature, and Life
          </h2>
          <p className="text-xs sm:text-sm text-[#73736D] dark:text-[#A1A19A] leading-relaxed">
            Occasional reflections, new writing, and ideas worth revisiting. No spam, algorithms, or automated promotions.
          </p>
        </div>

        {newsletterSuccess ? (
          <div className="p-4 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 space-y-1">
            <span className="font-semibold">Subscribed to dispatches.</span>
            <p>Thank you for your interest. You may unsubscribe at any time.</p>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="space-y-3 max-w-xl">
            {newsletterError && (
              <div className="text-xs text-rose-600">{newsletterError}</div>
            )}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-md border border-[#20211F]/15 dark:border-[#EDEDE9]/15 bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] focus:outline-none focus:ring-1 focus:ring-[#762F3B]"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-[#F7F5EF] bg-[#762F3B] hover:bg-[#602530] rounded-md transition-colors cursor-pointer shrink-0"
              >
                Join Letters
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="newsConsent"
                type="checkbox"
                checked={newsletterConsent}
                onChange={(e) => setNewsletterConsent(e.target.checked)}
                className="accent-[#762F3B] cursor-pointer"
              />
              <label htmlFor="newsConsent" className="text-[11px] text-[#73736D] dark:text-[#A1A19A] cursor-pointer">
                I agree to receive occasional personal dispatches and understand I can unsubscribe anytime.
              </label>
            </div>
          </form>
        )}
      </section>

    </div>
  );
};
