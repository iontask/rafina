export type CategoryKey = 'titre1' | 'titre2' | 'titre3' | 'titre4' | 'titre5' | 'titre6' | 'titre7' | 'titre8';

export interface Rule {
  id: string;
  number: string;
  category: CategoryKey;
  tag: string;
  tagColor: 'red' | 'orange' | 'blue' | 'green' | 'purple' | 'emerald';
  title: string;
  summary: string;
  stricteRule?: string;
  highlightText: string;
  highlightIcon?: string;
  targetTag?: string;
  objective?: string;
  goodPractices?: string[];
  pdfName?: string;
  pdfSize?: string;
  titreLabel?: string;
}

export type Language = 'fr' | 'ar';
