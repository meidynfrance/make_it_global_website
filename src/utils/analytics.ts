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
 * Valid section types for tracking context
 */
type SectionType = 'hero' | 'contact' | 'footer' | string;

/**
 * Type-safe check for gtag function availability
 * Prevents errors if GA4 script not loaded
 */
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
}

/**
 * Validate and sanitize section parameter
 * Ensures data quality in GA4
 */
function validateSection(section: string): string {
  const validSections: SectionType[] = ['hero', 'contact', 'footer'];
  const sanitized = section.trim().toLowerCase();

  if (!sanitized) {
    if (import.meta.env.DEV) {
      console.warn('Empty section provided, using default: contact');
    }
    return 'contact';
  }

  if (!validSections.includes(sanitized) && import.meta.env.DEV) {
    console.warn(`Non-standard section: "${sanitized}". Expected: hero, contact, footer`);
  }

  return sanitized;
}

/**
 * Track Calendly widget click event
 *
 * @param section - Where the Calendly widget is placed (e.g., 'hero', 'contact')
 * @param label - Optional additional context
 */
export function trackCalendlyClick(section: string = 'contact', label?: string): void {
  if (!isGtagAvailable()) {
    if (import.meta.env.DEV) {
      console.warn('GA4 not loaded - trackCalendlyClick skipped');
    }
    return;
  }

  const validatedSection = validateSection(section);

  try {
    window.gtag('event', 'calendly_click', {
      event_category: 'conversion',
      event_label: label || validatedSection,
      section: validatedSection,
      cta_type: 'calendly'
    });

    if (import.meta.env.DEV) {
      console.log(`📊 GA4 Event: calendly_click (section: ${validatedSection})`);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('GA4 tracking error:', error);
    }
  }
}

/**
 * Track WhatsApp button click event
 *
 * @param section - Where the WhatsApp button is placed (e.g., 'hero', 'contact')
 * @param label - Optional additional context
 */
export function trackWhatsAppClick(section: string = 'contact', label?: string): void {
  if (!isGtagAvailable()) {
    if (import.meta.env.DEV) {
      console.warn('GA4 not loaded - trackWhatsAppClick skipped');
    }
    return;
  }

  const validatedSection = validateSection(section);

  try {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: label || validatedSection,
      section: validatedSection,
      cta_type: 'whatsapp'
    });

    if (import.meta.env.DEV) {
      console.log(`📊 GA4 Event: whatsapp_click (section: ${validatedSection})`);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('GA4 tracking error:', error);
    }
  }
}

/**
 * Track contact form submission event
 *
 * @param section - Where the form is placed (typically 'contact')
 * @param formType - Type of form (e.g., 'email', 'full_contact')
 */
export function trackFormSubmit(section: string = 'contact', formType: string = 'email'): void {
  if (!isGtagAvailable()) {
    if (import.meta.env.DEV) {
      console.warn('GA4 not loaded - trackFormSubmit skipped');
    }
    return;
  }

  const validatedSection = validateSection(section);

  try {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: `${validatedSection}_form`,
      section: validatedSection,
      form_type: formType,
      cta_type: 'form'
    });

    if (import.meta.env.DEV) {
      console.log(`📊 GA4 Event: form_submit (section: ${validatedSection}, type: ${formType})`);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('GA4 tracking error:', error);
    }
  }
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
