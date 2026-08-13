import React from 'react';
import { FileEdit, ShieldCheck, Bell, Users } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface FeatureGridProps {
  currentLang: Language;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ currentLang }) => {
  const t = uiTranslations[currentLang];

  const features = [
    {
      icon: FileEdit,
      title: t.feat1Title,
      desc: t.feat1Desc,
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    },
    {
      icon: ShieldCheck,
      title: t.feat2Title,
      desc: t.feat2Desc,
      bg: 'bg-sky-50 border-sky-200 text-sky-700',
    },
    {
      icon: Bell,
      title: t.feat3Title,
      desc: t.feat3Desc,
      bg: 'bg-amber-50 border-amber-200 text-amber-700',
    },
    {
      icon: Users,
      title: t.feat4Title,
      desc: t.feat4Desc,
      bg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    },
  ];

  return (
    <section className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${feat.bg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
