/**
 * Centralized Configuration for Personal Information & Site Identity
 * Easily update name, biographical notes, contact info, and social links here.
 */

export interface SiteConfig {
  name: string;
  pronouns?: string;
  tagline: string;
  subTagline: string;
  shortBio: string;
  location: string;
  primaryEmail: string;
  academicTitle: string;
  socials: {
    facebook: string;
    facebookPageName: string;
    youtubeChannelName: string;
    youtubeStatus: string;
    github?: string;
    x?: string;
  };
  amorFatiQuote: {
    reflection: string;
    attribution: string;
    theme: string;
  };
  closingMotto: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Sahitya Yadav",
  pronouns: "He/Him",
  tagline: "Between Reason, Reflection, and Expression.",
  subTagline: "An ongoing journey through accounting, philosophy, literature, and the questions that make us human.",
  shortBio: "I am a Nepal-based student exploring the intersection of analytical thinking, philosophical inquiry, literary expression, and technology.",
  location: "Nepal",
  primaryEmail: "yadavsahitya08@gmail.com",
  academicTitle: "ICAN Professional Accounting Student",
  socials: {
    facebook: "https://www.facebook.com/unfilteredopinion",
    facebookPageName: "Unfiltered Opinion",
    youtubeChannelName: "Philosophy & Reflection Channel",
    youtubeStatus: "In Development",
    github: "https://github.com",
  },
  amorFatiQuote: {
    reflection: "To embrace life is not merely to accept what happens, but to confront it honestly, learn from it, and find meaning in the act of living.",
    attribution: "Personal Reflection on Amor Fati",
    theme: "Resilience & Honest Acceptance",
  },
  closingMotto: "Still learning. Still questioning. Still becoming.",
};
