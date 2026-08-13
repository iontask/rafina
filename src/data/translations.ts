import { Language } from '../types';

export interface RuleTranslation {
  title: string;
  summary: string;
  stricteRule?: string;
  highlightText: string;
  targetTag?: string;
  tag: string;
  objective?: string;
  goodPractices?: string[];
  pdfName?: string;
}

export const uiTranslations = {
  fr: {
    // Header
    residenceTitle: "Les Pavillons Verts",
    residenceSub: "Résidence Rafina — Aïn Sebaa",
    navHome: "Accueil",
    navResidence: "La Résidence",
    navRules: "Règlements",
    navServices: "Services & Équipements",
    navLife: "Vie Pratique",
    navSecurity: "Sécurité & Gardiennage",
    navContact: "Contact Syndic",
    residentArea: "Espace Résident",
    
    // Hero
    heroBadge: "✦ SYNDIC & PANNEAU D'AFFICHAGE OFFICIEL",
    heroTitle: "Règlement Intérieur & Notices de la Copropriété Rafina",
    heroSubtitle: "Portail officiel d'information du Syndic : dispositions de la Loi n° 18-00, consignes de sécurité, règles du parking, horaires de la salle de sport, Kids Club et tranquillité des Pavillons Verts (Aïn Sebaa).",
    cardRuleTitle: "Affiches Officielle",
    cardRuleSub: "Panneau d'affichage du syndic",
    cardSecurityTitle: "Sécurité 24/7",
    cardSecuritySub: "Gardiennage & Vidéosurveillance",
    cardReportTitle: "Signaler un Incident",
    cardReportSub: "Informer le Syndic",
    searchPlaceholder: "Rechercher une règle, une affiche, un mot-clé (ex: travaux dimanche, parking 2ème sous-sol, salle de sport, kids club, sacs poubelle)...",
    securedBadge: "Résidence Sécurisée 24h/24 & 7j/7",
    cityBadge: "Aïn Sebaa — Casablanca",

    // Bulletin Board Section (Panneau d'Affichage)
    bulletinBoardTitle: "Panneau d'Affichage Officiel du Syndic",
    bulletinBoardSub: "Consultation numérique des consignes affichées à l'entrée de la Résidence Rafina",
    openBulletinBoard: "Ouvrir le Tableau d'Affichage",
    tabKidsClub: "Kids Club",
    tabParkingCirculation: "Circulation Parking",
    tabGym: "Salle de Sport",
    tabHygiene: "Propreté & Bacs",
    tabTravaux: "Travaux Dimanche",

    // Quick Live Status Widget
    gymTodayTitle: "Planning Salle de Sport Aujourd'hui",
    kidsClubStatusTitle: "Kids Club (Aire de jeux)",
    reportIncidentBtn: "Signaler un Incident au Syndic",

    // Categories
    catAll: "Toutes les règles (18 Articles)",
    catSecurity: "Sécurité & Accès",
    catAdmin: "Gestion & Charges",
    catParking: "Circulation & Parking",
    catCadre: "Cadre de Vie & Façades",
    catTravaux: "Travaux & Nuisances",
    catHygiene: "Propreté & Bacs",
    catSports: "Salle de Sport",
    catKids: "Kids Club",

    // Main Section
    sectionTitle: "Dispositions du Règlement Intérieur (18 Articles)",
    sectionSub: "Extrait officiel du texte régissant la vie commune des 209 appartements de la Résidence Rafina",
    emergencyTitle: "En cas d'urgence",
    emergencyPhone: "06 00 00 24 7/7",
    noRulesFound: "Aucun article ne correspond à votre recherche",
    resetFilters: "Réinitialiser la recherche",
    viewAllRules: "Afficher tous les articles",

    // Cards & Modals
    details: "Consulter l'article",
    share: "Partager sur WhatsApp",
    back: "Retour aux articles",
    stricteHeader: "Disposition Stricte / Consigne Affichée",
    signalisationHeader: "Consignes d'Application",
    objectiveHeader: "Objectif Réglementaire",
    goodPracticesHeader: "Bonnes Pratiques Recommandées",
    docsHeader: "Document Officiel Associé",
    shareRuleHeader: "Partager cet article de copropriété",
    prevRule: "Article précédent",
    nextRule: "Article suivant",
    needAssistance: "Besoin d'une assistance immédiate ?",
    teamAvailable: "L'équipe de gardiennage et le syndic sont à votre service 24h/24",
    urgencySecurity: "URGENCE & SÉCURITÉ RESIDENCE",
    pdfDefault: "Règlement Intérieur Copropriété Rafina",

    // Features
    feat1Title: "Signalement Simple & Rapide",
    feat1Desc: "Informez directement le syndic de tout dysfonctionnement ou incident",
    feat2Title: "Sécurité & Gardiennage 24/7",
    feat2Desc: "Agents de sécurité qualifiés et vidéo-protection continue",
    feat3Title: "Conformité Loi n° 18-00",
    feat3Desc: "Gestion rigoureuse et convocations régulières du Conseil Syndical",
    feat4Title: "209 Copropriétaires Engagés",
    feat4Desc: "Engagés ensemble pour préserver la valeur et la quiétude de notre résidence",

    // Footer
    footerAbout: "Résidence Rafina Aïn Sebaa — Une copropriété haut de gamme de 209 appartements où sécurité, sérénité et vivre-ensemble se conjuguent au quotidien.",
    navHeader: "Navigation",
    infoHeader: "Informations Pratiques",
    contactHeader: "Contact & Urgences",
    newsletterHeader: "Bulletin de la Résidence",
    newsletterDesc: "Abonnez-vous aux circulaires d'information du syndic",
    emailPlaceholder: "Votre adresse e-mail",
    copyright: "© 2026 Résidence Rafina — Les Pavillons Verts. Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
  },

  ar: {
    // Header
    residenceTitle: "Les Pavillons Verts",
    residenceSub: "إقامة رافينا — عين السبع",
    navHome: "الرئيسية",
    navResidence: "عن الإقامة",
    navRules: "النظام الداخلي",
    navServices: "الخدمات والتجهيزات",
    navLife: "الحياة اليومية",
    navSecurity: "الأمن والحراسة",
    navContact: "اتصل بالسنديك",
    residentArea: "فضاء الساكنة",

    // Hero
    heroBadge: "✦ ميثاق السنديك وسبورة الإعلانات الرسمية",
    heroTitle: "النظام الداخلي والبلاغات الرسمية لإقامة رافينا",
    heroSubtitle: "البوابة الرسمية لإعلام الساكنة: مقتضيات القانون رقم 18-00، تعليمات السلامة، قواعد المرور بالقبو، أوقات القاعة الرياضية، نادي الأطفال وراحة بال جميع السكان بـ Les Pavillons Verts (عين السبع).",
    cardRuleTitle: "الإعلانات الرسمية",
    cardRuleSub: "لوحة إعلانات السنديك",
    cardSecurityTitle: "الأمن والحراسة 24/7",
    cardSecuritySub: "مراقبة وحراسة مستمرة",
    cardReportTitle: "الإبلاغ عن حادث",
    cardReportSub: "إشعار السنديك فوراً",
    searchPlaceholder: "البحث عن مادة، إعلان، أو كلمة مفتاحية (مثل: أشغال الأحد، موقف القبو 2، القاعة الرياضية، أكياس الأزبال)...",
    securedBadge: "إقامة مؤمنة على مدار 24/7",
    cityBadge: "عين السبع — الدار البيضاء",

    // Bulletin Board Section
    bulletinBoardTitle: "لوحة الإعلانات الرسمية للسنديك",
    bulletinBoardSub: "اطلاع رقمي مباشر على الملصقات المعلقة بمدخل إقامة رافينا",
    openBulletinBoard: "فتح لوحة الإعلانات الرسمية",
    tabKidsClub: "نادي الأطفال",
    tabParkingCirculation: "سير السيارات بالقبو",
    tabGym: "القاعة الرياضية",
    tabHygiene: "النظافة وحاويات الأزبال",
    tabTravaux: "أشغال يوم الأحد",

    // Quick Live Status Widget
    gymTodayTitle: "برنامج القاعة الرياضية اليوم",
    kidsClubStatusTitle: "نادي الأطفال (فضاء اللعب)",
    reportIncidentBtn: "إبلاغ السنديك بمخالفة / مشكل",

    // Categories
    catAll: "جميع المواد (18 مادة)",
    catSecurity: "الأمن والولوج",
    catAdmin: "الإدارة والواجبات",
    catParking: "السير والمواقف",
    catCadre: "العيش المشترك والواجهات",
    catTravaux: "الأشغال والضوضاء",
    catHygiene: "النظافة والبيئة",
    catSports: "القاعة الرياضية",
    catKids: "نادي الأطفال",

    // Main Section
    sectionTitle: "بنود النظام الداخلي (18 مادة)",
    sectionSub: "النص الرسمي المنظم للحياة المشتركة لـ 209 شقة بإقامة رافينا عين السبع",
    emergencyTitle: "في حالة الطوارئ",
    emergencyPhone: "06 00 00 24 7/7",
    noRulesFound: "لم يتم العثور على أي مادة تطابق بحثك",
    resetFilters: "إعادة ضبط البحث",
    viewAllRules: "عرض جميع المواد",

    // Cards & Modals
    details: "قراءة البند الكامل",
    share: "مشاركة عبر واتساب",
    back: "العودة للمواد",
    stricteHeader: "مقتضى صارم / تعليمات معلقة",
    signalisationHeader: "تعليمات التطبيق",
    objectiveHeader: "الهدف التنظيمي",
    goodPracticesHeader: "الممارسات الحسنة الموصى بها",
    docsHeader: "الوثيقة الرسمية المرفقة",
    shareRuleHeader: "مشاركة هذا البند مع السكان",
    prevRule: "المادة السابقة",
    nextRule: "المادة التالية",
    needAssistance: "هل تحتاج إلى مساعدة عاجلة؟",
    teamAvailable: "فريق الأمن والحراسة والسنديك في خدمتكم على مدار 24 ساعة",
    urgencySecurity: "الطوارئ والأمن بالإقامة",
    pdfDefault: "النظام الداخلي الكامل لإقامة رافينا",

    // Features
    feat1Title: "تبليغ سريع وسهل",
    feat1Desc: "أبلغ السنديك عن أي خلل أو مشكلة بنقرة واحدة",
    feat2Title: "حراسة وأمن 24/7",
    feat2Desc: "فريق حراسة مؤهل مع كاميرات مراقبة متطورة",
    feat3Title: "مطابقة للقانون 18-00",
    feat3Desc: "تسيير شفاف واجتماعات دورية لمجلس الملكية المشتركة",
    feat4Title: "209 مالك مشترك",
    feat4Desc: "معاً للحفاظ على قيمة إقامتنا وراحة بال الجميع",

    // Footer
    footerAbout: "إقامة رافينا عين السبع — مجمع سكني راقٍ بـ 209 شقة حيث يتكامل الأمان والنظافة وحسن الجوار يومياً لراحة وسعادة كل عائلة.",
    navHeader: "التصفح",
    infoHeader: "معلومات عملية",
    contactHeader: "الاتصال والطوارئ",
    newsletterHeader: "نشرة الإقامة",
    newsletterDesc: "اشترك للحصول على البلاغات والإشعارات الرسمية من السنديك",
    emailPlaceholder: "البريد الإلكتروني الخاص بك",
    copyright: "© 2026 إقامة رافينا — Les Pavillons Verts. جميع الحقوق محفوظة.",
    legal: "الشروط القانونية",
    privacy: "سياسة الخصوصية",
  }
};

