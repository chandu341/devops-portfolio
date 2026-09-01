/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B10',
        panel: '#0E131A',
        panel2: '#121922',
        line: '#243140',
        cyan: '#0284C7',
        'cyan-glow': '#38BDF8',
        violet: '#6366F1',
        'violet-glow': '#818CF8',
        amber: '#D97706',
        'amber-glow': '#FBBF24',
        mint: '#059669',
        'mint-glow': '#34D399',
        muted: '#64748B'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Consolas', 'monospace']
      },
      boxShadow: {
        lift: '0 18px 60px rgba(0, 0, 0, 0.38)',
        focus: '0 0 0 1px rgba(76, 201, 240, 0.18), 0 28px 100px rgba(0, 0, 0, 0.48)',
        'glow-cyan': '0 0 30px rgba(76, 201, 240, 0.25)',
        'glow-violet': '0 0 30px rgba(124, 140, 255, 0.25)',
        'glow-mint': '0 0 30px rgba(94, 230, 168, 0.25)',
        'card-glass': '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up 600ms ease-out both',
        'blink-cursor': 'blink-cursor 1s step-end infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
