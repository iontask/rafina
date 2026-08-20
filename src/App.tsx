import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResidenceDashboard } from './components/ResidenceDashboard';
import { CategoryTabs } from './components/CategoryTabs';
import { RuleCard } from './components/RuleCard';
import { RuleDetailModal } from './components/RuleDetailModal';
import { MobileMenuModal } from './components/MobileMenuModal';
import { FeatureGrid } from './components/FeatureGrid';
import { Footer } from './components/Footer';
import { BulletinBoardModal } from './components/BulletinBoardModal';
import { IncidentReportModal } from './components/IncidentReportModal';
import { ServicesModal } from './components/ServicesModal';
import { ResidentPortalModal } from './components/ResidentPortalModal';
import { rulesData } from './data/rules';
import { Rule, CategoryKey, Language } from './types';
import { uiTranslations, arabicRulesContent } from './data/translations';
import { PhoneCall, ChevronDown, Sparkles, AlertTriangle } from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activeCategory, setActiveCategory] = useState<CategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);
  const [showAllRules, setShowAllRules] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // New Syndic Modals state
  const [isBulletinOpen, setIsBulletinOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isResidentOpen, setIsResidentOpen] = useState<boolean>(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  // Synchronize document dir and font for Arabic support
  useEffect(() => {
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.style.fontFamily = "'Cairo', 'Plus Jakarta Sans', sans-serif";
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'fr';
      document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    }
  }, [currentLang]);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  const handleShareRule = (rule: Rule) => {
    const arContent = currentLang === 'ar' ? arabicRulesContent[rule.id] : null;
    const title = arContent?.title || rule.title;
    const summary = arContent?.summary || rule.summary;
    const highlight = arContent?.highlightText || rule.highlightText;

    const text = encodeURIComponent(`*${title}*\n\n${summary}\n\n_${highlight}_\n\n${t.residenceTitle} — ${t.residenceSub}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    
    setToastMessage(currentLang === 'ar' ? `تم فتح مشاركة "${title}" عبر WhatsApp` : `Partage de "${title}" ouvert sur WhatsApp`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filter rules based on Category & Search (supports both FR & AR content search)
  const filteredRules = rulesData.filter((rule) => {
    const matchesCategory = activeCategory === 'all' || rule.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!matchesCategory) return false;
    if (query === '') return true;

    const ar = arabicRulesContent[rule.id];
    const frTitle = rule.title.toLowerCase();
    const frSummary = rule.summary.toLowerCase();
    const frTag = rule.tag.toLowerCase();
    const arTitle = ar?.title.toLowerCase() || '';
    const arSummary = ar?.summary.toLowerCase() || '';
    const arTag = ar?.tag.toLowerCase() || '';

    return (
      frTitle.includes(query) ||
      frSummary.includes(query) ||
      frTag.includes(query) ||
      arTitle.includes(query) ||
      arSummary.includes(query) ||
      arTag.includes(query) ||
      rule.number.includes(query)
    );
  });

  const displayedRules = showAllRules ? filteredRules : filteredRules.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-bold border border-teal-500/50 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenBulletinBoard={() => setIsBulletinOpen(true)}
        onOpenServicesModal={() => setIsServicesOpen(true)}
        onOpenResidentModal={() => setIsResidentOpen(true)}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* HERO SHOWCASE */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentLang={currentLang}
        onOpenBulletinBoard={() => setIsBulletinOpen(true)}
        onOpenServicesModal={() => setIsServicesOpen(true)}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* RESIDENCE DASHBOARD & BULLETIN BOARD (TABLEAU D'AFFICHAGE DE LA RÉSIDENCE) */}
      <ResidenceDashboard
        currentLang={currentLang}
        onOpenReportModal={() => setIsReportOpen(true)}
        onOpenResidentModal={() => setIsResidentOpen(true)}
        onOpenServicesModal={() => setIsServicesOpen(true)}
        onOpenBulletinModal={() => setIsBulletinOpen(true)}
      />

      {/* CATEGORY TABS */}
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        currentLang={currentLang}
      />

      {/* MAIN CONTENT AREA */}
      <main id="rules-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        
        {/* SECTION HEADER & EMERGENCY BANNER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {t.sectionSub}
            </p>
          </div>

          {/* EMERGENCY BADGE (Desktop/Tablet top right) */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 shadow-sm flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-extrabold text-emerald-800 tracking-wider">
                {t.emergencyTitle}
              </div>
              <a href="tel:0600002477" className="text-sm font-extrabold text-emerald-950 hover:underline">
                {t.emergencyPhone}
              </a>
            </div>
          </div>
        </div>

        {/* RULES GRID (Responsive 1, 2, 3 columns matching desktop design) */}
        {filteredRules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRules.map((rule) => (
              <RuleCard
                key={rule.id}
                rule={rule}
                currentLang={currentLang}
                onSelectRule={setSelectedRule}
                onShareRule={handleShareRule}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm font-medium">
              {t.noRulesFound} "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t.resetFilters}
            </button>
          </div>
        )}

        {/* VIEW ALL RULES BUTTON IF NEEDED */}
        {filteredRules.length > 6 && !showAllRules && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllRules(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              <span>{t.viewAllRules} ({filteredRules.length})</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </main>

      {/* FEATURE GRID AT BOTTOM */}
      <FeatureGrid currentLang={currentLang} />

      {/* FOOTER */}
      <Footer currentLang={currentLang} />

      {/* RULE DETAIL MODAL */}
      <RuleDetailModal
        rule={selectedRule}
        allRules={rulesData}
        currentLang={currentLang}
        onClose={() => setSelectedRule(null)}
        onNavigate={setSelectedRule}
      />

      {/* SYNDIC BULLETIN BOARD MODAL */}
      <BulletinBoardModal
        isOpen={isBulletinOpen}
        onClose={() => setIsBulletinOpen(false)}
        currentLang={currentLang}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* INCIDENT REPORT MODAL */}
      <IncidentReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        currentLang={currentLang}
      />

      {/* SERVICES MODAL */}
      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        currentLang={currentLang}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* RESIDENT PORTAL MODAL */}
      <ResidentPortalModal
        isOpen={isResidentOpen}
        onClose={() => setIsResidentOpen(false)}
        currentLang={currentLang}
      />

      {/* MOBILE MENU MODAL / DRAWER */}
      <MobileMenuModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onSelectCategory={setActiveCategory}
        onOpenBulletinBoard={() => setIsBulletinOpen(true)}
        onOpenServicesModal={() => setIsServicesOpen(true)}
        onOpenResidentModal={() => setIsResidentOpen(true)}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

    </div>
  );
}

export default App;
