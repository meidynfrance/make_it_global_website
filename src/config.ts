/**
 * Site Configuration
 * Centralizes all external URLs, contact info, and navigation
 */

// Contact
export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '33647770475';
export const WHATSAPP_DEFAULT_MESSAGE = `Bonjour, j'aimerais discuter d'un projet d'implémentation IA.`;
export const WHATSAPP_MESSAGE_CONTACT = `Bonjour, j'aimerais en savoir plus sur vos services IA pour mon entreprise.`;
export const CONTACT_EMAIL = 'contact@makeitglobal-agency.com';

// Booking link — Google Calendar appointment scheduling (CEO)
export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL || 'https://calendar.app.google/TKgeUJnmeS56BdrC6';

// Site Metadata
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.makeitglobal-agency.com';
export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME || 'Make It Global';
export const SITE_TAGLINE = "Agence d'implémentation IA pour entreprises";
export const SITE_DESCRIPTION = "Nous concevons et déployons des outils métier, agents IA, automatisations et SEO automatisé pour les PME et ETI. De la stratégie à la production.";

// Navigation principale
export const NAV_SERVICES = [
  { href: '/services/implementation-ia',   label: "Implémentation IA",       description: "Stratégie et déploiement complet en entreprise" },
  { href: '/services/outils-metier',       label: "Outils métier sur-mesure", description: "Des interfaces internes pensées pour votre métier" },
  { href: '/services/saas-agents-ia',      label: "Produits & assistants IA", description: "Des assistants autonomes qui travaillent pour vous" },
  { href: '/services/automatisations',     label: "Automatisations",          description: "Vos tâches répétitives, automatisées de bout en bout" },
  { href: '/services/seo-automatise',      label: "SEO automatisé",           description: "Contenu IA et référencement automatisé" },
];

export const NAV_RESOURCES = [
  { href: '/blog/',              label: 'Blog IA' },
  { href: '/blog/localisation/', label: 'Blog Localisation' },
  { href: '/audit-ia/',          label: 'Audit IA gratuit' },
];

// Blog
export const BLOG_PAGE_SIZE = 12;
export const BLOG_TITLE = 'Blog IA — Make It Global';
export const BLOG_DESCRIPTION = "Stratégies, méthodes et retours d'expérience sur l'implémentation IA en entreprise.";

export const BLOG_LOCALISATION_TITLE = 'Blog Localisation — Make It Global';
export const BLOG_LOCALISATION_DESCRIPTION = "Notre archive historique : conseils d'internationalisation, traduction et localisation de contenus.";

export const CATEGORY_LABELS: Record<string, string> = {
  // Localisation (historique)
  'strategie-internationale': 'Stratégie Internationale',
  'localisation-video':       'Localisation Vidéo',
  'localisation-contenu':     'Localisation de Contenu',
  'croissance-b2b':           'Croissance B2B',
  'guides-sectoriels':        'Guides Sectoriels',
  'seo-international':        'SEO International',
  'outils-et-ressources':     'Outils et Ressources',
  // IA (nouveau)
  'implementation-ia':        'Implémentation IA',
  'outils-metier':            'Outils Métier',
  'agents-ia':                'Agents IA',
  'automatisation':           'Automatisation',
  'seo-ia':                   'SEO IA',
  'retours-experience':       'Retours d\'expérience',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'strategie-internationale': "Guides et conseils pour réussir votre expansion sur les marchés internationaux.",
  'localisation-video':       "Doublage, sous-titrage et adaptation de vos vidéos pour l'international.",
  'localisation-contenu':     "Adapter vos contenus écrits, sites web et documents pour de nouveaux marchés.",
  'croissance-b2b':           "Stratégies pour développer votre activité B2B à l'échelle internationale.",
  'guides-sectoriels':        "Guides de localisation spécifiques à votre secteur d'activité.",
  'seo-international':        "Optimiser votre référencement pour les marchés internationaux.",
  'outils-et-ressources':     "Outils, checklists et ressources pour vos projets de localisation.",
  'implementation-ia':        "Comment intégrer concrètement l'IA dans les processus de votre entreprise.",
  'outils-metier':            "Concevoir des outils internes sur-mesure dopés à l'IA.",
  'agents-ia':                "Concevoir et déployer des agents IA autonomes en production.",
  'automatisation':           "Automatiser vos workflows critiques avec n8n, Make et custom.",
  'seo-ia':                   "SEO programmatique et content IA pour scaler votre organique.",
  'retours-experience':       "Études de cas et retours d'expérience clients.",
};
