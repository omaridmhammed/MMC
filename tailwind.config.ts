import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			surface: 'var(--surface)',
  			'surface-2': 'var(--surface-2)',
  			'surface-3': 'var(--surface-3)',
  			ink: 'var(--ink)',
  			'ink-muted': 'var(--ink-muted)',
  			primary: {
  				DEFAULT: 'var(--primary)',
  				hover: 'var(--primary-hover)',
  				deep: 'var(--primary-deep)',
  				ink: 'var(--primary-ink)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			success: 'var(--success)',
  			border: 'var(--border)',
  			'border-strong': 'var(--border-strong)',
            ring: 'var(--ring)'
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'sans-serif'],
  			tight: ['var(--font-inter-tight)', 'sans-serif'],
  			serif: ['var(--font-fraunces)', 'serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
