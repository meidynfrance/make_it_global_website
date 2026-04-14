/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        // Brand: electric violet
        primary: {
          50:  '#F3F0FF',
          100: '#E6DEFF',
          200: '#CDBEFF',
          300: '#B09BFF',
          400: '#9678FF',
          500: '#7C5CFF',
          600: '#6740FF',
          700: '#5128DB',
          800: '#3E1DAE',
          900: '#2C1482',
        },
        accent: {
          400: '#2AF5B5',
          500: '#00E5A0',
          600: '#00C486',
        },
        bg: {
          base:     '#0A0A0B',
          surface:  '#111113',
          elevated: '#17171A',
          muted:    '#1C1C20',
        },
        border: {
          subtle:  '#1F1F23',
          DEFAULT: '#27272A',
          strong:  '#3F3F46',
        },
        text: {
          primary:   '#F5F5F7',
          secondary: '#D4D4D8',
          muted:     '#A1A1AA',
          dim:       '#71717A',
          // Legacy aliases
          heading: '#F5F5F7',
          body:    '#D4D4D8',
          light:   '#71717A',
        },
        // Legacy: surfaces + neutrals map to dark tokens
        surface: {
          white: '#0A0A0B',
          50:    '#111113',
          100:   '#17171A',
          200:   '#1F1F23',
        },
        neutral: {
          50:  '#17171A',
          100: '#1C1C20',
          200: '#27272A',
          300: '#3F3F46',
          400: '#52525B',
          500: '#71717A',
          600: '#A1A1AA',
          700: '#D4D4D8',
          800: '#E4E4E7',
          900: '#F5F5F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'SF Mono', 'ui-monospace', 'monospace'],
        display: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        'glow-primary': '0 0 80px -20px rgba(124, 92, 255, 0.4)',
        'glow-accent':  '0 0 80px -20px rgba(0, 229, 160, 0.3)',
        'card':         '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -8px rgba(0,0,0,0.5)',
        'card-hover':   '0 16px 48px -16px rgba(124, 92, 255, 0.35)',
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease-in-out',
        'slide-up':  'slideUp 0.6s ease-out',
        'slide-down':'slideDown 0.6s ease-out',
        'shimmer':   'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:   { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};
