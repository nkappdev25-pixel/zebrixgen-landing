import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, X } from 'lucide-react';

interface StickyMobileCtaProps {
  lang: Language;
  onStartAnalysis: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({
  lang,
  onStartAnalysis,
}) => {
  const t = translations[lang].nav;
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Show after scrolling past hero (~450px) and hide near footer
      const pastHero = scrollY > 450;
      const nearFooter = docHeight - (scrollY + winHeight) < 350;

      setIsVisible(pastHero && !nearFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-3 duration-300">
      <div className="bg-[#0F1F3D] text-white p-3 rounded-2xl shadow-xl flex items-center justify-between gap-3 border border-white/10">
        <button
          type="button"
          onClick={onStartAnalysis}
          className="flex-1 flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#3730A3] py-2.5 px-4 rounded-xl text-xs font-semibold text-white shadow-xs cursor-pointer"
        >
          <span>{t.cta}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="p-2 text-white/50 hover:text-white rounded-lg cursor-pointer"
          aria-label="Ukryj"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
