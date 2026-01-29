/**
 * Analytics Event Tracking Utilities
 *
 * Provides helper functions for tracking conversion events in Google Analytics 4
 *
 * Usage:
 * ```typescript
 * import { trackCalendlyClick } from '@/utils/analytics';
 *
 * // In component
 * onClick={() => trackCalendlyClick('contact')}
 * ```
 *
 * References:
 * - GA4 Events API: https://developers.google.com/analytics/devguides/collection/ga4/events
 * - Astro TypeScript: https://docs.astro.build/en/guides/typescript/
 */

/**
 * Type-safe check for gtag function availability
 * Prevents errors if GA4 script not loaded
 */
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
}

/**
 * Track Calendly widget click event
 *
 * @param section - Where the Calendly widget is placed (e.g., 'hero', 'contact')
 * @param label - Optional additional context
 */
export function trackCalendlyClick(section: string = 'contact', label?: string): void {
  if (!isGtagAvailable()) {
    console.warn('GA4 not loaded - trackCalendlyClick skipped');
    return;
  }

  window.gtag('event', 'calendly_click', {
    event_category: 'conversion',
    event_label: label || section,
    section: section,
    cta_type: 'calendly'
  });

  console.log(`📊 GA4 Event: calendly_click (section: ${section})`);
}

/**
 * Track WhatsApp button click event
 *
 * @param section - Where the WhatsApp button is placed (e.g., 'hero', 'contact')
 * @param label - Optional additional context
 */
export function trackWhatsAppClick(section: string = 'contact', label?: string): void {
  if (!isGtagAvailable()) {
    console.warn('GA4 not loaded - trackWhatsAppClick skipped');
    return;
  }

  window.gtag('event', 'whatsapp_click', {
    event_category: 'conversion',
    event_label: label || section,
    section: section,
    cta_type: 'whatsapp'
  });

  console.log(`📊 GA4 Event: whatsapp_click (section: ${section})`);
}

/**
 * Track contact form submission event
 *
 * @param section - Where the form is placed (typically 'contact')
 * @param formType - Type of form (e.g., 'email', 'full_contact')
 */
export function trackFormSubmit(section: string = 'contact', formType: string = 'email'): void {
  if (!isGtagAvailable()) {
    console.warn('GA4 not loaded - trackFormSubmit skipped');
    return;
  }

  window.gtag('event', 'form_submit', {
    event_category: 'conversion',
    event_label: `${section}_form`,
    section: section,
    form_type: formType,
    cta_type: 'form'
  });

  console.log(`📊 GA4 Event: form_submit (section: ${section}, type: ${formType})`);
}

/**
 * TypeScript global augmentation for gtag
 * Prevents TypeScript errors when accessing window.gtag
 */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
