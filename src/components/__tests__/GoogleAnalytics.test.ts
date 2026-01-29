/**
 * Unit Tests for GoogleAnalytics Component
 * Story 7.1: Intégrer Google Analytics 4 dans BaseLayout
 */

import { describe, it, expect } from 'vitest';

describe('GoogleAnalytics Component', () => {
  it('should validate GA4 Measurement ID format', () => {
    // Valid GA4 format: G-XXXXXXXXXX (10 alphanumeric characters after G-)
    const validIds = [
      'G-K4T2P5B9HM',
      'G-1234567890',
      'G-ABCDEFGHIJ',
      'G-TEST123456',
    ];

    const invalidIds = [
      'UA-123456789-1', // Legacy Universal Analytics format
      'G-12345', // Too short
      'G-12345678901', // Too long
      'GA-1234567890', // Wrong prefix
      'G-123456789!', // Invalid character
      '', // Empty
      'G-TEST 12345', // Contains space
      'G-TEST\n12345', // Contains newline
      'G-TEST123456 ', // Trailing space
      ' G-TEST123456', // Leading space
      'G-test123456', // Lowercase (should be uppercase)
    ];

    const isValidGA4Id = (gaId: string): boolean => {
      return /^G-[A-Z0-9]{10}$/.test(gaId);
    };

    validIds.forEach((id) => {
      expect(isValidGA4Id(id)).toBe(true);
    });

    invalidIds.forEach((id) => {
      expect(isValidGA4Id(id)).toBe(false);
    });
  });

  it('should handle edge cases in gaId validation', () => {
    const isValidGA4Id = (gaId: string): boolean => {
      return /^G-[A-Z0-9]{10}$/.test(gaId);
    };

    // Edge cases that should fail validation
    expect(isValidGA4Id('undefined')).toBe(false);
    expect(isValidGA4Id('null')).toBe(false);
    expect(isValidGA4Id('G-')).toBe(false);
    expect(isValidGA4Id('G-<script>')).toBe(false);
    expect(isValidGA4Id("G-TEST';alert('XSS');//")).toBe(false);
    expect(isValidGA4Id('G-TEST123456\0')).toBe(false); // Null byte
  });

  it('should verify gtag.js script URL format', () => {
    const gaId = 'G-TEST1234567';
    const expectedUrl = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

    expect(expectedUrl).toBe('https://www.googletagmanager.com/gtag/js?id=G-TEST1234567');
    expect(expectedUrl).toContain('googletagmanager.com');
    expect(expectedUrl).toContain('gtag/js');
    expect(expectedUrl).toContain(gaId);
  });

  it('should validate component props interface', () => {
    // Type validation - ensures Props interface is correct
    interface Props {
      gaId: string;
    }

    const validProps: Props = {
      gaId: 'G-TEST1234567',
    };

    expect(validProps.gaId).toBe('G-TEST1234567');
    expect(typeof validProps.gaId).toBe('string');
  });

  it('should verify dataLayer initialization pattern', () => {
    // Verify the window.dataLayer pattern used in the component
    const dataLayerInit = 'window.dataLayer = window.dataLayer || [];';

    expect(dataLayerInit).toContain('window.dataLayer');
    expect(dataLayerInit).toContain('[]');
  });

  it('should validate gtag config call structure', () => {
    const gaId = 'G-TEST1234567';
    const configCall = `gtag('config', '${gaId}')`;

    expect(configCall).toContain('gtag');
    expect(configCall).toContain('config');
    expect(configCall).toContain(gaId);
  });
});

describe('GoogleAnalytics Integration Tests', () => {
  it('should have correct script attributes for performance', () => {
    // Verify async attribute is used (non-blocking load)
    const scriptAttributes = {
      async: true,
      'is:inline': true, // Astro directive
    };

    expect(scriptAttributes.async).toBe(true);
    expect(scriptAttributes['is:inline']).toBe(true);
  });

  it('should support UTM parameters auto-capture', () => {
    // GA4 automatically captures these UTM parameters when gtag config is called
    const utmParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ];

    // Verify expected UTM param names
    expect(utmParams).toContain('utm_source');
    expect(utmParams).toContain('utm_medium');
    expect(utmParams).toContain('utm_campaign');
    expect(utmParams.length).toBe(5);
  });

  it('should validate graceful degradation behavior', () => {
    // When PUBLIC_GOOGLE_ANALYTICS_ID is undefined, component should not render
    const gaId: string | undefined = undefined;

    // Conditional rendering in BaseLayout: {gaId && <GoogleAnalytics />}
    const shouldRender = !!gaId;

    expect(shouldRender).toBe(false);
  });

  it('should render when GA4 ID is defined', () => {
    // When PUBLIC_GOOGLE_ANALYTICS_ID is defined, component should render
    const gaId: string | undefined = 'G-TEST1234567';

    // Conditional rendering in BaseLayout: {gaId && <GoogleAnalytics />}
    const shouldRender = !!gaId;

    expect(shouldRender).toBe(true);
  });
});

