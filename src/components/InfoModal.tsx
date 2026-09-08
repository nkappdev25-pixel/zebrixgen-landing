import React from 'react';
import { Language } from '../types';
import { X, ShieldCheck, Lock, AlertCircle } from 'lucide-react';
import { ZebrixLogo } from './ZebrixLogo';

interface InfoModalProps {
  type: string | null;
  onClose: () => void;
  lang: Language;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose, lang }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#0F1F3D]/60 hover:text-[#0F1F3D] hover:bg-black/[0.04] transition-colors cursor-pointer"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <ZebrixLogo size="sm" />

          {isPrivacy ? (
            <>
              <div className="flex items-center gap-2 text-sm font-bold text-[#14B8A6]">
                <Lock className="w-4 h-4" />
                <span>Prywatność i bezpieczeństwo danych</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F1F3D]">
                Jak chronimy informacje o Twoim dziecku?
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#0F1F3D]/75 leading-relaxed">
                <p>
                  <strong>1. Brak danych identyfikujących:</strong> W analizach Zebrix nie wymagamy podawania imienia, nazwiska, numeru PESEL ani dokładnej daty urodzenia dziecka. Wystarczy zaokrąglony wiek (np. „2 lata i 4 miesiące”).
                </p>
                <p>
                  <strong>2. Poufność notatek:</strong> Prywatne notatki rodzica są powiązane wyłącznie z Twoim kontem i nie są udostępniane podmiotom trzecim ani wykorzystywane do celów komercyjnych.
                </p>
                <p>
                  <strong>3. Kontrola nad danymi:</strong> Masz prawo w każdej chwili usunąć wygenerowane analizy oraz historię wpisów bezpośrednio w panelu użytkownika.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-sm font-bold text-[#4F46E5]">
                <ShieldCheck className="w-4 h-4" />
                <span>Standardy i ramy informacji medycznej</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F1F3D]">
                Zasady odpowiedzialności medycznej Zebrix
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#0F1F3D]/75 leading-relaxed">
                <p>
                  <strong>1. Cel informacyjny:</strong> Zebrix służy wyłącznie porządkowaniu obserwacji pacjenta i przygotowaniu pytań do bezpośredniej rozmowy z lekarzem. Żadna część serwisu nie stanowi diagnozy medycznej ani zalecenia terapeutycznego.
                </p>
                <p>
                  <strong>2. Zweryfikowane źródła:</strong> Materiały edukacyjne i rejestry opierają się na oficjalnych bazach danych (Orphanet, OMIM, ClinicalTrials.gov) oraz wytycznych polskich i europejskich towarzystw naukowych.
                </p>
                <p>
                  <strong>3. Sytuacje nagłe:</strong> W przypadku ostrych objawów zagrażających życiu (drgawki, duszność, utrata przytomności) należy natychmiast zadzwonić pod numer ratunkowy 112 lub udać się na SOR.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-black/[0.06] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#0F1F3D] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
            >
              Rozumiem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
