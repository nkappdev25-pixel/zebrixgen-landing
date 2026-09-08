import React, { useState, useEffect } from 'react';
import { ZebrixLogo } from './ZebrixLogo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onStartAnalysis: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onStartAnalysis,
  onSignIn,
}) => {
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section spy
      const sections = ['context', 'journey', 'knowledge', 'safety'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#context', label: t.about, id: 'context' },
    { href: '#journey', label: t.howItWorks, id: 'journey' },
    { href: '#knowledge', label: t.knowledgeBase, id: 'knowledge' },
    { href: '#safety', label: t.safety, id: 'safety' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none"
        role="banner"
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-md shadow-sm border border-black/[0.08]'
              : 'glass-nav'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-lg p-0.5"
            aria-label="Zebrix Home"
          >
            <ZebrixLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? 'text-[#4F46E5] bg-[#E7ECFB]/70 font-semibold'
                      : 'text-[#0F1F3D]/80 hover:text-[#0F1F3D] hover:bg-black/[0.03]'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Language Switch */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div
              className="flex items-center bg-[#0F1F3D]/[0.04] p-0.5 rounded-full border border-black/[0.06]"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('pl')}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
                  lang === 'pl'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/65 hover:text-[#0F1F3D]'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]`}
                aria-pressed={lang === 'pl'}
              >
                PL
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-white text-[#0F1F3D] shadow-xs'
                    : 'text-[#0F1F3D]/65 hover:text-[#0F1F3D]'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Sign In link */}
            <button
              type="button"
              onClick={onSignIn}
              className="hidden sm:inline-flex text-sm font-medium text-[#0F1F3D]/80 hover:text-[#0F1F3D] px-3 py-1.5 rounded-full hover:bg-black/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            >
              {t.signIn}
            </button>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={onStartAnalysis}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-[#4F46E5] hover:bg-[#3730A3] active:bg-[#312E81] text-white px-4 py-2 sm:px-4.5 sm:py-2 rounded-full shadow-xs hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#0F1F3D]/80 hover:text-[#0F1F3D] hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed top-18 left-4 right-4 bg-white rounded-2xl shadow-xl border border-black/10 p-5 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F1F3D]/60">
                Menu
              </span>
              <div className="flex items-center gap-1 bg-[#0F1F3D]/[0.05] p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => onLanguageChange('pl')}
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    lang === 'pl' ? 'bg-white text-[#0F1F3D] shadow-xs' : 'text-[#0F1F3D]/60'
                  }`}
                >
                  Polski
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    lang === 'en' ? 'bg-white text-[#0F1F3D] shadow-xs' : 'text-[#0F1F3D]/60'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#0F1F3D] py-2 px-3 rounded-lg hover:bg-[#F6F8FD] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-black/[0.06] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignIn();
                }}
                className="w-full text-center py-2.5 text-sm font-medium text-[#0F1F3D] bg-black/[0.03] hover:bg-black/[0.06] rounded-xl"
              >
                {t.signIn}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartAnalysis();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#3730A3] rounded-xl shadow-xs"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
