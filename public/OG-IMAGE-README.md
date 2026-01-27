# Open Graph Image - Placeholder

## Current Status: TEMPORARY PLACEHOLDER

**File:** `og-image.svg` (temporary SVG)
**Required:** `og-image.png` (1200x630px PNG/JPG)

## Why SVG is Not Ideal

LinkedIn and most social platforms prefer:
- Format: PNG or JPG (WebP not universally supported)
- Dimensions: 1200x630px (standard Open Graph size)
- File size: < 5MB

SVG works in browsers but may not be correctly parsed by LinkedIn/Twitter crawlers.

## Action Required

Before production deployment:
1. Convert `og-image.svg` to `og-image.png` (1200x630px)
2. OR create a professional branded image with:
   - Make It Global branding
   - Key value proposition text
   - Professional design
3. Optimize file size (< 500KB recommended)

## Conversion Command (when ready)

```bash
# Using ImageMagick (if available)
magick og-image.svg -resize 1200x630 og-image.png

# OR use online tool: https://cloudconvert.com/svg-to-png
```

## Story Reference

Mentioned in Story 1.2 Dev Notes (line 216):
- Epic 8.1 will handle asset optimization
- Current placeholder allows LinkedIn sharing to work (with suboptimal image)
