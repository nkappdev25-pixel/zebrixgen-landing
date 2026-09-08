import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  ShieldAlert,
  Lock,
  PhoneCall,
  FileSearch,
  Check,
  AlertTriangle,
} from 'lucide-react';

interface SafetyTrustProps {
  lang: Language;
}

export const SafetyTrust: React.FC<SafetyTrustProps> = ({ lang }) => {
  const t = translations[lang].safety;

  return (
    <section
      id="safety"
      className="py-20 md:py-28 bg-[#0F1F3D] text-white relative"
      aria-labelledby="safety-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6]">
            {t.label}
          </span>
          <h2
            id="safety-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            {t.title}
          </h2>
        </div>

        {/* 4 Clear High-Contrast Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Pillar 1: Medical Boundary */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.12] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/20 text-[#818CF8] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              {t.medicalBoundaryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {t.medicalBoundaryText}
            </p>
          </div>

          {/* Pillar 2: Privacy */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.12] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/20 text-[#2DD4BF] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              {t.privacyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {t.privacyText}
            </p>
          </div>

          {/* Pillar 3: Urgent Situations */}
          <div className="p-6 rounded-2xl bg-[#B42318]/15 border border-[#B42318]/30 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#B42318]/30 text-[#FCA5A5] flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">
                {t.urgentTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {t.urgentText}
            </p>
            <div className="pt-1 text-[11px] text-[#FCA5A5] font-semibold">
              Numer ratunkowy w Polsce i UE: 112
            </div>
          </div>

          {/* Pillar 4: Source Transparency */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.12] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/20 text-[#818CF8] flex items-center justify-center">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              {t.sourceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {t.sourceText}
            </p>
          </div>
        </div>

        {/* Reassurance footer note in safety section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>
            Zebrix przestrzega rygorystycznych standardów etycznych w komunikacji medycznej dla pacjentów pediatrycznych.
          </p>
          <span className="text-[#2DD4BF] font-semibold whitespace-nowrap">
            Zgodność z wytycznymi EURORDIS
          </span>
        </div>
      </div>
    </section>
  );
};
