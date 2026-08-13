import React from 'react';
import { CategoryKey, Language } from '../types';
import { uiTranslations } from '../data/translations';

interface CategoryTabsProps {
  activeCategory: CategoryKey | 'all';
  onSelectCategory: (cat: CategoryKey | 'all') => void;
  currentLang: Language;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  currentLang,
}) => {
  const t = uiTranslations[currentLang];

  const tabs = [
    { id: 'security' as const, label: t.catSecurity, icon: '🔒' },
    { id: 'admin' as const, label: t.catAdmin, icon: '📑' },
    { id: 'parking' as const, label: t.catParking, icon: '🚗' },
    { id: 'cadre' as const, label: t.catCadre, icon: '🏢' },
    { id: 'travaux' as const, label: t.catTravaux, icon: '🛠️' },
    { id: 'hygiene' as const, label: t.catHygiene, icon: '🧹' },
    { id: 'sports' as const, label: t.catSports, icon: '🏃' },
    { id: 'kids' as const, label: t.catKids, icon: '🎈' },
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <span>📜</span>
            <span>{t.catAll}</span>
          </button>

          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 shadow-md font-extrabold ring-2 ring-teal-400'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
};
