/**
 * Test suite for analytics event tracking utilities
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { trackCalendlyClick, trackWhatsAppClick, trackFormSubmit } from './analytics';

// Mock window.gtag
const mockGtag = vi.fn();

// Setup global window mock
beforeEach(() => {
  // Clear all mocks before each test
  vi.clearAllMocks();

  // Mock console methods to avoid test output noise
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});

  // Setup window.gtag mock
  globalThis.window = {
    gtag: mockGtag,
    dataLayer: []
  } as any;
});

describe('analytics utilities', () => {
  describe('trackCalendlyClick', () => {
    it('should send calendly_click event with correct parameters', () => {
      trackCalendlyClick('contact');

      expect(mockGtag).toHaveBeenCalledWith('event', 'calendly_click', {
        event_category: 'conversion',
        event_label: 'contact',
        section: 'contact',
        cta_type: 'calendly'
      });
    });

    it('should use default section "contact" when not provided', () => {
      trackCalendlyClick();

      expect(mockGtag).toHaveBeenCalledWith('event', 'calendly_click',
        expect.objectContaining({
          section: 'contact',
          event_label: 'contact'
        })
      );
    });

    it('should use custom label when provided', () => {
      trackCalendlyClick('hero', 'custom-label');

      expect(mockGtag).toHaveBeenCalledWith('event', 'calendly_click',
        expect.objectContaining({
          event_label: 'custom-label',
          section: 'hero'
        })
      );
    });

    it('should log console message with section', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      trackCalendlyClick('hero');

      expect(consoleSpy).toHaveBeenCalledWith('📊 GA4 Event: calendly_click (section: hero)');
    });

    it('should warn and skip when gtag not available', () => {
      // Remove gtag from window
      globalThis.window.gtag = undefined;
      const warnSpy = vi.spyOn(console, 'warn');

      trackCalendlyClick('contact');

      expect(warnSpy).toHaveBeenCalledWith('GA4 not loaded - trackCalendlyClick skipped');
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('trackWhatsAppClick', () => {
    it('should send whatsapp_click event with correct parameters', () => {
      trackWhatsAppClick('hero');

      expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'hero',
        section: 'hero',
        cta_type: 'whatsapp'
      });
    });

    it('should use default section "contact" when not provided', () => {
      trackWhatsAppClick();

      expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click',
        expect.objectContaining({
          section: 'contact',
          event_label: 'contact'
        })
      );
    });

    it('should use custom label when provided', () => {
      trackWhatsAppClick('contact', 'footer-cta');

      expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click',
        expect.objectContaining({
          event_label: 'footer-cta',
          section: 'contact'
        })
      );
    });

    it('should log console message with section', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      trackWhatsAppClick('contact');

      expect(consoleSpy).toHaveBeenCalledWith('📊 GA4 Event: whatsapp_click (section: contact)');
    });

    it('should warn and skip when gtag not available', () => {
      globalThis.window.gtag = undefined;
      const warnSpy = vi.spyOn(console, 'warn');

      trackWhatsAppClick('hero');

      expect(warnSpy).toHaveBeenCalledWith('GA4 not loaded - trackWhatsAppClick skipped');
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('trackFormSubmit', () => {
    it('should send form_submit event with correct parameters', () => {
      trackFormSubmit('contact', 'email');

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit', {
        event_category: 'conversion',
        event_label: 'contact_form',
        section: 'contact',
        form_type: 'email',
        cta_type: 'form'
      });
    });

    it('should use default values when not provided', () => {
      trackFormSubmit();

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit',
        expect.objectContaining({
          section: 'contact',
          form_type: 'email',
          event_label: 'contact_form'
        })
      );
    });

    it('should support custom form types', () => {
      trackFormSubmit('footer', 'newsletter');

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit',
        expect.objectContaining({
          section: 'footer',
          form_type: 'newsletter',
          event_label: 'footer_form'
        })
      );
    });

    it('should log console message with section and type', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      trackFormSubmit('contact', 'full_contact');

      expect(consoleSpy).toHaveBeenCalledWith('📊 GA4 Event: form_submit (section: contact, type: full_contact)');
    });

    it('should warn and skip when gtag not available', () => {
      globalThis.window.gtag = undefined;
      const warnSpy = vi.spyOn(console, 'warn');

      trackFormSubmit('contact', 'email');

      expect(warnSpy).toHaveBeenCalledWith('GA4 not loaded - trackFormSubmit skipped');
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('graceful degradation', () => {
    it('should handle multiple calls without gtag gracefully', () => {
      globalThis.window.gtag = undefined;
      const warnSpy = vi.spyOn(console, 'warn');

      trackCalendlyClick('hero');
      trackWhatsAppClick('contact');
      trackFormSubmit('contact', 'email');

      expect(warnSpy).toHaveBeenCalledTimes(3);
      expect(mockGtag).not.toHaveBeenCalled();
    });

    it('should work correctly when gtag is restored', () => {
      globalThis.window.gtag = undefined;
      trackCalendlyClick('hero');
      expect(mockGtag).not.toHaveBeenCalled();

      // Restore gtag
      globalThis.window.gtag = mockGtag;
      trackCalendlyClick('contact');

      expect(mockGtag).toHaveBeenCalledTimes(1);
      expect(mockGtag).toHaveBeenCalledWith('event', 'calendly_click',
        expect.objectContaining({ section: 'contact' })
      );
    });
  });
});
