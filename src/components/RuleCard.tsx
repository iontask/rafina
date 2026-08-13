import React from 'react';
import { ArrowRight, Share2, AlertTriangle, ShieldAlert, Car, Building2, Leaf } from 'lucide-react';
import { Rule, Language } from '../types';
import { uiTranslations, arabicRulesContent } from '../data/translations';

interface RuleCardProps {
  rule: Rule;
  currentLang: Language;
  onSelectRule: (rule: Rule) => void;
  onShareRule: (rule: Rule) => void;
}

export const RuleCard: React.FC<RuleCardProps> = ({
  rule,
  currentLang,
  onSelectRule,
  onShareRule,
}) => {
  const t = uiTranslations[currentLang];
  const arContent = currentLang === 'ar' ? arabicRulesContent[rule.id] : null;

  const displayTitle = arContent?.title || rule.title;
  const displaySummary = arContent?.summary || rule.summary;
  const displayTag = arContent?.tag || rule.tag;
  const displayHighlight = arContent?.highlightText || rule.highlightText;

  // Color mappings
  const getColors = () => {
    switch (rule.tagColor) {
      case 'red':
        return {
          iconBg: 'bg-red-100 text-red-600',
          tagText: 'text-red-600',
          calloutBg: 'bg-red-50 text-red-800 border-red-100',
          icon: ShieldAlert,
        };
      case 'orange':
        return {
          iconBg: 'bg-amber-100 text-amber-700',
          tagText: 'text-amber-700',
          calloutBg: 'bg-amber-50 text-amber-900 border-amber-100',
          icon: Car,
        };
      case 'blue':
        return {
          iconBg: 'bg-sky-100 text-sky-700',
          tagText: 'text-sky-700',
          calloutBg: 'bg-sky-50 text-sky-900 border-sky-100',
          icon: Building2,
        };
      case 'green':
      default:
        return {
          iconBg: 'bg-emerald-100 text-emerald-700',
          tagText: 'text-emerald-700',
          calloutBg: 'bg-emerald-50 text-emerald-900 border-emerald-100',
          icon: Leaf,
        };
    }
  };

  const colors = getColors();
  const IconComponent = colors.icon;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      
      <div>
        {/* TOP ROW: ICON, TAG, NUMBER */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${colors.iconBg}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[11px] font-extrabold uppercase tracking-wider ${colors.tagText}`}>
                {displayTag}
              </span>
            </div>
          </div>
          <span className="text-xl font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
            {rule.number}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-700 transition-colors">
          {displayTitle}
        </h3>

        {/* SUMMARY / BODY TEXT */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {displaySummary}
        </p>

        {/* CALLOUT HIGHLIGHT BOX */}
        <div className={`p-3 rounded-xl border text-xs font-medium leading-relaxed mb-4 flex items-start gap-2.5 ${colors.calloutBg}`}>
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{displayHighlight}</span>
        </div>
      </div>

      {/* FOOTER ACTION BUTTONS */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-600">
        <button
          onClick={() => onSelectRule(rule)}
          className="flex items-center gap-1.5 hover:text-teal-600 transition-colors cursor-pointer py-1"
        >
          <ArrowRight className="w-4 h-4 text-teal-600 rtl:rotate-180" />
          <span>{t.details}</span>
        </button>

        <button
          onClick={() => onShareRule(rule)}
          className="flex items-center gap-1.5 hover:text-teal-600 transition-colors cursor-pointer py-1"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t.share}</span>
        </button>
      </div>

    </div>
  );
};
