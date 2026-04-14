/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        // Brand: Corail
        primary: {
          50:  '#FFF5F5',
          100: '#FFE0E0',
          200: '#FFC2C2',
          300: '#FF8A8A',
          400: '#FF6B6B',
          500: '#FF4F4F',
          600: '#E63E3E',
          700: '#CC2D2D',
          800: '#A31F1F',
          900: '#7A1515',
        },
        accent: {
          400: '#2A2A2A',
          500: '#1A1A1A',
          600: '#111111',
        },
        bg: {
          base:     '#F5F2ED',
          surface:  '#FFFFFF',
          elevated: '#F0EDE8',
          muted:    '#E8E5E0',
          dark:     '#1A1A1A',
        },
        border: {
          subtle:  'rgba(0, 0, 0, 0.06)',
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
          strong:  'rgba(0, 0, 0, 0.2)',
        },
        text: {
          primary:   '#1A1A1A',
          secondary: '#333333',
          muted:     '#666666',
          dim:       '#999999',
          heading: '#1A1A1A',
          body:    '#333333',
          light:   '#999999',
        },
        surface: {
          white: '#FFFFFF',
          50:    '#F5F2ED',
          100:   '#F0EDE8',
          200:   '#E8E5E0',
        },
        neutral: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        'card':       '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px -8px rgba(0,0,0,0.1)',
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
