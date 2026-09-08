import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Check, Sparkles, HeartHandshake, NotebookPen } from 'lucide-react';

interface HumanContextProps {
  lang: Language;
}

export const HumanContext: React.FC<HumanContextProps> = ({ lang }) => {
  const t = translations[lang].context;

  return (
    <section
      id="context"
      className="py-20 md:py-28 bg-white border-y border-black/[0.06] relative"
      aria-labelledby="context-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Editorial message and supportive framing */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
              {t.label}
            </span>

            <h2
              id="context-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1F3D] leading-tight"
            >
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[#0F1F3D]/70 leading-relaxed max-w-2xl">
              {t.body}
            </p>

            {/* Editorial documentary visual representation:
                A calm, respectful composition representing parent organising notes at home */}
            <div className="pt-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#F6F8FD] border border-black/[0.06] p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center shrink-0">
                    <NotebookPen className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#0F1F3D]">
                      {t.photoCaption}
                    </p>
                    <p className="text-xs text-[#0F1F3D]/65 leading-relaxed">
                      Spokojna przestrzeń, w której każdy szczegół Twoich obserwacji ma znaczenie — bez presji czasu i trudnych łacińskich terminów.
                    </p>
                  </div>
                </div>

                {/* Subtle calm notes illustration bar */}
                <div className="mt-5 pt-4 border-t border-black/[0.06] grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/80 rounded-lg p-2.5 border border-black/[0.04]">
                    <span className="block text-[11px] font-semibold text-[#0F1F3D]">Własne słowa</span>
                    <span className="block text-[10px] text-[#0F1F3D]/50 mt-0.5">bez żargonu</span>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2.5 border border-black/[0.04]">
                    <span className="block text-[11px] font-semibold text-[#4F46E5]">Prywatność</span>
                    <span className="block text-[10px] text-[#0F1F3D]/50 mt-0.5">brak danych dziecka</span>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2.5 border border-black/[0.04]">
                    <span className="block text-[11px] font-semibold text-[#0F766E]">Gotowy plan</span>
                    <span className="block text-[10px] text-[#0F1F3D]/50 mt-0.5">na wizytę lekarską</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Three structured statements separated by fine rules */}
          <div className="lg:col-span-5 space-y-6 lg:pt-8">
            <div className="relative pl-6 border-l-2 border-[#4F46E5]/30 space-y-8">
              {t.statements.map((statement, idx) => (
                <div key={idx} className="relative group">
                  {/* Step node indicator on the vertical line */}
                  <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#4F46E5] group-hover:scale-110 transition-transform" />
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#4F46E5]">
                      0{idx + 1}
                    </span>
                    <p className="text-base sm:text-lg font-medium text-[#0F1F3D] leading-snug">
                      {statement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance pill */}
            <div className="mt-8 p-4 rounded-xl bg-[#14B8A6]/[0.08] border border-[#14B8A6]/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#14B8A6] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#0F766E] font-medium leading-relaxed">
                Zebrix porządkuje dane w logiczny profil objawów, który lekarz specjalista może natychmiast zinterpretować podczas pierwszej konsultacji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
