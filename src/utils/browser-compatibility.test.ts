/**
 * Browser Compatibility Validation Tests (Story 8.4)
 *
 * These tests validate the HTML structure and integrations
 * that must work across all browsers (Chrome, Firefox, Safari, Edge).
 *
 * Automated tests cover:
 * - Third-party script integration (Calendly, GA4)
 * - WhatsApp link format validation
 * - Video embed URL structure
 * - Accessibility attributes (ARIA, skip links)
 * - Meta tags for social sharing
 *
 * Manual tests required (cannot be automated):
 * - Calendly SDK initialization and modal display
 * - WhatsApp opens correctly (desktop vs mobile)
 * - GA4 events in Network tab
 * - Video lazy loading and playback
 * - Visual responsive design at breakpoints
 * - Keyboard navigation with focus indicators
 * - Screen reader announcements
 */

import { describe, it, expect } from 'vitest';

describe('Browser Compatibility - HTML Structure Validation', () => {
  // Production URL to test
  const PRODUCTION_URL = 'https://make-it-global-website.vercel.app';

  /**
   * Fetch the production HTML for testing
   * This simulates a browser request to validate server-side rendering
   */
  async function fetchProductionHTML(): Promise<string> {
    const response = await fetch(PRODUCTION_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${PRODUCTION_URL}: ${response.status}`);
    }
    return response.text();
  }

  describe('Third-Party Integrations (AC #5)', () => {
    it('should include Calendly SDK script in <head>', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('https://assets.calendly.com/assets/external/widget.js');
      expect(html).toContain('async'); // Calendly should load asynchronously
    });

    it('should include Google Analytics 4 script with correct ID', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('https://www.googletagmanager.com/gtag/js');
      expect(html).toContain('G-EPTXGX09QC'); // GA4 Measurement ID
      expect(html).toContain('window.dataLayer'); // dataLayer initialization
    });

    it('should have WhatsApp links with correct format', async () => {
      const html = await fetchProductionHTML();

      // WhatsApp link format: https://wa.me/{number}?text={message}
      expect(html).toContain('https://wa.me/33647770475');
      expect(html).toContain('?text='); // Message pre-fill present

      // Verify URL encoding (accents should be encoded)
      expect(html).toMatch(/text=.*%/); // URL encoded characters present
    });

    it('should have YouTube video embeds with youtube-nocookie domain', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('youtube-nocookie.com'); // Privacy-enhanced mode
      expect(html).toContain('embed/'); // Embed URL format
      expect(html).toContain('rel=0'); // Disable related videos
      expect(html).toContain('modestbranding=1'); // Minimize YouTube branding
    });

    it('should have Vimeo player domain in video embeds', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('player.vimeo.com'); // Vimeo player domain
    });

    it('should preconnect to third-party CDNs for performance', async () => {
      const html = await fetchProductionHTML();

      // Preconnect to video CDNs
      expect(html).toContain('<link rel="preconnect" href="https://www.youtube-nocookie.com">');
      expect(html).toContain('<link rel="preconnect" href="https://player.vimeo.com">');

      // Preconnect to Calendly
      expect(html).toContain('<link rel="preconnect" href="https://assets.calendly.com">');

      // DNS prefetch for GA4
      expect(html).toContain('dns-prefetch');
      expect(html).toContain('googletagmanager.com');
    });
  });

  describe('Accessibility Attributes (AC #1-4)', () => {
    it('should have skip links for keyboard navigation', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('class="skip-links"');
      expect(html).toContain('href="#main-content"');
      expect(html).toContain('Passer au contenu principal'); // French skip link text
    });

    it('should have ARIA labels on interactive elements', async () => {
      const html = await fetchProductionHTML();

      // Calendly buttons should have aria-label
      expect(html).toMatch(/aria-label="[^"]*appel[^"]*"/i);

      // WhatsApp buttons should have aria-label
      expect(html).toMatch(/aria-label="[^"]*WhatsApp[^"]*"/i);

      // Sections should have aria-label or aria-labelledby
      expect(html).toContain('aria-label=');
    });

    it('should have proper heading hierarchy', async () => {
      const html = await fetchProductionHTML();

      // Should have single <h1>
      const h1Count = (html.match(/<h1[^>]*>/g) || []).length;
      expect(h1Count).toBe(1);

      // Should have <h2> section headings
      expect(html).toContain('<h2');

      // Should have <h3> subsection headings
      expect(html).toContain('<h3');
    });

    it('should have alt text on images', async () => {
      const html = await fetchProductionHTML();

      // All <img> tags should have alt attribute
      const imgTags = html.match(/<img[^>]*>/g) || [];
      for (const imgTag of imgTags) {
        expect(imgTag).toContain('alt=');
      }
    });

    it('should have lang attribute on <html> tag', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('<html lang="fr">');
    });
  });

  describe('Meta Tags for SEO and Social Sharing (AC #1-4)', () => {
    it('should have Open Graph meta tags', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('property="og:title"');
      expect(html).toContain('property="og:description"');
      expect(html).toContain('property="og:type"');
      expect(html).toContain('property="og:url"');
      expect(html).toContain('property="og:image"');
    });

    it('should have Twitter Card meta tags', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('name="twitter:card"');
      expect(html).toContain('name="twitter:title"');
      expect(html).toContain('name="twitter:description"');
      expect(html).toContain('name="twitter:image"');
    });

    it('should have viewport meta tag for responsive design', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    });

    it('should have charset meta tag', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('<meta charset="UTF-8">');
    });

    it('should have description meta tag', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('<meta name="description"');
      expect(html).toMatch(/content="[^"]{50,}/); // Description at least 50 chars
    });
  });

  describe('Responsive Design Breakpoints (AC #1-4)', () => {
    it('should have Tailwind responsive classes', async () => {
      const html = await fetchProductionHTML();

      // Should use Tailwind breakpoint prefixes
      expect(html).toMatch(/class="[^"]*md:/); // md: breakpoint (768px+)
      expect(html).toMatch(/class="[^"]*lg:/); // lg: breakpoint (1024px+)
    });

    it('should have mobile-first layout classes', async () => {
      const html = await fetchProductionHTML();

      // Mobile-first: base classes without prefix, then md:, lg:
      expect(html).toContain('flex-col'); // Mobile: column layout
      expect(html).toContain('md:flex-row'); // Desktop: row layout
    });

    it('should have min-height for touch targets (44px)', async () => {
      const html = await fetchProductionHTML();

      // Buttons should have min-h-[44px] for accessibility
      expect(html).toContain('min-h-[44px]');
    });
  });

  describe('Performance Optimizations (AC #1-4, #7)', () => {
    it('should have lazy loading on images', async () => {
      const html = await fetchProductionHTML();

      // Non-LCP images should have loading="lazy"
      expect(html).toContain('loading="lazy"');
    });

    it('should have eager loading on hero image (LCP)', async () => {
      const html = await fetchProductionHTML();

      // Hero background should load eagerly for LCP
      expect(html).toContain('loading="eager"');
      expect(html).toContain('fetchpriority="high"');
    });

    it('should have async scripts for third-party resources', async () => {
      const html = await fetchProductionHTML();

      // Calendly and GA4 should load asynchronously
      const asyncScripts = html.match(/<script async/g) || [];
      expect(asyncScripts.length).toBeGreaterThanOrEqual(2); // At least Calendly + GA4
    });

    it('should use CSS asset hashing for cache busting', async () => {
      const html = await fetchProductionHTML();

      // Astro generates hashed CSS filenames: /_astro/{name}.{hash}.css
      expect(html).toMatch(/<link[^>]*href="\/_astro\/[^"]+\.[A-Za-z0-9]{8}\.css"/);
    });
  });

  describe('Video Embed Lazy Loading (AC #5)', () => {
    it('should have video facade with thumbnail images', async () => {
      const html = await fetchProductionHTML();

      // Videos should use thumbnail images initially
      expect(html).toContain('img.youtube.com/vi/'); // YouTube thumbnail
    });

    it('should have video iframes with data-src (not src)', async () => {
      const html = await fetchProductionHTML();

      // Iframes should use data-src for lazy loading
      expect(html).toContain('data-src="https://www.youtube-nocookie.com/embed/');

      // Iframes should initially be hidden
      expect(html).toContain('class="video-iframe hidden');
    });

    it('should have play button overlay on video thumbnails', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('video-facade'); // Facade class
      expect(html).toContain('aria-label="Lire la vidéo'); // Play button accessibility
    });
  });

  describe('Calendly Integration (AC #5)', () => {
    it('should have Calendly popup buttons with unique IDs', async () => {
      const html = await fetchProductionHTML();

      // Buttons should have unique IDs for SDK targeting
      expect(html).toMatch(/id="calendly-[a-z0-9]+"/);

      // Buttons should have calendly-button class
      expect(html).toContain('calendly-button');
    });

    it('should have Calendly popup buttons in multiple sections', async () => {
      const html = await fetchProductionHTML();

      // Should have Calendly buttons in Hero and Contact sections
      expect(html).toContain('data-section="hero"');
      expect(html).toContain('data-section="contact"');

      // Multiple Calendly buttons should exist
      const calendlyButtons = html.match(/class="[^"]*calendly-button[^"]*"/g) || [];
      expect(calendlyButtons.length).toBeGreaterThanOrEqual(2); // At least Hero + Contact
    });

    it('should have Calendly URLs in data attributes', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('https://calendly.com/contact-makeitglobal-agency/30min');
    });
  });

  describe('WhatsApp Integration (AC #5)', () => {
    it('should have WhatsApp button class', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('whatsapp-button');
    });

    it('should have WhatsApp links with target="_blank"', async () => {
      const html = await fetchProductionHTML();

      // WhatsApp links should open in new tab
      const whatsappLinkMatches = html.match(/<a[^>]*href="https:\/\/wa\.me[^"]*"[^>]*>/g) || [];
      for (const link of whatsappLinkMatches) {
        expect(link).toContain('target="_blank"');
        expect(link).toContain('rel="noopener noreferrer"'); // Security best practice
      }
    });

    it('should have data-section attribute for analytics tracking', async () => {
      const html = await fetchProductionHTML();

      // Buttons should have data-section for GA4 event tracking
      expect(html).toContain('data-section="hero"');
      expect(html).toContain('data-section="contact"');
    });
  });

  describe('Google Analytics 4 Integration (AC #5)', () => {
    it('should have GA4 script with dataLayer initialization', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('window.dataLayer = window.dataLayer || []');
    });

    it('should have gtag function definition', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain('function gtag()');
      expect(html).toContain('dataLayer.push(arguments)');
    });

    it('should configure GA4 with measurement ID', async () => {
      const html = await fetchProductionHTML();

      expect(html).toContain("gtag('config'");
      expect(html).toContain('G-EPTXGX09QC');
    });
  });

  describe('Security Attributes (AC #8)', () => {
    it('should have noopener noreferrer on external links', async () => {
      const html = await fetchProductionHTML();

      // WhatsApp links should have security attributes
      const externalLinks = html.match(/<a[^>]*target="_blank"[^>]*>/g) || [];
      for (const link of externalLinks) {
        expect(link).toContain('rel="noopener noreferrer"');
      }
    });
  });
});

describe('Browser Compatibility - Production Headers Validation', () => {
  const PRODUCTION_URL = 'https://make-it-global-website.vercel.app';

  /**
   * Fetch production headers for testing
   */
  async function fetchProductionHeaders(): Promise<Headers> {
    const response = await fetch(PRODUCTION_URL, { method: 'HEAD' });
    return response.headers;
  }

  describe('Security Headers (AC #8)', () => {
    it('should have X-Content-Type-Options: nosniff', async () => {
      const headers = await fetchProductionHeaders();
      expect(headers.get('x-content-type-options')).toBe('nosniff');
    });

    it('should have X-Frame-Options: DENY', async () => {
      const headers = await fetchProductionHeaders();
      expect(headers.get('x-frame-options')).toBe('DENY');
    });

    it('should have Referrer-Policy', async () => {
      const headers = await fetchProductionHeaders();
      expect(headers.get('referrer-policy')).toBe('strict-origin-when-cross-origin');
    });

    it('should have Permissions-Policy', async () => {
      const headers = await fetchProductionHeaders();
      const permissionsPolicy = headers.get('permissions-policy');

      expect(permissionsPolicy).toContain('camera=()');
      expect(permissionsPolicy).toContain('microphone=()');
      expect(permissionsPolicy).toContain('geolocation=()');
    });

    it('should have Content-Security-Policy', async () => {
      const headers = await fetchProductionHeaders();
      const csp = headers.get('content-security-policy');

      expect(csp).toBeTruthy();
      expect(csp).toContain("default-src 'self'");
      expect(csp).toContain('script-src');
      expect(csp).toContain('frame-src');
    });

    it('should have HSTS header (Strict-Transport-Security)', async () => {
      const headers = await fetchProductionHeaders();
      const hsts = headers.get('strict-transport-security');

      expect(hsts).toBeTruthy();
      expect(hsts).toContain('max-age=');
    });
  });

  describe('Cache Headers (AC #7)', () => {
    it('should have Cache-Control for HTML', async () => {
      const headers = await fetchProductionHeaders();
      const cacheControl = headers.get('cache-control');

      expect(cacheControl).toBeTruthy();
      // HTML should have max-age=0 or must-revalidate
      expect(cacheControl).toMatch(/max-age=0|must-revalidate/);
    });
  });

  describe('Server Headers (AC #6-7)', () => {
    it('should have Vercel server header', async () => {
      const headers = await fetchProductionHeaders();
      expect(headers.get('server')).toBe('Vercel');
    });

    it('should have Content-Type with charset', async () => {
      const headers = await fetchProductionHeaders();
      const contentType = headers.get('content-type');

      expect(contentType).toContain('text/html');
      expect(contentType).toContain('charset=utf-8');
    });
  });
});
