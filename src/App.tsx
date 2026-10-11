/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicJourneyPage } from './pages/AcademicJourneyPage';
import { InterestsPage } from './pages/InterestsPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { LiteraturePage } from './pages/LiteraturePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WritingsPage } from './pages/WritingsPage';
import { WritingDetailPage } from './pages/WritingDetailPage';
import { PersonalOutlookPage } from './pages/PersonalOutlookPage';
import { ReadingListPage } from './pages/ReadingListPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { route, slug } = useRouter();

  const renderCurrentView = () => {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'academic-journey':
        return <AcademicJourneyPage />;
      case 'interests':
        return <InterestsPage />;
      case 'philosophy':
        return <PhilosophyPage />;
      case 'literature':
        return <LiteraturePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'writings':
        return <WritingsPage />;
      case 'writing-detail':
        return <WritingDetailPage slug={slug || ''} />;
      case 'personal-outlook':
        return <PersonalOutlookPage />;
      case 'reading-list':
        return <ReadingListPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] dark:bg-[#171816] text-[#20211F] dark:text-[#EDEDE9] transition-colors duration-200">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
