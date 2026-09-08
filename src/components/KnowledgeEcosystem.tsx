import React, { useState } from 'react';
import { Language, KnowledgeItem } from '../types';
import { translations } from '../data/translations';
import {
  BookOpen,
  Building2,
  FlaskConical,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Check,
  Search,
} from 'lucide-react';

interface KnowledgeEcosystemProps {
  lang: Language;
  onSelectResource: (itemId: string) => void;
}

export const KnowledgeEcosystem: React.FC<KnowledgeEcosystemProps> = ({
  lang,
  onSelectResource,
}) => {
  const t = translations[lang].knowledge;
  const [activeItemId, setActiveItemId] = useState<string>(t.items[0].id);

  const activeItem = t.items.find((item) => item.id === activeItemId) || t.items[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="knowledge"
      className="py-20 md:py-28 bg-[#F6F8FD] relative"
      aria-labelledby="knowledge-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            {t.label}
          </span>
          <h2
            id="knowledge-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1F3D]"
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#0F1F3D]/70 leading-relaxed">
            {t.body}
          </p>
        </div>

        {/* Continuous Horizontal Knowledge Rail */}
        <div className="mb-8">
          <div
            className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 hide-scrollbar border-b border-black/[0.08]"
            role="tablist"
            aria-label="Kategorie wiedzy i zasobów"
          >
            {t.items.map((item) => {
              const isActive = item.id === activeItemId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setActiveItemId(item.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                    isActive
                      ? 'bg-white border-[#4F46E5] text-[#4F46E5] shadow-xs'
                      : 'bg-white/60 hover:bg-white text-[#0F1F3D]/75 border-black/[0.06]'
                  }`}
                >
                  <span
                    className={`p-1.5 rounded-lg ${
                      isActive ? 'bg-[#E7ECFB] text-[#4F46E5]' : 'bg-black/[0.04] text-[#0F1F3D]'
                    }`}
                  >
                    {getIcon(item.iconName)}
                  </span>
                  <span>{item.title}</span>
                  {item.sourceLabel && (
                    <span className="text-[10px] bg-[#14B8A6]/10 text-[#0F766E] px-2 py-0.5 rounded-full font-medium">
                      Oficjalny rejestr
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Enlarged Active Preview Display */}
        <div
          id={`panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeItem.id}`}
          className="glass-product rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/90 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                  {activeItem.category}
                </span>
                {activeItem.sourceLabel && (
                  <span className="text-[11px] font-medium text-[#0F766E] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full">
                    {activeItem.sourceLabel}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F1F3D]">
                {activeItem.title}
              </h3>

              <p className="text-sm sm:text-base text-[#0F1F3D]/75 leading-relaxed">
                {activeItem.body}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectResource(activeItem.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>{activeItem.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Source Verification Tag */}
              <div className="pt-4 border-t border-black/[0.06] text-xs text-[#0F1F3D]/60 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>Źródło danych: {activeItem.previewData.source}</span>
              </div>
            </div>

            {/* Right Interactive Preview Panel (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-black/[0.06] shadow-xs space-y-4">
              <div className="flex items-start justify-between pb-3 border-b border-black/[0.06]">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F1F3D]">
                    {activeItem.previewData.title}
                  </h4>
                  <p className="text-xs text-[#0F1F3D]/65 mt-0.5">
                    {activeItem.previewData.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-semibold bg-[#E7ECFB] text-[#4F46E5] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {activeItem.previewData.badge}
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-2.5">
                {activeItem.previewData.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F6F8FD] border border-black/[0.04] flex items-start gap-2.5 text-xs text-[#0F1F3D]"
                  >
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#0F1F3D]/50">
                <span>Zgodne z polskimi wytycznymi postępowania</span>
                <span className="font-medium text-[#4F46E5]">Dostępne w panelu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
