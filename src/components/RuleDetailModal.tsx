import React from 'react';
import {
  ArrowLeft,
  Bell,
  X,
  Shield,
  CheckCircle2,
  FileText,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  AlertTriangle,
  Copy,
  Mail,
  Check
} from 'lucide-react';
import { Rule, Language } from '../types';
import { uiTranslations, arabicRulesContent } from '../data/translations';

interface RuleDetailModalProps {
  rule: Rule | null;
  allRules: Rule[];
  currentLang: Language;
  onClose: () => void;
  onNavigate: (rule: Rule) => void;
}

export const RuleDetailModal: React.FC<RuleDetailModalProps> = ({
  rule,
  allRules,
  currentLang,
  onClose,
  onNavigate,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!rule) return null;

  const t = uiTranslations[currentLang];
  const arContent = currentLang === 'ar' ? arabicRulesContent[rule.id] : null;

  const displayTitle = arContent?.title || rule.title;
  const displaySummary = arContent?.summary || rule.summary;
  const displayStricte = arContent?.stricteRule || rule.stricteRule || rule.summary;
  const displayTag = arContent?.tag || rule.tag;
  const displayHighlight = arContent?.highlightText || rule.highlightText;
  const displayTargetTag = arContent?.targetTag || rule.targetTag;
  const displayObjective = arContent?.objective || rule.objective;
  const displayPractices = arContent?.goodPractices || rule.goodPractices || [];
  const displayPdfName = arContent?.pdfName || rule.pdfName || t.pdfDefault;

  const currentIndex = allRules.findIndex((r) => r.id === rule.id);
  const prevRule = currentIndex > 0 ? allRules[currentIndex - 1] : null;
  const nextRule = currentIndex < allRules.length - 1 ? allRules[currentIndex + 1] : null;

  const handleCopyLink = () => {
    const textToCopy = `${displayTitle}\n\n${displaySummary}\n\n${displayHighlight}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsapp = () => {
    const text = encodeURIComponent(`*${displayTitle}*\n\n${displaySummary}\n\n_${displayHighlight}_\n\n${t.residenceTitle} — ${t.residenceSub}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center overflow-y-auto p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-2xl my-auto shadow-2xl overflow-hidden border border-slate-200 flex flex-col relative max-h-[92vh]">
        
        {/* MODAL TOP NAV BAR */}
        <div className="bg-[#030a16] text-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-20 border-b border-slate-800">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t.back}</span>
          </button>

          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <Bell className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MODAL SCROLLABLE CONTENT */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto">
          
          {/* RULE HEADER BLOCK */}
          <div className="text-center sm:text-left rtl:sm:text-right space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-300">{rule.number}</span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">
                  {displayTag}
                </span>
                {displayTargetTag && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {displayTargetTag}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 leading-snug">
                {displayTitle}
              </h2>
            </div>
          </div>

          {/* RÈGLE STRICTE */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-1 h-4 bg-red-600 rounded-full"></span>
              <span>{t.stricteHeader}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {displayStricte}
            </p>
          </div>

          {/* CALLOUT BOX */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-900 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">{t.signalisationHeader}</span>
              <span>{displayHighlight}</span>
            </div>
          </div>

          {/* OBJECTIF */}
          {displayObjective && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-teal-600" />
                <span>{t.objectiveHeader}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {displayObjective}
              </p>
            </div>
          )}

          {/* BONNES PRATIQUES */}
          {displayPractices.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.goodPracticesHeader}</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-1 rtl:pr-1">
                {displayPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* DOCUMENTS ASSOCIÉS */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>{t.docsHeader}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold text-xs">
                  PDF
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{displayPdfName}</div>
                  <div className="text-[11px] text-slate-400">{rule.pdfSize || 'PDF • 1.2 Mo'}</div>
                </div>
              </div>
              <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-400 transition-colors cursor-pointer">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PARTAGER CETTE RÈGLE */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Share2 className="w-4 h-4 text-teal-600" />
              <span>{t.shareRuleHeader}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {/* WhatsApp */}
              <button
                onClick={handleShareWhatsapp}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>📱 WhatsApp</span>
              </button>

              {/* Email */}
              <a
                href={`mailto:?subject=${encodeURIComponent(displayTitle)}&body=${encodeURIComponent(displaySummary)}`}
                className="py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* PREVIOUS / NEXT NAVIGATION */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-600">
            {prevRule ? (
              <button
                onClick={() => onNavigate(prevRule)}
                className="flex items-center gap-1 hover:text-teal-600 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                <span>{t.prevRule}</span>
              </button>
            ) : <div />}

            {nextRule ? (
              <button
                onClick={() => onNavigate(nextRule)}
                className="flex items-center gap-1 hover:text-teal-600 transition-colors cursor-pointer"
              >
                <span>{t.nextRule}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            ) : <div />}
          </div>

          {/* URGENCE & SÉCURITÉ BANNER */}
          <div className="rounded-2xl bg-[#030a16] text-white p-4 sm:p-5 border border-slate-800 space-y-3">
            <div className="text-[10px] font-bold tracking-widest text-teal-400 uppercase">
              {t.urgencySecurity}
            </div>
            <div className="text-sm font-bold">{t.needAssistance}</div>
            <p className="text-xs text-slate-400">{t.teamAvailable}</p>
            
            <a
              href="tel:0600002477"
              className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20"
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
