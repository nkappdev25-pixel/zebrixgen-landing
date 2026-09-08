import React, { useState } from 'react';
import { Language, ProductProofTab } from '../types';
import { translations } from '../data/translations';
import {
  MessageSquare,
  Route,
  CheckCircle2,
  FileQuestion,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface ProductProofProps {
  lang: Language;
  onStartAnalysis: () => void;
}

export const ProductProof: React.FC<ProductProofProps> = ({
  lang,
  onStartAnalysis,
}) => {
  const t = translations[lang].productProof;
  const [activeTab, setActiveTab] = useState<ProductProofTab>('conversation');
  const [selectedChip, setSelectedChip] = useState<string>(t.choices[0]);

  return (
    <section
      id="product-proof"
      className="py-20 md:py-28 bg-white border-b border-black/[0.06] relative"
      aria-labelledby="product-proof-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            Interaktywny podgląd działania
          </span>
          <h2
            id="product-proof-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1F3D]"
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#0F1F3D]/70 leading-relaxed max-w-2xl mx-auto">
            {t.body}
          </p>

          {/* Accessible Segmented Control */}
          <div className="pt-2 flex justify-center">
            <div
              className="inline-flex p-1 rounded-full bg-[#0F1F3D]/[0.05] border border-black/[0.06]"
              role="tablist"
              aria-label="Tryb demonstracyjny"
            >
              <button
                type="button"
                role="tab"
                id="tab-conversation"
                aria-selected={activeTab === 'conversation'}
                aria-controls="panel-conversation"
                onClick={() => setActiveTab('conversation')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                  activeTab === 'conversation'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/65 hover:text-[#0F1F3D]'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-[#4F46E5]" />
                <span>{t.tabConversation}</span>
              </button>

              <button
                type="button"
                role="tab"
                id="tab-pathway"
                aria-selected={activeTab === 'pathway'}
                aria-controls="panel-pathway"
                onClick={() => setActiveTab('pathway')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                  activeTab === 'pathway'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/65 hover:text-[#0F1F3D]'
                }`}
              >
                <Route className="w-4 h-4 text-[#14B8A6]" />
                <span>{t.tabPathway}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Elevated Canvas */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-product rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/80 transition-all">
            {/* Tab 1: Conversation Mode */}
            {activeTab === 'conversation' && (
              <div
                id="panel-conversation"
                role="tabpanel"
                aria-labelledby="tab-conversation"
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                    <span className="text-xs font-semibold text-[#0F1F3D]">
                      Etap 1: Konwersacyjny wywiad wstępny
                    </span>
                  </div>
                  <span className="text-[11px] text-[#0F1F3D]/50">
                    Brak pytań o dane wrażliwe dziecka
                  </span>
                </div>

                {/* Assistant Message */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    Z
                  </div>
                  <div className="space-y-3 bg-[#F6F8FD] rounded-2xl rounded-tl-none p-4 sm:p-5 border border-black/[0.05] max-w-xl">
                    <p className="text-xs sm:text-sm text-[#0F1F3D] font-normal leading-relaxed">
                      {t.assistantGreeting}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0F1F3D]">
                      {t.assistantQuestion}
                    </p>

                    {/* Interactive Selection Chips */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {t.choices.map((choice) => {
                        const isSelected = selectedChip === choice;
                        return (
                          <button
                            key={choice}
                            type="button"
                            onClick={() => setSelectedChip(choice)}
                            className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                                : 'bg-white text-[#0F1F3D]/80 hover:bg-[#E7ECFB] border border-black/[0.08]'
                            }`}
                          >
                            {choice}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Selected outcome feedback */}
                <div className="p-4 rounded-xl bg-[#E7ECFB]/50 border border-[#4F46E5]/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#4F46E5] uppercase">
                      Wybrana kategoria obserwacji
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#0F1F3D]">
                      {selectedChip}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('pathway')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] hover:text-[#3730A3] bg-white px-3 py-1.5 rounded-full border border-[#4F46E5]/20 shadow-xs cursor-pointer"
                  >
                    <span>Zobacz wygenerowaną ścieżkę</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Pathway Mode */}
            {activeTab === 'pathway' && (
              <div
                id="panel-pathway"
                role="tabpanel"
                aria-labelledby="tab-pathway"
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
                    <span className="text-xs font-semibold text-[#0F1F3D]">
                      Etap 3: Uporządkowana ścieżka informacyjna
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#0F766E] bg-[#14B8A6]/10 px-2.5 py-0.5 rounded-full">
                    Ramy informacyjne — nie diagnoza
                  </span>
                </div>

                {/* 1. Co zostało opisane */}
                <div className="p-4 rounded-xl bg-[#F6F8FD] border border-black/[0.06] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                    {t.pathwaySections.describedTitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#0F1F3D] font-medium">
                    {t.pathwaySections.describedContent}
                  </p>
                </div>

                {/* 2. Obszary warte omówienia */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F1F3D]/80 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-[#14B8A6]" />
                    {t.pathwaySections.areasTitle}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {t.pathwaySections.areasList.map((area, i) => (
                      <div
                        key={i}
                        className="p-3 bg-white rounded-xl border border-black/[0.06] text-xs font-medium text-[#0F1F3D]"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Pytania na konsultację */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F1F3D]/80 flex items-center gap-1.5">
                    <FileQuestion className="w-3.5 h-3.5 text-[#4F46E5]" />
                    {t.pathwaySections.questionsTitle}
                  </span>
                  <div className="space-y-2">
                    {t.pathwaySections.questionsList.map((q, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-start gap-2.5 text-xs text-[#0F1F3D]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#E7ECFB] text-[#4F46E5] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="font-medium">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Co możesz zrobić dalej */}
                <div className="space-y-2 pt-2 border-t border-black/[0.06]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F1F3D]/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                    {t.pathwaySections.nextStepsTitle}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#0F1F3D]/80">
                    {t.pathwaySections.nextStepsList.map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Bottom action inside proof frame */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#0F1F3D]/65 text-center sm:text-left">
                Gotowy wygenerować własną ścieżkę z prywatnych obserwacji?
              </span>
              <button
                type="button"
                onClick={onStartAnalysis}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Rozpocznij nową analizę</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
