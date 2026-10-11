# Personal Portfolio & Intellectual Journal

A modern, responsive, editorial personal portfolio and intellectual journal built for a Nepal-based student exploring the intersection of professional accounting (ICAN), philosophy (Nietzsche, Stoicism, Amor Fati), Nepali literature (Ghazals & Kavita), and technology (Linux systems).

## Architecture & Features

1. **Centralized Configuration (`src/data/config.ts`)**:
   - Easily customize owner name (`Sahitya Yadav`), biography, email (`yadavsahitya08@gmail.com`), social links, and core mottos from a single file.

2. **Routes & Pages**:
   - `/` (`home`): Editorial split hero with generated archival artwork, 4-dimension focus strip, signature Amor Fati reflection, featured essays, active projects preview, and closing invitation.
   - `/about`: Complete first-person narrative, "Who I Am", "What I Study", "What I Question", "What I Create", "What I Hope to Explore", and verified academic milestones.
   - `/academic-journey`: In-depth breakdown of ICAN accounting studies (Marginal vs. Absorption costing, Process costing with equivalent units, Overhead allocation, and Labour incentives) with an interactive Reconciliation Calculator Demonstrator.
   - `/interests`: Four detailed pillars spanning Accounting, Philosophy, Literature, and Technology (Linux, Kali live USB experimentation, computer hardware, and physics).
   - `/philosophy`: Digital philosophy journal featuring the Amor Fati fine-art piece, clear distinctions between historical traditions and original reflections, and thematic inquiries.
   - `/literature`: Nepali poetry and Ghazals with Devanagari font compatibility (`Mukta`), bilingual toggles (Nepali / English / Both), copy stanza to clipboard, share controls, and theme/form filtering.
   - `/projects`: Showcases **Unfiltered Opinion** (Facebook platform for everyday human struggles) and the **Philosophy Video Project** (YouTube channel in development with a 6-step roadmap).
   - `/writings` & `/writings/[slug]`: Searchable blog and essay catalog with live text search, category filters, read time estimates, and longform article reader with previous/next navigation.
   - `/personal-outlook`: Six governing principles of intellectual independence, critical inquiry, emotional honesty, and rational analysis.
   - `/reading-list`: Filterable reading catalog categorizing books as Completed, Currently Reading, or Queued.
   - `/contact`: Full-featured contact form with client-side validation, honeypot spam protection, live test submission inbox in `localStorage`, mail client link, and optional newsletter subscription.
   - `/privacy`: Transparent privacy statement disclosing local storage usage and zero commercial tracker policy.

3. **Design System & Aesthetics**:
   - **Palette**: Warm ivory (`#F7F5EF`), charcoal (`#20211F`), muted gray (`#73736D`), deep burgundy accent (`#762F3B`), and muted olive (`#777D61`).
   - **Dark Mode**: Persistent theme toggle with high-contrast optical compensation.
   - **Typography**: Editorial serif (`Cormorant Garamond`), clean sans (`Plus Jakarta Sans`), and Devanagari (`Mukta`).
   - **Anti-Slop Discipline**: Zero static pill enclosures on metadata; clean typographic separators (`·`, `/`).

## Updating Content

- **Change Personal Information**: Edit `src/data/config.ts`.
- **Add a New Essay**: Add an entry to the `WRITINGS` array in `src/data/writings.ts`.
- **Add a Nepali Poem or Ghazal**: Add an entry to `LITERARY_WORKS` in `src/data/literature.ts`.
- **Add a Book to the Reading List**: Add an entry to `READING_LIST` in `src/data/readingList.ts`.
- **Update Projects**: Edit `PROJECTS` in `src/data/projects.ts`.

## Build & Run

```bash
# Development server (Port 3000)
npm run dev

# Type check & lint
npm run lint

# Production build
npm run build
```
