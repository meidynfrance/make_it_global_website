/**
 * Test suite for analytics event tracking utilities
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { trackWhatsAppClick, trackFormSubmit } from './analytics';

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

      trackWhatsAppClick('contact');
      trackFormSubmit('contact', 'email');

      expect(warnSpy).toHaveBeenCalledTimes(2);
      expect(mockGtag).not.toHaveBeenCalled();
    });

    it('should work correctly when gtag is restored', () => {
      globalThis.window.gtag = undefined;
      trackWhatsAppClick('hero');
      expect(mockGtag).not.toHaveBeenCalled();

      // Restore gtag
      globalThis.window.gtag = mockGtag;
      trackWhatsAppClick('contact');

      expect(mockGtag).toHaveBeenCalledTimes(1);
      expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click',
        expect.objectContaining({ section: 'contact' })
      );
    });
  });
});
