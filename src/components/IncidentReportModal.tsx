import React, { useState } from 'react';
import {
  X,
  Send,
  Camera,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  Shield,
  MessageSquare,
  Building,
  User,
  Phone
} from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface IncidentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const IncidentReportModal: React.FC<IncidentReportModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [apartment, setApartment] = useState('');
  const [residentName, setResidentName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('parking');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !apartment) return;

    // Send via WhatsApp directly to Syndic
    const categoryLabels: Record<string, string> = {
      parking: '🚗 Stationnement / Circulation Parking',
      travaux: '🔨 Travaux / Nuisances Sonores',
      hygiene: '🗑️ Propreté / Bacs à Ordures',
      kids: '👶 Kids Club / Aire de Jeux',
      gym: '🏋️ Salle de Sport',
      security: '🛡️ Sécurité / Portes / Vidéo',
      autre: '📌 Autre'
    };

    const text = encodeURIComponent(
      `*🚨 SIGNALEMENT INCIDENT SYNDIC — RAFINA*\n\n` +
      `*Appartement / Pavillon :* ${apartment}\n` +
      `*Nom du Résident :* ${residentName || 'Non renseigné'}\n` +
      `*Téléphone :* ${phone || 'Non renseigné'}\n` +
      `*Type d'incident :* ${categoryLabels[category] || category}\n` +
      `*Urgence :* ${urgency.toUpperCase()}\n\n` +
      `*Description du problème :*\n${description}\n\n` +
      `📍 *Résidence Rafina — Les Pavillons Verts (Aïn Sebaa)*`
    );

    window.open(`https://api.whatsapp.com/send?phone=212600002477&text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center overflow-y-auto p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-xl my-auto shadow-2xl overflow-hidden border border-slate-200 flex flex-col relative max-h-[92vh]">
        
        {/* MODAL HEADER */}
        <div className="bg-[#030a16] text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Signaler un Incident au Syndic</h3>
              <p className="text-[11px] text-slate-400">Transmission directe au bureau d'administration & sécurité</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY CONTENT */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Signalement Transmis avec Succès !</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Votre message a été transmis au bureau du Syndic et aux agents de sécurité de la Résidence Rafina. Une intervention sera effectuée dans les plus brefs délais.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all cursor-pointer"
              >
                Fermer cette fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* APPARTEMENT & NOM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Appartement / Pavillon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 rtl:right-3 rtl:left-auto" />
                    <input
                      type="text"
                      required
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      placeholder="Ex: Pavillon 3 - Appt 12"
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nom du Résident</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 rtl:right-3 rtl:left-auto" />
                    <input
                      type="text"
                      value={residentName}
                      onChange={(e) => setResidentName(e.target.value)}
                      placeholder="Votre nom complet"
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* TÉLÉPHONE */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Numéro de Téléphone</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 rtl:right-3 rtl:left-auto" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 XX XX XX XX"
                    className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>
              </div>

              {/* CATEGORIE DE L'INCIDENT */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Catégorie de l'Incident</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 font-medium cursor-pointer"
                >
                  <option value="parking">🚗 Stationnement / Circulation Parking (Place occupée, Sens interdit...)</option>
                  <option value="travaux">🔨 Nuisances Sonores / Travaux le Dimanche</option>
                  <option value="hygiene">🗑️ Propreté / Bacs à Ordures / Liquides versés</option>
                  <option value="kids">👶 Kids Club (Non-respect des règles, dégradation...)</option>
                  <option value="gym">🏋️ Salle de Sport (Matériel non rangé, créneaux...)</option>
                  <option value="security">🛡️ Sécurité / Portes bloquées / Caméras</option>
                  <option value="autre">📌 Autre problème de copropriété</option>
                </select>
              </div>

              {/* URGENCE */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Niveau d'Urgence</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('normal')}
                    className={`py-2 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      urgency === 'normal'
                        ? 'bg-sky-50 border-sky-400 text-sky-800'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    Information
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('important')}
                    className={`py-2 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      urgency === 'important'
                        ? 'bg-amber-50 border-amber-400 text-amber-800'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    Important
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('urgent')}
                    className={`py-2 px-3 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                      urgency === 'urgent'
                        ? 'bg-rose-50 border-rose-400 text-rose-800'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    🚨 Urgent 24/7
                  </button>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Description détaillée de l'incident <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Précisez la date, l'heure, le lieu exact (ex: sous-sol -2 place 45) et la nature du problème constaté..."
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 font-medium leading-relaxed resize-none"
                ></textarea>
              </div>

              {/* PHOTO PREVIEW PLACEHOLDER */}
              <div className="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                  <Camera className="w-4 h-4 text-teal-600" />
                  <span>Possibilité de joindre une photo sur WhatsApp après envoi</span>
                </div>
                <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">Inclus</span>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 cursor-pointer"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
                <span>Envoyer au Syndic via WhatsApp</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
