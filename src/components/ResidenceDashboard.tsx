import React, { useState } from 'react';
import {
  Sparkles,
  Baby,
  Car,
  Dumbbell,
  Trash2,
  Clock,
  Printer,
  Share2,
  PhoneCall,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Layers,
  ChevronRight,
  ExternalLink,
  Download,
  Flame,
  VolumeX,
  Eye
} from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface ResidenceDashboardProps {
  currentLang: Language;
  onOpenReportModal: () => void;
  onOpenResidentModal: () => void;
  onOpenServicesModal: () => void;
  onOpenBulletinModal: () => void;
}

export const ResidenceDashboard: React.FC<ResidenceDashboardProps> = ({
  currentLang,
  onOpenReportModal,
  onOpenResidentModal,
  onOpenServicesModal,
  onOpenBulletinModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'kids' | 'parking' | 'gym' | 'hygiene' | 'travaux'>('all');
  const [activeGymDay, setActiveGymDay] = useState<number>(new Date().getDay()); // 0 = Dimanche, 1 = Lundi, etc.

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  // Real-time day of week detection
  const todayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
  const daysFr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const daysAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  const getGymAccessForDay = (dayIdx: number) => {
    if (dayIdx === 0) {
      return {
        label: isAr ? 'دخول مختلط (رجال ونساء)' : 'Accès Mixte (Femmes & Hommes)',
        type: 'mixed',
        color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        badge: isAr ? 'مختلط' : 'Mixte'
      };
    } else if (dayIdx === 1 || dayIdx === 3 || dayIdx === 5) {
      return {
        label: isAr ? 'مخصص للنساء حصرياً' : 'Réservé aux Femmes exclusivement',
        type: 'women',
        color: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        badge: isAr ? 'نساء فقط' : 'Femmes'
      };
    } else {
      return {
        label: isAr ? 'مخصص للرجال حصرياً' : 'Réservé aux Hommes exclusivement',
        type: 'men',
        color: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
        badge: isAr ? 'رجال فقط' : 'Hommes'
      };
    }
  };

  const todayGymAccess = getGymAccessForDay(todayIndex);

  const handleShareWhatsApp = (title: string, desc: string) => {
    const text = encodeURIComponent(`*${title}*\n\n${desc}\n\n📍 ${t.residenceTitle} — ${t.residenceSub}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="dashboard-section" className="bg-[#040c1a] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. DASHBOARD HEADER & QUICK STATS BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>{t.dashboardBadge}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                {isAr ? `اليوم: ${daysAr[todayIndex]}` : `Aujourd'hui : ${daysFr[todayIndex]}`}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                5 Pavillons • 24/7
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {t.dashboardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {t.dashboardSub}
            </p>
          </div>

          {/* QUICK TOP ACTIONS */}
          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
            <button
              onClick={onOpenReportModal}
              className="px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-rose-950/40"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>{isAr ? 'إبلاغ السنديك عن عطب' : 'Signaler un Incident'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer hidden sm:flex"
              title="Imprimer les affiches du panneau"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span>{t.printAllPosters}</span>
            </button>

            <a
              href="tel:0600002477"
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-extrabold transition-all shadow-lg shadow-teal-500/20 flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.callHotline}</span>
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. FOUR LIVE STATUS WIDGETS (TODAY'S RESIDENCE PULSE) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* WIDGET 1: GYM PLANNING TODAY */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-950/70 via-slate-900 to-slate-950 border border-sky-500/30 shadow-lg relative overflow-hidden group hover:border-sky-400 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold text-sky-300 uppercase tracking-wider">
                  {isAr ? 'القاعة الرياضية اليوم' : 'Salle de Sport'}
                </span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-bold">
                6h30 - 22h30
              </span>
            </div>

            <div className="mt-2">
              <div className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-between ${todayGymAccess.color}`}>
                <span>{todayGymAccess.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 font-black uppercase">
                  {todayGymAccess.badge}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                <span>{isAr ? 'السن: +18 سنة فقط' : 'Âge : +18 ans exigé'}</span>
                <span className="text-sky-400 font-semibold">{isAr ? 'منشفة إلزامية' : 'Serviette obligatoire'}</span>
              </div>
            </div>
          </div>

          {/* WIDGET 2: KIDS CLUB */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-lg relative overflow-hidden group hover:border-emerald-400 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Baby className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold text-emerald-300 uppercase tracking-wider">
                  {isAr ? 'نادي الأطفال' : 'Kids Club'}
                </span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-extrabold border border-emerald-500/30">
                ≤ 6 ans
              </span>
            </div>

            <div className="mt-2">
              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs font-semibold text-emerald-200">
                {isAr ? 'المرافقة الأبوية المستمرة إلزامية (لا يوجد منشط)' : 'Présence parentale continue obligatoire (aucun animateur)'}
              </div>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                <span>{isAr ? 'نزع الأحذية بالمدخل' : 'Chaussures retirées'}</span>
                <span className="text-emerald-400 font-semibold">{isAr ? 'بدون مأكولات' : 'Pas de nourriture'}</span>
              </div>
            </div>
          </div>

          {/* WIDGET 3: PARKING CIRCULATION */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/30 shadow-lg relative overflow-hidden group hover:border-amber-400 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                  {isAr ? 'المرور بالمرآب' : 'Parking Sous-Sol'}
                </span>
              </div>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-extrabold border border-amber-500/30">
                Max 10 km/h
              </span>
            </div>

            <div className="mt-2">
              <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/20 text-xs font-semibold text-amber-200">
                {isAr ? 'احترام اتجاهات السير والمنحدرات • لا للسرعة' : 'Sens uniques stricts • Pas de sortie par l\'entrée'}
              </div>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                <span>{isAr ? 'المستوى -1 و -2' : 'Sous-sols -1 & -2'}</span>
                <span className="text-rose-400 font-semibold">{isAr ? 'أماكن مرقمة خاصة' : 'Places titrées'}</span>
              </div>
            </div>
          </div>

          {/* WIDGET 4: QUIET HOURS & SUNDAY NOISE */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/70 via-slate-900 to-slate-950 border border-rose-500/30 shadow-lg relative overflow-hidden group hover:border-rose-400 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                  <VolumeX className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold text-rose-300 uppercase tracking-wider">
                  {isAr ? 'السكينة والهدوء' : 'Silence & Repos'}
                </span>
              </div>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-extrabold border border-rose-500/30">
                22h - 08h
              </span>
            </div>

            <div className="mt-2">
              <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/20 text-xs font-semibold text-rose-200">
                {isAr ? 'ممنوع الأشغال المزعجة أيام الأحد والعطل' : 'Travaux strictement interdits le dimanche & fériés'}
              </div>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
                <span>{isAr ? 'ساعات الأسبوع: 8h30-18h' : 'Semaine : 8h30 - 18h'}</span>
                <span className="text-purple-400 font-semibold">{isAr ? 'أكياس محكمة' : 'Sacs fermés'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE BULLETIN BOARD POSTERS TABS & GRID */}
        {/* ========================================================================= */}
        <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                  <span>{t.bulletinBoardTitle}</span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 uppercase font-bold tracking-wider">
                    5 Affiches
                  </span>
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isAr ? 'انقر على أي تصنيف لمشاهدة الإعلان ومشاركته عبر واتساب مع الساكنة' : 'Consultez les affiches du Syndic et partagez-les en un clic sur WhatsApp'}
              </p>
            </div>

            {/* TAB SELECTORS */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {isAr ? 'جميع الإعلانات (5)' : 'Tous (5)'}
              </button>

              <button
                onClick={() => setActiveTab('kids')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeTab === 'kids'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Baby className="w-3.5 h-3.5" />
                <span>Kids Club</span>
              </button>

              <button
                onClick={() => setActiveTab('parking')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeTab === 'parking'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Parking</span>
              </button>

              <button
                onClick={() => setActiveTab('gym')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeTab === 'gym'
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Dumbbell className="w-3.5 h-3.5" />
                <span>Salle de Sport</span>
              </button>

              <button
                onClick={() => setActiveTab('hygiene')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeTab === 'hygiene'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Propreté</span>
              </button>

              <button
                onClick={() => setActiveTab('travaux')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeTab === 'travaux'
                    ? 'bg-rose-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Travaux Dimanche</span>
              </button>
            </div>
          </div>

          {/* POSTERS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* POSTER 1: KIDS CLUB */}
            {(activeTab === 'all' || activeTab === 'kids') && (
              <div className="bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-950 rounded-2xl p-5 border border-emerald-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Baby className="w-3 h-3" />
                      <span>Kids Club (≤ 6 ans)</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">AFFICHE N°01</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'مرحبا بكم في نادي أطفال إقامة رافينا !' : 'BIENVENUE AU KIDS CLUB DE LA RÉSIDENCE RAFINA !'}
                  </h4>
                  <p className="text-xs text-emerald-300 font-semibold mb-4">
                    {isAr ? 'النظام الداخلي وتعليمات الولوج' : 'RÈGLEMENT INTÉRIEUR ET CONSIGNES D\'ACCÈS'}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-300">{isAr ? 'السن المحدد:' : 'Tranche d\'âge :'}</strong> {isAr ? 'الأطفال حتى سن 6 سنوات كحد أقصى.' : 'Enfants de 6 ans max.'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300">{isAr ? 'المراقبة الأبوية:' : 'Surveillance :'}</strong> {isAr ? 'حضور ولي الأمر المستمر إلزامي (لا يوجد مؤطر).' : 'Présence parentale continue obligatoire (aucun animateur présent).'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sky-300">{isAr ? 'النظافة والسلامة:' : 'Hygiène :'}</strong> {isAr ? 'نزع الأحذية عند المدخل. تمنع المأكولات والمشروبات.' : 'Retirer les chaussures à l\'entrée. Pas de nourriture ni boissons.'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-300">{isAr ? 'المسؤولية:' : 'Responsabilité :'}</strong> {isAr ? 'السنديك غير مسؤول في حالة وقوع أي حادث أو إصابة.' : 'Le Syndic décline toute responsabilité en cas d\'accident.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{isAr ? 'مفتوح يومياً' : 'Ouvert tous les jours'}</span>
                  <button
                    onClick={() => handleShareWhatsApp('BIENVENUE AU KIDS CLUB DE LA RÉSIDENCE RAFINA !', 'Âge max: 6 ans. Présence parentale continue obligatoire. Retirer les chaussures, pas de nourriture.')}
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.shareOnWhatsApp}</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 2: PARKING CIRCULATION */}
            {(activeTab === 'all' || activeTab === 'parking') && (
              <div className="bg-gradient-to-br from-amber-950/50 via-slate-900 to-slate-950 rounded-2xl p-5 border border-amber-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      <span>Circulation Parking (10 km/h)</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">AFFICHE N°02</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'قواعد السير والركن في المرآب تحت الأرضي' : 'RÈGLEMENT DE CIRCULATION ET STATIONNEMENT DANS LE PARKING'}
                  </h4>
                  <p className="text-xs text-amber-300 font-semibold mb-4">
                    {isAr ? '3 تعليمات أساسية للسلامة والركن الخاص' : '3 CONSIGNES MAJEURES DE SÉCURITÉ & STATIONNEMENT PRIVÉ'}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                      <div>{isAr ? 'يمنع الخروج عبر ممر الدخول (استعمال مخرج المرآب المخصص).' : 'Interdiction de sortir par l\'entrée du parking (voie de sortie dédiée obligatoire).'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                      <div>{isAr ? 'يمنع الدخول عبر ممر الخروج.' : 'Interdiction d\'entrer par la sortie du parking.'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                      <div>{isAr ? 'يمنع السير في الاتجاه الممنوع بالمستوى -2.' : 'Interdiction d\'entrer au 2ème sous-sol en sens interdit.'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-200 font-medium">
                      🚫 <strong>{isAr ? 'الركن الخاص:' : 'Stationnement privé :'}</strong> {isAr ? 'يمنع الركن في الأماكن المرقمة المخصصة للغير.' : 'Interdiction de stationner dans les places réservées aux autres résidents. Respectez les numéros titrés.'}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{isAr ? 'المستويان -1 و -2' : 'Sous-sols -1 et -2'}</span>
                  <button
                    onClick={() => handleShareWhatsApp('RÈGLEMENT DE CIRCULATION ET STATIONNEMENT DANS LE PARKING', '1) Pas de sortie par l\'entrée. 2) Pas d\'entrée par la sortie. 3) Pas de sens interdit au -2. Stationner uniquement sur sa place numérotée titrée.')}
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.shareOnWhatsApp}</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 3: SALLE DE SPORT */}
            {(activeTab === 'all' || activeTab === 'gym') && (
              <div className="bg-gradient-to-br from-sky-950/50 via-slate-900 to-slate-950 rounded-2xl p-5 border border-sky-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-sky-400 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Dumbbell className="w-3 h-3" />
                      <span>Salle de Sport (6h30-22h30)</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">AFFICHE N°03</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'تنظيم أيام الولوج وقواعد القاعة الرياضية' : 'ORGANISATION DES JOURS D\'ACCÈS ET RÈGLEMENT SALLE DE SPORT'}
                  </h4>
                  <p className="text-xs text-sky-300 font-semibold mb-4">
                    {isAr ? 'التوقيت اليومي: 06:30 إلى 22:30' : 'HORAIRES : 6h30 à 22h30'}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                      <span className="font-bold text-purple-300">{isAr ? 'النساء :' : 'Accès Femmes :'}</span>
                      <span className="text-white font-bold">{isAr ? 'الإثنين، الأربعاء، الجمعة' : 'Lundi, Mercredi, Vendredi'}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-between">
                      <span className="font-bold text-blue-300">{isAr ? 'الرجال :' : 'Accès Hommes :'}</span>
                      <span className="text-white font-bold">{isAr ? 'الثلاثاء، الخميس، السبت' : 'Mardi, Jeudi, Samedi'}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                      <span className="font-bold text-emerald-300">{isAr ? 'مختلط :' : 'Accès Mixte :'}</span>
                      <span className="text-white font-bold">{isAr ? 'الأحد' : 'Dimanche'}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-sky-500/20 space-y-1 text-[11px]">
                      <div>• {isAr ? 'الأجهزة مخصصة للبالغين (+18 سنة).' : 'Matériel réservé aux résidents +18 ans.'}</div>
                      <div>• {isAr ? 'ارتداء ملابس وحذاء رياضي نظيف.' : 'Tenue de sport appropriée et serviette exigées.'}</div>
                      <div>• {isAr ? 'إرجاع الأوزان لمكانها بعد الاستعمال.' : 'Ranger le matériel à sa place après chaque séance.'}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">6h30 — 22h30</span>
                  <button
                    onClick={() => handleShareWhatsApp('ACCÈS SALLE DE SPORT RÉSIDENCE RAFINA', 'Femmes: Lundi, Mercredi, Vendredi | Hommes: Mardi, Jeudi, Samedi | Mixte: Dimanche. Horaires: 6h30-22h30.')}
                    className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.shareOnWhatsApp}</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 4: PROPRETÉ & BACS */}
            {(activeTab === 'all' || activeTab === 'hygiene') && (
              <div className="bg-gradient-to-br from-purple-950/50 via-slate-900 to-slate-950 rounded-2xl p-5 border border-purple-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-purple-400 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Trash2 className="w-3 h-3" />
                      <span>Propreté & Hygiène</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">AFFICHE N°04</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'قواعد النظافة وحاويات النفايات بالمرآب' : 'RÈGLEMENT DE PROPRETÉ ET D\'HYGIÈNE — PARKING PROPRE ET SANS ODEUR'}
                  </h4>
                  <p className="text-xs text-purple-300 font-semibold mb-4">
                    {isAr ? '4 توصيات أساسية لاستعمال حاويات النفايات' : '4 RECOMMANDATIONS PRIMORDIALES BACS À ORDURES'}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                      <div><strong>{isAr ? 'إغلاق الأكياس:' : 'Fermeture hermétique :'}</strong> {isAr ? 'ربط الأكياس بإحكام قبل وضعها بالحاوية.' : 'Attachez solidement vos sacs avant de les jeter.'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                      <div><strong>{isAr ? 'منع الوضع على الأرض:' : 'Aucun dépôt au sol :'}</strong> {isAr ? 'يمنع وضع النفايات بجانب أو فوق الحاويات.' : 'Ne déposez aucun déchet à côté ou sur les bacs.'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-start gap-2 text-rose-200 font-medium">
                      <span className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                      <div><strong>{isAr ? 'منع السوائل والصلصات:' : 'Gestion des liquides :'}</strong> {isAr ? 'يمنع تفريغ السوائل والأطعمة السائلة (مصدر الروائح الكريهة).' : 'Interdiction de vider des restes de liquides/soupes/sauces (cause des mauvaises odeurs).'}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">4</span>
                      <div><strong>{isAr ? 'طي الكراتين:' : 'Plier les cartons :'}</strong> {isAr ? 'طي وضغط الكراتين لعدم ملء الحاوية بسرعة.' : 'Aplatissez systématiquement les grands cartons d\'emballage.'}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{isAr ? 'حاويات المرآب' : 'Bacs du parking'}</span>
                  <button
                    onClick={() => handleShareWhatsApp('PROPRETÉ DU PARKING & BACS À ORDURES', '4 règles d\'or: 1) Fermer hermétiquement les sacs. 2) Rien au sol. 3) Pas de liquides/soupes/sauces dans les bacs. 4) Plier les cartons.')}
                    className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.shareOnWhatsApp}</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 5: TRAVAUX LE DIMANCHE */}
            {(activeTab === 'all' || activeTab === 'travaux') && (
              <div className="bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-950 rounded-2xl p-5 border border-rose-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-rose-400 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Travaux & Tranquillité</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">AFFICHE N°05</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'تذكير بشأن منع الأشغال يوم الأحد' : 'RAPPEL CONCERNANT LA RÉALISATION DE TRAVAUX LE DIMANCHE'}
                  </h4>
                  <p className="text-xs text-rose-300 font-semibold mb-4">
                    {isAr ? 'منع كلي أيام الأحد والعطل الرسمية' : 'INTERDICTION STRICTE LE DIMANCHE & JOURS FÉRIÉS'}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 font-bold text-rose-200 leading-relaxed">
                      🚫 {isAr ? 'منع قاطع لأي أشغال إصلاح أو حفر أو ضجيج يوم الأحد.' : 'Interdiction stricte des travaux le dimanche (bricolage, rénovation bruyants et tous autres aménagements).'}
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-rose-500/20 leading-relaxed">
                      {isAr ? 'احترام راحة وسكينة الجيران إلزامي. برمجوا الأشغال في الأوقات المحددة قانوناً.' : 'Respect du voisinage et de la tranquillité : Planifier impérativement les aménagements en semaine ou le samedi.'}
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-rose-500/20 text-[11px] text-slate-300 font-semibold">
                      • {isAr ? 'الإثنين - الجمعة : 08:30 إلى 13:00 و 14:30 إلى 18:00' : 'Lun - Ven : 08h30-13h00 & 14h30-18h00'}<br/>
                      • {isAr ? 'السبت : 10:00 إلى 16:00' : 'Samedi : 10h00 à 16h00'}<br/>
                      • <strong className="text-rose-400">{isAr ? 'الأحد والأعياد : ممنوع منعاً كلياً' : 'Dimanche & Fériés : Strictement Interdit'}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{isAr ? 'الأحد = يوم راحة' : 'Dimanche = Repos'}</span>
                  <button
                    onClick={() => handleShareWhatsApp('RAPPEL : TRAVAUX LE DIMANCHE STRICTEMENT INTERDITS', 'Interdiction stricte de tous travaux bruyants, bricolage et rénovation le dimanche. Respectons la tranquillité des voisins.')}
                    className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.shareOnWhatsApp}</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* QUICK LINKS BANNER AT BOTTOM OF DASHBOARD */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold flex-shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <span>
                {isAr
                  ? 'جميع القرارات مستندة إلى القانون 18-00 ومحاضر الجموع العامة لإقامة رافينا عين السبع.'
                  : 'Règlementation et affichages conformes aux procès-verbaux des Assemblées Générales et à la Loi 18-00.'}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
              <button
                onClick={onOpenResidentModal}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
              >
                {t.openResidentSpace}
              </button>
              <button
                onClick={onOpenServicesModal}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
              >
                {isAr ? 'دليل الخدمات' : 'Services & Contacts'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
