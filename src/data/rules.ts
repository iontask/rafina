import { Rule } from '../types';

export const rulesData: Rule[] = [
  {
    id: 'rule-01',
    number: '01',
    category: 'security',
    tag: 'TITRE I — ARTICLE 1',
    tagColor: 'red',
    title: 'Contrôle des Accès & Fermeture des Portes',
    summary: 'Obligation stricte à l’ensemble des copropriétaires, résidents et usagers de refermer systématiquement la porte principale d\'entrée ainsi que les portes d’accès piétonnes de chaque pavillon.',
    stricteRule: 'Priorité Absolue : Tout blocage volontaire des portes d\'accès est formellement interdit.',
    highlightText: 'Fermeture automatique : Assurez-vous du verrouillage effectif des accès piétons après chaque passage.',
    targetTag: 'Sécurité des Accès',
    objective: 'Sécuriser le périmètre de la résidence et empêcher l’intrusion de personnes non autorisées.',
    goodPractices: [
      'Vérifiez la fermeture complète de la porte principale avant de vous éloigner.',
      'Ne bloquez jamais les gâches électriques ou portes avec des cales lors de vos déplacements.',
      'Signalez immédiatement au gardien ou au syndic tout dysfonctionnement des serrures.'
    ],
    pdfName: 'Règlement Intérieur — Titre I Art. 1',
    pdfSize: 'PDF • 1.1 Mo'
  },
  {
    id: 'rule-02',
    number: '02',
    category: 'security',
    tag: 'TITRE I — ARTICLE 2',
    tagColor: 'red',
    title: 'Vidéosurveillance & Protection des Données',
    summary: 'La résidence est placée sous la protection d’un système de caméras de sécurité en circuit fermé. La configuration, le visionnage et la maintenance sont sous la responsabilité exclusive du syndic.',
    stricteRule: 'Nul ne peut entraver le champ de vision ou dégrader les équipements de vidéosurveillance sous peine de poursuites.',
    highlightText: 'Protection 24/7 : Surveillance continue des halls, parkings, ascenseurs et périmètres de la copropriété.',
    targetTag: 'Vidéoprotection',
    objective: 'Garantir la sécurité des biens et des personnes et prévenir les actes de vandalisme.',
    goodPractices: [
      'Respectez l’ensemble des caméras et détecteurs installés dans les parties communes.',
      'Adressez vos demandes de consultation d’images exclusivement au syndic par écrit.',
      'Prévenez le poste de gardiennage en cas de comportement suspect constaté.'
    ],
    pdfName: 'Règlement Intérieur — Titre I Art. 2',
    pdfSize: 'PDF • 980 Ko'
  },
  {
    id: 'rule-03',
    number: '03',
    category: 'security',
    tag: 'TITRE I — ARTICLE 3',
    tagColor: 'orange',
    title: 'Contrôle des Flux Logistiques & Livreurs',
    summary: 'L’accès des livreurs extérieurs (repas, colis, courriers express) est strictement interdit dans les étages et les pavillons. La récupération de toutes les commandes s’effectue obligatoirement à l’entrée principale.',
    stricteRule: 'Dérogation : Les résidents en situation d’incapacité temporaire ou permanente sont autorisés à faire monter les livreurs après confirmation préalable aux agents de sécurité.',
    highlightText: 'Point de livraison unique : Accueil et récupération des colis au poste de garde à l’entrée principale.',
    targetTag: 'Contrôle des Flux',
    objective: 'Prévenir la circulation d’inconnus dans les étages et préserver la tranquillité des logements.',
    goodPractices: [
      'Rejoignez le poste de garde principal pour réceptionner vos livraisons de repas et colis.',
      'Informer au préalable la sécurité si vous nécessitez une dérogation pour mobilité réduite.',
      'Ne communiquez jamais les codes d’accès piétons aux livreurs tiers.'
    ],
    pdfName: 'Règlement Intérieur — Titre I Art. 3',
    pdfSize: 'PDF • 850 Ko'
  },
  {
    id: 'rule-04',
    number: '04',
    category: 'admin',
    tag: 'TITRE II — ARTICLE 4',
    tagColor: 'blue',
    title: 'Obligation de Paiement des Charges de Copropriété',
    summary: 'Conformément à la législation en vigueur (Loi n° 18-00), chaque copropriétaire est tenu de s’acquitter de sa quote-part de charges mensuelles à la date d’exigibilité fixée par le syndic.',
    stricteRule: 'Ces fonds sont indispensables au maintien des services communs (gardiennage, nettoyage, ascenseurs, électricité, salle de sport, mosquée, kids club, …).',
    highlightText: 'Loi n° 18-00 : Le paiement régulier garantit la continuité et le niveau élevé des services de la résidence.',
    targetTag: 'Gestion Financière',
    objective: 'Maintenir la solvabilité de la copropriété et assurer la pérennité de tous les équipements.',
    goodPractices: [
      'Privilégiez le virement bancaire automatique pour respecter la date limite d’exigibilité.',
      'Conservez les quittances et reçus de paiement délivrés par le bureau du syndic.',
      'Consultez le bilan comptable annuel présenté lors de l’Assemblée Générale des copropriétaires.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 4',
    pdfSize: 'PDF • 1.3 Mo'
  },
  {
    id: 'rule-05',
    number: '05',
    category: 'admin',
    tag: 'TITRE II — ARTICLE 5',
    tagColor: 'blue',
    title: 'Mutation, Cession & Encadrement des Locations',
    summary: 'Vente : Quitus obligatoire du syndic avant signature chez le notaire. Location longue durée : Transmission au syndic du contrat de bail enregistré, pièce d’identité/carte de séjour du locataire.',
    stricteRule: 'Sous-location strictly interdite. Surpopulation prohibée. En cas d’impayés récurrents, le syndic engagera des procédures pouvant aller jusqu’à l’interdiction de location ou le blocage de la cession.',
    highlightText: 'Responsabilité du bailleur : Le propriétaire reste juridiquement et financièrement responsable des nuisances causées par son locataire.',
    targetTag: 'Encadrement Locatif',
    objective: 'Garantir la transparence administrative, prévenir la surpopulation et sécuriser la gestion locative.',
    goodPractices: [
      'Déposez le dossier locatif complet auprès du syndic avant la remise des clés au locataire.',
      'Soldez l’intégralité de vos charges de copropriété avant toute promesse de vente.',
      'Incorporez le règlement intérieur en annexe obligatoire du contrat de bail.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 5',
    pdfSize: 'PDF • 1.4 Mo'
  },
  {
    id: 'rule-06',
    number: '06',
    category: 'admin',
    tag: 'TITRE II — ARTICLE 6',
    tagColor: 'blue',
    title: 'Composition de l’Union des Copropriétaires',
    summary: 'Tout résident effectif (propriétaire occupant, locataire légitime ou mandataire) est membre usager. Son intégration est conditionnée par la transmission des justificatifs (titre de propriété, bail enregistré, ou abonnements SRM / ONEE).',
    stricteRule: 'L’accès aux services communs est conditionné par la régularité du dossier administratif du résident.',
    highlightText: 'Justificatif d’occupation : Transmission obligatoire des contrats SRM (Eau) et ONEE (Électricité) établis au nom de l’occupant.',
    targetTag: 'Registre des Résidents',
    objective: 'Tenir à jour le registre officiel des usagers habilités à fréquenter les infrastructures communes.',
    goodPractices: [
      'Fournissez vos attestations d’abonnement aux compteurs SRM / ONEE dès votre installation.',
      'Mettez à jour vos coordonnées téléphoniques et e-mail auprès du syndic.',
      'Présentez votre procuration officielle si vous agissez en tant que mandataire.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 6',
    pdfSize: 'PDF • 910 Ko'
  },
  {
    id: 'rule-07',
    number: '07',
    category: 'admin',
    tag: 'TITRE II — ARTICLE 7',
    tagColor: 'orange',
    title: 'Règlement des Litiges & Voies de Recours',
    summary: 'Tout manquement au règlement fera l’objet, dans un premier temps, d’une médiation auprès du Conseil syndical ou du bureau d’administration. À défaut de résolution amiable, le dossier sera transmis aux autorités ou tribunaux.',
    stricteRule: 'Priorité à la médiation amiable et au dialogue constructif au sein du Conseil syndical.',
    highlightText: 'Voies de recours : Procédure graduée de la médiation interne aux autorités locales et juridictions judiciaires.',
    targetTag: 'Médiation & Recours',
    objective: 'Préserver le climat de convivialité et résoudre pacifiquement les litiges de copropriété.',
    goodPractices: [
      'Adressez une requête écrite claire au syndic décrivant le différend rencontré.',
      'Participez activement aux réunions de conciliation proposées par le bureau.',
      'Respectez les compromis validés lors de la médiation amiable.'
    ],
    pdfName: 'Règlement Intérieur — Titre II Art. 7',
    pdfSize: 'PDF • 820 Ko'
  },
  {
    id: 'rule-08',
    number: '08',
    category: 'cadre',
    tag: 'TITRE III — ARTICLE 8',
    tagColor: 'green',
    title: 'Destination Exclusive des Lots (Habitation)',
    summary: 'Les appartements de la résidence RAFINA sont strictement réservés à l’usage exclusif d\'habitation. L\'exercice de toute activité commerciale, professionnelle ou libérale non autorisée est formellement interdit.',
    stricteRule: 'Interdiction absolue de transformer un appartement en bureau, cabinet médical, atelier ou commerce.',
    highlightText: 'Habitation exclusive : Maintien du caractère strictement résidentiel et paisible de l’ensemble des pavillons.',
    targetTag: 'Destination des Lots',
    objective: 'Préserver la tranquillité, le standing et l’harmonie générale de la résidence.',
    goodPractices: [
      'Destinez votre logement uniquement à l’usage d’habitation personnelle ou familiale.',
      'Ne recevez aucun public ou clientèle professionnelle au sein de votre appartement.',
      'Signalez au syndic tout changement de destination non autorisé.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 8',
    pdfSize: 'PDF • 780 Ko'
  },
  {
    id: 'rule-09',
    number: '09',
    category: 'cadre',
    tag: 'TITRE III — ARTICLE 9',
    tagColor: 'green',
    title: 'Préservation des Façades & Esthétique Générale',
    summary: 'Afin de préserver l’harmonie architecturale et la valeur patrimoniale de la résidence, il est strictement interdit d’installer des antennes ou paraboles individuelles sur les garde-corps ou les balcons.',
    stricteRule: 'Aucun aménagement modifiant l\'aspect extérieur de l\'immeuble ne sera toléré sans l\'accord écrit du syndic.',
    highlightText: 'Harmonie visuelle : Balcons, fenêtres et garde-corps exempts d’antennes, paraboles ou ajouts visibles.',
    targetTag: 'Esthétique Extérieure',
    objective: 'Valoriser le patrimoine immobilier des 209 appartements et maintenir une façade sobre et élégante.',
    goodPractices: [
      'Connectez vos téléviseurs exclusivement aux réseaux d’antennes collectives et câblées.',
      'Ne repeignez ni ne modifiez la couleur initiale des volets, stores ou garde-corps.',
      'Demandez l’autorisation écrite du syndic avant tout aménagement de balcon.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 9',
    pdfSize: 'PDF • 890 Ko'
  },
  {
    id: 'rule-10',
    number: '10',
    category: 'parking',
    tag: 'TITRE III — ARTICLE 10',
    tagColor: 'orange',
    title: 'Usage des Parkings Privatifs & Interdiction de Squat',
    summary: 'Les places de stationnement et boxes en sous-sol sont strictement réservés aux véhicules des résidents selon l\'attribution notariale. Interdiction formelle de stationner sur les places appartenant aux autres résidents.',
    stricteRule: 'Consigne Affichée : Respect impératif des numéros de place attribués. Interdiction de transformer les boxes en locaux de stockage commercial.',
    highlightText: 'Stationnement Privé : Interdiction stricte de garer votre véhicule sur l’emplacement d’un voisin sous peine de sabot ou mise en fourrière.',
    targetTag: 'Respect des Places Attribuées',
    objective: 'Garantir le droit de jouissance exclusive de chaque copropriétaire sur sa place titrée.',
    goodPractices: [
      'Garez votre véhicule strictement sur l’emplacement numéroté attribué à votre logement.',
      'Informez vos visiteurs qu’ils doivent utiliser les zones de stationnement extérieures.',
      'Ne stockez aucun produit inflammable ou marchandise dans votre box sous-sol.'
    ],
    pdfName: 'Règlement Intérieur — Titre III Art. 10',
    pdfSize: 'PDF • 1.1 Mo'
  },
  {
    id: 'rule-11',
    number: '11',
    category: 'travaux',
    tag: 'TITRE IV — ARTICLE 11',
    tagColor: 'red',
    title: 'Lutte Contre les Nuisances Sonores',
    summary: 'Tout bruit ou tapage diurne ou nocturne de nature à troubler la tranquillité des résidents est interdit (claquements de portières, régimes moteurs excessifs dans le parking, TV ou radio forte, machines bruyantes, déplacement brutal de meubles).',
    stricteRule: 'Confort au quotidien : Respect de la quiétude des voisins à toute heure du jour et de la nuit.',
    highlightText: 'Sérénité collective : Modérez le volume de vos appareils audiovisuels et évitez tout choc sonore.',
    targetTag: 'Nuisances Sonores',
    objective: 'Garantir le repos et la tranquillité de chaque foyer au sein de la copropriété.',
    goodPractices: [
      'Réduisez le volume de vos téléviseurs et appareils musicaux à partir de 22h00.',
      'Évitez de faire tourner les moteurs ou de claquer les portières au parking.',
      'Équipez les pieds de vos tables et chaises de patins en feutre antibrut.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 11',
    pdfSize: 'PDF • 950 Ko'
  },
  {
    id: 'rule-12',
    number: '12',
    category: 'travaux',
    tag: 'TITRE IV — ARTICLE 12',
    tagColor: 'red',
    title: 'Encadrement des Travaux & Interdiction le Dimanche',
    summary: 'Tout chantier privatifs nécessite une notification écrite préalable au syndic. Les travaux de bricolage, rénovation bruyants et aménagements sont STRICTEMENT INTERDITS TOUS LES DIMANCHES.',
    stricteRule: 'Horaires autorisés : Du Lundi au Vendredi de 09h00 à 18h00 | Samedi de 10h00 à 16h00. Strictement interdit le Dimanche et jours fériés.',
    highlightText: 'Repos du Dimanche : Aucun bruit de chantier (marteau, perceuse, ponceuse) n\'est toléré le dimanche afin de préserver la tranquillité absolue.',
    targetTag: 'Horaires de Chantier',
    objective: 'Préserver le repos dominical légitime de l’ensemble des familles de la résidence.',
    goodPractices: [
      'Planifiez vos aménagements exclusivement en semaine ou le samedi.',
      'Affichez une note d’information dans le hall 48h avant le début de vos travaux.',
      'Nettoyez quotidiennement les ascenseurs et couloirs salis par le chantier.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 12',
    pdfSize: 'PDF • 1.2 Mo'
  },
  {
    id: 'rule-13',
    number: '13',
    category: 'hygiene',
    tag: 'TITRE IV — ARTICLE 13',
    tagColor: 'green',
    title: 'Propreté du Parking & Recommandations Bacs à Ordures',
    summary: 'Propreté et hygiène irréprochables exigées dans les sous-sols et parties communes. 4 règles d\'or : fermeture hermétique des sacs, interdiction absolue des dépôts au sol, interdiction de vider des liquides (soupes/sauces), et pliage des grands cartons.',
    stricteRule: '4 Recommandations Primordiales : 1) Fermeture hermétique des sacs, 2) Aucun déchet au sol, 3) Pas de déversement de liquides piquants, 4) Pliage des emballages cartons.',
    highlightText: 'Parking Propre et Sans Odeur : Le non-respect de ces règles d\'hygiène entraîne des mauvaises odeurs persistantes et la prolifération d\'insectes.',
    targetTag: 'Gestion des Déchets',
    objective: 'Éliminer les mauvaises odeurs au parking et maintenir des locaux poubelles parfaitement hygiéniques.',
    goodPractices: [
      'Attachez solidement vos sacs poubelle avant de les déposer DANS le bac.',
      'Ne videz jamais de soupes ou sauces dans les bacs à ordures.',
      'Aplatissez vos cartons volumineux pour éviter de saturer les conteneurs.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 13',
    pdfSize: 'PDF • 870 Ko'
  },
  {
    id: 'rule-14',
    number: '14',
    category: 'cadre',
    tag: 'TITRE IV — ARTICLE 14',
    tagColor: 'green',
    title: 'Réglementation de l’Accès & de l’Usage du Toit',
    summary: 'L\'accès au toit de la résidence est réglementé. Les résidents doivent maintenir la porte d\'accès fermée à clé. L\'étendage du linge est toléré uniquement sur les structures et cordes dédiées installées sur le toit.',
    stricteRule: 'Interdiction absolue de faire sécher du linge sur les balcons. Accès et utilisation du toit formellement interdits à toute personne étrangère.',
    highlightText: 'Séchage du linge : Seules les cordes dédiées sur le toit sont autorisées pour l’étendage.',
    targetTag: 'Usage du Toit',
    objective: 'Éviter la dégradation visuelle de la façade extérieure et garantir la sécurité des toitures.',
    goodPractices: [
      'Maintenez la porte d’accès au toit constamment verrouillée à clé.',
      'Retirez votre linge du toit dès qu’il est sec pour laisser la place aux voisins.',
      'Chaque résident est pleinement responsable de ses effets déposés sur le toit.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 14',
    pdfSize: 'PDF • 790 Ko'
  },
  {
    id: 'rule-15',
    number: '15',
    category: 'cadre',
    tag: 'TITRE IV — ARTICLE 15',
    tagColor: 'green',
    title: 'Interdiction des Animaux dans les Parties Communes',
    summary: 'L\'élevage d’animaux de basse-cour ou de ferme (poules, pigeons, lapins, etc.) est strictement interdit. De plus, la circulation ou la présence prolongée d\'animaux domestiques dans les parties communes est interdite.',
    stricteRule: 'Les animaux domestiques (chiens, chats) doivent obligatoirement être tenus en laisse et ne générer aucune nuisance.',
    highlightText: 'Tenue en laisse : Circulation des animaux tolérée uniquement pour l’accès ou la sortie du bâtiment.',
    targetTag: 'Animaux Domestiques',
    objective: 'Garantir la propreté, la salubrité et la sécurité de l’ensemble des espaces partagés.',
    goodPractices: [
      'Tenez votre chien en laisse courte dans les halls, couloirs et ascenseurs.',
      'Ramassez immédiatement toute déjection accidentelle survenue dans les parties communes.',
      'Veillez à ce que les aboiements ne troublent pas la quiétude des résidents.'
    ],
    pdfName: 'Règlement Intérieur — Titre IV Art. 15',
    pdfSize: 'PDF • 830 Ko'
  },
  {
    id: 'rule-16',
    number: '16',
    category: 'parking',
    tag: 'TITRE V — ARTICLE 16',
    tagColor: 'red',
    title: 'Consignes Majeures de Circulation dans le Parking',
    summary: '3 règles de circulation obligatoires : 1) Interdiction de sortir par l\'entrée du parking, 2) Interdiction d\'entrer par la sortie, 3) Interdiction absolue d\'entrer au 2ème sous-sol en sens interdit. Vitesse limitée à 10 km/h.',
    stricteRule: 'Sens Unique Obligatoire : Interdiction de s\'engager à contre-sens dans les rampes du 1er et 2ème sous-sol. Arrêt et vigilance obligatoires au miroir de sécurité.',
    highlightText: 'Sécurité Réseau Parking : Respectez scrupuleusement la signalisation d\'entrée et de sortie pour éviter tout choc frontal.',
    targetTag: 'Sécurité Rampes Parking',
    objective: 'Prévenir tout risque de collision ou d’accident grave dans les rampes et virages sans visibilité.',
    goodPractices: [
      'Entrez exclusivement par la rampe d\'entrée signalée et sortez par la voie dédiée.',
      'Regardez le miroir de sécurité à la jonction entre le 1er et le 2ème sous-sol.',
      'Conservez vos feux de croisement allumés et roulez à moins de 10 km/h.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 16',
    pdfSize: 'PDF • 1.1 Mo'
  },
  {
    id: 'rule-17',
    number: '17',
    category: 'sports',
    tag: 'TITRE V — ARTICLE 17',
    tagColor: 'blue',
    title: 'Usage de la Salle de Sport (Jours d\'Accès & Règlement)',
    summary: 'Salle de sport ouverte de 6h30 à 22h30. Planning par sexe : Lundi/Mercredi/Vendredi (FEMMES) | Mardi/Jeudi/Samedi (HOMMES) | Dimanche (MIXTE). Réservé aux résidents de plus de 18 ans avec tenue appropriée.',
    stricteRule: 'Créneaux Stricts : Accès Femmes (L/M/V), Accès Hommes (M/J/S), Accès Mixte (Dimanche). Age minimum 18 ans. Tenue de sport et rangement du matériel obligatoires.',
    highlightText: 'Planning Officiel Affiché : Respect impératif du calendrier des jours d\'accès et rangement du matériel après séance.',
    targetTag: 'Espace Bien-être & Sport',
    objective: 'Offrir un espace de remise en forme propre, respectueux des valeurs et fonctionnel pour tous.',
    goodPractices: [
      'Vérifiez le jour d\'accès (Femmes/Hommes/Mixte) avant de vous rendre à la salle.',
      'Utilisez une serviette de protection et essuyez les bancs de musculation après usage.',
      'Remettez systématiquement les altères et tapis à leur place à la fin de votre séance.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 17',
    pdfSize: 'PDF • 1.3 Mo'
  },
  {
    id: 'rule-18',
    number: '18',
    category: 'kids',
    tag: 'TITRE V — ARTICLE 18',
    tagColor: 'green',
    title: 'Règlement du Kids Club (Enfants & Sécurité)',
    summary: 'Espace de jeux ouvert tous les jours pour les enfants de 6 ANS MAXIMUM. Présence parentale continue OBLIGATOIRE (aucun animateur présent). Retirer les chaussures, pas de nourriture ni de boisson.',
    stricteRule: 'Consignes Kids Club : 1) Age max 6 ans, 2) Surveillance parentale ininterrompue, 3) Retirer chaussures à l\'entrée, 4) Pas de nourriture/boissons dans l\'aire de jeux, 5) Ranger le matériel.',
    highlightText: 'Responsabilité Parentale : Le Syndic décline toute responsabilité en cas d\'accident. Surveillez votre enfant en permanence.',
    targetTag: 'Aire de Jeux Enfants',
    objective: 'Garantir la sécurité, l\'hygiène et le plaisir des plus petits sous la surveillance de leurs parents.',
    goodPractices: [
      'Ne laissez jamais un enfant seul sans surveillance dans l\'enceinte du Kids Club.',
      'Faites enlever les chaussures aux enfants à l\'entrée de l\'aire de jeux.',
      'Remettez en ordre les jouets et modules de mousse avant de quitter les lieux.'
    ],
    pdfName: 'Règlement Intérieur — Titre V Art. 18',
    pdfSize: 'PDF • 920 Ko'
  }
];
