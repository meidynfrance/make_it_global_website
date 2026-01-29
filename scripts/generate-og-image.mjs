#!/usr/bin/env node
/**
 * Generate og-image.png from og-image.svg
 * Converts SVG to optimized PNG (1200x630px) for social media sharing
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const svgPath = join(projectRoot, 'public', 'og-image.svg');
const pngPath = join(projectRoot, 'public', 'og-image.png');

try {
  console.log('📸 Generating og-image.png from SVG...');

  const svgBuffer = readFileSync(svgPath);

  await sharp(svgBuffer)
    .resize(1200, 630, {
      fit: 'contain',
      background: { r: 37, g: 99, b: 235, alpha: 1 } // #2563EB background
    })
    .png({
      quality: 90,
      compressionLevel: 9,
      palette: true // Use palette-based PNG for smaller size
    })
    .toFile(pngPath);

  console.log('✅ og-image.png created successfully!');
  console.log(`   Dimensions: 1200x630px`);
  console.log(`   Format: PNG (optimized)`);
  console.log(`   Location: ${pngPath}`);

  // Get file size
  const stats = await import('fs/promises').then(fs => fs.stat(pngPath));
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);

} catch (error) {
  console.error('❌ Error generating og-image.png:', error.message);
  process.exit(1);
}