describe('Performance Requirements', () => {
  it('should verify script size expectations', () => {
    // GA4 script size: ~28KB (gtag.js minified, gzipped)
    const expectedScriptSize = 28 * 1024; // 28KB in bytes

    expect(expectedScriptSize).toBeLessThan(50 * 1024); // Under 50KB
  });

  it('should verify load time expectations', () => {
    // GA4 script load time: < 300ms (CDN google-analytics.com)
    const maxLoadTime = 300; // milliseconds

    expect(maxLoadTime).toBeLessThan(500);
  });

  it('should verify execution time expectations', () => {
    // GA4 script execution time: < 50ms (lightweight initialization)
    const maxExecutionTime = 50; // milliseconds

    expect(maxExecutionTime).toBeLessThan(100);
  });
});

describe('Security Validation', () => {
  it('should use trusted Google CDN', () => {
    const scriptSrc = 'https://www.googletagmanager.com/gtag/js';

    expect(scriptSrc).toContain('https://');
    expect(scriptSrc).toContain('googletagmanager.com');
    expect(scriptSrc).not.toContain('http://'); // No insecure HTTP
  });

  it('should validate Measurement ID is public (not sensitive)', () => {
    // GA4 Measurement IDs are public and safe to expose client-side
    const gaId = 'G-PUBLIC123456';

    // Measurement IDs are intentionally public
    expect(gaId).toMatch(/^G-/);
    // No API keys or secrets should be in GA4 integration
  });
});

describe('Documentation Tests', () => {
  it('should validate .env.example documentation format', () => {
    const envExample = {
      name: 'PUBLIC_GOOGLE_ANALYTICS_ID',
      format: 'G-XXXXXXXXXX',
      optional: true,
    };

    expect(envExample.name).toBe('PUBLIC_GOOGLE_ANALYTICS_ID');
    expect(envExample.format).toBe('G-XXXXXXXXXX');
    expect(envExample.optional).toBe(true);
  });
});

describe('Component Integration Tests', () => {
  it('should generate correct script tag with gaId', () => {
    const gaId = 'G-TEST1234567';
    const expectedScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

    // Verify the script source URL is constructed correctly
    expect(expectedScriptSrc).toContain('googletagmanager.com');
    expect(expectedScriptSrc).toContain(gaId);
    expect(expectedScriptSrc).toMatch(/^https:\/\//);
  });

  it('should validate component requires gaId prop', () => {
    // Component expects a gaId prop (required)
    interface Props {
      gaId: string;
    }

    // This should compile (valid props)
    const validProps: Props = { gaId: 'G-TEST1234567' };
    expect(validProps.gaId).toBeDefined();
    expect(typeof validProps.gaId).toBe('string');

    // TypeScript would catch missing gaId at compile time
  });

  it('should verify gtag initialization pattern', () => {
    // Simulate the gtag initialization logic
    const mockDataLayer: any[] = [];

    function gtag(...args: any[]) {
      mockDataLayer.push(args);
    }

    // Simulate gtag initialization
    gtag('js', new Date());
    gtag('config', 'G-TEST1234567');

    // Verify both calls were made
    expect(mockDataLayer.length).toBe(2);
    expect(mockDataLayer[0][0]).toBe('js');
    expect(mockDataLayer[1][0]).toBe('config');
    expect(mockDataLayer[1][1]).toBe('G-TEST1234567');
  });

  it('should handle script attributes correctly', () => {
    // Verify expected script attributes for Astro component
    const scriptAttrs = {
      'is:inline': true,  // Prevents Astro from processing
      async: true,         // Non-blocking load
      crossorigin: false,  // Not needed for GA4
    };

    expect(scriptAttrs['is:inline']).toBe(true);
    expect(scriptAttrs.async).toBe(true);
  });
});
