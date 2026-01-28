// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL - Vercel overrides this automatically with deployment URL
  // Update this with your actual Vercel URL after first deployment
  site: 'https://make-it-global-website.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  }
});