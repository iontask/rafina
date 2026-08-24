import React, { useState } from 'react';
import { FileText, Shield, PhoneCall, Search, Maximize2, X, Sparkles, AlertTriangle, Heart, Quote } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentLang: Language;
  onOpenBulletinBoard?: () => void;
  onOpenServicesModal?: () => void;
  onOpenReportModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  currentLang,
  onOpenBulletinBoard,
  onOpenServicesModal,
  onOpenReportModal,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  // High quality night architectural render URL for Les Pavillons Verts Aïn Sebaa
  const heroImageUrl = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85";

  return (
    <section className="bg-gradient-to-b from-[#030a16] via-[#071326] to-[#0b1c36] text-white pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
      
      {/* LIGHTBOX MODAL FOR HERO IMAGE */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative">
              <img
                src={heroImageUrl}
                alt="Les Pavillons Verts - Rendering Architecture"
                className="w-full max-h-[80vh] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-8 text-right pointer-events-none">
                <span className="font-['Great_Vibes',cursive] text-4xl sm:text-6xl text-teal-300 drop-shadow-[0_4px_16px_rgba(34,211,238,0.9)] block">
                  {t.residenceTitle}
                </span>
                <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-slate-100 drop-shadow-md">
                  {t.residenceSub}
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 text-xs text-slate-300 flex items-center justify-between border-t border-slate-800">
              <span className="font-semibold">{t.residenceTitle} — Vue Nocturne de la Copropriété</span>
              <span className="text-teal-400 font-bold">{t.cityBadge}</span>
            </div>
          </div>
        </div>
      )}

      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: TEXT, HADITH REMINDER & ACTION CARDS */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* PILL BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-extrabold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></span>
              <span>{t.heroBadge}</span>
            </div>

            {/* H1 TITLE */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t.heroTitle}
            </h1>

            {/* SUBTITLE */}
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* HADITH PROPHÉTIQUE SUR LE BON VOISINAGE — RAPPEL ESSENTIEL */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950/70 via-[#07201e]/80 to-slate-950/90 border border-emerald-500/40 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-extrabold tracking-wide uppercase">
                  <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400/30" />
                  <span>{t.hadithBadge}</span>
                </span>
                <span className="text-[10px] text-emerald-400/80 font-bold">
                  {t.hadithSource}
                </span>
              </div>

              <div className="space-y-2">
                {/* HADITH TEXT IN ARABIC */}
                <p className="text-sm sm:text-base font-bold text-amber-200/95 leading-relaxed text-right font-serif tracking-wide select-text">
                  « {t.hadithArabic} »
                </p>

                {/* HADITH TRANSLATION IN FRENCH (WHEN FRENCH IS SELECTED) */}
                {!isAr && (
                  <p className="text-xs text-slate-300 italic leading-relaxed border-t border-emerald-500/20 pt-2 font-normal">
                    {t.hadithText}
                  </p>
                )}
              </div>
            </div>

            {/* 3 QUICK ACTION GLASS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              
              {/* Card 1: Bulletin Board & Dashboard */}
              <a
                href="#dashboard-section"
                className="flex items-center sm:flex-col sm:items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all group backdrop-blur-md text-left rtl:text-right cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                    {currentLang === 'ar' ? 'لوحة القيادة والإعلانات' : 'Tableau d\'Affichage'}
                  </div>
                  <div className="text-[11px] text-slate-400">{currentLang === 'ar' ? '5 إعلانات رسمية وتوقيت اليوم' : '5 Affiches & Direct'}</div>
                </div>
              </a>

              {/* Card 2: Services & Security */}
              <button
                onClick={onOpenServicesModal}
                className="flex items-center sm:flex-col sm:items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all group backdrop-blur-md text-left rtl:text-right cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                    {t.cardSecurityTitle}
                  </div>
                  <div className="text-[11px] text-slate-400">{t.cardSecuritySub}</div>
                </div>
              </button>

              {/* Card 3: Report Incident */}
              <button
                onClick={onOpenReportModal}
                className="flex items-center sm:flex-col sm:items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all group backdrop-blur-md text-left rtl:text-right cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                    {t.cardReportTitle}
                  </div>
                  <div className="text-[11px] text-slate-400">{t.cardReportSub}</div>
                </div>
              </button>

            </div>

          </div>

          {/* RIGHT COLUMN: NIGHT BUILDING ARCHITECTURAL BANNER MATCHING USER IMAGE */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group cursor-pointer bg-[#040c18]"
              title="Agrandir l'image de la résidence"
            >
              <img
                src={heroImageUrl}
                alt="Les Pavillons Verts Residence - Vue nocturne"
                className="w-full h-64 sm:h-80 lg:h-88 object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
              
              {/* TOP RIGHT CALLIGRAPHIC CYAN SCRIPT — MATCHING USER IMAGE */}
              <div className="absolute top-3 right-4 text-right pointer-events-none z-10">
                <span className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl lg:text-4xl text-teal-300 drop-shadow-[0_2px_12px_rgba(34,211,238,0.95)] block whitespace-nowrap">
                  Les Pavillons Verts
                </span>
              </div>

              {/* BOTTOM RIGHT CALLIGRAPHIC CYAN SCRIPT — MATCHING USER IMAGE */}
              <div className="absolute bottom-3 right-5 text-right pointer-events-none z-10">
                <span className="font-['Great_Vibes',cursive] text-xl sm:text-2xl lg:text-3xl text-teal-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.9)] block whitespace-nowrap">
                  Aïn Sebaa
                </span>
              </div>

              {/* BOTTOM-LEFT NEON CYAN DIAGONAL ACCENT LINES — MATCHING USER IMAGE */}
              <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none overflow-hidden z-10">
                <div className="absolute bottom-[-10px] left-[-20px] w-32 h-1 bg-teal-400 rotate-[-35deg] shadow-[0_0_10px_#22d3ee]"></div>
                <div className="absolute bottom-[-20px] left-[-20px] w-32 h-1 bg-teal-400/60 rotate-[-35deg]"></div>
              </div>

              {/* BOTTOM-RIGHT NEON CYAN DIAGONAL ACCENT LINES — MATCHING USER IMAGE */}
              <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none overflow-hidden z-10">
                <div className="absolute bottom-[-10px] right-[-20px] w-32 h-1 bg-teal-400 rotate-[35deg] shadow-[0_0_10px_#22d3ee]"></div>
                <div className="absolute bottom-[-20px] right-[-20px] w-32 h-1 bg-teal-400/60 rotate-[35deg]"></div>
              </div>

              {/* MAGNIFY HOVER ICON */}
              <div className="absolute top-4 left-4 p-2 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-200 group-hover:text-teal-300 transition-colors opacity-0 group-hover:opacity-100 z-10">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* STATUS PILL AT BOTTOM LEFT */}
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[11px] bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-slate-200">{t.securedBadge}</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEARCH BAR CARD AT BOTTOM OF HERO */}
        <div className="mt-8">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full ltr:pl-11 ltr:pr-4 rtl:pr-11 rtl:pl-4 py-3.5 bg-white text-slate-900 rounded-2xl shadow-xl placeholder-slate-400 font-medium text-sm border-0 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
