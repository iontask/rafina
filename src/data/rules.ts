import { Rule } from '../types';

export const rulesData: Rule[] = [
  // ==================== TITRE I : PRÉAMBULE ET DESCRIPTIF DU SITE ====================
  {
    id: 'rule-01',
    number: '01',
    category: 'titre1',
    titreLabel: 'TITRE I : PRÉAMBULE ET DESCRIPTIF DU SITE',
    tag: 'TITRE I — ARTICLE 1',
    tagColor: 'blue',
    title: 'Préambule & Cadre Juridique (Loi 18-00 & 106-12)',
    summary: 'Le présent règlement intérieur complète le règlement de copropriété de la résidence RAFINA AIN SEBAA et clarifie les obligations de tous les intervenants (syndic, sécurité, nettoyage, prestataires) ainsi que les conditions d’exploitation des parties communes et privatives.',
    stricteRule: 'Conformité légale : Régit les charges communes, leur répartition, les règles de sécurité, de vie commune et d\'administration selon la loi n° 18-00 (modifiée par la loi n° 106-12).',
    highlightText: 'Loi n° 18-00 / 106-12 : Statut de la copropriété des immeubles bâtis.',
    targetTag: 'Cadre Réglementaire',
    objective: 'Établir les fondements juridiques et organisationnels de la copropriété pour une gestion harmonieuse et pérenne.',
    goodPractices: [
      'Prenez connaissance de l\'ensemble des dispositions du présent règlement intérieur.',
      'Respectez les décisions votées lors des Assemblées Générales des copropriétaires.',
      'Consultez le syndic pour toute question relative à l\'application des textes statutaires.'
    ],
    pdfName: 'Règlement Intérieur — Titre I Art. 1 (Préambule)',
    pdfSize: 'PDF • Page 4 sur 13'
  },
  {
    id: 'rule-02',
    number: '02',
    category: 'titre1',
    titreLabel: 'TITRE I : PRÉAMBULE ET DESCRIPTIF DU SITE',
    tag: 'TITRE I — ARTICLE 2',
    tagColor: 'blue',
    title: 'Descriptif du Site & Équipements de la Résidence',
    summary: 'La résidence RAFINA AIN SEBAA est un ensemble immobilier à usage exclusif d’habitation haut de gamme, composé d’appartements répartis en 5 pavillons, avec parking souterrain, espaces verts, salle de sport, kids club et mosquée.',
    stricteRule: 'Usage exclusif d\'habitation haut de gamme avec équipements d\'accompagnement dédiés aux résidents.',
    highlightText: '5 Pavillons résidentiels, Parkings sous-sols, Jardins, Fitness, Kids Club & Mosquée.',
    targetTag: 'Descriptif Résidence',
    objective: 'Définir l\'ensemble immobilier, ses 5 pavillons et ses installations haut de gamme d\'accompagnement.',
    goodPractices: [
      'Préservez la qualité des infrastructures et des espaces verts communs.',
      'Veillez au respect de l\'esthétique générale de l\'ensemble des 5 pavillons.',
      'Faites bon usage des équipements collectifs mis à la disposition des résidents.'
    ],
    pdfName: 'Règlement Intérieur — Titre I Art. 2 (Descriptif)',
    pdfSize: 'PDF • Page 4 sur 13'
  },

  // ==================== TITRE II : DÉFINITION ET USAGE DES PARTIES PRIVATIVES ====================
  {
    id: 'rule-03',
    number: '03',
    category: 'titre2',
    titreLabel: 'TITRE II : DÉFINITION ET USAGE DES PARTIES PRIVATIVES',
    tag: 'TITRE II — ARTICLE 3',
    tagColor: 'purple',
    title: 'Définition des Parties Privatives',
    summary: 'Sont considérées comme parties privatives les appartements, locaux, caves, boxes et emplacements de parking réservés, bâtis ou non bâtis, appartenant à chacun des copropriétaires pour en jouir individuellement.',
    stricteRule: 'Propriété exclusive de chaque copropriétaire pour une jouissance personnelle et individuelle.',
    highlightText: 'Appartements, caves, boxes et places de parking nominatives sont des parties privatives exclusives.',
    targetTag: 'Parties Privatives',
    objective: 'Délimiter le périmètre de propriété et de jouissance privative de chaque copropriétaire.',
    goodPractices: [
      'Identifiez précisément les limites de vos lots privatifs (appartement, box, place de parking).',
      'Assurez l\'entretien régulier de vos installations intérieures pour éviter tout sinistre.',
      'Souscrivez une assurance multirisque habitation couvrant vos parties privatives.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 3 (Définition)',
    pdfSize: 'PDF • Page 4 sur 13'
  },
  {
    id: 'rule-04',
    number: '04',
    category: 'titre2',
    titreLabel: 'TITRE II : DÉFINITION ET USAGE DES PARTIES PRIVATIVES',
    tag: 'TITRE II — ARTICLE 4',
    tagColor: 'red',
    title: 'Usage des Parties Privatives & Interdiction Commerciale',
    summary: 'Chacun a le droit de jouir librement de ses parties privatives sous condition expresse de ne pas nuire aux autres usagers, à la tranquillité publique, ni à la solidité de l\'immeuble. Les appartements sont strictement réservés à l\'habitation.',
    stricteRule: 'Interdiction Formelle : L\'exercice de toute activité commerciale, industrielle, artisanale ou professionnelle est strictement interdit dans les appartements.',
    highlightText: 'Destination d\'habitation pure : Aucun commerce, cabinet ou activité professionnelle en appartement.',
    targetTag: 'Usage Privatif',
    objective: 'Préserver le caractère paisible, résidentiel et sécurisé de la copropriété.',
    goodPractices: [
      'Consacrez exclusivement vos logements à l\'usage d\'habitation bourgeoise.',
      'Veillez à ce que vos activités privées ne portent aucune atteinte à la tranquillité du voisinage.',
      'Respectez la solidité et les normes techniques des bâtiments.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 4 (Usage)',
    pdfSize: 'PDF • Page 4 sur 13'
  },
  {
    id: 'rule-05',
    number: '05',
    category: 'titre2',
    titreLabel: 'TITRE II : DÉFINITION ET USAGE DES PARTIES PRIVATIVES',
    tag: 'TITRE II — ARTICLE 5',
    tagColor: 'red',
    title: 'Conditions d’Occupation & Interdiction Sous-Location / Airbnb',
    summary: 'Chaque occupant veille à la tranquillité de l\'immeuble. En cas de location longue durée, obligation de transmettre au Syndic l\'identité du locataire, sa pièce d\'identité / carte de séjour et le bail enregistré.',
    stricteRule: 'Interdiction Absolue : La sous-location, notamment meublée ou de courte durée type Airbnb / Booking, est formellement interdite.',
    highlightText: 'Location longue durée avec bail enregistré obligatoire — Interdiction stricte d\'Airbnb et sous-location.',
    targetTag: 'Conditions d\'Occupation',
    objective: 'Assurer la sécurité des résidents et empêcher le va-et-vient d\'occupants temporaires non identifiés.',
    goodPractices: [
      'Transmettez le dossier complet du locataire au Syndic avant toute remise des clés.',
      'Annexez le présent règlement intérieur à tout contrat de bail longue durée.',
      'Rappelez à vos locataires leurs obligations de respect des règles de la copropriété.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 5 (Occupation & Airbnb)',
    pdfSize: 'PDF • Page 4 sur 13'
  },

  // ==================== TITRE III : DISPOSITIONS PARTICULIÈRES ====================
  {
    id: 'rule-06',
    number: '06',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 6',
    tagColor: 'orange',
    title: 'Animaux de Compagnie & Chiens Dangereux',
    summary: 'Élevage d’animaux de ferme, basse-cour ou dangereux strictement interdit. Chiens et chats tolérés sans trouble de voisinage. Dans les parties communes : laisse obligatoire, muselière pour chiens dangereux, interdiction de déjections.',
    stricteRule: 'Obligation de nettoyage immédiat en cas de souillure. Les récidivistes verront leur animal définitivement interdit d\'accès.',
    highlightText: 'Tenue en laisse obligatoire, muselière requise pour chiens dangereux, zéro déjection tolérée.',
    targetTag: 'Animaux Domestiques',
    objective: 'Garantir l\'hygiène, la propreté et la sécurité de tous les résidents dans les parties communes.',
    goodPractices: [
      'Tenez systématiquement vos animaux en laisse courte dans les halls, allées et ascenseurs.',
      'Ramassez immédiatement toute déjection et nettoyez les parties souillées.',
      'Veillez à ce que vos animaux n\'émettent pas d\'aboiements continus perturbant le repos des voisins.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 6 (Animaux)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-07',
    number: '07',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 7',
    tagColor: 'orange',
    title: 'Cas Particulier de l’Aïd El Adha',
    summary: 'Un espace commun dédié au sacrifice est prévu le jour de l\'Aïd pour les résidents permanents, avec engagement de nettoyage, désinfection et évacuation immédiate des déchets et abats.',
    stricteRule: 'Interdiction formelle d\'exhiber ou d\'accrocher carcasses, peaux ou abats aux balcons, fenêtres ou terrasses. Accès interdit dans garages, halls, toits et jardins.',
    highlightText: 'Notification au Syndic 1 semaine avant l\'Aïd — Sacrifice exclusivement dans l\'espace désigné.',
    targetTag: 'Aïd El Adha',
    objective: 'Organiser le rituel de l\'Aïd dans un cadre propre, maîtrisé et respectueux de l\'hygiène collective.',
    goodPractices: [
      'Informez le Syndic au moins 7 jours à l\'avance de votre participation à l\'Aïd.',
      'Effectuez le sacrifice uniquement dans l\'aire commune dédiée à cet effet.',
      'Nettoyez et désinfectez immédiatement les lieux et évacuez les déchets dans des sacs étanches.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 7 (Aïd El Adha)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-08',
    number: '08',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 8',
    tagColor: 'red',
    title: 'Utilisation des Fenêtres, Terrasses & Balcons (Linge & Barbecue)',
    summary: 'Interdiction d’étendre du linge, tapis ou d\'entreposer des objets inesthétiques aux balcons et fenêtres. Maintien de la couleur et de l\'harmonie d\'origine. Demande écrite au Syndic pour toute intervention extérieure.',
    stricteRule: 'Usage des terrasses sans gêne pour les riverains : interdiction des nuisances sonores et olfactives (barbecues excessifs, fumées).',
    highlightText: 'Linge visible interdit aux balcons — Préservation stricte de l\'harmonie architecturale.',
    targetTag: 'Balcons & Terrasses',
    objective: 'Préserver l\'esthétique extérieure haut de gamme de la résidence et la tranquillité des riverains.',
    goodPractices: [
      'Faites sécher votre linge sur les toitures-terrasses aménagées ou sur étendoirs intérieurs non visibles.',
      'Conservez les balcons et terrasses propres et ordonnés.',
      'Évitez l\'usage de barbecues à charbon dégageant des fumées et odeurs vers les étages voisins.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 8 (Balcons & Terrasses)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-09',
    number: '09',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 9',
    tagColor: 'red',
    title: 'Façades, Enseignes & Garde-corps',
    summary: 'Toute installation d’enseigne, affiche, calicot, grille non homologuée ou aménagement modifiant l’aspect extérieur des façades et garde-corps est strictement interdite.',
    stricteRule: 'Interdiction totale de modifier l\'aspect extérieur des façades, baies vitrées et garde-corps.',
    highlightText: 'Aucune enseigne, bannière, grille artisanale ou modification d\'aspect extérieur autorisée.',
    targetTag: 'Façades & Harmonie',
    objective: 'Maintenir l\'unité architecturale et le standing visuel des Pavillons Verts.',
    goodPractices: [
      'Ne fixez aucun panneau, banderole ou objet publicitaire sur votre façade ou balcon.',
      'Consultez obligatoirement le syndic avant tout remplacement conforme de vitrage ou volet.',
      'Respectez l\'alignement et les finitions des garde-corps d\'origine.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 9 (Façades)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-10',
    number: '10',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 10',
    tagColor: 'blue',
    title: 'Plaques d’Identité des Portes Palières',
    summary: 'Les copropriétaires et locataires ne peuvent apposer sur la porte de leur appartement aucune plaque d’identification autre que celle déjà apposée ou d’un modèle strictement conforme et homologué par le Syndic.',
    stricteRule: 'Uniformité obligatoire des plaques de porte selon la charte visuelle validée par le Syndic.',
    highlightText: 'Plaque d\'identification standardisée et homologuée uniquement.',
    targetTag: 'Signalétique Palière',
    objective: 'Garantir l\'uniformité élégante et soignée des paliers et coursives.',
    goodPractices: [
      'Conservez la plaque de porte standardisée fournie par la copropriété.',
      'Demandez au syndic un modèle officiel en cas de remplacement nécessaire.',
      'N\'apposez pas d\'autocollants personnalisés non autorisés sur votre porte palière.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 10 (Plaques)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-11',
    number: '11',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 11',
    tagColor: 'orange',
    title: 'Usage des Appareils Récepteurs & Reproducteurs de Son',
    summary: 'Les appareils récepteurs, téléviseurs, chaînes hi-fi ou reproducteurs de son doivent être utilisés avec modération, de sorte qu’aucun son ne soit audible en dehors des locaux privatifs où ils fonctionnent.',
    stricteRule: 'Aucune nuisance sonore ne doit être perceptible depuis les appartements voisins ou les parties communes.',
    highlightText: 'Volume sonore modéré en permanence — Confort acoustique de l\'ensemble des voisins.',
    targetTag: 'Tranquillité Sonore',
    objective: 'Préserver le repos, le bien-être et le confort de vie de chaque famille de la résidence.',
    goodPractices: [
      'Réglez le volume de vos téléviseurs et enceintes à un niveau strictement privé.',
      'Utilisez des casques ou écouteurs individuels en cas d\'écoute tardive.',
      'Évitez de placer les enceintes à basses puissantes contre les cloisons mitoyennes.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 11 (Appareils de Son)',
    pdfSize: 'PDF • Page 5 sur 13'
  },
  {
    id: 'rule-12',
    number: '12',
    category: 'titre3',
    titreLabel: 'TITRE III : DISPOSITIONS PARTICULIÈRES',
    tag: 'TITRE III — ARTICLE 12',
    tagColor: 'red',
    title: 'Modifications des Parties Privatives & Horaires des Travaux',
    summary: 'Travaux privatifs : sans répercussion sur les parties communes. Interdiction absolue de modifier les structures porteuses (poteaux, poutres, voiles béton), façades ou conduits d’évacuation.',
    stricteRule: 'Horaires stricts des travaux bruyants : Du Lundi au Vendredi de 08h30 à 13h00 et de 14h30 à 18h00, Samedi de 10h00 à 16h00. FORMELLEMENT INTERDIT les Dimanches et Jours Fériés.',
    highlightText: 'Lun-Ven 08h30-13h & 14h30-18h / Sam 10h-16h — Interdit Dimanche et Fériés.',
    targetTag: 'Horaires & Travaux',
    objective: 'Encadrer les chantiers privatifs pour protéger l\'intégrité structurelle des bâtiments et le repos des résidents.',
    goodPractices: [
      'Déclarez au préalable tout chantier intérieur auprès du bureau du Syndic.',
      'Informez vos voisins de palier avant le démarrage de travaux bruyants autorisés.',
      'Exigez de vos artisans le respect scrupuleux des plages horaires autorisées.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 12 (Travaux & Horaires)',
    pdfSize: 'PDF • Page 6 sur 13'
  },

  // ==================== TITRE IV : FONCTIONNEMENT DU SITE ====================
  {
    id: 'rule-13',
    number: '13',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 13',
    tagColor: 'orange',
    title: 'Mission des Prestataires de la Copropriété',
    summary: 'Il est strictement interdit aux copropriétaires ou occupants d’employer les agents ou salariés des sociétés prestataires de la résidence (sécurité, nettoyage, maintenance) à des tâches privatives durant leurs heures de service.',
    stricteRule: 'Les agents de la résidence sont exclusivement dédiés aux missions d\'intérêt collectif de la copropriété.',
    highlightText: 'Interdiction d\'employer le personnel de sécurité ou de nettoyage pour des tâches privées.',
    targetTag: 'Personnel & Prestataires',
    objective: 'Assurer la disponibilité permanente des équipes pour la sécurité et la propreté collective.',
    goodPractices: [
      'Laissez les agents accomplir leurs rondes et tâches d\'entretien sans les solliciter à titre personnel.',
      'Adressez vos demandes d\'intervention au Syndic ou au responsable de site.',
      'Traitez le personnel de la copropriété avec respect et courtoisie.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 13 (Prestataires)',
    pdfSize: 'PDF • Page 6 sur 13'
  },
  {
    id: 'rule-14',
    number: '14',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 14',
    tagColor: 'blue',
    title: 'Missions & Attributions du Syndic de Copropriété',
    summary: 'Réglementé par la loi 18-00/106-12 et le contrat de gestion : conservation des parties communes, réparations d\'urgence, budget prévisionnel, appels de fonds, recouvrement, quitus, comptabilité, gestion fournisseurs et AG.',
    stricteRule: 'Le Syndic est le représentant légal du syndicat des copropriétaires en justice et dans tous les actes civils.',
    highlightText: 'Gestion administrative, financière, technique et juridique de la résidence.',
    targetTag: 'Missions du Syndic',
    objective: 'Garantir une administration rigoureuse, transparente et conforme au cadre légal marocain.',
    goodPractices: [
      'Conservez vos justificatifs de versement des cotisations de copropriété.',
      'Participez activement aux Assemblées Générales Ordinaires et Extraordinaires.',
      'Sollicitez le quitus auprès du syndic avant toute vente de votre bien immobilier.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 14 (Le Syndic)',
    pdfSize: 'PDF • Page 6 sur 13'
  },
  {
    id: 'rule-15',
    number: '15',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 15',
    tagColor: 'emerald',
    title: 'Gardiennage, Surveillance 24/7 & Vidéoprotection (CCTV)',
    summary: '15.1 Prestations : Gardiennage 24h/24 et 7j/7, contrôle d\'accès rigoureux, vidéosurveillance CCTV, interventions d\'urgence. 15.2 Zones : ensemble des parties communes, halls, paliers, jardins, parkings sous-sol, toits et locaux techniques.',
    stricteRule: 'Poste de garde actif 24h/24. Contrôle continu des flux pour la protection des biens et des personnes.',
    highlightText: 'Sécurité permanente 24/7, vidéosurveillance et contrôle des accès.',
    targetTag: 'Sécurité & Gardiennage',
    objective: 'Protéger la résidence, dissuader les intrusions et sécuriser l\'ensemble des 5 pavillons.',
    goodPractices: [
      'Coopérez avec les agents lors des contrôles d\'accès à l\'entrée principale.',
      'Signalez sans attendre tout comportement suspect ou équipement défectueux au poste de garde.',
      'Respectez l\'ensemble des caméras et dispositifs de sécurité du site.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 15 (Gardiennage 24/7)',
    pdfSize: 'PDF • Page 6-7 sur 13'
  },
  {
    id: 'rule-16',
    number: '16',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 16',
    tagColor: 'emerald',
    title: 'Nettoyage & Évacuation des Gravats de Travaux',
    summary: '16.1 Prestations : Dépoussiérage, balayage, lavage et dégraissage régulier des halls, escaliers, ascenseurs, couloirs, sous-sols, locaux poubelles. 16.2 Gravats : Interdiction de déposer gravats ou encombrants dans les locaux poubelles.',
    stricteRule: 'Évacuation obligatoire et immédiate des gravats hors de la résidence aux frais exclusifs de l\'occupant, avec nettoyage immédiat des communs.',
    highlightText: 'Gravats interdits dans les poubelles — Évacuation immédiate hors du site.',
    targetTag: 'Propreté & Gravats',
    objective: 'Maintenir un niveau d\'hygiène et de propreté irréprochable dans tous les espaces partagés.',
    goodPractices: [
      'Organisez l\'évacuation directe de vos déchets de démolition vers la décharge publique.',
      'Protégez les ascenseurs et couloirs lors du transport de matériaux ou meubles.',
      'Nettoyez immédiatement les traces de poussière ou de plâtre laissées lors d\'un passage.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 16 (Nettoyage & Gravats)',
    pdfSize: 'PDF • Page 7 sur 13'
  },
  {
    id: 'rule-17',
    number: '17',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 17',
    tagColor: 'blue',
    title: 'Maintenance Quotidienne & Interventions Spécialisées',
    summary: 'Le Syndic met à disposition un responsable de site assurant le suivi quotidien des installations. Pour les interventions complexes ou urgentes (ascenseurs, pompes de relevage, surpresseurs, électricité), il fait appel aux sociétés sous contrat.',
    stricteRule: 'Interventions techniques encadrées par des contrats de maintenance spécialisés certifiés.',
    highlightText: 'Responsable de site dédié et contrats de maintenance pour ascenseurs et réseaux.',
    targetTag: 'Maintenance Technique',
    objective: 'Garantir la longévité et le fonctionnement continu des équipements techniques collectifs.',
    goodPractices: [
      'Prévenez le responsable de site dès le constat d\'une anomalie (ampoule, ascenseur, porte).',
      'Ne tentez jamais de réparer vous-même les armoires électriques ou équipements communs.',
      'Facilitez l\'accès des techniciens de maintenance lors de leurs visites périodiques.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 17 (Maintenance)',
    pdfSize: 'PDF • Page 7 sur 13'
  },
  {
    id: 'rule-18',
    number: '18',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 18',
    tagColor: 'emerald',
    title: 'Traitement & Hygiène (Dératisation, Désinsectisation & Démoustication)',
    summary: '18.1 Traitements périodiques contre les rongeurs, cafards, moustiques, reptiles et insectes nuisibles. 18.2 Zones d’intervention : parties communes, gaines techniques, vide-sanitaires, espaces verts, locaux poubelles et sous-sols.',
    stricteRule: 'Campagnes sanitaires planifiées pour garantir un environnement sain et exempt de nuisibles.',
    highlightText: 'Traitements périodiques des gaines techniques, locaux à poubelles et sous-sols.',
    targetTag: 'Traitement Sanitaire',
    objective: 'Protéger la santé publique et préserver la salubrité de l\'ensemble du domaine résidentiel.',
    goodPractices: [
      'Veillez à ne laisser aucune eau stagnante dans vos bacs à plantes sur balcon.',
      'Maintenez fermées les trappes des gaines techniques après toute visite autorisée.',
      'Signalez la présence inhabituelle d\'insectes ou de nuisibles pour traitement ciblé.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 18 (Hygiène & Traitement)',
    pdfSize: 'PDF • Page 7 sur 13'
  },
  {
    id: 'rule-19',
    number: '19',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 19',
    tagColor: 'red',
    title: 'Ramassage des Ordures, Bacs Collectifs & Interdiction Mégots',
    summary: 'Ordures ménagères obligatoirement conditionnées dans des sacs plastiques étanches et bien fermés avant dépôt dans les bacs collectifs. Cartons compactés. Déchets non ménagers évacués hors site aux frais du résident.',
    stricteRule: 'Interdiction formelle de jeter ou d\'abandonner des déchets ou mégots dans les parties communes, halls, escaliers ou toitures.',
    highlightText: 'Sacs poubelle hermétiques obligatoires — Mégots formellement interdits dans les communs.',
    targetTag: 'Gestion des Déchets',
    objective: 'Éviter les mauvaises odeurs, les écoulements de liquides sales et les risques d\'incendie.',
    goodPractices: [
      'Fermez soigneusement vos sacs poubelles avant de les déposer dans les conteneurs du local.',
      'Aplatissez systématiquement vos cartons d\'emballage pour ne pas encombrer les bacs.',
      'Ne déposez jamais de sacs poubelle sur le palier devant votre porte d\'appartement.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 19 (Poubelles & Mégots)',
    pdfSize: 'PDF • Page 7 sur 13'
  },
  {
    id: 'rule-20',
    number: '20',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 20',
    tagColor: 'orange',
    title: 'Animaux dans les Parties Communes & Interdiction de Nourrir',
    summary: 'Interdiction stricte de nourrir les animaux, errants ou domestiques, dans les parties communes et abords immédiats. Ramassage impératif des déjections et muselière pour les chiens de grande taille.',
    stricteRule: 'Tout manquement aux règles d\'hygiène et de sécurité engagera directement la responsabilité du propriétaire.',
    highlightText: 'Interdiction de nourrir les animaux errants dans la résidence et ses abords.',
    targetTag: 'Animaux & Abords',
    objective: 'Prévenir l\'attroupement d\'animaux errants et protéger la salubrité des jardins et coursives.',
    goodPractices: [
      'Ne déposez pas de restes de nourriture ou de gamelles dans les jardins ou coursives.',
      'Munissez-vous toujours d\'un sac de ramassage lors des promenades avec votre animal.',
      'Respectez la sécurité des jeunes enfants en tenant vos animaux sous contrôle strict.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 20 (Animaux & Communs)',
    pdfSize: 'PDF • Page 7 sur 13'
  },
  {
    id: 'rule-21',
    number: '21',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 21',
    tagColor: 'red',
    title: 'Tapage Nocturne & Silence de 22h00 à 08h00',
    summary: 'Préservation obligatoire de la tranquillité de l\'immeuble. Tout bruit gênant diurne ou nocturne est prohibé. Vigilance renforcée et silence strict exigés entre 22h00 et 08h00 du matin.',
    stricteRule: 'Équipements bruyants, volume excessif et rassemblements bruyants formellement interdits entre 22h00 et 08h00.',
    highlightText: 'Silence absolu entre 22h00 et 08h00 pour garantir le repos nocturne de tous.',
    targetTag: 'Tranquillité Nocturne',
    objective: 'Garantir un sommeil réparateur et une ambiance de vie sereine à l\'ensemble des familles.',
    goodPractices: [
      'Modérez vos voix et vos bruits de pas dans les escaliers et couloirs en soirée.',
      'Évitez l\'usage d\'appareils électroménagers vibrants (lave-linge, aspirateur) après 22h00.',
      'Fermez les portes délicatement sans les claquer.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 21 (Tapage Nocturne)',
    pdfSize: 'PDF • Page 7-8 sur 13'
  },
  {
    id: 'rule-22',
    number: '22',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 22',
    tagColor: 'purple',
    title: 'Salle de Sport (Adultes +18) & Espace Kids Club (≤6 ans)',
    summary: 'Règles spécifiques d\'accès et d\'utilisation des équipements de loisirs de la résidence : Salle de Sport réservée aux adultes +18 ans et Kids Club réservé aux jeunes enfants de 6 ans maximum.',
    stricteRule: 'Salle de Sport : Femmes (Lun, Mer, Ven), Hommes (Mar, Jeu, Sam), Mixte (Dimanche) — 06h30 à 22h30. Écouteurs obligatoires. Kids Club : Accompagnement d\'un parent obligatoire en continu.',
    highlightText: 'Salle de sport 06h30-22h30 (planning sectorisé) — Kids Club ≤6 ans avec parent obligatoire.',
    targetTag: 'Sport & Kids Club',
    objective: 'Permettre une pratique sportive sereine et un espace de jeux sécurisé pour les tout-petits.',
    goodPractices: [
      'Consultez le planning hebdomadaire avant de vous rendre à la salle de sport.',
      'Portez une tenue de sport et des chaussures d\'intérieur propres, et utilisez une serviette sur chaque banc.',
      'Surveillez vos enfants de moins de 6 ans en continu dans le Kids Club et rangez les jouets avant de quitter.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 22 (Sport & Kids Club)',
    pdfSize: 'PDF • Page 8-9 sur 13'
  },
  {
    id: 'rule-23',
    number: '23',
    category: 'titre4',
    titreLabel: 'TITRE IV : FONCTIONNEMENT DU SITE',
    tag: 'TITRE IV — ARTICLE 23',
    tagColor: 'blue',
    title: 'Distribution du Courrier & Recommandés',
    summary: 'Le courrier ordinaire est déposé dans les boîtes aux lettres individuelles. Les agents de sécurité et prestataires du site n\'ont pas qualité pour accuser réception des courriers recommandés, colis avec signature, notifications judiciaires ou actes d\'huissier.',
    stricteRule: 'Les courriers recommandés et actes officiels doivent être réceptionnés directement par les destinataires.',
    highlightText: 'Boîtes aux lettres individuelles — Pas de procuration aux gardiens pour recommandés/huissier.',
    targetTag: 'Courrier & Colis',
    objective: 'Protéger la confidentialité et la responsabilité juridique relative aux courriers officiels.',
    goodPractices: [
      'Relevez régulièrement votre boîte aux lettres individuelle située dans le hall.',
      'Indiquez clairement votre nom et numéro de pavillon/appartement sur votre boîte.',
      'Prenez vos dispositions personnelles pour recevoir vos courriers recommandés ou convocations.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 23 (Courrier)',
    pdfSize: 'PDF • Page 9 sur 13'
  },

  // ==================== TITRE V : GESTION DES ACCÈS ====================
  {
    id: 'rule-24',
    number: '24',
    category: 'titre5',
    titreLabel: 'TITRE V : GESTION DES ACCÈS',
    tag: 'TITRE V — ARTICLE 24',
    tagColor: 'orange',
    title: 'Règles Générales de Circulation & Vitesse Limitée à 10 km/h',
    summary: 'La vitesse de tout véhicule (voiture, moto, cyclomoteur, quad) est strictement limitée à 10 km/h dans l’ensemble des voies intérieures et parkings de la résidence. Le respect du sens de circulation et des rampes est obligatoire.',
    stricteRule: 'Vitesse maximale absolue de 10 km/h et respect obligatoire du sens des rampes d\'accès.',
    highlightText: 'Vitesse limitée à 10 km/h — Priorité à la sécurité des piétons et des enfants.',
    targetTag: 'Circulation Intérieure',
    objective: 'Garantir la sécurité routière dans les parkings et allées intérieures fréquentées par les piétons.',
    goodPractices: [
      'Roulez au pas (≤ 10 km/h) dès le franchissement de la barrière de sécurité.',
      'Allumez vos feux de croisement dans les parkings souterrains.',
      'Respectez rigoureusement le marquage au sol et les sens uniques des rampes.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 24 (Vitesse 10 km/h)',
    pdfSize: 'PDF • Page 9 sur 13'
  },
  {
    id: 'rule-25',
    number: '25',
    category: 'titre5',
    titreLabel: 'TITRE V : GESTION DES ACCÈS',
    tag: 'TITRE V — ARTICLE 25',
    tagColor: 'emerald',
    title: 'Contrôle des Visiteurs & Accord Préalable du Résident',
    summary: 'Les agents de sécurité doivent systématiquement vérifier l’identité et la destination de tout visiteur extérieur, et obtenir l’accord préalable de l’hôte résident avant d’autoriser l’accès à la copropriété.',
    stricteRule: 'Aucun visiteur inconnu ne peut pénétrer dans les pavillons sans validation expresse de son hôte.',
    highlightText: 'Vérification d\'identité et accord téléphonique du résident avant tout accès visiteur.',
    targetTag: 'Contrôle Visiteurs',
    objective: 'Empêcher toute intrusion non autorisée et maintenir un niveau de filtrage haut de gamme.',
    goodPractices: [
      'Prévenez le poste de sécurité lors de l\'arrivée prévue de vos invités.',
      'Répondez rapidement à l\'appel du gardien confirmant la venue de votre visiteur.',
      'Accompagnez vos visiteurs jusqu\'à la sortie lors de leur départ.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 25 (Visiteurs)',
    pdfSize: 'PDF • Page 9 sur 13'
  },
  {
    id: 'rule-26',
    number: '26',
    category: 'titre5',
    titreLabel: 'TITRE V : GESTION DES ACCÈS',
    tag: 'TITRE V — ARTICLE 26',
    tagColor: 'red',
    title: 'Livreurs : Réception à l’Entrée Principale & Dérogation PMR',
    summary: 'L’accès des livreurs extérieurs (repas, colis express) dans les étages et pavillons est strictement interdit. Réception à l\'entrée principale. Dérogation pour personnes à mobilité réduite (PMR) sur accord préalable du poste de garde.',
    stricteRule: 'Livraisons lourdes de matériel ou meubles : doivent respecter les mêmes plages horaires que les travaux.',
    highlightText: 'Réception des livreurs au portail principal — Accès aux étages formellement interdit.',
    targetTag: 'Livreurs & Logistique',
    objective: 'Préserver l\'intimité et la sécurité des couloirs et étages résidentiels.',
    goodPractices: [
      'Rejoignez la loge du portail principal pour récupérer vos commandes de repas et colis.',
      'Informez le poste de garde si votre état de santé nécessite une dérogation temporaire.',
      'Planifiez les livraisons de meubles volumineux pendant les heures ouvrables autorisées.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 26 (Livreurs & PMR)',
    pdfSize: 'PDF • Page 10 sur 13'
  },

  // ==================== TITRE VI : PROCÉDURES D’URGENCE ====================
  {
    id: 'rule-27',
    number: '27',
    category: 'titre6',
    titreLabel: 'TITRE VI : PROCÉDURES D’URGENCE',
    tag: 'TITRE VI — ARTICLE 27',
    tagColor: 'red',
    title: 'Procédures d’Urgence en Cas d’Incendie (Communs & Privatifs)',
    summary: '27.1 Communs : Avis immédiat au responsable sécurité et Syndic, intervention d\'urgence avec extincteurs du site, alerte Protection Civile (15) et Sûreté Nationale (19). 27.2 Privatifs : Assistance immédiate, alerte secours et consignation au registre.',
    stricteRule: 'Recharge immédiate des extincteurs utilisés et déclaration d\'assurance accomplie par le Syndic.',
    highlightText: 'Alerte immédiate du poste de garde, extincteurs du site et appel Protection Civile (15).',
    targetTag: 'Sécurité Incendie',
    objective: 'Réagir immédiatement en cas de départ de feu pour protéger les vies humaines et les biens.',
    goodPractices: [
      'Repérez l\'emplacement des extincteurs et des déclencheurs manuels sur votre palier.',
      'En cas de fumée, évacuez calmement par les escaliers sans jamais utiliser les ascenseurs.',
      'Ne bouchez jamais les issues de secours ou couloirs avec des objets personnels.'
    ],
    pdfName: 'Règlement Intérieur — Titre VI Art. 27 (Incendie)',
    pdfSize: 'PDF • Page 10 sur 13'
  },
  {
    id: 'rule-28',
    number: '28',
    category: 'titre6',
    titreLabel: 'TITRE VI : PROCÉDURES D’URGENCE',
    tag: 'TITRE VI — ARTICLE 28',
    tagColor: 'blue',
    title: 'Dégâts des Eaux & Coupure des Vannes Techniques',
    summary: '28.1 Communs : Signalement au Syndic et sécurité pour coupure immédiate de la vanne générale et réparation. 28.2 Privatifs : En cas d\'absence de l\'occupant, agents autorisés à fermer le robinet d\'arrêt dans l\'armoire technique de palier.',
    stricteRule: 'Résolution des dommages privatifs par l\'intermédiaire des assurances individuelles des parties impliquées.',
    highlightText: 'Fermeture d\'urgence du robinet de coupure situé dans l\'armoire technique palière.',
    targetTag: 'Dégâts des Eaux',
    objective: 'Stopper immédiatement les fuites pour éviter les infiltrations et dégradations des cloisons.',
    goodPractices: [
      'Fermez votre vanne d\'arrivée d\'eau privative avant tout départ prolongé en vacances.',
      'Vérifiez régulièrement l\'état de vos joints de plomberie et flexibles de robinetterie.',
      'Signalez toute trace d\'humidité ou fuite apparente sur le palier au Syndic.'
    ],
    pdfName: 'Règlement Intérieur — Titre VI Art. 28 (Dégâts des Eaux)',
    pdfSize: 'PDF • Page 10 sur 13'
  },
  {
    id: 'rule-29',
    number: '29',
    category: 'titre6',
    titreLabel: 'TITRE VI : PROCÉDURES D’URGENCE',
    tag: 'TITRE VI — ARTICLE 29',
    tagColor: 'blue',
    title: 'Inondations & Pompes de Relevage d’Urgence en Sous-sol',
    summary: 'En cas de fortes intempéries ou d’inondation des sous-sols, le responsable de sécurité avise immédiatement le Syndic qui déclenche l’action des pompes de relevage d’urgence et sollicite l’aide de la Protection Civile si nécessaire.',
    stricteRule: 'Maintien en état d\'alerte permanent des pompes de relevage et des caniveaux d\'évacuation.',
    highlightText: 'Pompes de relevage d\'urgence automatiques et intervention immédiate.',
    targetTag: 'Intempéries & Inondations',
    objective: 'Protéger les parkings souterrains et les véhicules stationnés contre les accumulations d\'eaux pluviales.',
    goodPractices: [
      'Ne jetez aucun détritus dans les caniveaux ou grilles d\'évacuation des rampes de parking.',
      'Suivez les consignes de sécurité des agents en cas d\'alerte météo exceptionnelle.',
      'Stationnez uniquement sur votre emplacement attribué sans entraver les circuits de drainage.'
    ],
    pdfName: 'Règlement Intérieur — Titre VI Art. 29 (Inondations)',
    pdfSize: 'PDF • Page 10 sur 13'
  },
  {
    id: 'rule-30',
    number: '30',
    category: 'titre6',
    titreLabel: 'TITRE VI : PROCÉDURES D’URGENCE',
    tag: 'TITRE VI — ARTICLE 30',
    tagColor: 'red',
    title: 'Constat de Vol, Effraction & Enregistrement Vidéosurveillance',
    summary: 'Tout vol ou tentative d’effraction constaté doit être consigné sur le registre de sécurité et signalé au Syndic. Le Syndic assiste le Conseil Syndical, met à disposition les images de vidéosurveillance aux autorités et dépose plainte pour les biens communs.',
    stricteRule: 'Transmission officielle des enregistrements de caméras aux services de police compétents.',
    highlightText: 'Consignation au registre de sécurité, mise à disposition des vidéos et plainte officielle.',
    targetTag: 'Vols & Sécurité',
    objective: 'Faciliter les enquêtes judiciaires et assurer la prise en charge immédiate des incidents de sécurité.',
    goodPractices: [
      'Verrouillez systématiquement la porte de votre appartement et les vitres de votre véhicule.',
      'Signalez tout rodage ou tentative d\'effraction au poste de sécurité sans délai.',
      'Déposez une plainte individuelle auprès du commissariat en cas de préjudice privatif.'
    ],
    pdfName: 'Règlement Intérieur — Titre VI Art. 30 (Vols & Enquêtes)',
    pdfSize: 'PDF • Page 10-11 sur 13'
  },
  {
    id: 'rule-31',
    number: '31',
    category: 'titre6',
    titreLabel: 'TITRE VI : PROCÉDURES D’URGENCE',
    tag: 'TITRE VI — ARTICLE 31',
    tagColor: 'blue',
    title: 'Relevé des Compteurs d’Eau & Électricité (SRM / ONEE / Lydec)',
    summary: 'Les agents des régies de distribution (SRM / ONEE / Lydec) ne sont autorisés à pénétrer sur le site qu’après présentation de leur carte professionnelle. Un agent de sécurité les accompagne obligatoirement lors du relevé dans les gaines techniques.',
    stricteRule: 'Accompagnement obligatoire par un agent de sécurité lors de tout accès aux gaines techniques.',
    highlightText: 'Présentation de la carte professionnelle et escorte de sécurité obligatoire.',
    targetTag: 'Relevé Compteurs',
    objective: 'Sécuriser l\'accès aux installations techniques et compteurs des fluides de la copropriété.',
    goodPractices: [
      'Veillez à ce que les trappes d\'accès aux gaines techniques restent dégagées de tout meuble ou objet.',
      'Vérifiez la conformité de vos index de facturation avec vos relevés périodiques.',
      'Contactez le syndic en cas d\'anomalie constatée sur votre compteur individuel.'
    ],
    pdfName: 'Règlement Intérieur — Titre VI Art. 31 (Compteurs SRM/Lydec)',
    pdfSize: 'PDF • Page 11 sur 13'
  },

  // ==================== TITRE VII : PARKING, ANTENNES ET TOITURES ====================
  {
    id: 'rule-32',
    number: '32',
    category: 'titre7',
    titreLabel: 'TITRE VII : PARKING, ANTENNES ET TOITURES',
    tag: 'TITRE VII — ARTICLE 32',
    tagColor: 'red',
    title: 'Gestion des Parkings en Sous-sol, Boxes & Interdiction de Stockage',
    summary: 'Places en sous-sol et boxes réservés au stationnement des véhicules et motos (titres notariés). Interdiction de stockage commercial, carburants, essence ou matières inflammables. Lavage à grande eau et usage abusif du klaxon strictement prohibés.',
    stricteRule: 'Accès des véhicules de livraison au 2ème sous-sol pour commerces fixé par le Syndic.',
    highlightText: 'Stationnement réservé — Stockage commercial, essence, lavage et klaxons interdits.',
    targetTag: 'Parkings Sous-Sol',
    objective: 'Préserver la sécurité incendie, la propreté des dalles et la fluidité des sous-sols.',
    goodPractices: [
      'Stationnez strictement au centre de votre place de parking délimitée.',
      'Ne stockez aucun pneu, meuble, bidon d\'essence ou déchet inflammable dans votre box.',
      'Coupez le moteur dès votre immobilisation pour éviter l\'accumulation de gaz d\'échappement.'
    ],
    pdfName: 'Règlement Intérieur — Titre VII Art. 32 (Parkings & Boxes)',
    pdfSize: 'PDF • Page 11 sur 13'
  },
  {
    id: 'rule-33',
    number: '33',
    category: 'titre7',
    titreLabel: 'TITRE VII : PARKING, ANTENNES ET TOITURES',
    tag: 'TITRE VII — ARTICLE 33',
    tagColor: 'red',
    title: 'Règles d’Usage des Antennes & Parabole Collective',
    summary: 'La résidence étant équipée d’un système de parabole collective, l’installation de paraboles ou antennes individuelles sur les balcons, façades, garde-corps ou fenêtres est totalement interdite.',
    stricteRule: 'En cas d\'infraction, mise en demeure sous 48h. À défaut, démontage d\'office par le Syndic aux frais exclusifs du copropriétaire défaillant.',
    highlightText: 'Parabole collective installée — Paraboles individuelles en façade strictement interdites.',
    targetTag: 'Paraboles & Antennes',
    objective: 'Préserver l\'esthétique épurée des façades et éviter les risques de chute d\'antennes.',
    goodPractices: [
      'Raccordez vos récepteurs TV directement aux prises d\'antenne collective de votre appartement.',
      'Faites appel au technicien de la résidence en cas de perte de signal satellitaire.',
      'Ne fixez aucun mât, parabole ou câble visible en façade extérieure.'
    ],
    pdfName: 'Règlement Intérieur — Titre VII Art. 33 (Paraboles Collectives)',
    pdfSize: 'PDF • Page 11 sur 13'
  },
  {
    id: 'rule-34',
    number: '34',
    category: 'titre7',
    titreLabel: 'TITRE VII : PARKING, ANTENNES ET TOITURES',
    tag: 'TITRE VII — ARTICLE 34',
    tagColor: 'blue',
    title: 'Toitures-Terrasses : Séchage du Linge & Accès Sécurisé',
    summary: 'Usage principal : installations techniques/climatisation et séchage du linge sur structures prévues sous supervision du Syndic. Portes d’accès fermées à clé pour sécurité ; accès strictement interdit aux personnes étrangères.',
    stricteRule: 'Portes d\'accès toitures fermées à clé — Accès réservé aux résidents autorisés et techniciens.',
    highlightText: 'Séchage du linge sur structures homologuées — Portes de toiture verrouillées.',
    targetTag: 'Toitures-Terrasses',
    objective: 'Sécuriser les toitures, protéger les étanchéités et offrir un espace soigné de séchage.',
    goodPractices: [
      'Utilisez exclusivement les cordes et supports de séchage homologués sur la toiture.',
      'Refermez systématiquement la porte d\'accès à la toiture après votre passage.',
      'Ne montez jamais sur les rebords d\'acrotères ou gaines techniques de toiture.'
    ],
    pdfName: 'Règlement Intérieur — Titre VII Art. 34 (Toitures-Terrasses)',
    pdfSize: 'PDF • Page 11 sur 13'
  },
  {
    id: 'rule-35',
    number: '35',
    category: 'titre7',
    titreLabel: 'TITRE VII : PARKING, ANTENNES ET TOITURES',
    tag: 'TITRE VII — ARTICLE 35',
    tagColor: 'emerald',
    title: 'Bornes de Recharge Véhicules Électriques & Droit à la Prise (IRVE)',
    summary: '35.1 Droit à la prise à ses frais avec accord préalable écrit du Syndic. 35.2 Installation par un professionnel qualifié IRVE, respect normes électriques/incendie, pas de multiprises/rallonges. 35.3 Comptage individuel des consommations (pas de piquage sur communs). 35.4 Entretien, responsabilité et assurance RC.',
    stricteRule: 'Branchement strictement interdit sur les prises de service des communs sans sous-compteur agréé par le syndic.',
    highlightText: 'Installateur qualifié IRVE obligatoire, compteur divisionnaire dédié et accord préalable.',
    targetTag: 'Recharge Véhicules Électriques',
    objective: 'Favoriser la mobilité électrique en garantissant la sécurité incendie et l\'individualisation des coûts.',
    goodPractices: [
      'Déposez votre dossier technique complet (schéma, installateur IRVE) auprès du Syndic avant travaux.',
      'Souscrivez une assurance multirisque couvrant spécifiquement votre borne privative.',
      'N\'utilisez jamais de rallonges volantes traversant les voies de circulation piétonnes ou automobiles.'
    ],
    pdfName: 'Règlement Intérieur — Titre VII Art. 35 (Bornes Électriques IRVE)',
    pdfSize: 'PDF • Page 11-12 sur 13'
  },
  {
    id: 'rule-36',
    number: '36',
    category: 'titre7',
    titreLabel: 'TITRE VII : PARKING, ANTENNES ET TOITURES',
    tag: 'TITRE VII — ARTICLE 36',
    tagColor: 'purple',
    title: 'Organisation d’Événements Privés dans les Parties Communes',
    summary: 'Événements privés (mariages, naissances, décès) soumis à accord préalable écrit du Syndic après demande précisant zones et durée. Structures temporaires sans gêne de passage ni dégradation.',
    stricteRule: 'L\'organisateur s\'engage à limiter le niveau sonore, respecter le calme et restituer les lieux propres et en parfait état immédiatement après.',
    highlightText: 'Autorisation écrite préalable du Syndic — Respect strict de la tranquillité et propreté immédiate.',
    targetTag: 'Événements Communs',
    objective: 'Permettre les rassemblements familiaux légitimes tout en préservant le confort de l\'ensemble des voisins.',
    goodPractices: [
      'Adressez votre demande écrite au Syndic au moins 10 jours avant la date de l\'événement.',
      'Assurez la protection des sols et installations des espaces communs empruntés.',
      'Faites cesser toute animation musicale à l\'heure convenue avec le Syndic.'
    ],
    pdfName: 'Règlement Intérieur — Titre VII Art. 36 (Événements Privés)',
    pdfSize: 'PDF • Page 12 sur 13'
  },

  // ==================== TITRE VIII : CHARGES DE GESTION ET D’ENTRETIEN DU SITE ====================
  {
    id: 'rule-37',
    number: '37',
    category: 'titre8',
    titreLabel: 'TITRE VIII : CHARGES DE GESTION ET D’ENTRETIEN DU SITE',
    tag: 'TITRE VIII — ARTICLE 37',
    tagColor: 'blue',
    title: 'Définition des Charges Communes & Répartition aux Millièmes',
    summary: 'Dépenses nécessaires à la conservation, entretien, fonctionnement et administration des parties communes et équipements collectifs. Participation proportionnelle aux millièmes de chaque lot selon le budget prévisionnel annuel voté en AG.',
    stricteRule: 'Provisions exigibles au premier jour de chaque période arrêtée par l’Assemblée Générale.',
    highlightText: 'Participation obligatoire proportionnelle aux tantièmes — Exigibilité au premier jour de période.',
    targetTag: 'Charges Communes',
    objective: 'Financer les services essentiels de la résidence et assurer la continuité du fonctionnement.',
    goodPractices: [
      'Réglez vos provisions de charges par prélèvement ou virement dès le 1er du mois/trimestre.',
      'Consultez les états financiers et comptes présentés annuellement par le Syndic.',
      'Participez au vote du budget prévisionnel lors de l\'Assemblée Générale.'
    ],
    pdfName: 'Règlement Intérieur — Titre VIII Art. 37 (Définition des Charges)',
    pdfSize: 'PDF • Page 12-13 sur 13'
  },
  {
    id: 'rule-38',
    number: '38',
    category: 'titre8',
    titreLabel: 'TITRE VIII : CHARGES DE GESTION ET D’ENTRETIEN DU SITE',
    tag: 'TITRE VIII — ARTICLE 38',
    tagColor: 'blue',
    title: 'Détail des Charges Générales (Conservation, Entretien & Administration)',
    summary: '38.1 Conservation : Gros œuvre (toitures, façades, murs), maintenance réseaux, ascenseurs, ravalement. 38.2 Entretien : Produits nettoyage, contrats gardiennage, espaces verts, dératisation, eau/électricité communes. 38.3 Administration : Honoraires Syndic, assurances, frais AG, justice/huissier.',
    stricteRule: 'Répartition exhaustive de l\'ensemble des postes budgétaires concourant à la gestion de la copropriété.',
    highlightText: 'Conservation du bâti, Contrats de services (Sécurité/Nettoyage) & Administration légale.',
    targetTag: 'Postes Budgétaires',
    objective: 'Garantir une parfaite transparence sur l\'affectation de chaque dirham de charges versé.',
    goodPractices: [
      'Examinez la répartition détaillée des postes lors de la convocation à l\'AG.',
      'Contrôlez les rapports des commissaires aux comptes ou du conseil syndical.',
      'Proposez des optimisations énergétiques et de gestion lors des débats d\'AG.'
    ],
    pdfName: 'Règlement Intérieur — Titre VIII Art. 38 (Charges Générales 38.1/38.2/38.3)',
    pdfSize: 'PDF • Page 13 sur 13'
  },
  {
    id: 'rule-39',
    number: '39',
    category: 'titre8',
    titreLabel: 'TITRE VIII : CHARGES DE GESTION ET D’ENTRETIEN DU SITE',
    tag: 'TITRE VIII — ARTICLE 39',
    tagColor: 'orange',
    title: 'Charges Spéciales, Travaux d’Urgence & Recouvrement',
    summary: 'Dépenses exceptionnelles non prévues dans le budget courant (travaux d’urgence, réfections majeures imprévues). L’AG peut décider un appel de fonds exceptionnel. Le Syndic applique les mêmes procédures de relance et de recouvrement amiable/judiciaire.',
    stricteRule: 'Procédures de recouvrement et de relance identiques à celles des charges ordinaires en cas de défaillance.',
    highlightText: 'Fonds exceptionnels votés en AG pour travaux imprévus et procédures de recouvrement.',
    targetTag: 'Charges Spéciales & Travaux',
    objective: 'Financer les réfections lourdes et préserver la valeur patrimoniale du patrimoine immobilier.',
    goodPractices: [
      'Anticipez le paiement des appels de fonds exceptionnels votés par la copropriété.',
      'Prenez contact immédiatement avec le Syndic en cas de difficulté passagère pour convenir d\'un échéancier.',
      'Régularisez promptement vos cotisations pour éviter toute action en justice et frais d\'huissier.'
    ],
    pdfName: 'Règlement Intérieur — Titre VIII Art. 39 (Charges Spéciales & Recouvrement)',
    pdfSize: 'PDF • Page 13 sur 13'
  }
];
