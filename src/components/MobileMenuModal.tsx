import React from 'react';
import { X, User, PhoneCall, ChevronRight, Shield, FileText, Bell, Sparkles, Building, AlertTriangle } from 'lucide-react';
import { Language, CategoryKey } from '../types';
import { uiTranslations } from '../data/translations';

interface MobileMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onToggleLang: () => void;
  onSelectCategory: (cat: CategoryKey | 'all') => void;
  onOpenBulletinBoard?: () => void;
  onOpenServicesModal?: () => void;
  onOpenResidentModal?: () => void;
  onOpenReportModal?: () => void;
}

export const MobileMenuModal: React.FC<MobileMenuModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onToggleLang,
  onSelectCategory,
  onOpenBulletinBoard,
  onOpenServicesModal,
  onOpenResidentModal,
  onOpenReportModal,
}) => {
  if (!isOpen) return null;

  const t = uiTranslations[currentLang];

  const categories = [
    { id: 'all' as const, label: t.catAll, icon: '📜' },
    { id: 'titre1' as const, label: t.catTitre1, icon: '📋' },
    { id: 'titre2' as const, label: t.catTitre2, icon: '🏠' },
    { id: 'titre3' as const, label: t.catTitre3, icon: '⚖️' },
    { id: 'titre4' as const, label: t.catTitre4, icon: '🏢' },
    { id: 'titre5' as const, label: t.catTitre5, icon: '🚪' },
    { id: 'titre6' as const, label: t.catTitre6, icon: '🚨' },
    { id: 'titre7' as const, label: t.catTitre7, icon: '🚗' },
    { id: 'titre8' as const, label: t.catTitre8, icon: '💳' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* DRAWER PANEL */}
      <div className="relative w-full max-w-sm bg-[#030a16] text-white h-full flex flex-col shadow-2xl border-l border-slate-800 z-10 overflow-y-auto">
        
        {/* DRAWER HEADER */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between sticky top-0 bg-[#030a16] z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
            </div>
            <div>
              <span className="font-['Great_Vibes',cursive] text-xl text-teal-400 block leading-none">
                {t.residenceTitle}
              </span>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">
                {t.residenceSub}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="p-5 space-y-6 flex-1">
          
          {/* LANGUAGE & RESIDENT BUTTONS */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onToggleLang();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-all cursor-pointer"
            >
              <span>{currentLang === 'fr' ? '🇲🇦' : '🇫🇷'}</span>
              <span>{currentLang === 'fr' ? 'العربية' : 'Français'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                if (onOpenResidentModal) onOpenResidentModal();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-500 text-slate-950 text-xs font-extrabold hover:bg-teal-400 transition-all cursor-pointer shadow-lg shadow-teal-500/20"
            >
              <User className="w-4 h-4" />
              <span>{t.residentArea}</span>
            </button>
          </div>

          {/* MAIN NAV LINKS */}
          <div className="space-y-1">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 px-2 mb-2">
              Menu principal
            </div>

            <a
              href="#dashboard-section"
              onClick={onClose}
              className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-bold transition-all bg-teal-500/15 border border-teal-500/40 text-teal-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>{currentLang === 'ar' ? 'لوحة القيادة والإعلانات' : 'Tableau de Bord & Affichage'}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <button
              onClick={() => {
                onClose();
                if (onOpenServicesModal) onOpenServicesModal();
              }}
              className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:bg-slate-800/80 hover:text-white cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-sky-400" />
                <span>Services & Équipements</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <button
              onClick={() => {
                onClose();
                if (onOpenReportModal) onOpenReportModal();
              }}
              className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-bold transition-all text-amber-300 hover:bg-slate-800/80 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Signaler un Incident au Syndic</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          {/* CATEGORIES SHORTCUTS */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 px-2">
              Rubriques & Catégories
            </div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onClose();
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800/90 text-slate-300 text-xs font-semibold hover:border-teal-500/50 hover:text-white transition-all text-left cursor-pointer"
                >
                  <span>{cat.icon}</span>
                  <span className="truncate">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* EMERGENCY CONTACT BLOCK */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              <span>{t.urgencySecurity}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-xs text-slate-300 font-medium">
              {t.needAssistance}
            </div>
            <a
              href="tel:0600002477"
              className="w-full py-3 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.emergencyPhone}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
