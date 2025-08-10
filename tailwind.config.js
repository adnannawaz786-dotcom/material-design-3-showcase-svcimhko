/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Material Design 3 Color Tokens
        'md-primary': {
          DEFAULT: 'rgb(var(--md-sys-color-primary))',
          container: 'rgb(var(--md-sys-color-primary-container))',
          fixed: 'rgb(var(--md-sys-color-primary-fixed))',
          'fixed-dim': 'rgb(var(--md-sys-color-primary-fixed-dim))',
        },
        'md-on-primary': {
          DEFAULT: 'rgb(var(--md-sys-color-on-primary))',
          container: 'rgb(var(--md-sys-color-on-primary-container))',
          fixed: 'rgb(var(--md-sys-color-on-primary-fixed))',
          'fixed-variant': 'rgb(var(--md-sys-color-on-primary-fixed-variant))',
        },
        'md-secondary': {
          DEFAULT: 'rgb(var(--md-sys-color-secondary))',
          container: 'rgb(var(--md-sys-color-secondary-container))',
          fixed: 'rgb(var(--md-sys-color-secondary-fixed))',
          'fixed-dim': 'rgb(var(--md-sys-color-secondary-fixed-dim))',
        },
        'md-on-secondary': {
          DEFAULT: 'rgb(var(--md-sys-color-on-secondary))',
          container: 'rgb(var(--md-sys-color-on-secondary-container))',
          fixed: 'rgb(var(--md-sys-color-on-secondary-fixed))',
          'fixed-variant': 'rgb(var(--md-sys-color-on-secondary-fixed-variant))',
        },
        'md-tertiary': {
          DEFAULT: 'rgb(var(--md-sys-color-tertiary))',
          container: 'rgb(var(--md-sys-color-tertiary-container))',
          fixed: 'rgb(var(--md-sys-color-tertiary-fixed))',
          'fixed-dim': 'rgb(var(--md-sys-color-tertiary-fixed-dim))',
        },
        'md-on-tertiary': {
          DEFAULT: 'rgb(var(--md-sys-color-on-tertiary))',
          container: 'rgb(var(--md-sys-color-on-tertiary-container))',
          fixed: 'rgb(var(--md-sys-color-on-tertiary-fixed))',
          'fixed-variant': 'rgb(var(--md-sys-color-on-tertiary-fixed-variant))',
        },
        'md-error': {
          DEFAULT: 'rgb(var(--md-sys-color-error))',
          container: 'rgb(var(--md-sys-color-error-container))',
        },
        'md-on-error': {
          DEFAULT: 'rgb(var(--md-sys-color-on-error))',
          container: 'rgb(var(--md-sys-color-on-error-container))',
        },
        'md-surface': {
          DEFAULT: 'rgb(var(--md-sys-color-surface))',
          dim: 'rgb(var(--md-sys-color-surface-dim))',
          bright: 'rgb(var(--md-sys-color-surface-bright))',
          'container-lowest': 'rgb(var(--md-sys-color-surface-container-lowest))',
          'container-low': 'rgb(var(--md-sys-color-surface-container-low))',
          container: 'rgb(var(--md-sys-color-surface-container))',
          'container-high': 'rgb(var(--md-sys-color-surface-container-high))',
          'container-highest': 'rgb(var(--md-sys-color-surface-container-highest))',
          variant: 'rgb(var(--md-sys-color-surface-variant))',
        },
        'md-on-surface': {
          DEFAULT: 'rgb(var(--md-sys-color-on-surface))',
          variant: 'rgb(var(--md-sys-color-on-surface-variant))',
        },
        'md-outline': {
          DEFAULT: 'rgb(var(--md-sys-color-outline))',
          variant: 'rgb(var(--md-sys-color-outline-variant))',
        },
        'md-inverse': {
          surface: 'rgb(var(--md-sys-color-inverse-surface))',
          'on-surface': 'rgb(var(--md-sys-color-inverse-on-surface))',
          primary: 'rgb(var(--md-sys-color-inverse-primary))',
        },
        'md-shadow': 'rgb(var(--md-sys-color-shadow))',
        'md-scrim': 'rgb(var(--md-sys-color-scrim))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Material Design 3 Shape Tokens
        'md-none': '0px',
        'md-xs': '4px',
        'md-sm': '8px',
        'md-md': '12px',
        'md-lg': '16px',
        'md-xl': '28px',
        'md-full': '9999px',
      },
      fontFamily: {
        // Material Design 3 Typography
        'md-display': ['var(--md-sys-typescale-display-font)', 'system-ui', 'sans-serif'],
        'md-headline': ['var(--md-sys-typescale-headline-font)', 'system-ui', 'sans-serif'],
        'md-title': ['var(--md-sys-typescale-title-font)', 'system-ui', 'sans-serif'],
        'md-body': ['var(--md-sys-typescale-body-font)', 'system-ui', 'sans-serif'],
        'md-label': ['var(--md-sys-typescale-label-font)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Material Design 3 Typography Scale
        'md-display-large': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px' }],
        'md-display-medium': ['45px', { lineHeight: '52px', letterSpacing: '0px' }],
        'md-display-small': ['36px', { lineHeight: '44px', letterSpacing: '0px' }],
        'md-headline-large': ['32px', { lineHeight: '40px', letterSpacing: '0px' }],
        'md-headline-medium': ['28px', { lineHeight: '36px', letterSpacing: '0px' }],
        'md-headline-small': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        'md-title-large': ['22px', { lineHeight: '28px', letterSpacing: '0px' }],
        'md-title-medium': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'md-title-small': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'md-body-large': ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
        'md-body-medium': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'md-body-small': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        'md-label-large': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'md-label-medium': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'md-label-small': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
      },
      boxShadow: {
        // Material Design 3 Elevation
        'md-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'md-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'md-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        'md-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        'md-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Material Design 3 Motion Tokens
        "md-emphasized-decelerate": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "md-emphasized-accelerate": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
        "md-standard-decelerate": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "md-standard-accelerate": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "md-emphasized-in": "md-emphasized-decelerate 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        "md-emphasized-out": "md-emphasized-accelerate 0.2s cubic-bezier(0.3, 0.0, 0.8, 0.15)",
        "md-standard-in": "md-standard-decelerate 0.3s cubic-bezier(0.2, 0.0, 0, 1.0)",
        "md-standard-out": "md-standard-accelerate 0.15s cubic-bezier(0.4, 0.0, 1, 1)",
      },
      transitionTimingFunction: {
        // Material Design 3 Easing
        'md-emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'md-emphasized-accelerate': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
        'md-standard-decelerate': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        'md-standard-accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
        'md-legacy-decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'md-legacy-accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
        'md-legacy-standard': 'cubic-bezier(0.2, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}