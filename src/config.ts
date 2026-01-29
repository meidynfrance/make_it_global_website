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
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://make-it-global-website.vercel.app';
export const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME || 'Make It Global';
