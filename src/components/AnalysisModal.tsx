import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, ShieldAlert, CheckCircle2, ArrowRight, Lock, Sparkles } from 'lucide-react';
import { ZebrixLogo } from './ZebrixLogo';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialMode?: 'start' | 'signin';
}

export const AnalysisModal: React.FC<AnalysisModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialMode = 'start',
}) => {
  const t = translations[lang].authModal;
  const [tab, setTab] = useState<'start' | 'signin'>(initialMode);
  const [email, setEmail] = useState('');
  const [childAge, setChildAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#0F1F3D]/60 hover:text-[#0F1F3D] hover:bg-black/[0.04] transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#14B8A6]/15 text-[#0F766E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#14B8A6]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F1F3D]">
              {tab === 'start' ? 'Profil analizy przygotowany' : 'Weryfikacja konta'}
            </h3>
            <p className="text-xs sm:text-sm text-[#0F1F3D]/70 leading-relaxed max-w-sm mx-auto">
              {tab === 'start'
                ? 'Wysłaliśmy bezpieczny link logowania na podany adres. Możesz teraz rozpocząć opisywanie pierwszych obserwacji bez podawania danych osobowych dziecka.'
                : 'Sprawdź skrzynkę e-mail, aby dokończyć logowanie i uzyskać dostęp do swoich zapisanych ścieżek.'}
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#4F46E5] text-white text-xs font-semibold hover:bg-[#3730A3] transition-colors cursor-pointer"
              >
                Powrót do strony
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Header */}
            <div className="space-y-1.5">
              <div className="mb-2">
                <ZebrixLogo size="sm" />
              </div>
              <h3 id="modal-title" className="text-xl font-bold text-[#0F1F3D]">
                {t.title}
              </h3>
              <p className="text-xs text-[#0F1F3D]/65 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Segmented Mode Switcher */}
            <div className="flex p-1 bg-[#F6F8FD] rounded-xl border border-black/[0.06]">
              <button
                type="button"
                onClick={() => setTab('start')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  tab === 'start'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/60 hover:text-[#0F1F3D]'
                }`}
              >
                {t.switchTabStart}
              </button>
              <button
                type="button"
                onClick={() => setTab('signin')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  tab === 'signin'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/60 hover:text-[#0F1F3D]'
                }`}
              >
                {t.switchTabSignIn}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold text-[#0F1F3D]"
                >
                  {t.emailLabel}
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-[#F6F8FD] text-xs sm:text-sm text-[#0F1F3D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all"
                />
              </div>

              {tab === 'start' && (
                <div className="space-y-1">
                  <label
                    htmlFor="modal-child-age"
                    className="block text-xs font-semibold text-[#0F1F3D]"
                  >
                    {t.childAgeLabel}
                  </label>
                  <input
                    id="modal-child-age"
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder={t.childAgePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-[#F6F8FD] text-xs sm:text-sm text-[#0F1F3D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all"
                  />
                </div>
              )}

              {/* Safety notice banner */}
              <div className="p-3 rounded-xl bg-[#E7ECFB]/60 border border-[#4F46E5]/15 flex items-start gap-2 text-xs text-[#0F1F3D]/75">
                <ShieldAlert className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
                <span className="leading-tight">{t.notice}</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] active:bg-[#312E81] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>{tab === 'start' ? t.btnStart : t.btnSignIn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
