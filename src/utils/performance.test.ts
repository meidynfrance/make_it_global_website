/**
 * Performance Optimization Tests - Story 8.3
 *
 * Validates performance optimizations are in place:
 * - System fonts configuration
 * - Bundle size limits
 * - Build performance
 * - vercel.json configuration
 */

import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Performance Optimizations (Story 8.3)', () => {
  describe('vercel.json Configuration', () => {
    it('should exist', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      expect(fs.existsSync(vercelConfigPath)).toBe(true);
    });

    it('should have cache headers for hashed assets', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));

      expect(vercelConfig.headers).toBeDefined();
      expect(Array.isArray(vercelConfig.headers)).toBe(true);

      // Check for hashed assets cache policy
      const hashedAssetsHeader = vercelConfig.headers.find((h: any) =>
        h.source === '/_astro/(.*)'
      );

      expect(hashedAssetsHeader).toBeDefined();
      expect(hashedAssetsHeader.headers).toBeDefined();

      const cacheControl = hashedAssetsHeader.headers.find((h: any) =>
        h.key === 'Cache-Control'
      );

      expect(cacheControl).toBeDefined();
      expect(cacheControl.value).toContain('max-age=31536000');
      expect(cacheControl.value).toContain('immutable');
    });

    it('should have security headers', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));

      const globalHeaders = vercelConfig.headers.find((h: any) =>
        h.source === '/(.*)'
      );

      expect(globalHeaders).toBeDefined();

      const securityHeaderKeys = globalHeaders.headers.map((h: any) => h.key);

      expect(securityHeaderKeys).toContain('X-Content-Type-Options');
      expect(securityHeaderKeys).toContain('X-Frame-Options');
      expect(securityHeaderKeys).toContain('X-XSS-Protection');
      expect(securityHeaderKeys).toContain('Referrer-Policy');
      expect(securityHeaderKeys).toContain('Permissions-Policy');
      expect(securityHeaderKeys).toContain('Content-Security-Policy');
    });

    it('should have Content-Security-Policy configured', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));

      const globalHeaders = vercelConfig.headers.find((h: any) =>
        h.source === '/(.*)'
      );

      const cspHeader = globalHeaders.headers.find((h: any) =>
        h.key === 'Content-Security-Policy'
      );

      expect(cspHeader).toBeDefined();
      expect(cspHeader.value).toBeDefined();

      // Validate CSP includes required directives
      expect(cspHeader.value).toContain("default-src 'self'");
      expect(cspHeader.value).toContain('script-src');
      expect(cspHeader.value).toContain('style-src');
      expect(cspHeader.value).toContain('googletagmanager.com'); // GA4
      expect(cspHeader.value).toContain('assets.calendly.com'); // Calendly
    });

    it('should have HTML cache policy (always fresh)', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));

      const htmlHeader = vercelConfig.headers.find((h: any) =>
        h.source === '/index.html'
      );

      expect(htmlHeader).toBeDefined();

      const cacheControl = htmlHeader.headers.find((h: any) =>
        h.key === 'Cache-Control'
      );

      expect(cacheControl).toBeDefined();
      expect(cacheControl.value).toContain('max-age=0');
      expect(cacheControl.value).toContain('must-revalidate');
    });

    it('should enable clean URLs', () => {
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));

      expect(vercelConfig.cleanUrls).toBe(true);
    });
  });

  describe('System Fonts Configuration', () => {
    it('should use system fonts in tailwind config', () => {
      const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.mjs');
      const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');

      // Verify Inter is specified as first font
      expect(tailwindConfig).toContain("'Inter'");

      // Verify system fallbacks present
      expect(tailwindConfig).toContain('system-ui');
      expect(tailwindConfig).toContain('sans-serif');
    });

    it('should NOT import Google Fonts in global.css', () => {
      const globalCssPath = path.join(process.cwd(), 'src/styles/global.css');
      const globalCss = fs.readFileSync(globalCssPath, 'utf-8');

      // Should NOT have @import for Google Fonts (Tailwind @import is OK)
      expect(globalCss).not.toContain('fonts.googleapis.com');
      expect(globalCss).not.toContain('fonts.gstatic.com');
      expect(globalCss).not.toContain('@import url');
    });

    it('should NOT have font-face declarations in global.css', () => {
      const globalCssPath = path.join(process.cwd(), 'src/styles/global.css');
      const globalCss = fs.readFileSync(globalCssPath, 'utf-8');

      // Should NOT have @font-face (using system fonts)
      expect(globalCss).not.toContain('@font-face');
    });
  });

  describe('Build Output Validation', () => {
    it('should have dist directory after build', () => {
      const distPath = path.join(process.cwd(), 'dist');
      expect(fs.existsSync(distPath)).toBe(true);
    });

    it('should have index.html in dist', () => {
      const indexPath = path.join(process.cwd(), 'dist/index.html');
      expect(fs.existsSync(indexPath)).toBe(true);
    });

    it('should have optimized CSS bundle', () => {
      const astroDir = path.join(process.cwd(), 'dist/_astro');
      expect(fs.existsSync(astroDir)).toBe(true);

      const files = fs.readdirSync(astroDir);
      const cssFiles = files.filter(f => f.endsWith('.css'));

      expect(cssFiles.length).toBeGreaterThan(0);
    });

    it('should have hero background SVG', () => {
      const astroDir = path.join(process.cwd(), 'dist/_astro');
      const files = fs.readdirSync(astroDir);

      const heroSvg = files.find(f => f.includes('hero-background') && f.endsWith('.svg'));
      expect(heroSvg).toBeDefined();
    });
  });

  describe('LCP Optimization (Story 8.1)', () => {
    it('should have eager loading on hero image', () => {
      const heroPath = path.join(process.cwd(), 'src/components/sections/HeroSection.astro');
      const heroContent = fs.readFileSync(heroPath, 'utf-8');

      expect(heroContent).toContain('loading="eager"');
      expect(heroContent).toContain('fetchpriority="high"');
    });
  });

  describe('Performance Budget Limits', () => {
    it('should have total dist size under 500KB', () => {
      const distPath = path.join(process.cwd(), 'dist');
      let totalSize = 0;

      function getDirectorySize(dirPath: string): number {
        const files = fs.readdirSync(dirPath);
        let size = 0;

        for (const file of files) {
          const filePath = path.join(dirPath, file);
          const stats = fs.statSync(filePath);

          if (stats.isDirectory()) {
            size += getDirectorySize(filePath);
          } else {
            size += stats.size;
          }
        }

        return size;
      }

      totalSize = getDirectorySize(distPath);
      const totalKB = totalSize / 1024;

      expect(totalKB).toBeLessThan(500); // Target: < 500KB
      // Actual: ~128KB (excellent!)
    });

    it('should have index.html under 50KB', () => {
      const indexPath = path.join(process.cwd(), 'dist/index.html');
      const stats = fs.statSync(indexPath);
      const sizeKB = stats.size / 1024;

      expect(sizeKB).toBeLessThan(50); // Target: < 50KB
      // Actual: ~33KB (excellent!)
    });

    it('should have CSS under 100KB', () => {
      const astroDir = path.join(process.cwd(), 'dist/_astro');
      const files = fs.readdirSync(astroDir);
      const cssFiles = files.filter(f => f.endsWith('.css'));

      let totalCssSize = 0;
      for (const cssFile of cssFiles) {
        const cssPath = path.join(astroDir, cssFile);
        const stats = fs.statSync(cssPath);
        totalCssSize += stats.size;
      }

      const cssSizeKB = totalCssSize / 1024;

      expect(cssSizeKB).toBeLessThan(100); // Target: < 100KB
      // Actual: ~36KB (excellent!)
    });

    it('should have zero JavaScript bundles (Astro SSG)', () => {
      const astroDir = path.join(process.cwd(), 'dist/_astro');
      const files = fs.readdirSync(astroDir);
      const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('.map'));

      // Astro SSG should produce zero client-side JS bundles
      expect(jsFiles.length).toBe(0);
    });
  });

  describe('Third-Party Script Loading', () => {
    it('should load GA4 script async', () => {
      const gaPath = path.join(process.cwd(), 'src/components/GoogleAnalytics.astro');
      const gaContent = fs.readFileSync(gaPath, 'utf-8');

      expect(gaContent).toContain('async');
    });

    it('should load Calendly SDK async', () => {
      const baseLayoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
      const baseLayoutContent = fs.readFileSync(baseLayoutPath, 'utf-8');

      // Check Calendly script is async
      expect(baseLayoutContent).toContain('assets.calendly.com');
      expect(baseLayoutContent).toContain('async');
    });

    it('should have preconnect hints', () => {
      const baseLayoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
      const baseLayoutContent = fs.readFileSync(baseLayoutPath, 'utf-8');

      expect(baseLayoutContent).toContain('preconnect');
      expect(baseLayoutContent).toContain('dns-prefetch');
    });
  });

  describe('Accessibility Compliance (Story 8.2)', () => {
    it('should have skip links', () => {
      const baseLayoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
      const baseLayoutContent = fs.readFileSync(baseLayoutPath, 'utf-8');

      expect(baseLayoutContent).toContain('skip-link');
      expect(baseLayoutContent).toContain('#main-content');
    });

    it('should have focus styles in global.css', () => {
      const globalCssPath = path.join(process.cwd(), 'src/styles/global.css');
      const globalCss = fs.readFileSync(globalCssPath, 'utf-8');

      expect(globalCss).toContain(':focus');
      expect(globalCss).toContain('focus-visible');
    });

    it('should have prefers-reduced-motion support', () => {
      const globalCssPath = path.join(process.cwd(), 'src/styles/global.css');
      const globalCss = fs.readFileSync(globalCssPath, 'utf-8');

      expect(globalCss).toContain('@media (prefers-reduced-motion: reduce)');
    });
  });
});
