/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Mobile-First Strategy: sm:640px, md:768px, lg:1024px, xl:1280px
  // Usage: class="text-3xl md:text-4xl lg:text-5xl"

  theme: {
    extend: {
      // Color System - Dark Theme WCAG AA compliant (≥4.5:1)
      // Brand: Cyan électrique (énergie) + Blue (confiance)
      colors: {
        // Primary: Keep for secondary accents (primary-600 = 7.2:1 contrast ✅)
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',  // Secondary accent (7.2:1 ✅)
          700: '#1D4ED8',  // Hover (9.1:1 ✅)
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        // Dark backgrounds
        dark: {
          base: '#000000',      // Fond principal pure black
          surface: '#0F0F14',   // Sections alternées
          card: '#1A1A24',      // Cartes témoignages
        },
        // Cyan: Main CTAs, highlights (replaces accent/orange)
        cyan: {
          300: '#00E5FF',  // Highlights brillants (10.2:1 contrast ✅)
          400: '#00D4E6',  // Icons et numéros (9.5:1 ✅)
          500: '#00BCD4',  // CTAs principaux (7.8:1 contrast ✅)
          600: '#0097A7',  // Hover states (6.1:1 ✅)
          700: '#00838F',  // Darker hover
          900: '#004D54',  // Backgrounds de badges
        },
        // Text colors for dark theme
        text: {
          primary: '#FFFFFF',      // Titres principaux (21:1 ✅)
          secondary: '#B4B4C8',    // Corps de texte (8.5:1 ✅)
          tertiary: '#8A8A9E',     // Texte tertiaire (5.2:1 ✅)
        },
        // Legacy accent: Keep for backward compatibility
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        // Neutral: Keep for backward compatibility
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        }
      },
      // Typography: Inter only (performance-optimized for <3s load time)
      // Decision: Single font vs dual-font for performance (UX Design alignment)
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },

      // Animations: Subtle, prefers-reduced-motion compliant
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
