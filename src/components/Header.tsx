import React from 'react';
import { Bell, Menu, Search, User, Sparkles, Building, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenMobileMenu?: () => void;
  onOpenBulletinBoard?: () => void;
  onOpenServicesModal?: () => void;
  onOpenResidentModal?: () => void;
  onOpenReportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenMobileMenu,
  onOpenBulletinBoard,
  onOpenServicesModal,
  onOpenResidentModal,
  onOpenReportModal,
}) => {
  const t = uiTranslations[currentLang];

  return (
    <header className="bg-[#030a16] text-white border-b border-slate-800/80 sticky top-0 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* LOGO BLOCK */}
        <a href="#" className="flex items-center gap-3 group">
          {/* House with leaf icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/40 flex items-center justify-center text-teal-400 group-hover:border-teal-400 transition-colors shadow-lg shadow-teal-500/10">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
              <path d="M12 11c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5" className="stroke-teal-300" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-teal-400 leading-none tracking-wide text-shadow-teal">
              {t.residenceTitle}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase">
              {t.residenceSub}
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs sm:text-sm font-medium">
          <a href="#" className="text-slate-300 hover:text-white transition-colors">{t.navHome}</a>
          
          <button
            onClick={onOpenBulletinBoard}
            className="text-teal-400 font-bold hover:text-teal-300 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Affiches Officielle</span>
          </button>

          <a href="#rules-section" className="text-slate-300 hover:text-white transition-colors">{t.navRules}</a>

          <button
            onClick={onOpenServicesModal}
            className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Building className="w-3.5 h-3.5 text-teal-400" />
            <span>{t.navServices}</span>
          </button>

          <button
            onClick={onOpenReportModal}
            className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1 font-semibold"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Signaler Incident</span>
          </button>
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-bold hover:bg-slate-700/80 transition-all cursor-pointer"
            title="Changer la langue / تغيير اللغة"
          >
            <span>{currentLang === 'fr' ? '🇲🇦' : '🇫🇷'}</span>
            <span>{currentLang === 'fr' ? 'العربية' : 'Français'}</span>
          </button>

          {/* Bell / Bulletin Board Shortcut Icon */}
          <button
            onClick={onOpenBulletinBoard}
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer relative"
            title="Notices & Panneau d'Affichage"
          >
            <Bell className="w-4 h-4 text-teal-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          </button>

          {/* Resident Area Button (Desktop) */}
          <button
            onClick={onOpenResidentModal}
            className="hidden md:flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs transition-all shadow-lg shadow-teal-500/20 cursor-pointer"
          >
            <User className="w-4 h-4" />
            <span>{t.residentArea}</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white cursor-pointer active:scale-95 transition-transform"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
};
