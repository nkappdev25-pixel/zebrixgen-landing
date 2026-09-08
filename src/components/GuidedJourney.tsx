import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  MessageSquare,
  Sparkles,
  Compass,
  FileCheck2,
  Printer,
  Download,
  CheckCircle,
  HelpCircle,
  Stethoscope,
  ChevronRight,
  Shield,
} from 'lucide-react';

interface GuidedJourneyProps {
  lang: Language;
  onStartAnalysis: () => void;
}

export const GuidedJourney: React.FC<GuidedJourneyProps> = ({
  lang,
  onStartAnalysis,
}) => {
  const t = translations[lang].journey;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = t.steps[activeStepIndex];

  return (
    <section
      id="journey"
      className="py-20 md:py-28 bg-[#F6F8FD] relative"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            {t.label}
          </span>
          <h2
            id="journey-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1F3D]"
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#0F1F3D]/70 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Guided Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (4 cols): Steps navigator */}
          <div className="lg:col-span-4 space-y-3" role="tablist" aria-label="Journey steps">
            {t.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  id={`step-tab-${step.id}`}
                  aria-selected={isActive}
                  aria-controls={`step-panel-${step.id}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                    isActive
                      ? 'bg-white border-[#4F46E5]/30 shadow-sm'
                      : 'bg-white/60 hover:bg-white border-black/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#4F46E5] text-white shadow-xs'
                          : 'bg-[#0F1F3D]/[0.08] text-[#0F1F3D]'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-semibold leading-snug ${
                        isActive ? 'text-[#0F1F3D]' : 'text-[#0F1F3D]/70'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Body description visible on active */}
                  {isActive && (
                    <div className="mt-3 pl-10 space-y-2">
                      <p className="text-xs sm:text-sm text-[#0F1F3D]/70 leading-relaxed">
                        {step.body}
                      </p>
                      <p className="text-xs font-medium text-[#4F46E5] bg-[#E7ECFB] px-2.5 py-1.5 rounded-lg inline-block">
                        {step.microcopy}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column (8 cols): Persistent Product Frame transforming smoothly */}
          <div
            className="lg:col-span-8"
            id={`step-panel-${activeStep.id}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${activeStep.id}`}
          >
            <div className="glass-product rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/90 shadow-sm min-h-[440px] flex flex-col justify-between">
              {/* Top Frame Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
                    <span className="text-xs font-semibold text-[#0F1F3D]">
                      Etap {activeStep.stepNumber} z 4: {activeStep.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#0F766E] bg-[#14B8A6]/10 px-2.5 py-0.5 rounded-full">
                    Bezpieczeństwo danych
                  </span>
                </div>

                {/* Morphing Inner Canvas based on Step */}
                {activeStep.previewType === 'chat' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        Z
                      </div>
                      <div className="bg-[#F6F8FD] rounded-2xl rounded-tl-none p-4 text-xs sm:text-sm text-[#0F1F3D]/90 border border-black/[0.05] leading-relaxed max-w-[85%]">
                        <p className="font-medium text-[#0F1F3D]">
                          Cześć. Zadam kilka krótkich pytań, żeby dobrze zrozumieć sytuację.
                        </p>
                        <p className="mt-1 text-xs text-[#0F1F3D]/65">
                          Możesz odpowiadać własnymi słowami. Nie potrzebujesz terminów medycznych.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start justify-end gap-3">
                      <div className="bg-[#4F46E5]/10 rounded-2xl rounded-tr-none p-4 text-xs sm:text-sm text-[#0F1F3D] border border-[#4F46E5]/20 leading-relaxed max-w-[85%]">
                        <p>
                          „Córka ma 3 lata. Od pewnego czasu ma trudności ze skupieniem wzroku na przedmiotach, a w nocy często budzi się z mimowolnymi drżeniami nóżek.”
                        </p>
                        <span className="inline-block mt-2 text-[10px] font-semibold text-[#4F46E5]">
                          Wiek: 36 miesięcy · Czas trwania: 3 miesiące
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.previewType === 'clarify' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#E7ECFB]/50 border border-[#4F46E5]/20">
                      <p className="text-xs font-bold text-[#4F46E5] uppercase tracking-wide">
                        Pytanie doprecyzowujące
                      </p>
                      <p className="text-sm font-semibold text-[#0F1F3D] mt-1">
                        Czy zaobserwowane drżenia nóżek pojawiają się wyłącznie przy zasypianiu, czy również w ciągu dnia podczas aktywności?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      <button
                        type="button"
                        className="text-left p-3 rounded-xl border border-black/[0.08] hover:border-[#4F46E5] bg-white text-xs font-medium text-[#0F1F3D] transition-colors"
                      >
                        Głównie w fazie zasypiania i przy wybudzeniu
                      </button>
                      <button
                        type="button"
                        className="text-left p-3 rounded-xl border border-black/[0.08] hover:border-[#4F46E5] bg-white text-xs font-medium text-[#0F1F3D] transition-colors"
                      >
                        Również w ciągu dnia, podczas zabawy i siedzenia
                      </button>
                      <button
                        type="button"
                        className="text-left p-3 rounded-xl border border-black/[0.08] hover:border-[#4F46E5] bg-white text-xs font-medium text-[#0F1F3D] transition-colors"
                      >
                        Nasilają się przy gorączce lub silnym zmęczeniu
                      </button>
                      <button
                        type="button"
                        className="text-left p-3 rounded-xl border border-black/[0.08] hover:border-[#4F46E5] bg-white text-xs font-medium text-[#0F1F3D] transition-colors"
                      >
                        Trudno jednoznacznie określić
                      </button>
                    </div>
                  </div>
                )}

                {activeStep.previewType === 'pathway' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0F1F3D]">
                        Struktura Twojej ścieżki konsultacyjnej
                      </span>
                      <span className="text-[11px] text-[#0F766E] font-semibold bg-[#14B8A6]/10 px-2 py-0.5 rounded-full">
                        3 obszary · 5 pytań
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 bg-[#F6F8FD] rounded-xl border border-black/[0.06]">
                        <div className="text-xs font-bold text-[#4F46E5]">Obszar kliniczny 1:</div>
                        <p className="text-xs text-[#0F1F3D] mt-0.5 font-medium">
                          Neurologia dziecięca & diagnostyka napadowości
                        </p>
                      </div>

                      <div className="p-3 bg-[#F6F8FD] rounded-xl border border-black/[0.06]">
                        <div className="text-xs font-bold text-[#4F46E5]">Kluczowe pytanie do specjalisty:</div>
                        <p className="text-xs text-[#0F1F3D] mt-0.5 font-medium">
                          „Czy charakterystyka ruchów mimowolnych wymaga wykonania wideo-EEG we śnie?”
                        </p>
                      </div>

                      <div className="p-3 bg-[#F6F8FD] rounded-xl border border-black/[0.06]">
                        <div className="text-xs font-bold text-[#4F46E5]">Rekomendowany typ ośrodka:</div>
                        <p className="text-xs text-[#0F1F3D] mt-0.5 font-medium">
                          Referencyjna poradnia neurologii rozwojowej lub poradnia genetyczna
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.previewType === 'summary' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileCheck2 className="w-4 h-4 text-[#14B8A6]" />
                          <span className="text-xs font-bold text-[#0F1F3D]">
                            Karta informacyjna na wizytę lekarską
                          </span>
                        </div>
                        <span className="text-[11px] text-[#0F1F3D]/50 font-mono">Format A4 / PDF</span>
                      </div>

                      <p className="text-xs text-[#0F1F3D]/80 leading-relaxed border-l-2 border-[#4F46E5] pl-3 py-0.5">
                        Dokument zawiera zwięzłą oś czasu objawów, wyselekcjonowane pytania do lekarza oraz listę rekomendowanych badań, które warto omówić podczas konsultacji.
                      </p>

                      <div className="flex items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4F46E5] bg-[#E7ECFB] px-2.5 py-1 rounded-md">
                          <Download className="w-3 h-3" /> Zapisz PDF
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0F1F3D]/70 bg-black/[0.04] px-2.5 py-1 rounded-md">
                          <Printer className="w-3 h-3" /> Drukuj
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Navigation CTA */}
              <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#0F1F3D]/60">
                  Krok {activeStepIndex + 1} z 4
                </span>
                <button
                  type="button"
                  onClick={onStartAnalysis}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#4F46E5] hover:bg-[#3730A3] px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  <span>Wypróbuj w analizie</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
