import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Share2,
  PhoneCall,
  ShieldAlert,
  Car,
  Dumbbell,
  Baby,
  Trash2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Sparkles,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface BulletinBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenReportModal: () => void;
}

export const BulletinBoardModal: React.FC<BulletinBoardModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenReportModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'kids' | 'parking' | 'gym' | 'hygiene' | 'travaux'>('all');

  if (!isOpen) return null;

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = (title: string, desc: string) => {
    const text = encodeURIComponent(`*${title}*\n\n${desc}\n\n📍 Résidence Rafina — Les Pavillons Verts (Aïn Sebaa)`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 rounded-3xl w-full max-w-5xl my-auto shadow-2xl border border-slate-700 text-white flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* HEADER BAR */}
        <div className="bg-[#030a16] px-5 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{t.bulletinBoardTitle}</span>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 uppercase font-bold tracking-wider">
                  Posters Officiels
                </span>
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">{t.bulletinBoardSub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer hidden sm:flex items-center gap-1 text-xs font-bold"
              title="Imprimer / Télécharger le panneau"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {isAr ? 'الكل (5 إعلانات)' : 'Tous les affichages (5)'}
          </button>

          <button
            onClick={() => setActiveTab('kids')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'kids'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Baby className="w-3.5 h-3.5" />
            <span>{t.tabKidsClub}</span>
          </button>

          <button
            onClick={() => setActiveTab('parking')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'parking'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>{t.tabParkingCirculation}</span>
          </button>

          <button
            onClick={() => setActiveTab('gym')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'gym'
                ? 'bg-sky-500 text-slate-950'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>{t.tabGym}</span>
          </button>

          <button
            onClick={() => setActiveTab('hygiene')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'hygiene'
                ? 'bg-purple-500 text-white'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.tabHygiene}</span>
          </button>

          <button
            onClick={() => setActiveTab('travaux')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'travaux'
                ? 'bg-rose-500 text-white'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{t.tabTravaux}</span>
          </button>
        </div>

        {/* POSTERS CONTENT GRID */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* POSTER 1: KIDS CLUB */}
            {(activeTab === 'all' || activeTab === 'kids') && (
              <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 rounded-2xl p-5 border border-emerald-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Baby className="w-3 h-3" />
                      <span>Kids Club</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Affiche N°01</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    {isAr ? 'BIENVENUE AU KIDS CLUB DE LA RÉSIDENCE RAFINA !' : 'BIENVENUE AU KIDS CLUB DE LA RÉSIDENCE RAFINA !'}
                  </h3>
                  <p className="text-xs text-emerald-300 font-semibold mb-4">
                    {isAr ? 'RÈGLEMENT INTÉRIEUR ET CONSIGNES D\'ACCÈS' : 'RÈGLEMENT INTÉRIEUR ET CONSIGNES D\'ACCÈS'}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-300">Tranche d'âge :</strong> Enfants de <strong>6 ans max</strong>.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300">Surveillance :</strong> Présence parentale <strong>continue obligatoire</strong> (aucun animateur présent).
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sky-300">Hygiène :</strong> Retirer les chaussures à l'entrée. Pas de nourriture ni de boissons.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-300">Responsabilité :</strong> Le Syndic décline toute responsabilité en cas d'accident.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Ouvert tous les jours</span>
                  <button
                    onClick={() => handleShareWhatsApp('BIENVENUE AU KIDS CLUB DE LA RÉSIDENCE RAFINA !', 'Âge max: 6 ans. Présence parentale continue obligatoire. Retirer les chaussures, pas de nourriture.')}
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 2: PARKING CIRCULATION */}
            {(activeTab === 'all' || activeTab === 'parking') && (
              <div className="bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-950 rounded-2xl p-5 border border-amber-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      <span>Circulation Parking</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Affiche N°02</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    RÈGLEMENT DE CIRCULATION ET STATIONNEMENT DANS LE PARKING
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold mb-4">
                    3 CONSIGNES MAJEURES DE SÉCURITÉ & STATIONNEMENT PRIVÉ
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                      <div>Interdiction de sortir par l'entrée du parking (voie de sortie dédiée obligatoire).</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                      <div>Interdiction d'entrer par la sortie du parking.</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-amber-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                      <div>Interdiction d'entrer au 2ème sous-sol en sens interdit.</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-200 font-medium">
                      🚫 <strong>Stationnement privé :</strong> Interdiction de stationner dans les places réservées aux autres résidents. Respectez les numéros titrés.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Sous-sols -1 et -2</span>
                  <button
                    onClick={() => handleShareWhatsApp('RÈGLEMENT DE CIRCULATION ET STATIONNEMENT DANS LE PARKING', '1) Pas de sortie par l\'entrée. 2) Pas d\'entrée par la sortie. 3) Pas de sens interdit au -2. Stationner uniquement sur sa place numérotée.')}
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 3: SALLE DE SPORT */}
            {(activeTab === 'all' || activeTab === 'gym') && (
              <div className="bg-gradient-to-br from-sky-950/60 via-slate-900 to-slate-950 rounded-2xl p-5 border border-sky-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-sky-400 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Dumbbell className="w-3 h-3" />
                      <span>Salle de Sport</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Affiche N°03</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    ORGANISATION DES JOURS D'ACCÈS ET RÈGLEMENT SALLE DE SPORT
                  </h3>
                  <p className="text-xs text-sky-300 font-semibold mb-4">
                    HORAIRES : 6h30 à 22h30
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-between">
                      <span className="font-bold text-purple-300">Accès Femmes :</span>
                      <span className="text-white font-semibold">Lundi, Mercredi, Vendredi</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-between">
                      <span className="font-bold text-blue-300">Accès Hommes :</span>
                      <span className="text-white font-semibold">Mardi, Jeudi, Samedi</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-between">
                      <span className="font-bold text-emerald-300">Accès Mixte :</span>
                      <span className="text-white font-semibold">Dimanche</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-sky-500/20 space-y-1">
                      <div>• Matériel réservé aux résidents <strong>+18 ans</strong>.</div>
                      <div>• Tenue de sport appropriée exigée.</div>
                      <div>• Ranger le matériel à sa place après chaque séance.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">6h30 — 22h30</span>
                  <button
                    onClick={() => handleShareWhatsApp('ACCÈS SALLE DE SPORT RÉSIDENCE RAFINA', 'Femmes: Lundi, Mercredi, Vendredi | Hommes: Mardi, Jeudi, Samedi | Mixte: Dimanche. Horaires: 6h30-22h30.')}
                    className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 4: PROPRETÉ & BACS */}
            {(activeTab === 'all' || activeTab === 'hygiene') && (
              <div className="bg-gradient-to-br from-purple-950/60 via-slate-900 to-slate-950 rounded-2xl p-5 border border-purple-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-purple-400 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Trash2 className="w-3 h-3" />
                      <span>Propreté & Hygiène</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Affiche N°04</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    RÈGLEMENT DE PROPRETÉ ET D'HYGIÈNE — PARKING PROPRE ET SANS ODEUR
                  </h3>
                  <p className="text-xs text-purple-300 font-semibold mb-4">
                    4 RECOMMANDATIONS PRIMORDIALES BACS À ORDURES
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                      <div><strong>Fermeture hermétique :</strong> Attachez solidement vos sacs avant de les jeter.</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                      <div><strong>Aucun dépôt au sol :</strong> Ne déposez aucun déchet à côté ou sur les bacs.</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-start gap-2 text-rose-200">
                      <span className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                      <div><strong>Gestion des liquides :</strong> Interdiction de vider des restes de liquides/soupes/sauces (cause des mauvaises odeurs).</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">4</span>
                      <div><strong>Plier les cartons :</strong> Aplatissez systématiquement les grands cartons d'emballage.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Bacs à ordures du parking</span>
                  <button
                    onClick={() => handleShareWhatsApp('PROPRETÉ DU PARKING & BACS À ORDURES', '4 règles d\'or: 1) Fermer hermétiquement les sacs. 2) Rien au sol. 3) Pas de liquides/soupes/sauces dans les bacs. 4) Plier les cartons.')}
                    className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            )}

            {/* POSTER 5: TRAVAUX LE DIMANCHE */}
            {(activeTab === 'all' || activeTab === 'travaux') && (
              <div className="bg-gradient-to-br from-rose-950/60 via-slate-900 to-slate-950 rounded-2xl p-5 border border-rose-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-rose-400 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Travaux & Tranquillité</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Affiche N°05</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    RAPPEL CONCERNANT LA RÉALISATION DE TRAVAUX LE DIMANCHE
                  </h3>
                  <p className="text-xs text-rose-300 font-semibold mb-4">
                    INTERDICTION STRICTE LE DIMANCHE & JOURS FÉRIÉS
                  </p>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-500/30 font-bold text-rose-200 leading-relaxed">
                      🚫 Interdiction stricte des travaux le dimanche (bricolage, rénovation bruyants et tous autres aménagements).
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-rose-500/20 leading-relaxed">
                      Respect du voisinage et de la tranquillité : Planifier impérativement les aménagements en semaine ou le samedi dans le respect des horaires habituels.
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-rose-500/20 text-[11px] text-slate-400">
                      • Lun - Ven : 09h00 à 18h00<br/>
                      • Samedi : 10h00 à 16h00<br/>
                      • Dimanche : Strictement Interdit
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Dimanche = Repos</span>
                  <button
                    onClick={() => handleShareWhatsApp('RAPPEL : TRAVAUX LE DIMANCHE STRICTEMENT INTERDITS', 'Interdiction stricte de tous travaux bruyants, bricolage et rénovation le dimanche. Respectons la tranquillité des voisins.')}
                    className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* ACTION BANNER AT BOTTOM OF BULLETIN BOARD */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950 via-slate-900 to-slate-950 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Constaté une infraction ou un problème d'équipement ?</h4>
                <p className="text-xs text-slate-300">Signalez directement l'incident au Syndic avec photo et numéro d'appartement.</p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenReportModal();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-teal-500/20 cursor-pointer flex-shrink-0 flex items-center justify-center gap-2"
            >
              <span>{t.reportIncidentBtn}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
