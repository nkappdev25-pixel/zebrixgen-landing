import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  ArrowRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  FileText,
  HelpCircle,
  Stethoscope,
  ChevronDown,
  Shield,
  Layers,
} from 'lucide-react';
import { HeroDnaAnimation } from './HeroDnaAnimation';

interface HeroProps {
  lang: Language;
  onStartAnalysis: () => void;
  onExploreHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onStartAnalysis,
  onExploreHowItWorks,
}) => {
  const t = translations[lang].hero;

  return (
    <section
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroDnaAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Column (Left 7 cols on large desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7ECFB] border border-[#4F46E5]/15 text-[#4F46E5] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-pulse" />
              <span>{t.eyebrow}</span>
            </div>

            {/* H1 Title */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1F3D] leading-[1.08]"
            >
              {t.title}
            </h1>

            {/* Lead text */}
            <p className="text-base sm:text-lg text-[#0F1F3D]/75 leading-relaxed max-w-2xl">
              {t.lead}
            </p>

            {/* Call to action cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onStartAnalysis}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] active:bg-[#312E81] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 group cursor-pointer"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F6F8FD] text-[#0F1F3D] font-medium text-base border border-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] cursor-pointer"
              >
                <span>{t.secondaryCta}</span>
                <ChevronDown className="w-4 h-4 text-[#0F1F3D]/60" />
              </button>
            </div>

            {/* Explicit Medical Safety Line */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#0F1F3D]/65">
              <ShieldAlert className="w-4 h-4 text-[#B54708] shrink-0" />
              <span>{t.safetyLine}</span>
            </div>
          </div>

          {/* High-Fidelity Real Product Composition (Right 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Ambient decorative single-stroke background trace */}
            <div
              className="absolute -top-6 -right-6 w-full h-full border border-[#4F46E5]/10 rounded-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Elevated Product Window Shell */}
            <div className="glass-product rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/80 transition-all duration-300">
              {/* Product Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0F1F3D]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0F1F3D]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0F1F3D]/20" />
                  <span className="ml-2 text-xs font-medium text-[#0F1F3D]/50">
                    Zebrix Intake & Pathway
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#14B8A6]/10 text-[#0F766E] text-[11px] font-medium">
                  <Shield className="w-3 h-3 text-[#14B8A6]" />
                  <span>{t.verifiedSource}</span>
                </div>
              </div>

              {/* Four-Stage Linear Progress Indicator */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-5">
                {t.steps.map((stepName, idx) => {
                  const isDone = idx === 0;
                  const isCurrent = idx === 1;
                  return (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div className="h-1.5 rounded-full overflow-hidden bg-black/[0.06]">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isDone || isCurrent
                              ? 'bg-[#4F46E5] w-full'
                              : 'bg-transparent w-0'
                          }`}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs">
                        <span
                          className={`truncate ${
                            isCurrent
                              ? 'font-bold text-[#4F46E5]'
                              : isDone
                              ? 'font-medium text-[#0F1F3D]'
                              : 'text-[#0F1F3D]/45'
                          }`}
                        >
                          {stepName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Conversational Stream Flow */}
              <div className="space-y-3.5">
                {/* Assistant Humane Bubble */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                    Z
                  </div>
                  <div className="bg-[#F6F8FD] rounded-2xl rounded-tl-xs p-3 sm:p-3.5 border border-black/[0.05] text-xs sm:text-sm text-[#0F1F3D]/90 max-w-[88%] leading-relaxed">
                    <p>{t.productBubblePrompt}</p>
                  </div>
                </div>

                {/* Parent's Humane Reply */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="bg-[#4F46E5]/10 rounded-2xl rounded-tr-xs p-3 sm:p-3.5 border border-[#4F46E5]/20 text-xs sm:text-sm text-[#0F1F3D] max-w-[88%] leading-relaxed">
                    <p className="font-normal text-[#0F1F3D]">{t.productParentReply}</p>
                    <div className="mt-1.5 flex items-center gap-2 text-[10px] text-[#4F46E5] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                      <span>Obszar: Koordynacja & Komunikacja</span>
                    </div>
                  </div>
                </div>

                {/* Pathway Output Preview Teaser Card */}
                <div className="mt-4 pt-3 border-t border-black/[0.06] bg-white rounded-xl p-3 sm:p-3.5 border border-black/[0.06] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F1F3D]">
                      <FileText className="w-3.5 h-3.5 text-[#4F46E5]" />
                      <span>{t.questionsHeader}</span>
                    </div>
                    <span className="text-[10px] bg-[#E7ECFB] text-[#4F46E5] font-semibold px-2 py-0.5 rounded-full">
                      Krok 3 / 4
                    </span>
                  </div>

                  <p className="text-xs text-[#0F1F3D]/80 leading-snug pl-5 border-l-2 border-[#14B8A6]">
                    {t.sampleQuestion}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-[#0F1F3D]/55">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" />
                      Zapisano do podsumowania PDF
                    </span>
                    <span className="font-medium text-[#4F46E5]">Gotowe do wydruku</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
