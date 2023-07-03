import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--canvas-default) / <alpha-value>)',
          muted: 'rgb(var(--canvas-muted) / <alpha-value>)',
          variant: 'rgb(var(--canvas-variant) / <alpha-value>)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg-default) / <alpha-value>)',
          muted: 'rbg(var(--fg-muted) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          variant: 'rgb(var(--primary-variant) / <alpha-value>)',
        },
        on: {
          primary: 'rgb(var(--on-primary) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
