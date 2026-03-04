/**
 * Site Configuration
 * Centralizes all external URLs and contact information
 * Environment variables take precedence over defaults
 */

// Contact Information
export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '33647770475';
export const WHATSAPP_DEFAULT_MESSAGE = `Bonjour, j'aimerais en savoir plus sur vos services de traduction multimédia.`;
export const WHATSAPP_MESSAGE_CONTACT = `Bonjour, j'aimerais discuter de comment traduire mon contenu à l'international.`;

// External Service URLs
export const CALENDLY_URL = import.meta.env.PUBLIC_CALENDLY_URL || 'https://calendly.com/contact-makeitglobal-agency/30min';

// Site Metadata
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://makeitglobal-agency.com';
export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME || 'Make It Global';

// Blog Configuration
export const BLOG_PAGE_SIZE = 12;
export const BLOG_TITLE = 'Blog - Make It Global';
export const BLOG_DESCRIPTION = 'Conseils et strategies pour internationaliser vos contenus et developper votre entreprise a l\'international.';

export const CATEGORY_LABELS: Record<string, string> = {
  'strategie-internationale': 'Strategie Internationale',
  'localisation-video': 'Localisation Video',
  'localisation-contenu': 'Localisation de Contenu',
  'croissance-b2b': 'Croissance B2B',
  'guides-sectoriels': 'Guides Sectoriels',
  'seo-international': 'SEO International',
  'outils-et-ressources': 'Outils et Ressources',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'strategie-internationale': 'Guides et conseils pour reussir votre expansion sur les marches internationaux.',
  'localisation-video': 'Tout sur le doublage, le sous-titrage et l\'adaptation de vos videos pour l\'international.',
  'localisation-contenu': 'Comment adapter vos contenus ecrits, sites web et documents pour de nouveaux marches.',
  'croissance-b2b': 'Strategies pour developper votre activite B2B a l\'echelle internationale.',
  'guides-sectoriels': 'Guides de localisation specifiques a votre secteur d\'activite.',
  'seo-international': 'Optimisez votre referencement pour les marches internationaux.',
  'outils-et-ressources': 'Outils, checklists et ressources pour vos projets de localisation.',
};
