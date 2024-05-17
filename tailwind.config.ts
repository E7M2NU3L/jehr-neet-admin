import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        dark: { 1: { DEFAULT: '#03045e', 100: '#010113', 200: '#010226', 300: '#020338', 400: '#02044b', 500: '#03045e', 600: '#0508ae', 700: '#0f12f8', 800: '#5f61fa', 900: '#afb0fd' }, 2: { DEFAULT: '#0077b6', 100: '#001825', 200: '#003049', 300: '#00486e', 400: '#005f93', 500: '#0077b6', 600: '#00a2f9', 700: '#3bbaff', 800: '#7cd1ff', 900: '#bee8ff' }, 3: { DEFAULT: '#00b4d8', 100: '#00242b', 200: '#004756', 300: '#006b81', 400: '#008fab', 500: '#00b4d8', 600: '#12d8ff', 700: '#4ee1ff', 800: '#89ebff', 900: '#c4f5ff' }, 4: { DEFAULT: '#90e0ef', 100: '#0a3a43', 200: '#137586', 300: '#1dafc9', 400: '#4ccfe6', 500: '#90e0ef', 600: '#a6e7f2', 700: '#bcedf5', 800: '#d2f3f9', 900: '#e9f9fc' }, 5: { DEFAULT: '#caf0f8', 100: '#0a444f', 200: '#15889f', 300: '#2ac4e3', 400: '#79daee', 500: '#caf0f8', 600: '#d4f3f9', 700: '#dff6fb', 800: '#e9f9fc', 900: '#f4fcfe' } },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config