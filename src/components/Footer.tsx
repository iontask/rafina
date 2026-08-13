import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = uiTranslations[currentLang];

  return (
    <footer className="bg-[#020b18] text-white pt-12 pb-8 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* COL 1: BRAND */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Great_Vibes',cursive] text-2xl text-teal-400 leading-none">
                  {t.residenceTitle}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">
                  {t.residenceSub}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {t.footerAbout}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 pt-1">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors">
                WA
              </a>
            </div>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-teal-400">
              {t.navHeader}
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">{t.navHome}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.navResidence}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.navRules}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.navServices}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.navContact}</a></li>
            </ul>
          </div>

          {/* COL 3: INFORMATIONS */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-teal-400">
              {t.infoHeader}
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Plan d'accès</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galerie Photos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documents utiles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-teal-400">
              {t.contactHeader}
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <a href="tel:0600002477" className="hover:text-white font-bold">{t.emergencyPhone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <span>contact@rafina.pavillons.ma</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <span>Aïn Sebaa, Casablanca</span>
              </li>
            </ul>
          </div>

          {/* COL 5: NEWSLETTER */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-teal-400">
              {t.newsletterHeader}
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t.newsletterDesc}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
              <button
                type="submit"
                className="p-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer flex-shrink-0"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            {t.copyright}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">{t.legal}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t.privacy}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
