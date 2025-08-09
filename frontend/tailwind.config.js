/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{html,js,svelte,ts}',
      './src/app.html'
    ],
    theme: {
      extend: {
        colors: {
          // Stone colors (your bg-stone-900, text-stone-100, etc.)
          stone: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
          },
          // Amber colors (your text-amber-400, hover:text-amber-300, etc.)
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          // Livy brand colors
          'livy': {
            'black': '#1c1c1c',
            'parchment': '#f8f6f1',
            'stone': '#a6a6a6',
            'gold': '#c8a165',
          }
        },
        fontFamily: {
          'serif': ['Cinzel', 'Times New Roman', 'serif'],
          'body': ['Crimson Text', 'Georgia', 'serif'],
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
        spacing: {
          'roman': '2.5rem',
        },
        borderRadius: {
          'roman': '0.5rem',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 3s ease-in-out infinite',
          'gentle-float': 'gentle-float 6s ease-in-out infinite',
          'loading-shimmer': 'loading-shimmer 1.5s infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.3))' },
            '50%': { filter: 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.6))' },
          },
          'gentle-float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-8px) rotate(1deg)' },
          },
          'loading-shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          }
        },
        backdropBlur: {
          xs: '2px',
        },
        boxShadow: {
          'roman': '0 4px 6px -1px rgba(28, 25, 23, 0.1), 0 2px 4px -1px rgba(28, 25, 23, 0.06)',
          'roman-lg': '0 10px 15px -3px rgba(28, 25, 23, 0.1), 0 4px 6px -2px rgba(28, 25, 23, 0.05)',
          'glow': '0 0 20px rgba(245, 158, 11, 0.3)',
          'glow-lg': '0 0 40px rgba(245, 158, 11, 0.4)',
        }
      },
    },
    plugins: [],
  }