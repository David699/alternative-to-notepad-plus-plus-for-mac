import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"PingFang SC"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"SF Mono"', '"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eef9ff',
          100: '#d8f1ff',
          200: '#b9e8ff',
          300: '#88daff',
          400: '#50c4ff',
          500: '#28aaf7',
          600: '#118de8',
          700: '#0d72ca',
          800: '#125ba3',
          900: '#144d81',
          950: '#0e3257',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        surface: {
          DEFAULT: '#f8f9fb',
          dark: '#0f1117',
          card: '#ffffff',
          'card-dark': '#1a1d27',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #eef9ff 0%, #f0fdf4 40%, #fdf4ff 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0d72ca 0%, #118de8 50%, #14b8a6 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f1117 0%, #141824 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,.08), 0 12px 32px rgba(0,0,0,.10)',
        'screenshot': '0 24px 80px rgba(0,0,0,.25), 0 4px 16px rgba(0,0,0,.12)',
        'float': '0 8px 32px rgba(17,141,232,.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pipeline': 'pipeline 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
