import React from 'react';
import {
  X,
  Dumbbell,
  Baby,
  Shield,
  Car,
  Clock,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Building,
  Users,
  Key
} from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenReportModal: () => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenReportModal,
}) => {
  if (!isOpen) return null;

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  // Get current day of week to highlight gym schedule
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const todayIndex = new Date().getDay();
  const todayName = days[todayIndex];

  let todayGymAccess = '';
  if (todayIndex === 1 || todayIndex === 3 || todayIndex === 5) {
    todayGymAccess = 'Accès FEMMES (Lundi, Mercredi, Vendredi)';
  } else if (todayIndex === 2 || todayIndex === 4 || todayIndex === 6) {
    todayGymAccess = 'Accès HOMMES (Mardi, Jeudi, Samedi)';
  } else {
    todayGymAccess = 'Accès MIXTE (Dimanche)';
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center overflow-y-auto p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-3xl my-auto shadow-2xl overflow-hidden border border-slate-200 flex flex-col relative max-h-[92vh]">
        
        {/* HEADER */}
        <div className="bg-[#030a16] text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Services & Équipements de la Résidence</h3>
              <p className="text-[11px] text-slate-400">Guide d'accès complet — Les Pavillons Verts Rafina</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* LIVE STATUS HIGHLIGHT FOR TODAY */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-teal-300 tracking-wider block">
                  Aujourd'hui ({todayName}) à la Résidence
                </span>
                <span className="font-bold text-sm text-white">{todayGymAccess}</span>
                <div className="text-[11px] text-slate-300">Horaires Salle de Sport : 06h30 — 22h30</div>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Équipements Ouverts</span>
            </div>
          </div>

          {/* GRID OF SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* SERVICE 1: SALLE DE SPORT */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Salle de Sport</span>
                </div>
                <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-full">Article 17</span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Espace de remise en forme équipé. Réservé exclusivement aux résidents de plus de 18 ans.
              </p>

              <div className="space-y-1 text-[11px] pt-1 font-medium">
                <div className="text-purple-700"><strong>Femmes :</strong> Lundi, Mercredi, Vendredi</div>
                <div className="text-blue-700"><strong>Hommes :</strong> Mardi, Jeudi, Samedi</div>
                <div className="text-emerald-700"><strong>Mixte :</strong> Dimanche</div>
                <div className="text-slate-500"><strong>Horaires :</strong> 06h30 — 22h30</div>
              </div>
            </div>

            {/* SERVICE 2: KIDS CLUB */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Baby className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Kids Club</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Article 18</span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Aire de jeux intérieure sécurisée pour les jeunes enfants de la résidence.
              </p>

              <div className="space-y-1 text-[11px] pt-1 font-medium">
                <div><strong>Âge autorisé :</strong> 6 ans maximum</div>
                <div className="text-amber-700"><strong>Surveillance :</strong> Parentale continue obligatoire</div>
                <div><strong>Consignes :</strong> Chaussures retirées / Pas de nourriture</div>
                <div className="text-slate-500"><strong>Accès :</strong> Tous les jours</div>
              </div>
            </div>

            {/* SERVICE 3: PARKING & GARAGE */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Parkings Sous-Sol -1 & -2</span>
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Articles 10 & 16</span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                2 niveaux de sous-sol sécurisés avec télécommandes d'accès individuel.
              </p>

              <div className="space-y-1 text-[11px] pt-1 font-medium">
                <div><strong>Stationnement :</strong> Numéro de place titré attribué</div>
                <div className="text-red-600"><strong>Règles de circulation :</strong> Respect strict des rampes</div>
                <div><strong>Vitesse max :</strong> 10 km/h</div>
              </div>
            </div>

            {/* SERVICE 4: SÉCURITÉ & GARDIENNAGE */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Poste de Gardiennage 24/7</span>
                </div>
                <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full">Articles 1, 2, 3</span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Poste de contrôle principal à l'entrée avec agents qualifiés et vidéosurveillance.
              </p>

              <div className="space-y-1 text-[11px] pt-1 font-medium">
                <div><strong>Livreurs :</strong> Réception au poste de garde principal</div>
                <div><strong>Urgence 24/7 :</strong> 06 00 00 24 7/7</div>
                <div className="text-slate-500"><strong>Contrôle :</strong> Badges / Télécommandes / Vidéo</div>
              </div>
            </div>

          </div>

          {/* BOTTOM ACTION */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenReportModal();
              }}
              className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs cursor-pointer transition-colors"
            >
              Un équipement est en panne ? Signaler un problème au Syndic
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-colors"
            >
              Fermer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