export const arabicRulesContent: Record<string, RuleTranslation> = {
  'rule-01': {
    tag: "الباب الأول — المادة 1",
    title: "المادة 1 : مراقبة الولوج وإغلاق الأبواب",
    summary: "التزام صارم على جميع الملاك والسكان بإغلاق الباب الرئيسي للإقامة وأبواب المشاة لكل جناح تلقائياً. يُمنع منعاً باتاً عرقلة إغلاق الأبواب عمداً.",
    stricteRule: "أولوية قصوى: حماية الأشخاص والممتلكات. يمنع تعطيل الأبواب بواسطة أوتاد أو أجسام غريبة.",
    highlightText: "الإغلاق التلقائي: تأكد من إغلاق الباب بإحكام خلفك عند كل دخول أو خروج.",
    targetTag: "سلامة الولوج",
    objective: "حماية محيط الإقامة ومنع دخول الأشخاص غير الترخيص لهم.",
    goodPractices: [
      "تأكد من إغلاق الباب الرئيسي تماماً قبل الابتعاد.",
      "لا تضع أي عوائق لفتح الأبواب أثناء نقل الأغراض.",
      "أبلغ الحارس فوراً في حالة وجود عطب بالمفتاح الإلكتروني."
    ],
    pdfName: "النظام الداخلي — الباب 1 المادة 1"
  },
  'rule-02': {
    tag: "الباب الأول — المادة 2",
    title: "المادة 2 : المراقبة بالفيديو وحماية البيانات",
    summary: "الإقامة محمية بنظام كاميرات مراقبة مغلق تحت المسؤولية الحصرية للسنديك. يُمنع حجب رؤية الكاميرات أو إتلاف التجهيزات تحت طائلة المتابعة.",
    stricteRule: "كل إتلاف أو تخريب لمعدات المراقبة يتعرض صاحبه للمتابعة القانونية والتعويض.",
    highlightText: "كاميرات 24/7: مراقبة مستمرة للمداخل والممرات والمواقف والمصاعد.",
    targetTag: "الحماية بالفيديو",
    objective: "ضمان أمن السكان والممتلكات والحد من أعمال التخريب.",
    goodPractices: [
      "احترم جميع أجهزة المراقبة والإنذار بالمسطحات المشتركة.",
      "وجه طلبات مراجعة تسجيلات الكاميرات كتابياً للسنديك حصراً.",
      "أبلغ الأمن فور ملاحظة أي تصرف مشبوه أو تخريب."
    ],
    pdfName: "النظام الداخلي — الباب 1 المادة 2"
  },
  'rule-03': {
    tag: "الباب الأول — المادة 3",
    title: "المادة 3 : تنظيم دخول الموزعين وعمال التوصيل",
    summary: "يُمنع منعاً باتاً صعود عمال التوصيل (الوجبات، الطرود، البريد السريع) إلى الطوابق. يتم استلام الطلبيات حصرياً عند المدخل الرئيسي للإقامة.",
    stricteRule: "استثناء: يُسمح بصعود الموزعين فقط للحالات الخاصة بالمرض أو عدم القدرة على التنقل بعد إشعار مسبق لرجال الأمن.",
    highlightText: "نقطة الاستلام: استقبال الموزعين واستلام الطرود عند نقطة الحراسة بالمدخل الرئيسي.",
    targetTag: "ضبط حركة الغرباء",
    objective: "منع تجول الغرباء داخل الممرات والحفاظ على سكينة وأمن الساكنة.",
    goodPractices: [
      "انزل إلى نقطة الحراسة بالمدخل الرئيسي لاستلام وجباتك وطرودك.",
      "أبلغ رجال الأمن مسبقاً إذا كنت بحاجة لرخصة صعود لظروف صحية.",
      "لا تشارك الرموز الإلكترونية لدخول المشاة مع شركات التوصيل."
    ],
    pdfName: "النظام الداخلي — الباب 1 المادة 3"
  },
  'rule-04': {
    tag: "الباب الثاني — المادة 4",
    title: "المادة 4 : الالتزام بأداء واجبات السنديك (واجبات الاشتراك)",
    summary: "وفقاً للقانون رقم 18-00، يلتزم كل مالك بأداء حصته الشهرية من الواجبات في تاريخ الاستحقاق المحدد من طرف السنديك لضمان استمرار الخدمات المشتركة.",
    stricteRule: "الواجبات الشهرية ضرورية لتمويل الحراسة، النظافة، المصاعد، الكهرباء، القاعة الرياضية، المسجد، ونادي الأطفال.",
    highlightText: "القانون 18-00: الأداء المنتظم يضمن جودة وسير جميع خدمات ومرافق الإقامة.",
    targetTag: "التسيير المالي",
    objective: "الحفاظ على الملاءة المالية للإقامة وضمان الاستمرارية العالية لكافة الخدمات.",
    goodPractices: [
      "فضل التحويل البنكي التلقائي للالتزام بتاريخ الاستحقاق الشهري.",
      "احتفظ بتوصيلات وسندات الأداء الصادرة عن مكتب السنديك.",
      "اطلع على التقرير المالي السنوي المعروض في الجمع العام للملاك."
    ],
    pdfName: "النظام الداخلي — الباب 2 المادة 4"
  },
  'rule-05': {
    tag: "الباب الثاني — المادة 5",
    title: "المادة 5 : البيع والكراء وتنظيم الإيجار",
    summary: "البيع: إبراء الذمة (Quitus) من السنديك إجباري قبل البيع لدى الموثق. الكراء طويل الأمد: موافاة السنديك ببيانات الكاري، عقد الكراء المسجل، وشهادة الإقامة للأجانب.",
    stricteRule: "يُحظر الكراء الفرعي والاهتظاظ. في حالة عدم سداد الواجبات، يتخذ السنديك إجراءات قانونية قد تصل لإنهاء الكراء أو منع البيع.",
    highlightText: "مسؤولية المالك: المالك مسؤول قانونياً ومالياً عن أي أضرار أو إزعاج يسببه المكتري.",
    targetTag: "تنظيم العقار",
    objective: "ضمان الشفافية الإدارية، منع الاكتظاظ السكني وتفادي النزاعات اللوجستية.",
    goodPractices: [
      "سلم ملف المكتري كاملاً للسنديك قبل تسليمه مفاتيح الشقة.",
      "قم بتسوية كافة ديون الواجبات لدى السنديك قبل عقد البيع.",
      "أرفق نسخة من النظام الداخلي كملحق إجباري لعقد الكراء."
    ],
    pdfName: "النظام الداخلي — الباب 2 المادة 5"
  },
  'rule-06': {
    tag: "الباب الثاني — المادة 6",
    title: "المادة 6 : صفة العضو المستفيد في اتحاد الملاك",
    summary: "كل مقيم فعلي (مالك، مكتري شرعي، وكيل) يعتبر عضواً مستفيداً شرط تقديم الوثائق للإدارة (شهادة الملكية، عقد كراء مسجل، أو اشتراك SRM/ONEE باسمه).",
    stricteRule: "الاستفادة من مرافق وخدمات الإقامة مشروطة بتسوية الوضعية الإدارية للقاطن.",
    highlightText: "إثبات السكن: تقديم عقد اشتراك عداد الماء (SRM) والكهرباء (ONEE) باسم القاطن.",
    targetTag: "سجل الساكنة",
    objective: "تحيين السجل الرسمي للمقيمين المترخيص لهم باستعمال المرافق الجماعية.",
    goodPractices: [
      "قدم شواهد الاشتراك في عدادات الماء والكهرباء فور انتقالك للشقة.",
      "جدد بيانات هاتفك وبريدك الإلكتروني لدى مكتب السنديك.",
      "أبرز الوكالة الرسمية إذا كنت تنوب عن المالك الأصلي."
    ],
    pdfName: "النظام الداخلي — الباب 2 المادة 6"
  },
  'rule-07': {
    tag: "الباب الثاني — المادة 7",
    title: "المادة 7 : الوساطة وحل النزاعات وطرق الطعن",
    summary: "أي مخالفة للنظام الداخلي تتم معالجتها أولاً عبر الوساطة الودية مع مجلس السنديك. وفي حالة عدم التوصل لحل، يُحال الملف على السلطات المختصة أو القضاء.",
    stricteRule: "أولوية قصوى للحوار والوساطة الودية داخل مجلس الملكية المشتركة.",
    highlightText: "طرق الطعن: مسطرة متدرجة من الصلح الداخلي إلى السلطات المحلية والمحاكم.",
    targetTag: "الوساطة والصلح",
    objective: "الحفاظ على أواصر حسن الجوار وحل النزاعات بطرق سلمية ومباشرة.",
    goodPractices: [
      "وجه شكاية كتابية موضوعية للسنديك تشرح فيها طبيعة المشكل.",
      "شارك بفعالية في جلسات الصلح التي ينظمها مكتب السنديك.",
      "احترم الحلول والتسويات الودية المصادق عليها."
    ],
    pdfName: "النظام الداخلي — الباب 2 المادة 7"
  },
  'rule-08': {
    tag: "الباب الثالث — المادة 8",
    title: "المادة 8 : التخصيص الحصري للشقق (السكن فقط)",
    summary: "شقق إقامة رافينا مخصصة حصرياً للسكن. يُمنع منعاً باتاً ممارسة أي نشاط تجاري أو مهني أو حرفي غير مرخص به داخل الشقق السكنية.",
    stricteRule: "يُحظر تماماً تحويل الشقة إلى مكتب تجاري، عيادة طبية، ورشة، أو محل استقبال زبناء.",
    highlightText: "استعمال سكني محض: الحفاظ على سكينة وطبيعة المجمع السكني الراقية.",
    targetTag: "تخصيص العقار",
    objective: "الحفاظ على الطابع السكني المحض والهدوء لكافة العائلات والقاطنين.",
    goodPractices: [
      "خصص شقتك حصرياً لسكنك الشخصي أو العائلي.",
      "لا تستقبل أي زبناء أو موظفين في إطار نشاط تجاري بالشقة.",
      "أبلغ السنديك فور ملاحظة تغيير غير قانوني لنشاط إحدى الشقق."
    ],
    pdfName: "النظام الداخلي — الباب 3 المادة 8"
  },
  'rule-09': {
    tag: "الباب الثالث — المادة 9",
    title: "المادة 9 : الحفاظ على الواجهات والجمالية العامة",
    summary: "للحفاظ على التناسق المعماري للإقامة، يُمنع منعاً باتاً تثبيت الصواري أو الهوائيات المقعرة (البارابول) على الشرفات أو النوافذ أو الواجهات.",
    stricteRule: "لا يُقبل أي تغيير للمظهر الخارجي للمبنى دون موافقة كتابية صريحة من السنديك.",
    highlightText: "تناسق المعمار: الشرفات والنوافذ خالية تماماً من البارابول والتغييرات العشوائية.",
    targetTag: "الجمالية المعمارية",
    objective: "الرفع من القيمة العقارية لـ 209 شقة والحفاظ على واجهات أنيقة وموحدة.",
    goodPractices: [
      "ربط أجهزة التلفاز حصرياً بالشبكة المقعرة الجماعية للإقامة.",
      "تجنب إعادة صباغة أو تغيير لون الستائر والشرفات والمشربيات.",
      "اطلب موافقة كتابية من السنديك قبل أي تهيئة مرئية من الخارج."
    ],
    pdfName: "النظام الداخلي — الباب 3 المادة 9"
  },
  'rule-10': {
    tag: "الباب الثالث — المادة 10",
    title: "المادة 10 : استعمال المرائب الخاصة ومنع الوقوف بأماكن الغير",
    summary: "أماكن التوقف بالقبو مخصصة حصرياً لسيارات السكان حسب عقود الملكية الموثقة. يُمنع منعاً باتاً الركن في الأماكن المخصصة للجيران أو بالسطح التجاري.",
    stricteRule: "إعلان معلق بالقبو: احترام رقم المكان المخصص. يمنع منعاً باتاً الركن في مكان غير مكانك.",
    highlightText: "مرآب خاص: يمنع الركن في أماكن السكان الآخرين تحت طائلة التثبيت بالقفل أو السحب.",
    targetTag: "احترام الأماكن المخصصة",
    objective: "ضمان حق الاستغلال الحصري لكل مالك لمكانه المسجل بالعقد.",
    goodPractices: [
      "اركن سيارتك حصرياً في رقم المكان الخاص بشقتك.",
      "أخبر زوارك باستخدام مواقف السيارات الخارجية خارج الإقامة.",
      "لا تخزن مواد قابلة للاشتعال أو بضائع داخل مرأبك بالقبو."
    ],
    pdfName: "النظام الداخلي — الباب 3 المادة 10"
  },
  'rule-11': {
    tag: "الباب الرابع — المادة 11",
    title: "المادة 11 : محاربة الضوضاء والإزعاج الصوتي",
    summary: "يُمنع أي ضجيج أو إزعاج ليلي أو نهاراً يمس بسكينة السكان (إغلاق الأبواب بقوة، أصوات المحركات المرتفعة بالقبو، التلفاز المرتفع، أو نقل الأثاث المزعج).",
    stricteRule: "راحة يومية: احترام هدوء وراحة الجيران على مدار 24 ساعة وفي جميع الأوقات.",
    highlightText: "سكينة جماعية: خفض مستوى الصوت في الأجهزة وتجنب أي صدمات صوتية مفاجئة.",
    targetTag: "الهدوء والراحة",
    objective: "ضمان الطمأنينة وراحة النوم والسكينة لكل العائلات بالإقامة.",
    goodPractices: [
      "اخفض صوت التلفاز والأجهزة الصوتية ابتداءً من الساعة 10 مساءً.",
      "تجنب تشغيل محركات السيارات بضغط مرتفع أو إغلاق الأبواب بعنف بالقبو.",
      "ضع منصات مطاطية تحت أرجل الطاولات والكراسي لمنع الاحتكاك."
    ],
    pdfName: "النظام الداخلي — الباب 4 المادة 11"
  },
  'rule-12': {
    tag: "الباب الرابع — المادة 12",
    title: "المادة 12 : تنظيم الأشغال ومنعها منعاً باتاً يوم الأحد",
    summary: "يجب إشعار السنديك مسبقاً بكل ورش إصلاح. أوقات العمل: من الاثنين إلى الجمعة (09:00 إلى 18:00)، والسبت (10:00 إلى 16:00). يُمنع العمل تماماً يوم الأحد.",
    stricteRule: "أوقات مسموحة: الاثنين-الجمعة (09h-18h) والسبت (10h-16h). يُمنع منعاً باتاً القيام بأعمال البناء أو التثقيب يوم الأحد والعياد.",
    highlightText: "راحة يوم الأحد: تُمنع أشغال Bricolage والتثقيب والإصلاحات المزعجة يوم الأحد حفاظاً على راحة الجيران.",
    targetTag: "أوقات الإصلاحات والورشات",
    objective: "الحفاظ على الراحة المشروعة لكل العائلات يوم الأحد والأعياد.",
    goodPractices: [
      "برمج أشغال شقتك حصرياً خلال أيام الأسبوع أو يوم السبت.",
      "ضع إشعاراً ودياً بالمدخل قبل 48 ساعة من انطلاق أشغال الهدم أو الحفر.",
      "نظف المصعد والممرات يومياً بعد مغادرة العمال للورش."
    ],
    pdfName: "النظام الداخلي — الباب 4 المادة 12"
  },
  'rule-13': {
    tag: "الباب الرابع — المادة 13",
    title: "المادة 13 : نظافة موقف السيارات وتوصيات حاويات النفايات",
    summary: "نظافة ممتازة واجابة بالقبو. 4 توصيات رئيسية: 1) إغلاق أكياس القمامة بإحكام، 2) يمنع رمي النفايات بالارض، 3) يمنع تفريغ السوائل (الحساء/الصلصات)، 4) طي الصناديق والكرتون.",
    stricteRule: "4 توصيات رئيسية: 1) إغلاق الأكياس بإحكام، 2) عدم إيداع الأزبال على الأرض، 3) التسيير الصارم للسوائل، 4) طي الكرتون.",
    highlightText: "مرآب نظيف وبدون روائح: عدم احترام هذه التوصيات يتسبب في روائح كريهة وانتشار الحشرات بالقبو.",
    targetTag: "إدارة النفايات والنظافة",
    objective: "القضاء التام على الروائح الكريهة بالقبو والحفاظ على بيئة صحية ونظيفة.",
    goodPractices: [
      "أربط أكياس القمامة جيداً قبل وضعها داخل الحاوية.",
      "لا تفرغ إطلاقاً بقايا السوائل أو الصلصات داخل الحاويات.",
      "قم بضغط وطي الكرتون الكبير قبل رميه لتوفير المساحة."
    ],
    pdfName: "النظام الداخلي — الباب 4 المادة 13"
  },
  'rule-14': {
    tag: "الباب الرابع — المادة 14",
    title: "المادة 14 : تنظيم الولوج للسطح ونشر الغسيل",
    summary: "الولوج للسطح مؤطر ويجب إبقاء الباب مغلقاً بالمفتاح. يُسمح بنشر الغسيل حصرياً في الحبال والأسلاك المخصصة بالسطح.",
    stricteRule: "يُمنع منعاً باتاً تعليق الغسيل على واجهات الشرفات أو النوافذ. يُمنع دخول الغرباء للسطح.",
    highlightText: "تنشيف الملابس: حبال السطح المخصصة هي الفضاء الوحيد المسموح به.",
    targetTag: "استعمال السطح",
    objective: "تفادي تشويه واجهة العمارة بالغسيل وضمان أمن وسلامة السطح.",
    goodPractices: [
      "تأكد من إغلاق باب السطح بالمفتاح بعد كل استخدام.",
      "اجمع غسيلك فور جفافه لترك المجال لباقي الجيران.",
      "لا تترك الأطفال يصعدون للسطح بدون مرافقة شخص بالغ."
    ],
    pdfName: "النظام الداخلي — الباب 4 المادة 14"
  },
  'rule-15': {
    tag: "الباب الرابع — المادة 15",
    title: "المادة 15 : تنظيم تربية وحركة الحيوانات بالأجزاء المشتركة",
    summary: "يُمنع تربية حيوانات المزرعة أو الدواجن. يُمنع التواجد المطول للحيوانات الأليفة في الممرات والسلالم والسطح والحدائق.",
    stricteRule: "يجب إبقاء الحيوانات الأليفة (الكلاب، القطط) مقيدة بالرباط (Laisse) أثناء المرور وعدم التسبب في أي إزعاج.",
    highlightText: "الرباط إجباري: مرور الحيوانات مسموح فقط لخروجها ودخولها برفقة صاحبها.",
    targetTag: "الحيوانات الأليفة",
    objective: "ضمان نظافة وسلامة وسكينة جميع القاطنين بالمساحات المشتركة.",
    goodPractices: [
      "امسك كلبك برباط قصير داخل المصاعد والممرات والسلالم.",
      "اجمع فوراً أي فضلات غير مقصودة بالمساحات الخضراء.",
      "احرص على ألا يزعج نباح الكلاب نوم وراحة الجيران."
    ],
    pdfName: "النظام الداخلي — الباب 4 المادة 15"
  },
  'rule-16': {
    tag: "الباب الخامس — المادة 16",
    title: "المادة 16 : تعليمات السير الرئيسية بموقف السيارات (القبو)",
    summary: "3 تعليمات سير إجبارية: 1) يمنع الخروج من باب الدخول، 2) يمنع الدخول من باب الخروج، 3) يمنع الدخول للقبو الثاني في اتجاه ممنوع. السرعة محددة في 10 كلم/س.",
    stricteRule: "اتجاه واحد إجباري: يمنع السياقة عكس الاتجاه في منحدرات القبو الأول والثاني. التوقف والانتباه إجباري عند المرآة المقعرة.",
    highlightText: "سلامة حركة السيارات: احترم بدقة الإشارات بالمدخل والمخرج لتفادي الاصطدام المباشر.",
    targetTag: "سلامة منحدرات القبو",
    objective: "منع حوادث الاصطدام بالقبو والمنحدرات وضعيفة الرؤية.",
    goodPractices: [
      "ادخل حصرياً من المنحدر المخصص للدخول واخرج من المنحدر الخاص بالخروج.",
      "انظر جيدا في المرآة المقعرة عند ملتقى القبو 1 والقبو 2.",
      "ابق أضواء السيارة مشتعلة وسر بأقل من 10 كلم في الساعة."
    ],
    pdfName: "النظام الداخلي — الباب 5 المادة 16"
  },
  'rule-17': {
    tag: "الباب الخامس — المادة 17",
    title: "المادة 17 : القاعة الرياضية (جدول الأيام والقانون الداخلي)",
    summary: "القاعة مفتوحة من 6:30 صباحاً إلى 10:30 ليلاً. الأيام: الاثنين/الأربعاء/الجمعة (نساء) | الثلاثاء/الخميس/السبت (رجال) | الأحد (مختلط). السن الأدنى 18 سنة والزي الرياضي إجباري.",
    stricteRule: "جدول صارم: دخول النساء (L/M/V)، دخول الرجال (M/J/S)، دخول مختلط (الأحد). السن الأدنى 18 سنة وترتيب المعدات إجباري.",
    highlightText: "البرنامج المعلق رسمياً: احترام جدول أيام الدخول وإعادة الأثقال والمعدات لمكانها بعد الحصة.",
    targetTag: "القاعة الرياضية والياقة",
    objective: "توفير فضاء رياضي نظيف، محترم للقيم ومريح لجميع سكان الإقامة.",
    goodPractices: [
      "تأكد من اليوم المخصص (نساء/رجال/مختلط) قبل توجهك للقاعة.",
      "استخدم منشفة شخصية وقم بتعقيم الأجهزة بعد تمارينك.",
      "أعد الأثقال والأجهزة لمكانها فور انتهائك من التمرين."
    ],
    pdfName: "النظام الداخلي — الباب 5 المادة 17"
  },
  'rule-18': {
    tag: "الباب الخامس — المادة 18",
    title: "المادة 18 : قانون نادي الأطفال Kids Club (السلامة والنظافة)",
    summary: "فضاء اللعب مفتوح يومياً للأطفال حتى 6 سنوات كحد أقصى. الحضور والمراقبة المستمرة للوالدين إجبارية (بدون منشط). خلع الأحذية، يمنع الأكل والشرب.",
    stricteRule: "تعليمات نادي الأطفال: 1) السن الأقصى 6 سنوات، 2) مرافقة ومراقبة أولياء الأمور مستمرة، 3) خلع الأحذية، 4) يمنع الأكل والشرب بالداخل، 5) ترتيب اللعب.",
    highlightText: "مسؤولية الوالدين: السنديك غير مسؤول عن أي حادث. راقب طفلك طيلة تواجده بمركز اللعب.",
    targetTag: "فضاء لعب الأطفال",
    objective: "ضمان أمن ونظافة ومتعة الأطفال الصغار تحت مراقبة أوليائهم.",
    goodPractices: [
      "لا تترك طفلك بمفرده إطلاقاً داخل نادي الأطفال Kids Club.",
      "احرص على خلع أحذية الأطفال عند مدخل فضاء اللعب.",
      "أعد ترتيب الألعاب والوحدات السفنجية قبل مغادرة المكان."
    ],
    pdfName: "النظام الداخلي — الباب 5 المادة 18"
  }
};
