import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HumanContext } from './components/HumanContext';
import { GuidedJourney } from './components/GuidedJourney';
import { ProductProof } from './components/ProductProof';
import { KnowledgeEcosystem } from './components/KnowledgeEcosystem';
import { PersonalWorkspace } from './components/PersonalWorkspace';
import { SafetyTrust } from './components/SafetyTrust';
import { SupportProject } from './components/SupportProject';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AnalysisModal } from './components/AnalysisModal';
import { InfoModal } from './components/InfoModal';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('zebrix_lang');
    return saved === 'en' ? 'en' : 'pl';
  });

  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  const [modalInitialMode, setModalInitialMode] = useState<'start' | 'signin'>('start');
  const [activeInfoModal, setActiveInfoModal] = useState<string | null>(null);

  // Sync document attributes on language change
  useEffect(() => {
    localStorage.setItem('zebrix_lang', lang);
    document.documentElement.lang = lang;

    if (lang === 'pl') {
      document.title = 'Zebrix — uporządkuj obserwacje i dalsze kroki';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Zebrix pomaga rodzicom uporządkować obserwacje dziecka, przygotować pytania i stworzyć informacyjną ścieżkę do rozmowy ze specjalistą.'
        );
      }
    } else {
      document.title = 'Zebrix — organise observations and next steps';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Zebrix helps parents organise a child\'s observations, prepare questions, and create an informational pathway for a specialist conversation.'
        );
      }
    }
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleStartAnalysis = () => {
    setModalInitialMode('start');
    setIsAnalysisModalOpen(true);
  };

  const handleSignIn = () => {
    setModalInitialMode('signin');
    setIsAnalysisModalOpen(true);
  };

  const handleExploreHowItWorks = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectResource = (resourceId: string) => {
    handleStartAnalysis();
  };

  return (
    <div className="min-h-screen bg-[#F6F8FD] text-[#0F1F3D] font-sans antialiased flex flex-col selection:bg-[#4F46E5] selection:text-white">
      {/* Section 0: Floating navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      <main id="main-content" className="flex-grow">
        {/* Section 1: Opening / Hero */}
        <Hero
          lang={lang}
          onStartAnalysis={handleStartAnalysis}
          onExploreHowItWorks={handleExploreHowItWorks}
        />

        {/* Section 2: Human context */}
        <HumanContext lang={lang} />

        {/* Section 3: Guided journey */}
        <GuidedJourney
          lang={lang}
          onStartAnalysis={handleStartAnalysis}
        />

        {/* Section 4: Product proof */}
        <ProductProof
          lang={lang}
          onStartAnalysis={handleStartAnalysis}
        />

        {/* Section 5: Knowledge ecosystem */}
        <KnowledgeEcosystem
          lang={lang}
          onSelectResource={handleSelectResource}
        />

        {/* Section 6: Personal workspace */}
        <PersonalWorkspace
          lang={lang}
          onOpenWorkspace={handleSignIn}
        />

        {/* Section 7: Safety and trust */}
        <SafetyTrust lang={lang} />

        {/* Section 8: Support the project */}
        <SupportProject lang={lang} />

        {/* Section 9: Final conversion */}
        <FinalCta
          lang={lang}
        />
      </main>

      {/* Section 10: Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenInfoModal={(type) => setActiveInfoModal(type)}
      />

      {/* Modals & Helpers */}
      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        lang={lang}
        initialMode={modalInitialMode}
      />

      <InfoModal
        type={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
        lang={lang}
      />

      <StickyMobileCta
        lang={lang}
        onStartAnalysis={handleStartAnalysis}
      />
    </div>
  );
}
