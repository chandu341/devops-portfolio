/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B10',
        panel: '#0E131A',
        panel2: '#121922',
        line: '#243140',
        cyan: '#4CC9F0',
        violet: '#7C8CFF',
        amber: '#F2B66D',
        mint: '#5EE6A8',
        muted: '#9AA6B2'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace']
      },
      boxShadow: {
        lift: '0 18px 60px rgba(0, 0, 0, 0.38)',
        focus: '0 0 0 1px rgba(76, 201, 240, 0.18), 0 28px 100px rgba(0, 0, 0, 0.48)'
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
        }
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up 600ms ease-out both',
        'blink-cursor': 'blink-cursor 1s step-end infinite'
      }
    }
  },
  plugins: []
};
