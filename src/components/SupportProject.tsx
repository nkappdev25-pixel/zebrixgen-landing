import React, { useState } from 'react';
import { Language, UserRole } from '../types';
import { translations } from '../data/translations';
import { Heart, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface SupportProjectProps {
  lang: Language;
}

export const SupportProject: React.FC<SupportProjectProps> = ({ lang }) => {
  const t = translations[lang].supportProject;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('parent');
  const [experience, setExperience] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (val: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    if (!val.trim()) {
      setEmailError(lang === 'pl' ? 'Adres e-mail jest wymagany.' : 'Email address is required.');
      return false;
    }
    if (!isValid) {
      setEmailError(lang === 'pl' ? 'Podaj prawidłowy adres e-mail.' : 'Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      // Store in local storage for simulation
      try {
        const saved = JSON.parse(localStorage.getItem('zebrix_interest_list') || '[]');
        saved.push({ name, email, role, experience, date: new Date().toISOString() });
        localStorage.setItem('zebrix_interest_list', JSON.stringify(saved));
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }, 850);
  };

  return (
    <section
      id="support-project"
      className="py-20 md:py-28 bg-[#F6F8FD] relative overflow-hidden"
      aria-labelledby="support-heading"
    >
      {/* Subtle calm teal ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[540px] bg-[#14B8A6]/[0.06] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 cols): Editorial narrative */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
                {t.label}
              </span>
              <h2
                id="support-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1F3D]"
              >
                {t.title}
              </h2>
              <p className="text-sm sm:text-base text-[#0F1F3D]/70 leading-relaxed">
                {t.body}
              </p>

              <div className="pt-4 p-4 rounded-xl bg-white/70 border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F1F3D]">
                  <Heart className="w-4 h-4 text-[#4F46E5]" />
                  <span>Projekt non-profit tworzony dla społeczności</span>
                </div>
                <p className="text-xs text-[#0F1F3D]/65 leading-relaxed">
                  Zebrix powstaje we współpracy z ekspertami genetyki klinicznej oraz rodzicami, którzy przeszli własną odyseję diagnostyczną.
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Accessible Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-black/[0.06] shadow-xs">
              {status === 'success' ? (
                <div
                  className="text-center py-8 space-y-4"
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 rounded-full bg-[#14B8A6]/15 text-[#0F766E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1F3D]">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-[#0F1F3D]/70 max-w-md mx-auto leading-relaxed">
                    {t.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setEmail('');
                      setName('');
                      setExperience('');
                    }}
                    className="inline-flex text-xs font-semibold text-[#4F46E5] hover:underline pt-2 cursor-pointer"
                  >
                    Dodaj kolejną opinię lub kontakt
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="interest-name"
                      className="block text-xs font-semibold text-[#0F1F3D]"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="interest-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-[#F6F8FD] text-sm text-[#0F1F3D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="interest-email"
                      className="block text-xs font-semibold text-[#0F1F3D]"
                    >
                      {t.emailLabel} <span className="text-[#B42318]">*</span>
                    </label>
                    <input
                      id="interest-email"
                      type="email"
                      required
                      value={email}
                      onBlur={() => validateEmail(email)}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) validateEmail(e.target.value);
                      }}
                      placeholder={t.emailPlaceholder}
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? 'email-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#0F1F3D] focus:bg-white focus:outline-none transition-all ${
                        emailError
                          ? 'border-[#B42318] bg-[#B42318]/[0.03] focus:ring-2 focus:ring-[#B42318]'
                          : 'border-black/[0.12] bg-[#F6F8FD] focus:ring-2 focus:ring-[#4F46E5]'
                      }`}
                    />
                    {emailError && (
                      <p
                        id="email-error"
                        className="text-xs text-[#B42318] flex items-center gap-1 mt-1 font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{emailError}</span>
                      </p>
                    )}
                  </div>

                  {/* Role Radio Group */}
                  <div className="space-y-2 pt-1">
                    <span className="block text-xs font-semibold text-[#0F1F3D]">
                      {t.roleLabel}
                    </span>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                      role="radiogroup"
                      aria-label={t.roleLabel}
                    >
                      {(['parent', 'relative', 'specialist', 'other'] as UserRole[]).map((r) => {
                        const isSelected = role === r;
                        return (
                          <label
                            key={r}
                            className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-semibold cursor-pointer text-center transition-all ${
                              isSelected
                                ? 'bg-[#4F46E5] border-[#4F46E5] text-white shadow-xs'
                                : 'bg-[#F6F8FD] border-black/[0.08] text-[#0F1F3D]/80 hover:bg-black/[0.04]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="user-role"
                              value={r}
                              checked={isSelected}
                              onChange={() => setRole(r)}
                              className="sr-only"
                            />
                            <span>{t.roles[r]}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Experience Textarea */}
                  <div className="space-y-1.5 pt-1">
                    <label
                      htmlFor="interest-experience"
                      className="block text-xs font-semibold text-[#0F1F3D]"
                    >
                      {t.experienceLabel}
                    </label>
                    <textarea
                      id="interest-experience"
                      rows={3}
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder={t.experiencePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-[#F6F8FD] text-sm text-[#0F1F3D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-[#B42318]/10 text-[#B42318] text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{t.errorText}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4F46E5] hover:bg-[#3730A3] active:bg-[#312E81] text-white text-sm font-semibold shadow-xs transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.submit}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
