import React, { useState } from 'react';
import {
  X,
  User,
  CreditCard,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Download,
  Copy,
  Check,
  Mail,
  PhoneCall
} from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../data/translations';

interface ResidentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ResidentPortalModal: React.FC<ResidentPortalModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [activeTab, setActiveTab] = useState<'charges' | 'quitus' | 'docs'>('charges');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const t = uiTranslations[currentLang];
  const isAr = currentLang === 'ar';

  const bankRib = "007 780 0001234567890123 45";

  const handleCopyRib = () => {
    navigator.clipboard.writeText(bankRib);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center overflow-y-auto p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-2xl my-auto shadow-2xl overflow-hidden border border-slate-200 flex flex-col relative max-h-[92vh]">
        
        {/* HEADER */}
        <div className="bg-[#030a16] text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Espace Résident & Copropriétaire</h3>
              <p className="text-[11px] text-slate-400">Paiement des charges, Attestations & Quitus de Syndic</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SUB NAV TABS */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('charges')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'charges'
                ? 'bg-teal-600 text-white shadow'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            Paiement des Charges (RIB)
          </button>

          <button
            onClick={() => setActiveTab('quitus')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'quitus'
                ? 'bg-teal-600 text-white shadow'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            Demande de Quitus / Attestation
          </button>

          <button
            onClick={() => setActiveTab('docs')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'docs'
                ? 'bg-teal-600 text-white shadow'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            Documents & Procès-Verbaux
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* TAB 1: CHARGES & BANK RIB */}
          {activeTab === 'charges' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 leading-relaxed">
                <strong className="block text-sm font-bold mb-1">Rappel Législatif — Loi n° 18-00 (Article 4) :</strong>
                Chaque copropriétaire est tenu de s'acquitter de sa quote-part de charges au 1er de chaque mois. Ces fonds financent le gardiennage 24/7, l'éclairage, l’entretien des ascenseurs, le nettoyage des sous-sols et la maintenance des équipements.
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  Coordonnées Bancaires de l'Union des Copropriétaires
                </div>

                <div className="font-mono text-sm sm:text-base font-bold bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-teal-300">{bankRib}</span>
                  <button
                    onClick={handleCopyRib}
                    className="p-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copié !' : 'Copier RIB'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <div>• <strong>Intitulé du compte :</strong> Syndic Copropriété Les Pavillons Verts Rafina</div>
                  <div>• <strong>Banque :</strong> Attijariwafa Bank — Agence Aïn Sebaa</div>
                  <div>• <strong>Motif obligatoire du virement :</strong> [Numéro Appt / Pavillon] — Charges [Mois/Année]</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                💡 Après tout virement bancaire, veuillez transmettre l'avis de virement par WhatsApp au bureau du syndic (<strong>06 00 00 24 77</strong>) pour l'établissement immédiat de votre quittance officielle.
              </div>
            </div>
          )}

          {/* TAB 2: QUITUS */}
          {activeTab === 'quitus' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 leading-relaxed">
                <strong className="block text-sm font-bold mb-1">Attestation de Non-Dette & Quitus de Syndic (Article 5) :</strong>
                Document obligatoire délivré par le Syndic avant la signature de tout acte de vente chez le notaire ou pour les démarches administratives locatives.
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Votre demande de Quitus a été transmise au bureau d\'administration du Syndic. Vous serez contacté sous 24h.');
              }} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Numéro d'Appartement *</label>
                    <input type="text" required placeholder="Ex: Pavillon 2 - Appt 8" className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Nom du Mpropriétaire *</label>
                    <input type="text" required placeholder="Nom complet" className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl" />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Motif de la demande *</label>
                  <select className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl font-medium">
                    <option value="vente">Vente d'appartement (Acte Notarié)</option>
                    <option value="location">Mise en location longue durée</option>
                    <option value="attestation">Attestation de paiement de charges</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow cursor-pointer transition-colors">
                  Envoyer la Demande de Quitus au Syndic
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'docs' && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Documents Officiels Téléchargeables de la Copropriété
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-bold text-slate-900">Règlement Intérieur Complet (18 Articles)</div>
                    <div className="text-[11px] text-slate-400">PDF • Version Officielle Conforme Loi 18-00</div>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white border border-slate-200 text-teal-700 font-bold flex items-center gap-1 cursor-pointer">
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-bold text-slate-900">Procès-Verbal de la Dernière Assemblée Générale</div>
                    <div className="text-[11px] text-slate-400">PDF • Bilan Financier & Budget Prévisionnel</div>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white border border-slate-200 text-teal-700 font-bold flex items-center gap-1 cursor-pointer">
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-bold text-slate-900">Formulaire d'Enregistrement de Locataire</div>
                    <div className="text-[11px] text-slate-400">PDF • À remplir avant remise des clés</div>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white border border-slate-200 text-teal-700 font-bold flex items-center gap-1 cursor-pointer">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* FOOTER ACTION */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">Syndic Rafina — Bureau Ouvert Lun-Sam 09h-18h</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold cursor-pointer"
            >
              Fermer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
