import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  FolderKanban,
  Bookmark,
  FileText,
  Clock,
  ArrowRight,
  Shield,
  Lock,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface PersonalWorkspaceProps {
  lang: Language;
  onOpenWorkspace: () => void;
}

export const PersonalWorkspace: React.FC<PersonalWorkspaceProps> = ({
  lang,
  onOpenWorkspace,
}) => {
  const t = translations[lang].workspace;

  return (
    <section
      id="workspace"
      className="py-20 md:py-28 bg-white border-b border-black/[0.06] relative"
      aria-labelledby="workspace-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols): Editorial & Value Points */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
              {t.label}
            </span>

            <h2
              id="workspace-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1F3D]"
            >
              {t.title}
            </h2>

            <p className="text-base text-[#0F1F3D]/70 leading-relaxed">
              {t.body}
            </p>

            {/* Structured Points */}
            <div className="space-y-3 pt-2">
              {t.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E7ECFB] text-[#4F46E5] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-[#0F1F3D] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenWorkspace}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1F3D] hover:bg-[#1E293B] text-white text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>{t.action}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#0F1F3D]/50 pt-2">
              <Lock className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Prywatne notatki szyfrowane i widoczne wyłącznie dla zalogowanego rodzica</span>
            </div>
          </div>

          {/* Right Column (7 cols): Realistic Dashboard Screenshot Composition */}
          <div className="lg:col-span-7">
            <div className="glass-product rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/80 shadow-md">
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center font-bold text-xs">
                    Z
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#0F1F3D]">
                      Panel Rodzica
                    </span>
                    <span className="block text-[10px] text-[#0F1F3D]/50">
                      Ostatnia synchronizacja: dzisiaj
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold bg-[#E7ECFB] text-[#4F46E5] px-2.5 py-1 rounded-full">
                    {t.analysesCount}
                  </span>
                  <span className="text-[11px] font-semibold bg-[#14B8A6]/10 text-[#0F766E] px-2.5 py-1 rounded-full">
                    {t.savedCount}
                  </span>
                </div>
              </div>

              {/* Dashboard Content Widgets */}
              <div className="space-y-4">
                {/* 1. Recent Analyses Row */}
                <div className="bg-[#F6F8FD] rounded-xl p-4 border border-black/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F1F3D]">
                    <span className="flex items-center gap-1.5">
                      <FolderKanban className="w-3.5 h-3.5 text-[#4F46E5]" />
                      {t.recentAnalysesTitle}
                    </span>
                    <span className="text-[10px] font-medium text-[#0F766E] bg-[#14B8A6]/15 px-2 py-0.5 rounded-md">
                      {t.mockAnalysisItem.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#0F1F3D]/80">
                    <span className="font-medium text-[#0F1F3D]">
                      {t.mockAnalysisItem.title}
                    </span>
                    <span className="text-[11px] text-[#0F1F3D]/50">
                      {t.mockAnalysisItem.date}
                    </span>
                  </div>
                </div>

                {/* 2. Saved Clinic/Trial */}
                <div className="bg-[#F6F8FD] rounded-xl p-4 border border-black/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F1F3D]">
                    <span className="flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#14B8A6]" />
                      {t.savedItemsTitle}
                    </span>
                    <span className="text-[10px] text-[#4F46E5] font-semibold">
                      Szpital Kliniczny
                    </span>
                  </div>

                  <p className="text-xs text-[#0F1F3D]/80 font-medium">
                    {t.mockSavedItem}
                  </p>
                </div>

                {/* 3. Private Notes Preview */}
                <div className="bg-[#F6F8FD] rounded-xl p-4 border border-black/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F1F3D]">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#4F46E5]" />
                      {t.privateNotesTitle}
                    </span>
                    <span className="text-[10px] text-[#0F1F3D]/40">
                      Tylko dla Twoich oczu
                    </span>
                  </div>

                  <p className="text-xs italic text-[#0F1F3D]/70 bg-white/70 p-2.5 rounded-lg border border-black/[0.04]">
                    {t.mockNoteItem}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
