import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, Shield } from 'lucide-react';
import { ZebrixLogo } from './ZebrixLogo';

interface FinalCtaProps {
  lang: Language;
  onStartAnalysis: () => void;
  onSignIn: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  lang,
  onStartAnalysis,
  onSignIn,
}) => {
  const t = translations[lang].finalCta;

  return (
    <section
      className="py-20 md:py-28 bg-white text-center relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-center mb-2">
          <ZebrixLogo size="lg" />
        </div>

        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1F3D] leading-tight"
        >
          {t.title}
        </h2>

        <p className="text-base sm:text-lg text-[#0F1F3D]/70 max-w-xl mx-auto leading-relaxed">
          {t.body}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onStartAnalysis}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] active:bg-[#312E81] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <span>{t.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onSignIn}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold text-[#0F1F3D]/80 hover:text-[#0F1F3D] hover:bg-black/[0.04] transition-colors cursor-pointer"
          >
            {t.secondaryCta}
          </button>
        </div>

        <div className="pt-2 text-xs text-[#0F1F3D]/50 flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span>Bezpieczne i poufne narzędzie wsparcia dla rodziców</span>
        </div>
      </div>
    </section>
  );
};
