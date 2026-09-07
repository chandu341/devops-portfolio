/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design System Semantic Tokens (CSS variables)
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'border-token': 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        primary: 'var(--primary)',
        'primary-glow': 'var(--primary-glow)',
        secondary: 'var(--secondary)',
        'secondary-glow': 'var(--secondary-glow)',
        success: 'var(--success)',
        'success-glow': 'var(--success-glow)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        'chart-primary': 'var(--chart-primary)',
        'chart-secondary': 'var(--chart-secondary)',

        // Light & Dark Theme Palette
        ink: 'var(--background)',
        panel: 'var(--surface)',
        panel2: 'var(--surface-elevated)',
        line: 'var(--border)',
        cyan: 'var(--primary)',
        'cyan-glow': 'var(--primary-glow)',
        violet: 'var(--secondary)',
        'violet-glow': 'var(--secondary-glow)',
        amber: 'var(--warning)',
        'amber-glow': 'var(--warning)',
        mint: 'var(--success)',
        'mint-glow': 'var(--success-glow)',
        muted: 'var(--text-muted)'
      },
      borderRadius: {
        'token-sm': 'var(--radius-sm)',
        'token-md': 'var(--radius-md)',
        'token-lg': 'var(--radius-lg)',
        'token-xl': 'var(--radius-xl)'
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Consolas', 'monospace']
      },
      boxShadow: {
        lift: '0 18px 60px rgba(0, 0, 0, 0.4)',
        focus: '0 0 0 1px rgba(57, 255, 136, 0.25), 0 18px 40px rgba(0, 0, 0, 0.4)',
        'glow-cyan': '0 0 30px rgba(57, 255, 136, 0.2)',
        'glow-violet': '0 0 30px rgba(255, 176, 0, 0.2)',
        'glow-mint': '0 0 30px rgba(57, 255, 136, 0.2)',
        'card-glass': '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(255, 255, 255, 0.05)'
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
