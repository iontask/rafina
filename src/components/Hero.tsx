import React, { useState, useRef, useEffect } from 'react';
import {
  FileText,
  Shield,
  PhoneCall,
  Search,
  Maximize2,
  X,
  Sparkles,
  AlertTriangle,
  Heart,
  ChevronRight,
  ExternalLink,
  Tag,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Language, Rule } from '../types';
import { uiTranslations, arabicRulesContent } from '../data/translations';
import { rulesData } from '../data/rules';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentLang: Language;
  onOpenBulletinBoard?: () => void;
  onOpenServicesModal?: () => void;
  onOpenReportModal?: () => void;
  onSelectRule?: (rule: Rule) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  currentLang,
  onOpenBulletinBoard,
  onOpenServicesModal,
  onOpenReportModal,
  onSelectRule,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  // High quality night architectural render URL for Les Pavillons Verts Aïn Sebaa
  const heroImageUrl = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85";

  // Handle clicking outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Quick suggestions
  const quickKeywords = isAr
    ? [
        { label: 'الحيوانات والكلاب', query: 'حيوانات' },
        { label: 'الأشغال والضجيج', query: 'أشغال' },
        { label: 'المرآب والسرعة', query: 'مرآب' },
        { label: 'القاعة الرياضية', query: 'رياضية' },
        { label: 'نادي الأطفال', query: 'أطفال' },
        { label: 'عيد الأضحى', query: 'الأضحى' },
        { label: 'شواحن السيارات', query: 'شواحن' },
        { label: 'الواجبات الشهرية', query: 'الواجبات' },
      ]
    : [
        { label: 'Animaux & Chiens', query: 'animaux' },
        { label: 'Travaux & Bruit', query: 'travaux' },
        { label: 'Parking & Vitesse', query: 'parking' },
        { label: 'Salle de Sport', query: 'sport' },
        { label: 'Kids Club', query: 'kids' },
        { label: 'Aïd El Kébir', query: 'aïd' },
        { label: 'Bornes Électriques', query: 'bornes' },
        { label: 'Charges & Impayés', query: 'charges' },
      ];

  // Matching rules calculation for search results
  const queryTrimmed = searchQuery.toLowerCase().trim();
  const matchingRules = queryTrimmed === '' ? [] : rulesData.filter((rule) => {
    const ar = arabicRulesContent[rule.id];
    const frTitle = rule.title.toLowerCase();
    const frSummary = rule.summary.toLowerCase();
    const frHighlight = (rule.highlightText || '').toLowerCase();
    const frTag = rule.tag.toLowerCase();
    const frStrict = (rule.stricteRule || '').toLowerCase();
    
    const arTitle = ar?.title.toLowerCase() || '';
    const arSummary = ar?.summary.toLowerCase() || '';
    const arHighlight = (ar?.highlightText || '').toLowerCase();
    const arTag = ar?.tag.toLowerCase() || '';
    const arStrict = (ar?.stricteRule || '').toLowerCase();

    return (
      frTitle.includes(queryTrimmed) ||
      frSummary.includes(queryTrimmed) ||
      frHighlight.includes(queryTrimmed) ||
      frTag.includes(queryTrimmed) ||
      frStrict.includes(queryTrimmed) ||
      arTitle.includes(queryTrimmed) ||
      arSummary.includes(queryTrimmed) ||
      arHighlight.includes(queryTrimmed) ||
      arTag.includes(queryTrimmed) ||
      arStrict.includes(queryTrimmed) ||
      rule.number.includes(queryTrimmed)
    );
  });

  const handleSelectRuleItem = (rule: Rule) => {
    if (onSelectRule) {
      onSelectRule(rule);
    }
    setIsDropdownOpen(false);
  };

  const handleScrollToRules = () => {
    setIsDropdownOpen(false);
    const element = document.getElementById('rules-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper for tag colors
  const getTagBadgeStyle = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      case 'orange':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'blue':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'green':
      case 'emerald':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'purple':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#030a16] via-[#071326] to-[#0b1c36] text-white pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
      
      {/* BACKGROUND DECORATIVE GLOW (CONTAINED) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
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

        {/* ========================================================================= */}
        {/* LIVE INTUITIVE SEARCH BAR WITH FLOATING MATCHING ARTICLES DROPDOWN */}
        {/* ========================================================================= */}
        <div className="mt-8 relative z-30" ref={searchContainerRef}>
          <div className="max-w-3xl mx-auto space-y-2.5">
            
            {/* INPUT FIELD */}
            <div className="relative">
              <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-teal-500" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsDropdownOpen(false);
                  }
                }}
                placeholder={t.searchPlaceholder}
                className="w-full ltr:pl-11 ltr:pr-12 rtl:pr-11 rtl:pl-12 py-3.5 bg-white text-slate-900 rounded-2xl shadow-2xl placeholder-slate-400 font-medium text-sm border-2 border-transparent focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 outline-none transition-all"
              />

              {/* CLEAR BUTTON */}
              {searchQuery.trim().length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    onSearchChange('');
                    setIsDropdownOpen(false);
                  }}
                  title={t.clearSearch}
                  className="absolute inset-y-0 ltr:right-0 rtl:left-0 pr-3 rtl:pl-3 rtl:pr-0 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <span className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600">
                    <X className="w-4 h-4" />
                  </span>
                </button>
              )}
            </div>

            {/* QUICK SUGGESTION PILLS (ALWAYS HELPFUL & DISCOVERABLE) */}
            <div className="flex items-center gap-1.5 flex-wrap px-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 flex items-center gap-1 text-[11px]">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>{t.quickKeywordsTitle}</span>
              </span>
              {quickKeywords.map((k, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onSearchChange(k.query);
                    setIsDropdownOpen(true);
                  }}
                  className="px-2.5 py-0.5 rounded-full bg-slate-800/80 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 border border-slate-700 hover:border-teal-500/40 text-[11px] font-medium transition-all cursor-pointer whitespace-nowrap"
                >
                  {k.label}
                </button>
              ))}
            </div>

            {/* ========================================================================= */}
            {/* INTUITIVE SEARCH RESULTS PANEL (ALWAYS VISIBLE & HIGH CONTRAST) */}
            {/* ========================================================================= */}
            {(isDropdownOpen || searchQuery.trim().length > 0) && searchQuery.trim().length > 0 && (
              <div className="relative mt-3 bg-[#07172e] border-2 border-teal-500/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-40 text-white flex flex-col animate-fadeIn">
                
                {/* TOP BAR: COUNT & CLEAR */}
                <div className="p-3.5 bg-slate-950/95 border-b border-teal-500/30 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                    <span className="font-extrabold text-white text-xs sm:text-sm">
                      {matchingRules.length} {t.searchFoundCount}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-black">
                      « {searchQuery.trim()} »
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onSearchChange('');
                        setIsDropdownOpen(false);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{t.clearSearch}</span>
                    </button>
                  </div>
                </div>

                {/* RESULTS BODY: LIST OF ARTICLES */}
                <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-800/80 p-2.5 space-y-2">
                  {matchingRules.length > 0 ? (
                    matchingRules.map((rule) => {
                      const arContent = isAr ? arabicRulesContent[rule.id] : null;
                      const title = arContent?.title || rule.title;
                      const summary = arContent?.summary || rule.summary;
                      const highlight = arContent?.highlightText || rule.highlightText;
                      const tag = arContent?.tag || rule.tag;

                      return (
                        <div
                          key={rule.id}
                          onClick={() => handleSelectRuleItem(rule)}
                          className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-400 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
                        >
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              {/* ARTICLE NUMBER BADGE */}
                              <span className="px-2.5 py-0.5 rounded-md bg-teal-500 text-slate-950 text-[11px] font-black tracking-wider uppercase shadow-sm">
                                {isAr ? `المادة ${rule.number}` : `Article ${rule.number}`}
                              </span>

                              {/* TAG BADGE */}
                              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${getTagBadgeStyle(rule.tagColor)}`}>
                                {tag}
                              </span>

                              {/* TITRE REFERENCE */}
                              {rule.titreLabel && (
                                <span className="text-[11px] text-teal-300/80 hidden md:inline truncate max-w-[280px]">
                                  • {rule.titreLabel}
                                </span>
                              )}
                            </div>

                            {/* ARTICLE TITLE */}
                            <h4 className="text-sm font-extrabold text-white group-hover:text-teal-300 transition-colors leading-snug">
                              {title}
                            </h4>

                            {/* SNIPPET PREVIEW */}
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {summary}
                            </p>

                            {/* HIGHLIGHT TEXT SNIPPET */}
                            {highlight && (
                              <div className="text-[11px] text-amber-300/95 font-medium italic bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg inline-block">
                                ✦ {highlight}
                              </div>
                            )}
                          </div>

                          {/* ACTION BUTTON */}
                          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-400 group-hover:text-teal-300 flex-shrink-0 self-end sm:self-center">
                            <span className="px-3 py-1.5 rounded-xl bg-teal-500/20 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all flex items-center gap-1.5">
                              <span>{t.viewArticleDetail}</span>
                              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-8 px-4 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                        <Search className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-slate-200">
                        {isAr
                          ? `لم يتم العثور على أي مادة مطابقة لـ "${searchQuery}"`
                          : `Aucun article ne correspond à "${searchQuery}"`}
                      </div>
                      <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                        {isAr
                          ? 'جرب البحث بكلمات عامة مثل: الحيوانات، الأشغال، المرآب، القاعة، السنديك، الواجبات...'
                          : 'Essayez avec un mot-clé plus simple : animaux, travaux, parking, sport, syndic, charges, ascenseur...'}
                      </p>
                    </div>
                  )}
                </div>

                {/* FOOTER BAR: SCROLL TO FULL RULES */}
                {matchingRules.length > 0 && (
                  <div className="p-3 bg-slate-950/90 border-t border-teal-500/30 flex items-center justify-between gap-2 text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {isAr ? 'اضغط على أي مادة لفتح التفاصيل والمشاركة' : 'Cliquez sur un article pour voir les détails et partager'}
                    </span>
                    <button
                      onClick={handleScrollToRules}
                      className="px-3.5 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-[11px] flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.viewAllResults} ({matchingRules.length})</span>
                    </button>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
