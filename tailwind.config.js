/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary palette - Tons suaves e acolhedores que transmitem confiança e cuidado
        primary: {
          50: '#f0f9ff',   // Azul muito claro - backgrounds sutis
          100: '#e0f2fe',  // Azul claro - hover states
          200: '#bae6fd',  // Azul suave - elementos decorativos
          300: '#7dd3fc',  // Azul médio-claro - borders
          400: '#38bdf8',  // Azul médio - elementos interativos
          500: '#0ea5e9',  // Azul principal - CTAs primários
          600: '#0284c7',  // Azul mais escuro - hover de CTAs
          700: '#0369a1',  // Azul profundo - textos importantes
          800: '#075985',  // Azul muito escuro - títulos
          900: '#0c4a6e',  // Azul quase preto - textos principais
          950: '#082f49',  // Azul escuríssimo - headers
        },
        // Secondary palette - Rosa suave para toques femininos e acolhedores
        secondary: {
          50: '#fdf4ff',   // Rosa clarissimo
          100: '#fae8ff',  // Rosa muito claro
          200: '#f5d0fe',  // Rosa claro
          300: '#f0abfc',  // Rosa suave
          400: '#e879f9',  // Rosa médio
          500: '#d946ef',  // Rosa vibrante
          600: '#c026d3',  // Rosa forte
          700: '#a21caf',  // Rosa profundo
          800: '#86198f',  // Rosa escuro
          900: '#701a75',  // Rosa muito escuro
        },
        // Accent - Coral suave para elementos de destaque e warmth
        accent: {
          50: '#fff7ed',   // Coral clarissimo
          100: '#ffedd5',  // Coral muito claro
          200: '#fed7aa',  // Coral claro
          300: '#fdba74',  // Coral suave
          400: '#fb923c',  // Coral médio
          500: '#f97316',  // Coral vibrante
          600: '#ea580c',  // Coral forte
          700: '#c2410c',  // Coral profundo
          800: '#9a3412',  // Coral escuro
          900: '#7c2d12',  // Coral muito escuro
        },
        // Success - Verde suave para feedback positivo
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Verde principal
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Warning - Amarelo suave para avisos
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Amarelo principal
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Error - Vermelho suave para erros
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',  // Vermelho principal
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // WhatsApp green - Para integração com WhatsApp
        whatsapp: {
          light: '#25D366',  // Verde WhatsApp
          DEFAULT: '#128C7E', // Verde WhatsApp padrão
          dark: '#075E54',   // Verde WhatsApp escuro
        },
        // Neutral palette - Cinzas refinados para textos e backgrounds
        neutral: {
          50: '#fafafa',   // Quase branco - backgrounds
          100: '#f5f5f5',  // Cinza clarissimo
          200: '#e5e5e5',  // Cinza muito claro
          300: '#d4d4d4',  // Cinza claro - borders
          400: '#a3a3a3',  // Cinza médio-claro
          500: '#737373',  // Cinza médio - textos secundários
          600: '#525252',  // Cinza médio-escuro
          700: '#404040',  // Cinza escuro - textos principais
          800: '#262626',  // Cinza muito escuro
          900: '#171717',  // Quase preto - títulos
          950: '#0a0a0a',  // Preto
        },
      },
      fontFamily: {
        // Font principal - Sans-serif moderna e profissional
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Font para títulos - Mais expressiva e elegante
        display: ['Poppins', 'Inter', 'sans-serif'],
        // Font para corpo de texto - Ótima legibilidade
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica otimizada para legibilidade
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],          // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],// 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em' }],          // 48px
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],       // 60px
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],        // 72px
      },
      spacing: {
        // Sistema de espaçamento base 4px
        '0': '0',
        'px': '1px',
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '3.5': '0.875rem',  // 14px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px
        '9': '2.25rem',     // 36px
        '10': '2.5rem',     // 40px
        '11': '2.75rem',    // 44px
        '12': '3rem',       // 48px
        '14': '3.5rem',     // 56px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '28': '7rem',       // 112px
        '32': '8rem',       // 128px
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px
        '52': '13rem',      // 208px
        '56': '14rem',      // 224px
        '60': '15rem',      // 240px
        '64': '16rem',      // 256px
        '72': '18rem',      // 288px
        '80': '20rem',      // 320px
        '96': '24rem',      // 384px
      },
      screens: {
        // Breakpoints mobile-first
        'xs': '375px',   // Mobile pequeno
        'sm': '640px',   // Mobile grande
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop pequeno
        'xl': '1280px',  // Desktop médio
        '2xl': '1536px', // Desktop grande
      },
      maxWidth: {
        // Container widths
        'xs': '20rem',     // 320px
        'sm': '24rem',     // 384px
        'md': '28rem',     // 448px
        'lg': '32rem',     // 512px
        'xl': '36rem',     // 576px
        '2xl': '42rem',    // 672px
        '3xl': '48rem',    // 768px
        '4xl': '56rem',    // 896px
        '5xl': '64rem',    // 1024px
        '6xl': '72rem',    // 1152px
        '7xl': '80rem',    // 1280px
        'full': '100%',
        'min': 'min-content',
        'max': 'max-content',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      borderRadius: {
        // Border radius system
        'none': '0',
        'sm': '0.125rem',   // 2px
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },
      boxShadow: {
        // Sombras suaves e profissionais
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Sombras coloridas para elementos interativos
        'primary': '0 10px 15px -3px rgba(14, 165, 233, 0.2), 0 4px 6px -2px rgba(14, 165, 233, 0.1)',
        'secondary': '0 10px 15px -3px rgba(217, 70, 239, 0.2), 0 4px 6px -2px rgba(217, 70, 239, 0.1)',
        'whatsapp': '0 10px 15px -3px rgba(37, 211, 102, 0.3), 0 4px 6px -2px rgba(37, 211, 102, 0.15)',
      },
      animation: {
        // Animações suaves
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        // Timing functions customizadas
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
