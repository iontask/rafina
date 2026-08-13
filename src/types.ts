export interface Rule {
  id: string;
  number: string;
  category: 'security' | 'admin' | 'parking' | 'cadre' | 'travaux' | 'hygiene' | 'sports' | 'kids';
  tag: string;
  tagColor: 'red' | 'orange' | 'blue' | 'green';
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
}

export type Language = 'fr' | 'ar';

export type CategoryKey = 'security' | 'admin' | 'parking' | 'cadre' | 'travaux' | 'hygiene' | 'sports' | 'kids';
